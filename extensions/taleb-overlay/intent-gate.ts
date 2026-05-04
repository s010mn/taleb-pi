/**
 * IntentGate / 意图门
 *
 * 在用户输入到达 LLM 之前，对其做塔勒布意图分类，
 * 把分类结果写入会话状态，供 mode-marker 在下一次 LLM 调用前注入对应 marker。
 *
 * 核心：中英双语关键词匹配。用户中文/英文/中英混打都要识别。
 */

export type TalebIntent =
	| "decision_under_uncertainty" // 决策类（押注、选择、配置）
	| "narrative_check" // 叙事检查类（"为什么 X 发生了"）
	| "system_fragility" // 脆弱性诊断类（"这个系统稳吗"）
	| "robustness_design" // 反脆弱设计类（"怎么设计一个不会崩的 X"）
	| "epistemic_audit" // 认识论审查类（"这个观点对吗"）
	| "general_inquiry"; // 通用咨询（无强信号）

interface PatternRule {
	intent: TalebIntent;
	patterns: RegExp[];
	weight: number;
}

/**
 * 双语关键词触发表
 *
 * 设计原则：
 * - 中文不依赖空格分词（用 `\p{Unified_Ideograph}` 或字符片段）
 * - 英文用 \b 词边界
 * - 同一规则用 alternation，避免维护多个 regex
 */
const RULES: PatternRule[] = [
	{
		intent: "decision_under_uncertainty",
		weight: 3,
		patterns: [
			/(决策|选择|押注|要不要|该不该|配置|分配|投入|all[- ]?in)/i,
			/\b(decide|decision|bet|stake|allocate|invest|should I|whether to|go all in)\b/i,
		],
	},
	{
		intent: "narrative_check",
		weight: 3,
		patterns: [
			/(因为.{0,20}所以|是因为|根本原因|背后逻辑|本质上是因为|这就是为什么|解释一下为什么)/,
			/\b(because.+therefore|reason is|root cause|the real reason|explains why|why did)\b/i,
		],
	},
	{
		intent: "system_fragility",
		weight: 3,
		patterns: [
			/(脆弱|会不会崩|会不会爆|风险点|薄弱|稳吗|靠谱吗|抗住|应对突发)/,
			/\b(fragile|will it break|risk|weak point|hold up|withstand|robust enough)\b/i,
		],
	},
	{
		intent: "robustness_design",
		weight: 2,
		patterns: [
			/(设计|怎么搭|怎么建|架构|怎么做.{0,10}才|怎么避免|防止)/,
			/\b(design|architect|build|how to make|prevent|avoid|so that.+won)\b/i,
		],
	},
	{
		intent: "epistemic_audit",
		weight: 2,
		patterns: [
			/(对吗|对不对|这种说法|这个观点|有道理吗|靠不靠谱|怎么看)/,
			/\b(is this true|is it valid|does this make sense|what do you think of|critique)\b/i,
		],
	},
];

export interface IntentResult {
	intent: TalebIntent;
	confidence: "low" | "medium" | "high";
	scores: Record<TalebIntent, number>;
}

export function classifyIntent(text: string): IntentResult {
	const scores: Record<TalebIntent, number> = {
		decision_under_uncertainty: 0,
		narrative_check: 0,
		system_fragility: 0,
		robustness_design: 0,
		epistemic_audit: 0,
		general_inquiry: 0,
	};

	for (const rule of RULES) {
		for (const re of rule.patterns) {
			if (re.test(text)) {
				scores[rule.intent] += rule.weight;
				break; // 每条规则最多加一次
			}
		}
	}

	// 选最高分；若全为 0 → general_inquiry
	let best: TalebIntent = "general_inquiry";
	let bestScore = 0;
	for (const [intent, score] of Object.entries(scores) as [TalebIntent, number][]) {
		if (score > bestScore) {
			bestScore = score;
			best = intent;
		}
	}

	const confidence: IntentResult["confidence"] =
		bestScore >= 5 ? "high" : bestScore >= 3 ? "medium" : "low";

	return { intent: best, confidence, scores };
}

/**
 * 意图 → 模式标记 的映射
 * 这些字符串会被 mode-marker.ts 注入为系统提示词后缀
 */
export const INTENT_TO_MARKER: Record<TalebIntent, string> = {
	decision_under_uncertainty:
		"[模式：决策不确定性] 用户在做押注。强制：先估暴露面再估概率，识别凸/凹结构，杠铃可行则推杠铃。",
	narrative_check:
		"[模式：叙事检查] 用户在讲因果故事。强制：列出至少 3 个替代假说，警惕事后归因，识别沉默证据。",
	system_fragility:
		"[模式：脆弱诊断] 用户在评估系统稳定性。强制：扫描 7 项脆弱源，定位'哪里先爆'，不要估算'会不会爆'。",
	robustness_design:
		"[模式：反脆弱设计] 用户在设计系统。强制：用三态光谱（脆弱/强韧/反脆弱）定位目标，优先 Via Negativa 减法。",
	epistemic_audit:
		"[模式：认识论审查] 用户在求一个观点的真伪判断。强制：先问证据等级（机制/实验/相关性/轶事/叙事），再问切肤之痛。",
	general_inquiry: "", // 不注入额外标记
};
