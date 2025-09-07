---
date: 2011-08-04 17:15:00
title: CMOS制造中的轻掺杂漏(LDD)注入工艺
createTime: 2011-08-04T09:15:00.000Z
permalink: /Layout/tp454
categories:
  - Process
tags:
  - LDD
  - 轻掺杂漏
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

> CMOS 制造第四步，防短沟道、降漏电、造浅结，一步到位。


## 1. 为什么需要 LDD？
- **栅宽 ↓ → 沟道长度 ↓ → 短沟道效应 ↑**  
- **高电场 → 热载流子退化 & 漏电流 ↑**  
- 解决思路：在源/漏与沟道之间插入 **低浓度、浅结** 过渡区 → **LDD**

## 2. LDD 工艺总览
| 步骤 | 目的 | 关键工艺 |
|---|---|---|
| **N-LDD** | NMOS 侧轻掺杂 | 砷 (As) 注入 + 表面非晶化 |
| **P-LDD** | PMOS 侧轻掺杂 | BF₂ 注入 + 表面非晶化 |

> **均为第四步制造步骤**，紧接栅极形成后。

## 3. 流程拆解

### 3.1 N-LDD
1. **光刻**  
   - 胶开窗：仅暴露 **NMOS 区域**  
2. **离子注入**  
   - **As⁺ (砷)**：大质量 → 浅结 + 表面非晶化  
   - 能量低 → 结深 < 50 nm  
::: imgCard
```yaml
- img: /public/2011/08/cmos-nldd-process.jpg
```
:::



### 3.2 P-LDD
1. **光刻**  
   - 胶开窗：仅暴露 **PMOS 区域**  
2. **离子注入**  
   - **BF₂⁺ (氟化硼)**：比 B⁺ 更重，非晶化更好  
   - 同样低能浅结，抑制硼扩散  
::: imgCard
```yaml
- img: /public/2011/08/cmos-pldd-process.jpg
```
:::


## 4. 工艺收益
| 效果 | 机制 |
|---|---|
| **抑制短沟道** | 低浓度扩散区降低峰值电场 |
| **减小漏电流** | 浅结 + 非晶化 → 缺陷复合中心 ↓ |
| **提升可靠性** | 热载流子注入 (HCI) 降低 |

## 5. 一句话总结
> **LDD = “轻掺杂 + 浅结 + 非晶化”**，用最小剂量把源漏电场“削峰”，让短沟道器件既快又稳。


## CMOS制作基本步骤的相关文章


  1. [CMOS制作步骤（一）：双阱工艺（twin well process）](http://www.chiplayout.net/cmos-double-well-process.html "CMOS制作步骤（一）：双阱工艺（twin well process）")
  2. [CMOS制作步骤（二）：浅槽隔离工艺STI(shadow trench isolation process)](http://www.chiplayout.net/cmos-sti-process.html "CMOS制作步骤（二）：浅槽隔离工艺\(STI process\)")
  3. [CMOS制作步骤（三）：多晶硅栅结构工艺(poly gate structural process)](http://www.chiplayout.net/cmos-polysilicon-gete-process.html "CMOS制作步骤（三）：多晶硅栅结构工艺")
  4. [CMOS制作步骤（四）：轻掺杂漏注入工艺LDD（lightly doped drain implants process）](http://www.chiplayout.net/cmos-ldd-process.html "CMOS制作步骤（四）：轻掺杂漏注入工艺（LDD process）")
  5. [CMOS制作步骤（五）：侧墙的形成（side wall spacer formation）](http://www.chiplayout.net/cmos-formation-side-wall.html "CMOS制作步骤（五）：侧墙的形成")
  6. [CMOS制作步骤（六）：源/漏注入工艺（S/D implant process)](http://www.chiplayout.net/cmos-fabrication-steps-f-source-drain-injection-technology.html "CMOS制作步骤（六）：源/漏注入工艺")
  7. [CMOS制作步骤（七）：接触（孔）形成工艺（contact formation）](http://www.chiplayout.net/cmos-contact-formation-process.html "CMOS制作步骤（七）：接触（孔）形成工艺")
  8. [CMOS制作步骤（八）：局部互连工艺LI（Local Interconnect process）](http://www.chiplayout.net/cmos-fabrication-steps-viii-local-interconnect-technology.html "CMOS制作步骤（八）：局部互连工艺LI")
  9. [CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成（Via-1 and Plug-1 formation）](http://www.chiplayout.net/cmos-via-1-plug-1-and-metal-1-interconnect-formation.html "CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成")
  10. [CMOS制作步骤（十）：Via-2, Plug-2,Metal-2及Top Metal形成（Via-2,Plug-2,metal2 interconnect and top metal formation）](http://www.chiplayout.net/wp-admin/post.php?post=1027&action=edit)


