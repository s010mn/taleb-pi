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
			"何时调用：用户即将做重大决策（创业/跳槽/大额投资/签长期合同/all-in 某方向），" +
			"或只在想'成功怎样'没认真想'失败怎样'，或表现出叙事谬误（'这肯定能成因为……'）。" +
			"调用后：按 skill://premortem-taleb 假设决策已彻底失败，输出 3 类死法（常规/黑天鹅/慢性脆弱积累）+致命性分级（可恢复/重创/不可逆毁灭）" +
			"+切肤之痛核对+自欺扫描+重构建议。出现任何'不可逆毁灭'必须建议重构。",
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
