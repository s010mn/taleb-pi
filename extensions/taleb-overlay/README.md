# taleb-overlay extension

> 这是 taleb-pi 的核心 TypeScript 扩展。
> 不需要 fork oh-my-pi，作为外挂模块加载即可。

## 三个机制

### 1. IntentGate（意图门）
- 文件：[intent-gate.ts](./intent-gate.ts)
- 时机：每次用户输入到达 LLM 之前
- 工作：用中英双语正则把输入分类到 6 类意图之一
- 输出：当前轮的 `transientIntent`

### 2. Mode Marker（模式标记注入）
- 文件：[mode-marker.ts](./mode-marker.ts)
- 时机：每次 LLM 调用前（`before_agent_start` hook）
- 工作：根据当前 `explicitMode` 或 `transientIntent` 拼接一段 marker，附加到系统提示词末尾
- 优先级：显式模式（用户用 `/skeptic` 等切换）> 自动意图

### 3. Narrative Fallacy Detector（叙事谬误探测）
- 文件：[narrative-fallacy.ts](./narrative-fallacy.ts)
- 时机：每次 assistant 消息或 tool_result 之后
- 工作：用中英双语正则扫描典型叙事谬误模式（"根本原因是"、"专家预测"、"颠覆性"等）
- 命中阈值：`totalSeverity >= 3` 时注入系统提醒，提示模型自我审查

## 装配入口

[index.ts](./index.ts) 把三者组合，并注册 5 个斜杠命令：
`/skeptic`、`/barbell`、`/via-negativa`、`/antifragile`、`/exit-mode`。

## 与 markdown 命令的关系

`commands/` 目录下的 [skeptic.md](../../commands/skeptic.md) 等是**对用户的说明文档**——
告诉用户切换到该模式后，agent 会做什么。

实际**模式切换效果**由本扩展中的 `registerCommand` + `before_agent_start` 完成。
两者是文档与实现的关系，不冲突。

## 跑通验证

待 oh-my-pi `ExtensionAPI` 类型在 npm 上稳定后，本扩展才能编译运行。
当前结构是骨架，主要验证：

1. 文件路径与命名是否被 oh-my-pi 自动发现机制拾取
2. 中英双语正则是否覆盖了主要触发场景（手工跑 `node --test` 验证 `classifyIntent` 与 `detectFallacies` 的输入输出）

## 调整点（如果上游 API 演进）

如果 oh-my-pi 上游修改了 `ExtensionAPI` 的方法名（例如 `pi.on` 的事件名、`registerCommand` 的参数形态），
**只需要改本目录**——不影响 rules/、skills/、commands/、tools/ 这些 markdown 配置。
这就是把 IntentGate / Mode Marker / Narrative Detector 隔离到一个扩展模块的好处。
