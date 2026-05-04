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

const factory: CustomToolFactory = (pi) => {
	const { Type } = pi.typebox;
	return {
		name: "fragility_scan",
		label: "脆弱性扫描",
		description:
			"何时调用：用户描述一个系统/计划/组合/关系并询问'是否稳/有没有风险/会不会出事'，或表现出过度自信需要冷水时。" +
			"调用后：按 skill://fragility-scan 对目标做 7 项脆弱源扫描（单点故障/过度优化/隐藏杠杆/路径依赖/模型脆弱性/委托代理/沉默证据），" +
			"输出'先死的部位排序'+不可承受损失项+Via Negativa 减法建议。" +
			"不要在已经做完同一对象扫描的对话里重复调用。",
		parameters: Type.Object({
			target: Type.String({ description: "扫描对象的简短描述" }),
			focus: Type.Optional(Type.String({ description: "可选：重点审查维度" })),
		}),
		async execute(_id, p) {
			return {
				content: [
					{
						type: "text",
						text: `[fragility_scan|target=${p.target}${p.focus ? `|focus=${p.focus}` : ""}] 按 skill://fragility-scan 输出 7 项扫描+不可承受损失项+Via Negativa 减法建议。`,
					},
				],
			};
		},
	};
};

export default factory;
