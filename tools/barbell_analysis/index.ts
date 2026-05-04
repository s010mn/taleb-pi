/**
 * barbell_analysis 工具
 *
 * 把 [barbell-analysis 技能](../../skills/barbell-analysis/SKILL.md) 暴露为 LLM 可调用工具。
 * oh-my-pi 通过 pi.typebox 注入 typebox（详见 fragility_scan 注释）。
 */

import type { CustomToolFactory } from "@oh-my-pi/pi-coding-agent";

const factory: CustomToolFactory = (pi) => {
	const { Type } = pi.typebox;

	return {
		name: "barbell_analysis",
		label: "杠铃分析",
		description:
			"对资源配置/决策方案做塔勒布杠铃策略分析（85-90% 极保守 + 10-15% 极激进，回避中间地带）。" +
			"使用场景：用户在'稳健方案'与'激进方案'之间纠结，或描述了一个看似分散但实为中等风险中等回报的方案。",
		parameters: Type.Object({
			decision: Type.String({
				description: "决策/配置的描述。例：'30 万存款，想做投资，倾向稳健，60% 蓝筹股 40% 债券'。",
			}),
			domain: Type.Optional(
				Type.String({
					description: "领域：投资/职业/学习/时间/注意力 等。",
				}),
			),
		}),
		async execute(_toolCallId, params) {
			const lines: string[] = [];
			lines.push(`# 杠铃分析指令\n`);
			lines.push(`决策：${params.decision}`);
			if (params.domain) lines.push(`领域：${params.domain}`);
			lines.push("");
			lines.push("请按以下结构输出：\n");
			lines.push("1. **当前位置**：在杠铃光谱上画出用户方案（85/15 一端 ↔ 50/50 中间 ↔ 15/85 另一端）");
			lines.push("2. **风险结构**：识别凹凸性、最坏情况、最好情况");
			lines.push("3. **中间陷阱诊断**：用户是否陷入'中等风险中等回报'的陷阱？");
			lines.push("4. **杠铃重构建议**：90/10 或 85/15 版本");
			lines.push("5. **保守端真伪检查**：保守端在通胀/恶性通胀/对手风险下是否真保守？");
			lines.push("6. **激进端真伪检查**：激进端的下行**机制上**是否真的有限（不是直觉）");
			lines.push("");
			lines.push("不接受'我做了分散投资' / '我有适度风险'这类抽象表述。");
			return {
				content: [{ type: "text", text: lines.join("\n") }],
			};
		},
	};
};

export default factory;
