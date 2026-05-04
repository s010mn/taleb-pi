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
			"激活 skill://barbell-analysis 思维框架（85-90% 极保守 + 10-15% 极激进）。详细方法见该 skill。",
		parameters: Type.Object({
			decision: Type.String({ description: "决策/配置的简短描述" }),
			domain: Type.Optional(Type.String({ description: "领域：投资/职业/学习/时间 等" })),
		}),
		async execute(_id, p) {
			return {
				content: [
					{
						type: "text",
						text: `[barbell_analysis|decision=${p.decision}${p.domain ? `|domain=${p.domain}` : ""}] 按 skill://barbell-analysis 输出 6 步结构（位置/风险/陷阱/重构/保守端/激进端）。`,
					},
				],
			};
		},
	};
};

export default factory;
