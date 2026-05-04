/**
 * convexity_check 工具
 *
 * 把 [convexity-check 技能](../../skills/convexity-check/SKILL.md) 暴露为 LLM 可调工具。
 */

import { Type } from "@sinclair/typebox";
import type { CustomToolFactory } from "@oh-my-pi/pi-coding-agent";

const factory: CustomToolFactory = () => ({
	name: "convexity_check",
	label: "凸性检查",
	description:
		"分析一个系统/决策的收益函数曲率，识别凸性（波动是朋友）、凹性（波动是敌人）、隐藏凹性（看似稳实则积累脆弱）。" +
		"Analyze the curvature of a system's payoff function: convex (volatility is friend), concave (volatility is enemy), or hidden concavity. " +
		"使用场景：决策涉及不确定性、随机性、波动，需要判断"波动是朋友还是敌人"。",
	parameters: Type.Object({
		object: Type.String({
			description: "要检查凸性的对象。例：'我每月把工资 30% 投入指数基金定投'。",
		}),
		stress_inputs: Type.Optional(
			Type.Array(Type.String(), {
				description:
					"可选：要测试的极端输入场景。例：['市场跌 50%', '通胀 15%', '失业 6 个月']。" +
					"Optional: stress-test inputs to evaluate function curvature against.",
			}),
		),
	}),
	async execute(_toolCallId, params) {
		const lines: string[] = [];
		lines.push(`# 凸性检查指令 / Convexity Check Instruction\n`);
		lines.push(`对象：${params.object}`);
		if (params.stress_inputs?.length) {
			lines.push(`压力输入：`);
			for (const s of params.stress_inputs) lines.push(`  - ${s}`);
		}
		lines.push("");
		lines.push("请按以下结构输出：\n");
		lines.push("1. **收益函数形状**：[凸 / 线性 / 凹 / 混合]");
		lines.push("2. **二阶曲率证据**：输入翻倍 / 减半 / 极端时的具体反应");
		lines.push("3. **詹森不等式应用**：E[f(X)] vs f(E[X]) 哪个大？");
		lines.push("4. **隐藏曲率**：时间维度上是否凸凹反转（如：稳赚 9 年第 10 年归零）");
		lines.push("5. **建议**：增加暴露 / 减少暴露 / 加对冲 / 退出");
		lines.push("");
		lines.push("警惕"过去 N 年没出问题"——这可能是没遇到考验，不是反脆弱。");
		return {
			content: [{ type: "text", text: lines.join("\n") }],
		};
	},
});

export default factory;
