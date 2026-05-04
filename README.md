# taleb-pi

把 [oh-my-pi](https://github.com/can1357/oh-my-pi) 调教成一个**塔勒布式思考代理**——用反脆弱、Via Negativa、Skin in the Game、叙事谬误等框架来重塑你的思考过程，而不是写代码。

> 这是一个**纯配置 overlay**——不 fork、不改源码。
> oh-my-pi 升级时直接 `npm update -g`，零合并冲突。

## 设计原则

- **中文优先，中英双识**：所有 ttsrTrigger 正则、IntentGate 关键词、Mode Markers 都同时匹配中英文
- **Via Negativa**：能用 markdown 解决的不写 TypeScript；能用 rule 解决的不写 extension
- **跟随上游**：内核来自 `@oh-my-pi/pi-coding-agent`，本仓库只是 `~/.omp/agent/` 的内容

## 安装（Windows）

```powershell
# 1. 安装 oh-my-pi
npm i -g @oh-my-pi/pi-coding-agent

# 2. 把本仓库链接为 ~/.omp/agent（管理员 PowerShell）
Remove-Item -Recurse -Force "$env:USERPROFILE\.omp\agent" -ErrorAction SilentlyContinue
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.omp\agent" -Target "C:\Users\ming\taleb-pi"

# 或不用软链：
$env:PI_CODING_AGENT_DIR = "C:\Users\ming\taleb-pi"
```

复制环境变量模板：
```powershell
Copy-Item .env.example .env
# 编辑 .env 填入 ANTHROPIC_API_KEY 等
```

## 目录结构

```
taleb-pi/
├── SYSTEM.md            # 完全替换系统提示词 = 塔勒布世界观
├── config.yml           # 模型、主题、扩展启用
├── models.yml           # provider 路由（脆弱问题 → 深度模型）
├── .env.example         # API keys 模板
├── rules/               # alwaysApply 规则 + TTSR 触发规则
│   ├── via-negativa.md
│   ├── antifragility.md
│   ├── skin-in-the-game.md
│   └── narrative-fallacy.md
├── skills/              # 按需调用的思维技能
│   ├── barbell-analysis/SKILL.md
│   ├── premortem-taleb/SKILL.md
│   ├── convexity-check/SKILL.md
│   └── fragility-scan/SKILL.md
├── tools/               # LLM 可调用的工具（自动发现）
│   ├── fragility_scan/index.ts
│   └── barbell_analysis/index.ts
├── commands/            # 斜杠命令
│   ├── skeptic.md
│   ├── barbell.md
│   ├── via-negativa.md
│   └── antifragile.md
├── agents/              # 子代理角色
│   ├── skeptic.md
│   ├── pre-mortem.md
│   └── convexity-reviewer.md
├── extensions/          # TS 扩展
│   └── taleb-overlay/
│       ├── index.ts             # 注册入口
│       ├── intent-gate.ts       # 中英双语意图分类
│       ├── narrative-fallacy.ts # 叙事谬误检测
│       └── mode-marker.ts       # 每轮模式标记注入
└── AGENTS.md            # 整体上下文
```

## 思维模式（4 种 + 自由模式）

| 命令 | 模式 | 触发场景 |
|---|---|---|
| `/skeptic` | 怀疑模式 | 检验主张、识别证据等级 |
| `/barbell` | 杠铃模式 | 不确定决策、风险配置 |
| `/via-negativa` | 反向法 | 删减、排除、识别脆弱源 |
| `/antifragile` | 反脆弱扫描 | 系统设计、应对随机性 |

未指定模式时，IntentGate 会根据中英双语关键词自动分类。

## 跟随上游

```powershell
npm update -g @oh-my-pi/pi-coding-agent  # 拉最新内核
git -C C:\Users\ming\taleb-pi pull       # 拉你自己的配置（如果托管了）
```

两者完全解耦。
