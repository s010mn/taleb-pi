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
			"对决策方案做塔勒布式死亡预演——假设决策已彻底失败，倒推失败路径。重点关注**不可逆毁灭**而非'提高成功概率'。" +
			"使用场景：重大决策（创业、跳槽、大额投资、签长期合同）做出**之前**。",
		parameters: Type.Object({
			decision: Type.String({
				description: "要预演死亡的决策。例：'辞职 all-in 创业做 SaaS 产品'。",
			}),
			time_horizon: Type.Optional(
				Type.String({
					description: "时间锚。默认 3 年。例：'1 年' / '3 年' / '5 年'。",
				}),
			),
		}),
		async execute(_toolCallId, params) {
			const horizon = params.time_horizon ?? "3 年";
			const lines: string[] = [];
			lines.push(`# 死亡预演指令\n`);
			lines.push(`决策：${params.decision}`);
			lines.push(`时间锚：${horizon}（假设此时回望，决策已**彻底失败**）`);
			lines.push("");
			lines.push("请按以下结构输出：\n");
			lines.push("**死法 1（常规失败）**：竞争 / 执行 / 市场 → 致命性等级");
			lines.push("**死法 2（黑天鹅式毁灭）**：监管 / 战争 / 瘟疫 / 技术颠覆 → 致命性等级");
			lines.push("**死法 3（慢性脆弱积累）**：18 个月慢慢腐蚀，不是某一刻爆 → 致命性等级");
			lines.push("");
			lines.push("**致命性分级**：可恢复 / 重创 / 不可逆毁灭");
			lines.push("**切肤之痛核对**：失败时谁被拖入？（配偶/孩子/合伙人）");
			lines.push("**自欺扫描**：是否把'破产'叫'重新开始'，把'坐牢'叫'灰色地带'？");
			lines.push("**重构判定**：如有任何不可逆毁灭项 → 必须给出重构方案");
			lines.push("");
			lines.push("不接受'信念'作为分析。要列出具体路径。");
			return {
				content: [{ type: "text", text: lines.join("\n") }],
			};
		},
	};
};

export default factory;
