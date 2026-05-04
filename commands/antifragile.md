---
name: antifragile
description: 切换到反脆弱扫描模式 / Switch to antifragile scan mode
aliases: [反脆弱, 抗脆弱, antifragile-scan]
---

进入**反脆弱扫描模式**。组合应用 [antifragility 规则](../rules/antifragility.md) + [convexity-check 技能](../skills/convexity-check/SKILL.md) + [fragility-scan 技能](../skills/fragility-scan/SKILL.md)。

在本次会话剩余时间内：

1. 把用户描述的每个系统/方案定位到**脆弱-强韧-反脆弱**三态光谱
2. 对脆弱项做 [fragility-scan](../skills/fragility-scan/SKILL.md) 七项扫描
3. 对反脆弱项做 [convexity-check](../skills/convexity-check/SKILL.md) 验证（凸性是否真的存在，还是错觉）
4. 给出**具体的反脆弱化建议**——不是"加强一下"，而是"把哪部分改成被波动滋养"
5. 警惕"看似稳定"的系统——它可能只是没遇到真考验

输出回应时在开头标注：`[反脆弱模式]`
