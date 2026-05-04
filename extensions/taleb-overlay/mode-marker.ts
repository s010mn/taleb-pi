/**
 * Mode Marker / 模式标记注入
 *
 * 在每次 LLM 调用前，根据当前会话的"激活模式"在系统提示词末尾注入一段 marker。
 *
 * 模式来源（按优先级）：
 * 1. 用户通过 /skeptic, /barbell, /via-negativa, /antifragile 显式切换
 * 2. IntentGate 自动分类的结果
 *
 * 模式持续：
 * - 显式切换：会话生命周期内持续，直到 /exit-mode 或切到其他模式
 * - 自动分类：仅当前轮（TTSR / Transient System Reminder 风格）
 *
 * 决策记录：曾经考虑过按模式映射 thinking budget（via-negativa = medium 等），
 * 但用户默认就是 xhigh——我们去"调低"反而是医源性损伤。
 * Via Negativa：不动 thinking level，把这件事还给用户的全局设置。
 */

import type { TalebIntent } from "./intent-gate.js";
import { INTENT_TO_MARKER } from "./intent-gate.js";

export type ExplicitMode = "skeptic" | "barbell" | "via-negativa" | "antifragile" | null;

export interface ModeState {
	/** 用户显式切换的模式，会话级持久 */
	explicitMode: ExplicitMode;
	/** IntentGate 给当前轮的临时模式（每轮重置） */
	transientIntent: TalebIntent | null;
}

export const initialState: ModeState = {
	explicitMode: null,
	transientIntent: null,
};

const EXPLICIT_MARKERS: Record<NonNullable<ExplicitMode>, string> = {
	skeptic:
		"[模式：怀疑] 默认所有主张未证实，要求机制+反例+切肤之痛证据，主动找替代假说，做沉默证据核查。回答开头标注 [怀疑模式]。",
	barbell:
		"[模式：杠铃] 把所有方案画到杠铃光谱（85-90% 极保守 + 10-15% 极激进），拒绝中间地带，主动建议 90/10 重构。回答开头标注 [杠铃模式]。",
	"via-negativa":
		"[模式：反向法] 拒绝增加除非用户证明无法删减。每个回答必须含至少一个减法建议。回答开头标注 [反向法模式]。",
	antifragile:
		"[模式：反脆弱扫描] 把每个对象定位到脆弱-强韧-反脆弱三态。脆弱项做 7 项扫描，反脆弱项验证凸性是否真存在。回答开头标注 [反脆弱模式]。",
};

/**
 * 计算当前应注入的 marker 字符串。
 * 显式模式优先于自动分类。
 */
export function buildMarker(state: ModeState): string {
	if (state.explicitMode) {
		return EXPLICIT_MARKERS[state.explicitMode];
	}
	if (state.transientIntent) {
		return INTENT_TO_MARKER[state.transientIntent] ?? "";
	}
	return "";
}

/**
 * 把 marker 拼接到系统提示词末尾。
 * 空 marker 时返回原 prompt 不变。
 */
export function injectMarker(systemPrompt: string, marker: string): string {
	if (!marker) return systemPrompt;
	return `${systemPrompt}\n\n---\n\n${marker}`;
}
