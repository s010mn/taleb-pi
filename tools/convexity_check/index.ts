/**
 * convexity_check 工具
 *
 * 把 [convexity-check 技能](../../skills/convexity-check/SKILL.md) 暴露为 LLM 可调工具。
 */

import type { CustomToolFactory } from "@oh-my-pi/pi-coding-agent";

const factory: CustomToolFactory = (pi) => {
	const { Type } = pi.typebox;
	return {
		name: "convexity_check",
		label: "凸性检查",
		description:
			"激活 skill://convexity-check 思维框架，分析收益函数曲率（凸/凹/隐藏凹）。详细方法见该 skill。",
		parameters: Type.Object({
			object: Type.String({ description: "要检查凸性的对象" }),
			stress_inputs: Type.Optional(
				Type.Array(Type.String(), { description: "可选：要测试的极端场景" }),
			),
		}),
		async execute(_id, p) {
			const stress = p.stress_inputs?.length ? `|stress=${p.stress_inputs.join(",")}` : "";
			return {
				content: [
					{
						type: "text",
						text: `[convexity_check|object=${p.object}${stress}] 按 skill://convexity-check 输出 5 步结构（形状/曲率证据/詹森/隐藏曲率/建议）。`,
					},
				],
			};
		},
	};
};

export default factory;
