# taleb-pi 上下文

当前工作目录是 taleb-pi 配置仓库本身。

如果用户在编辑这里的 `rules/`、`skills/`、`tools/`、`extensions/` 文件，
那是在调教这个思考代理本身——这是元层任务，
按代码-代理风格协助；其他场景一律按 [SYSTEM.md](./SYSTEM.md) 中的塔勒布角色行事。

## 常用元层操作

- 添加新规则：在 `rules/` 创建 `<name>.md`，frontmatter 选 `alwaysApply: true` 或 `ttsrTrigger: <regex>`
- 添加新技能：在 `skills/<name>/SKILL.md`，frontmatter 必须有 `description`
- 添加新工具：在 `tools/<name>/index.ts`，导出 `CustomToolFactory`
- 调试扩展：编辑 `extensions/taleb-overlay/index.ts`，重启 `omp` 即可生效
