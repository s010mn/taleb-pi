/**
 * fragility_scan 工具
 *
 * 把 [fragility-scan 技能](../../skills/fragility-scan/SKILL.md) 暴露为 LLM 可调工具。
 * 模型主动想做脆弱性扫描时调用本工具，会返回结构化的 7 项扫描清单与提示，
 * 引导模型沿清单逐项审查并以指定格式作答。
 *
 * 注意：oh-my-pi 通过 pi.typebox 注入 typebox，工具内不能直接 import @sinclair/typebox。
 * 详见 oh-my-pi 源码 src/extensibility/custom-tools/loader.ts 的注释。
 */

// type-only import 在 bun 里会被擦除，运行时不存在
import type { CustomToolFactory } from "@oh-my-pi/pi-coding-agent";

const SCAN_SOURCES = [
	{ id: "single-point-of-failure", zh: "单点故障", en: "Single Point of Failure" },
	{ id: "optimization-trap", zh: "过度优化", en: "Optimization Trap" },
	{ id: "hidden-leverage", zh: "隐藏杠杆", en: "Hidden Leverage" },
	{ id: "path-dependency", zh: "路径依赖", en: "Path Dependency" },
	{ id: "model-fragility", zh: "模型脆弱性", en: "Model Fragility" },
	{ id: "principal-agent", zh: "委托代理", en: "Principal-Agent Problem" },
	{ id: "silent-evidence", zh: "沉默证据", en: "Silent Evidence" },
] as const;

const factory: CustomToolFactory = (pi) => {
	const { Type } = pi.typebox;

	return {
		name: "fragility_scan",
		label: "脆弱性扫描",
		description:
			"对一个系统/方案/决策做塔勒布式脆弱性扫描，返回 7 项检查清单与结构化提示。" +
			"使用场景：用户描述了具体对象（公司/组合/计划/系统），需要识别先死的部位，而不是估算'会不会出事'的概率。",
		parameters: Type.Object({
			target: Type.String({
				description:
					"扫描对象的简述。例：'我朋友的咖啡连锁，30 家直营店，全部依赖单一供应商'。",
			}),
			focus: Type.Optional(
				Type.String({
					description: "可选：用户特别想审查的维度（例：现金流、人员依赖、合规风险）。",
				}),
			),
		}),
		async execute(_toolCallId, params) {
			const lines: string[] = [];
			lines.push(`# 脆弱性扫描指令\n`);
			lines.push(`扫描对象：${params.target}`);
			if (params.focus) lines.push(`重点维度：${params.focus}`);
			lines.push("");
			lines.push("请按以下 7 项**逐项**审查，每项给出 [低/中/高] 风险等级 + 具体证据：\n");
			for (let i = 0; i < SCAN_SOURCES.length; i++) {
				const s = SCAN_SOURCES[i];
				lines.push(`${i + 1}. **${s.zh} / ${s.en}**`);
			}
			lines.push("");
			lines.push("审查完成后，必须给出：");
			lines.push("- **不可承受损失项**：1-3 个最致命的脆弱点排序");
			lines.push("- **强韧化建议**：每个高风险项给一个 Via Negativa 风格的减法建议");
			lines.push("");
			lines.push("严格遵守：定位'哪里先爆'，不要估算'会不会爆'的概率。");
			return {
				content: [{ type: "text", text: lines.join("\n") }],
			};
		},
	};
};

export default factory;
