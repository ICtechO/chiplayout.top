---
date: 2010-12-14 08:41:07
title: OPC Mask(光学临近修正掩膜)
createTime: 2010-12-14T00:41:07.000Z
permalink: /Layout/ezml0
categories:
  - Process
tags:
  - OPC
  - OPC MASK
  - 光学临近修正
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

> 从 MEMS 圆角困惑到 16 nm 版图，一次说清 OPC 的来龙去脉。

## 1. 为什么会有 OPC？
深亚微米时代  
- **关键图形 CD << 光源波长**  
- **衍射 → 线宽偏移 / 转角圆化 / 线端缩短**  
- **结果**：设计图形 ≠ 硅片图形  

## 2. 核心思想
> **“改掩膜，而不是改工艺”**  
在 Tape-Out 之前，对版图做 **几何补偿**，使得曝光后 **硅片图形 = 设计意图**。

## 3. 典型修正示例
| 设计缺陷 | OPC 修正 | 备注 |
|---|---|---|
| 线端缩短 | **Hammer Head / Serif** | 末端加帽 |
| 内角圆化 | **Inner Corner Bias** | 内凹补偿 |
| 外角圆化 | **Outer Corner Bias** | 外凸补偿 |
| 密集/孤立线偏差 | **Scatter Bar / SRAF** | 辅助条提高均匀性 |

## 4. 工作流程
1. **原始版图**  
2. **逐线段切割**（Fragmentation）  
3. **规则 / 模型驱动移动**（Rule / Model OPC）  
4. **迭代验证**（Litho Sim → PV Band）  
5. **Mask Tape-Out**

## 5. 工具 & 市场
| 厂商 | 国内地位 | 备注 |
|---|---|---|
| **Mentor Calibre** | **Golden Sign-off** | 历史原因 + Foundry 认证 |
| **Synopsys Proteus** | 补充 | 规则-模型混合 |
| **ASML SMO** | EUV 时代重点 | 光源 + Mask 协同优化 |

## 6. EUV 时代的 OPC
- **λ ≈ CD** → 衍射减弱 → **OPC 复杂度下降**  
- **SMO（Source-Mask Optimization）** 成为主角  
- 光源形状（FlexRay）+ Mask 同时迭代

## 7. 版图工程师一句话
> **“OPC 不是玄学，而是把工艺偏差提前算到掩膜里。”**  
Tape-Out 前，让 Calibre 跑一版 OPC，DRC/LVS 干净，硅片一次成功。


