# taleb-overlay extension

> 这是 taleb-pi 的核心 TypeScript 扩展。
> 不需要 fork oh-my-pi，作为外挂模块加载即可。

## 三个机制

### 1. IntentGate（意图门）
- 文件：[intent-gate.ts](./intent-gate.ts)
- 时机：每次用户输入到达 LLM 之前（`input` hook，使用 `event.text`）
- 工作：用中英双语正则把输入分类到 6 类意图之一
- 输出：当前轮的 `transientIntent` + `pi.appendEntry("taleb-intent", ...)` 留痕

### 2. Mode Marker（模式标记注入）
- 文件：[mode-marker.ts](./mode-marker.ts)
- 时机：每次 LLM 调用前（`before_agent_start` hook）
- 工作：根据 `explicitMode` 或 `transientIntent` 拼接一段 marker 附加到系统提示词末尾
- 优先级：显式模式（用户用 `/skeptic` 等切换）> 自动意图
- **不动 `pi.setThinkingLevel`**：用户默认就开 xhigh，按模式去"调整"等于医源性降级

### 3. Narrative Fallacy Detector（叙事谬误探测）
- 文件：[narrative-fallacy.ts](./narrative-fallacy.ts)
- 时机：
  - `message_end` 事件，过滤 `role === "assistant"`，扫描 assistant 输出
  - `tool_result` 事件，扫描工具返回（特别是 bash/read 拉回的外部文本）
  - 注意：是从 `event.content: (TextContent|ImageContent)[]` 中提取 text，**不是** `event.result`
- 命中阈值：`totalSeverity >= 3` 时通过 `pi.sendMessage({ customType: "taleb-fallacy-warning", ... })` 注入提醒
- 同时 `pi.appendEntry("taleb-fallacy-hit", ...)` 留痕

### 4. 显式模式命令
[index.ts](./index.ts) 注册 5 个斜杠命令：
`/skeptic`、`/barbell`、`/via-negativa`、`/antifragile`、`/exit-mode`。
每次显式切换都 `pi.appendEntry("taleb-mode", { mode, source: "explicit" })`。

## 历史教训：火鸡问题

早期版本 4 处事件 listener 全都对接错了 oh-my-pi API（用了不存在的字段名）：

| 写错的 | 实际 API |
|---|---|
| `event.content` (input) | `event.text` |
| `pi.on("assistant_message", ...)` | `message_end` 事件 + `event.message.role === "assistant"` 过滤 |
| `event.result` (tool_result) | `event.content: (TextContent\|ImageContent)[]` |
| `pi.sendMessage({ role, content })` | `pi.sendMessage({ customType, content, display, ... })` |

**`tsc` 通过 + 运行不报错 ≠ 在工作。** 这正是塔勒布"火鸡问题"——表面稳定运行 = 信心累积 = 没人验证 = 直到某天发现整个 IntentGate + 叙事检测从未触发过。

修复后每次自动分类都会 `pi.logger.debug` + `pi.appendEntry`，下次再有类似偏差立刻可见。**这是 skin-in-the-game 在代码层面的体现：每个状态变化留下证据。**

## 与 markdown 命令的关系

`commands/` 目录下的 [skeptic.md](../../commands/skeptic.md) 等是**对用户的说明文档**——
告诉用户切换到该模式后，agent 会做什么。

实际**模式切换效果**由本扩展中的 `registerCommand` + `before_agent_start` 完成。
两者是文档与实现的关系，不冲突。

## 为什么不做跨 session 持久化

经过明确决策**不**用 `pi.appendEntry` 跨 session 恢复模式，原因：

- **隐藏状态 = 切肤之痛缺失**：用户三天后重启，问"今天天气"，得到杠铃式回答 → 困惑无溯源
- **路径依赖**：把"上次开过模式"作为"这次也要"的证据 = 火鸡推理
- **加法谬误**：用户没要求恢复，扩展主动恢复 = intervention bias
- **凸性差**：上行是"偶尔省 1 秒输入"，下行是"所有不相关会话被错误模式污染"

`appendEntry` 只用于**会话内可追溯**（调试、复盘），**不**用于跨 session 状态恢复。

## 调整点（如果上游 API 演进）

如果 oh-my-pi 上游修改了 `ExtensionAPI` 的方法名/事件名/事件 payload 形态，
**只需要改本目录**——不影响 rules/、skills/、commands/、tools/ 这些 markdown 配置。
这就是把 IntentGate / Mode Marker / Narrative Detector 隔离到一个扩展模块的好处。
