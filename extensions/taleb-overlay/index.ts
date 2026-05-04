/**
 * taleb-overlay extension
 *
 * 把 IntentGate + Mode Marker + Narrative Fallacy Detector 三个机制
 * 装配为一个 oh-my-pi 扩展。
 *
 * 注册的能力：
 *   - on("input")              → IntentGate 分类，写入会话临时状态 + appendEntry 留痕
 *   - on("before_agent_start") → 注入 mode marker 到系统提示词 + 调 setThinkingLevel
 *   - on("message_end")        → assistant 消息结束后做叙事谬误探测
 *   - on("tool_result")        → 工具输出（含 bash/read 拉到的外部文本）做叙事谬误探测
 *   - registerCommand("skeptic" | "barbell" | "via-negativa" | "antifragile" | "exit-mode")
 *     → 切换显式模式
 *
 * 全部为外挂逻辑，oh-my-pi 内核完全不需要改。
 *
 * ─── 历史教训 / 火鸡问题 ───────────────────────────────────────
 * 早期版本的事件 listener 全都对接错了 API（用 event.content/event.result 等
 * 不存在的字段）。tsc 通过、运行不报错，但实际整个链条是死的——
 * 表面"稳定运行了一周"是火鸡现象，不是工作证据。
 * 修复时确认了 oh-my-pi 真实事件形态：
 *   - InputEvent.text          (不是 .content)
 *   - MessageEndEvent.message  (不是 assistant_message 事件)
 *   - ToolResultEvent.content  (TextContent | ImageContent)[]，不是 .result
 *   - sendMessage 需要 customType + content，不是 { role, content }
 *
 * 现在每次自动分类都会 logger.debug + appendEntry，下次出问题立刻可见。
 */

import type {
	ExtensionAPI,
	InputEvent,
	MessageEndEvent,
	ToolResultEvent,
	BeforeAgentStartEvent,
} from "@oh-my-pi/pi-coding-agent";
import { classifyIntent } from "./intent-gate.js";
import {
	type ExplicitMode,
	type ModeState,
	buildMarker,
	initialState,
	injectMarker,
} from "./mode-marker.js";
import { detectFallacies, formatFallacyWarning } from "./narrative-fallacy.js";

export default function talebOverlay(pi: ExtensionAPI): void {
	// ─── 会话内可变状态 ─────────────────────────
	// 在多会话场景下，oh-my-pi 会为每个会话单独实例化扩展，
	// 因此这里的闭包状态天然按会话隔离。
	// 决策：不做跨 session 持久化（会造成医源性损伤——见 README 中"为什么不持久化"）。
	const state: ModeState = { ...initialState };

	// ─── 1. IntentGate：用户输入 → 临时意图 ─────
	pi.on("input", async (event: InputEvent) => {
		// 仅在没有显式模式时启用自动分类
		if (state.explicitMode) {
			state.transientIntent = null;
			return;
		}
		const text = event.text ?? "";
		if (!text) {
			state.transientIntent = null;
			return;
		}
		const result = classifyIntent(text);
		state.transientIntent = result.confidence === "low" ? null : result.intent;

		// 留痕（#2'）：debug 日志 + 会话留档。
		// 这是 skin-in-the-game 在状态变更上的体现：每一次自动切换都留下证据。
		pi.logger.debug(
			`[taleb-overlay] IntentGate fired: intent=${result.intent} confidence=${result.confidence}`,
		);
		if (state.transientIntent) {
			pi.appendEntry("taleb-intent", {
				intent: result.intent,
				confidence: result.confidence,
				scores: result.scores,
			});
		}
	});

	// ─── 2. Mode Marker：每次 LLM 调用前注入 ────
	// 注意：不动 pi.setThinkingLevel——用户默认就开 xhigh，
	// 我们去"按模式调整"反而会医源性降级。Thinking level 由用户全局设置决定。
	pi.on("before_agent_start", async (event: BeforeAgentStartEvent) => {
		const marker = buildMarker(state);
		if (!marker) return;
		return {
			systemPrompt: injectMarker(event.systemPrompt ?? "", marker),
		};
	});

	// ─── 3. 叙事谬误探测：assistant 消息后扫描 ─
	const handleText = async (text: string, source: "assistant" | "tool") => {
		if (!text || text.length < 50) return;
		const hits = detectFallacies(text);
		const warning = formatFallacyWarning(hits);
		if (!warning) return;

		// 留痕：每次命中写一条 entry，便于复盘"哪些回答触发了什么警报"
		pi.appendEntry("taleb-fallacy-hit", {
			source,
			hits: hits.map((h) => ({ id: h.id, severity: h.severity, matched: h.matched })),
		});

		// 注入一条 system 类型的自定义消息，下一轮 LLM 会读到
		pi.sendMessage(
			{
				customType: "taleb-fallacy-warning",
				content: warning,
				display: { kind: "system" },
			},
			{ deliverAs: "nextTurn" },
		);
	};

	pi.on("message_end", async (event: MessageEndEvent) => {
		const msg = event.message;
		if (msg.role !== "assistant") return;
		// AssistantMessage.content 是 ContentPart[]，从中提取文本
		const text = extractTextFromContent(msg.content);
		await handleText(text, "assistant");
	});

	// 工具调用结果（特别是 bash/read 拉回的外部文本）也可能含叙事谬误
	pi.on("tool_result", async (event: ToolResultEvent) => {
		const text = extractTextFromContent(event.content);
		await handleText(text, "tool");
	});

	// ─── 4. 显式模式切换命令 ────────────────────
	const setExplicit = (mode: ExplicitMode) => {
		state.explicitMode = mode;
		state.transientIntent = null;
		pi.appendEntry("taleb-mode", { mode, source: "explicit" });
	};

	const modeCommands: { name: string; mode: ExplicitMode; label: string }[] = [
		{ name: "skeptic", mode: "skeptic", label: "怀疑模式" },
		{ name: "barbell", mode: "barbell", label: "杠铃模式" },
		{ name: "via-negativa", mode: "via-negativa", label: "反向法模式" },
		{ name: "antifragile", mode: "antifragile", label: "反脆弱模式" },
	];

	for (const cmd of modeCommands) {
		pi.registerCommand(cmd.name, {
			description: `切换到${cmd.label}`,
			handler: async (_args, ctx) => {
				setExplicit(cmd.mode);
				ctx.ui.notify(`已切换到 ${cmd.label}。使用 /exit-mode 退出。`, "info");
			},
		});
	}

	pi.registerCommand("exit-mode", {
		description: "退出当前思维模式，回到默认 taleb-pi 立场",
		handler: async (_args, ctx) => {
			setExplicit(null);
			ctx.ui.notify("已退出模式标记。所有规则仍然生效。", "info");
		},
	});
}

/**
 * 从 (TextContent | ImageContent | ...)[] 中提取所有 text 片段并合并。
 * 容错：未知 content 形态返回空串，不抛异常。
 */
function extractTextFromContent(content: unknown): string {
	if (typeof content === "string") return content;
	if (!Array.isArray(content)) return "";
	const parts: string[] = [];
	for (const part of content) {
		if (part && typeof part === "object" && "type" in part) {
			const p = part as { type: string; text?: string };
			if (p.type === "text" && typeof p.text === "string") {
				parts.push(p.text);
			}
		}
	}
	return parts.join(" ");
}
