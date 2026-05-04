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
			"何时调用：判断一个决策/系统的'波动是朋友还是敌人'，涉及杠杆/期权/学习/网络效应/口碑等可能非线性的结构，" +
			"或怀疑某个'看起来稳'的对象藏着凹性（零库存、过度优化、高杠杆稳定回报）。" +
			"调用后：按 skill://convexity-check 输出 5 项（收益函数形状/二阶曲率证据/詹森不等式判定/隐藏凸凹性/建议增加或减少暴露）。" +
			"用于补充 barbell_analysis 时只挑关键对象做，不要对每个项目都跑。",
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
