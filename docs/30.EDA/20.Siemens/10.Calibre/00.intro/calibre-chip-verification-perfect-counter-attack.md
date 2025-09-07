---
date: 2012-12-05 19:17:19
title: Calibre——芯片验证领域的完美逆袭
createTime: 2012-12-05T11:17:19.000Z
permalink: /eda/7foyl
categories:
  - EDA
tags:
  - calibre
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---

## 1. 背景：Dracula 独霸天下
在 90 年代末到 00 年代初，Cadence 的 Dracula 几乎是版图验证（DRC/LVS）的唯一选择，市场占有率绝对领先。  
然而，Mentor Graphics 携 **Calibre** 横空出世，用一套“分而治之”的理念，硬生生把 Dracula 拉下神坛。

---

## 2. 胜负手：Hierarchy 验证理念

### 2.1 Flatten vs. Hierarchy
- **Flatten**（Dracula 思路）  
  把所有层级全部展开，一个单元被调用 10,000 次，出现 1 个错误，就会被报成 10,000 个错误。  
- **Hierarchy**（Calibre 思路）  
  只报一次错误，指出“这个单元本身有问题”，查错时间呈指数级下降。

### 2.2 立竿见影的效果
- 连线 short、open 这类在 Dracula 时代“老大难”的问题，Hierarchy 验证迎刃而解。  
- 用户界面简洁、命令易懂，上手极快，口碑迅速发酵。

---

## 3. Cadence 的反击：Assura 与 PVS

| 阶段 | 产品 | 策略 | 结局 |
|---|---|---|---|
| 第一波 | Assura | “换皮 Dracula” + 更友好的 Virtuoso 集成 | Bug 频出，口碑崩坏；最后只能**捆绑赠送** |
| 第二波 | PVS | 宣称 DRC/LVS 可一起跑 | 理念好听，实际无法撼动 Calibre |

> 硅谷段子：  
> “谁会愿意花钱买一个用来 Debug 的软件，还要先花时间为软件本身 Debug？”

---

## 4. 插曲：Cadence 的假账风波
Calibre 如日中天，Cadence 高层一度想**直接收购 Mentor**，但现金流吃紧。  
几位高管铤而走险做假账，东窗事发后被集体开除，收购计划流产。

---

## 5. 产业启示：为什么 Dracula 必败
- **路径依赖**：Dracula 是当时 Cadence 的现金牛，不可能自废武功推倒重来。  
- **创新瓶颈**：大公司只能不断收购小团队来“拼装”下一代工具。  
  - 例：Cadence 的 SOCEncounter 就是在 Silicon Ensemble 淘汰后，通过并购整合而来。

---

## 6. 余波：三足鼎立的今天
- 依靠 Calibre 这一**持续现金流发动机**，Mentor Graphics 站稳脚跟。  
- 行业进入“寡头时代”：  
  小 EDA 公司陆续被 **Cadence / Synopsys / Mentor** 收购，风云不再。

---

## 7. 一句话总结
> **“把问题分而治之，就能把对手分而击之。”**  
> Calibre 用 Hierarchy 理念完成以小博大，成为 EDA 史上教科书级的商业与技术双杀案例。