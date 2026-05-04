/**
 * taleb-overlay extension
 *
 * 把 IntentGate + Mode Marker + Narrative Fallacy Detector 三个机制
 * 装配为一个 oh-my-pi 扩展。
 *
 * 注册的能力：
 *   - on("input")            → IntentGate 分类，写入会话临时状态
 *   - on("before_agent_start") → 注入 mode marker 到系统提示词
 *   - on("assistant_message" / "tool_result") → 叙事谬误探测，命中时注入系统提醒
 *   - registerCommand("skeptic" | "barbell" | "via-negativa" | "antifragile" | "exit-mode")
 *     → 切换显式模式
 *
 * 全部为外挂逻辑，oh-my-pi 内核完全不需要改。
 *
 * 注意：本文件中调用的 ExtensionAPI 形态以 oh-my-pi 公开的接口为准；
 * 如未来上游 API 命名调整，只需调本文件这一处。
 */

import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
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
	const state: ModeState = { ...initialState };

	// ─── 1. IntentGate：用户输入 → 临时意图 ─────
	pi.on("input", async (event) => {
		// 仅在没有显式模式时启用自动分类
		if (state.explicitMode) {
			state.transientIntent = null;
			return;
		}
		const result = classifyIntent(event.content ?? "");
		state.transientIntent = result.confidence === "low" ? null : result.intent;

		if (state.transientIntent && pi.appendEntry) {
			// 留痕：用户在 TUI 中可以看到分类结果（debug 用）
			pi.appendEntry?.("taleb-intent", {
				intent: result.intent,
				confidence: result.confidence,
				scores: result.scores,
			});
		}
	});

	// ─── 2. Mode Marker：每次 LLM 调用前注入 ────
	pi.on("before_agent_start", async (event) => {
		const marker = buildMarker(state);
		if (!marker) return;
		return {
			systemPrompt: injectMarker(event.systemPrompt ?? "", marker),
		};
	});

	// ─── 3. 叙事谬误探测：assistant 消息后扫描 ─
	const handleAssistantText = async (text: string) => {
		const hits = detectFallacies(text);
		const warning = formatFallacyWarning(hits);
		if (!warning) return;
		// 注入一条系统级提醒，用户可见，下一轮 LLM 也会读到
		await pi.sendMessage?.(
			{ role: "system", content: warning },
			{ silent: false }, // 在 TUI 中显示
		);
	};

	pi.on("assistant_message", async (event) => {
		if (typeof event.content === "string") {
			await handleAssistantText(event.content);
		}
	});

	// 工具调用结果中也可能包含模型生成的"叙述性总结"，一并扫描
	pi.on("tool_result", async (event) => {
		const text = typeof event.result === "string" ? event.result : "";
		if (text) await handleAssistantText(text);
	});

	// ─── 4. 显式模式切换命令 ────────────────────
	const setExplicit = (mode: ExplicitMode) => {
		state.explicitMode = mode;
		state.transientIntent = null;
	};

	const modeCommands: { name: string; mode: ExplicitMode; label: string }[] = [
		{ name: "skeptic", mode: "skeptic", label: "怀疑模式" },
		{ name: "barbell", mode: "barbell", label: "杠铃模式" },
		{ name: "via-negativa", mode: "via-negativa", label: "反向法模式" },
		{ name: "antifragile", mode: "antifragile", label: "反脆弱模式" },
	];

	for (const cmd of modeCommands) {
		pi.registerCommand?.(cmd.name, {
			description: `切换到${cmd.label}`,
			handler: async () => {
				setExplicit(cmd.mode);
				return { message: `已切换到 ${cmd.label}。使用 /exit-mode 退出。` };
			},
		});
	}

	pi.registerCommand?.("exit-mode", {
		description: "退出当前思维模式，回到默认 taleb-pi 立场",
		handler: async () => {
			setExplicit(null);
			return { message: "已退出模式标记。所有规则仍然生效。" };
		},
	});
}
