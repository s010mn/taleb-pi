/**
 * Narrative Fallacy Detector / 叙事谬误探测器
 *
 * 在 LLM 输出（assistant 消息）后扫描其内容，
 * 检查是否出现了塔勒布最警惕的"过度流畅因果叙事"模式。
 *
 * 命中阈值时，向会话注入一条系统提醒，让下一轮 LLM 自我审查。
 *
 * 中英双语探测。
 */

interface FallacyPattern {
	id: string;
	pattern: RegExp;
	severity: 1 | 2 | 3;
	hint: string;
}

const PATTERNS: FallacyPattern[] = [
	{
		id: "single-cause-flowing",
		pattern: /(根本原因是|本质上是因为|归根结底是|核心原因在于|the root cause is|fundamentally because|boils down to)/i,
		severity: 3,
		hint: "出现了'唯一根本原因'句式 — 多数复杂系统问题没有单一根本原因，是多因素叠加。请列出至少 2 个等价替代解释。",
	},
	{
		id: "post-hoc-just-so",
		pattern: /(之所以.{0,30}就是因为|事后看|这就是为什么.{0,30}因为|in hindsight|that's why.+because)/i,
		severity: 2,
		hint: "出现了事后归因句式 — 警惕这是否是流畅的事后故事，而非事前可证伪的因果。",
	},
	{
		id: "guru-without-skin",
		pattern: /(专家(认为|预测|表示)|分析师(预测|认为)|经济学家(预测|认为)|预言|expert.+predict|analyst.+forecast|economist.+predict)/i,
		severity: 2,
		hint: "引用了'专家说' — 是否核查了该专家的切肤之痛？预测错了他承担什么后果？",
	},
	{
		id: "probability-without-exposure",
		pattern: /(概率(只有|很低|大约)|可能性(不大|很小)|大概率|probability is (low|only|small)|likely won't|unlikely)/i,
		severity: 2,
		hint: "在估概率 — 但暴露面分析了吗？如果发生，损失可承受吗？",
	},
	{
		id: "novel-disruption-claim",
		pattern: /(颠覆|革命性|改变一切|前所未有|disruptive|revolutionary|game[- ]?changer|never seen before)/i,
		severity: 1,
		hint: "出现'颠覆/革命性'修辞 — 林迪过滤一下：同类旧事物活了多久？该新事物活了多久？",
	},
];

export interface FallacyHit {
	id: string;
	severity: 1 | 2 | 3;
	matched: string;
	hint: string;
}

export function detectFallacies(text: string): FallacyHit[] {
	const hits: FallacyHit[] = [];
	for (const p of PATTERNS) {
		const match = text.match(p.pattern);
		if (match) {
			hits.push({
				id: p.id,
				severity: p.severity,
				matched: match[0],
				hint: p.hint,
			});
		}
	}
	return hits;
}

/**
 * 把命中列表组装成一段注入用户可见+下一轮 LLM 可见的提醒。
 * 仅当 totalSeverity >= 3 时返回非空字符串。
 */
export function formatFallacyWarning(hits: FallacyHit[]): string {
	const total = hits.reduce((sum, h) => sum + h.severity, 0);
	if (total < 3 || hits.length === 0) return "";

	const lines: string[] = [];
	lines.push("⚠️ 叙事谬误探测器：上一轮回答触发了以下警报，下一轮请自我审查：");
	for (const h of hits) {
		lines.push(`  - [${h.id}] 命中片段："${h.matched.slice(0, 40)}" → ${h.hint}`);
	}
	return lines.join("\n");
}
