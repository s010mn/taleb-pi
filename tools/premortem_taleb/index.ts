/**
 * premortem_taleb 工具
 *
 * 把 [premortem-taleb 技能](../../skills/premortem-taleb/SKILL.md) 暴露为 LLM 可调工具。
 */

import type { CustomToolFactory } from "@oh-my-pi/pi-coding-agent";

const factory: CustomToolFactory = (pi) => {
	const { Type } = pi.typebox;
	return {
		name: "premortem_taleb",
		label: "死亡预演",
		description:
			"激活 skill://premortem-taleb 思维框架（假设决策已彻底失败，倒推失败路径）。详细方法见该 skill。",
		parameters: Type.Object({
			decision: Type.String({ description: "要预演死亡的决策" }),
			time_horizon: Type.Optional(Type.String({ description: "时间锚，默认 3 年" })),
		}),
		async execute(_id, p) {
			const t = p.time_horizon ?? "3 年";
			return {
				content: [
					{
						type: "text",
						text: `[premortem_taleb|decision=${p.decision}|horizon=${t}] 按 skill://premortem-taleb 输出 3 类死法+致命性分级+切肤之痛+自欺扫描+重构判定。`,
					},
				],
			};
		},
	};
};

export default factory;
