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
			"激活 skill://fragility-scan 思维框架对目标做 7 项脆弱源扫描。详细方法见该 skill。",
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
