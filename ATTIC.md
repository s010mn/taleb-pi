# ⚠️ 警示：此分支是失败实验的化石

**分支名**：`attic/failed-thinking-agent-absorption-2026-05-04`
**封存时间**：2026-05-04
**保留原因**：留作未来火鸡问题的反面教材，**不要 merge 回 main**

## 这个分支干了什么

试图把隔壁 `~/thinking-agent` 项目里的若干特性"吸收"进 taleb-pi：

1. ✅ 修了扩展事件 listener 的 4 处 API 对接错误（`event.text` 等）
2. ✅ 加 `appendEntry` 留痕（IntentGate / mode 切换 / 叙事谬误命中）
3. ✅ 新增 `rules/cognitive-state-diagnosis.md`（GT0–GT5 认知态诊断）
4. ✅ 新增 `skills/mental-models/SKILL.md`（4 个补充心智模型）
5. ✅ 新增 `commands/invert.md`（一次性逆向分析）
6. ✗ 误改 `config.yml` 默认模型（`opencode-go/...` → `deepseek/...`）

## 为什么是失败实验

**最终翻车的不是 1–6 中任何一项的代码质量**，而是：

1. **用户原本就工作正常的对话流，在我引入修改后停止响应**——主对话 LLM 请求从未发出，TUI 永远 "Working…"
2. **改 `config.yml` 之后仍然没修复**——说明根因不在 provider 配置层
3. **大量时间花在排查日志、推测原因，但始终没定位到真正阻塞主对话发起的环节**
4. **可能的真因（未确认）**：
   - 我们的 `before_agent_start` hook 返回 `{ systemPrompt }` 时把 SYSTEM.md 替换成了仅含 mode marker 的短串（runner 是替换语义而非追加）
   - 或者 `pi.sendMessage({ customType, ... }, { deliverAs: "nextTurn" })` 的副作用阻塞了 turn
   - 或者 `pi.appendEntry` 在每次输入都写 history.db 出现并发/锁问题
5. **没有做端到端 smoke test 就推荐用户上线测试**——典型火鸡：单元跑通 ≠ 整链路工作

## 教训

- **`bun build` + 单元 sanity check 通过 ≠ 集成层正确**。oh-my-pi 的事件 + hook + sendMessage 是有副作用的真实状态机，必须在真实 TUI 里端到端验证才能宣称"修好了"。
- **诊断 hang 类问题时，第一原则是先禁用刚改的东西**（`disabledExtensions` 应该真生效），而不是绕弯查 provider 注册、模型名等。我浪费了用户的时间。
- **"修好火鸡问题"本身可能制造新火鸡**。原版的扩展虽然 4 处事件 listener 都对接错（实际从未触发任何逻辑），但用户的对话流是顺畅的；"修复"后逻辑触发了，反而引入了未知的阻塞路径。塔勒布会说：在不完全理解一个系统为何工作时，干预它本身就是脆弱化操作。
- **Via Negativa**：本来用户的诉求只是"看看哪些可以吸收"——一个**讨论性**任务。我跳到了**实施层**，是过度的加法。

## 如果未来要重做

正确顺序应该是：
1. 先验证当前扩展真实状态（每个 listener 实际触发与否）——做一个**只观察不修改**的诊断版本
2. 在用户工作目录之外（一个干净的测试 omp 实例）逐项试改
3. 每改一项都跑端到端真实对话验证
4. 通过后再合到主目录

## 切回干净状态

main 分支已 reset 到本失败实验之前的最后一个稳定 commit `001d7fb`。
