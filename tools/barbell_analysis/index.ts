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
			"何时调用：用户面临资源/资金/时间/注意力/职业方向的分配决策，且涉及'安全 vs 激进'两端权衡，" +
			"或在'中庸方案'与'激进方案'之间纠结，或描述了一个看似稳健的中间地带配置（如 60/40 蓝筹+债券）。" +
			"调用后：按 skill://barbell-analysis 输出 5 步结构（当前位置/风险结构/重构为 90/10 杠铃/保守端检查/激进端检查），" +
			"识别中间地带陷阱并给出杠铃版本。同一决策不要重复调用。",
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
