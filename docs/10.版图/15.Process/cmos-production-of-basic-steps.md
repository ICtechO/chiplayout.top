---
date: 2011-08-22 16:02:00
title: CMOS制作基本步骤
createTime: 2011-08-22T08:02:00.000Z
permalink: /Layout/8hxmb
categories:
  - Process
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

> 把整条生产线浓缩成 14 张“脑内卡片”，画版图时随时对照，避免踩坑。

---

::: imgCard
```yaml
- img: /public/493ae0c2dd4c_19D3/cmos-fabrication-steps.jpg
  name: CMOS制作中主要步骤
```
:::



## 0. 版图与工艺的对应关系
| Fab 区域 | 做哪几步 | 版图层示例 |
|---|---|---|
| **扩散区** | 高温氧化/退火 | WELL、ACTIVE |
| **光刻区** | 图形定义 | POLY、METALx |
| **刻蚀区** | 图形转移 | POLY、CONT、VIA |
| **离子注入区** | 掺杂 | NIMP、PIMP |
| **薄膜区** | 淀积介电/金属 | VIAx、METALx |
| **抛光区** | CMP 平坦化 | IMD 全局平坦 |

## 1~14 步流程总览

| 步骤 | 工艺动作 | 版图关注点 |
|---|---|---|
| **1 双阱注入** | N-well / P-well 高能注入 | 阱距、隔离环 |
| **2 浅槽隔离 STI** | 刻槽+氧化+回填+CMP | ACTIVE 尺寸、STI 宽度 |
| **3 栅结构** | 栅氧+Poly-Si 淀积+光刻/刻蚀 | POLY 最小线宽、栅-沟道缩进 |
| **4 LDD 注入** | 轻掺杂浅结 | LDD-OD 间距 |
| **5 侧墙 Spacer** | CVD 二氧化硅+各向异性刻蚀 | Spacer 宽度=后续 S/D 到栅距 |
| **6 S/D 注入** | 中等能量深结 | S/D OD 尺寸、与栅重叠 |
| **7 金属接触 Silicide** | 自对准硅化钨 | CONT 尺寸、CONT-to-POLY 间距 |
| **8 局部互连 LI** | 第一层钨线 | LI 线宽/间距 |
| **9~10 通孔1 + 金属1** | IMD1 → VIA1 → METAL1 | VIA1 覆盖、METAL1 最小线宽 |
| **11~13 上层金属/通孔** | 重复 2~5 层 | METAL2~5、VIA2~5、压焊点 |
| **14 钝化 & 测试** | 钝化层开窗、探针测试 | PAD 开口、测试结构 |

## 版图工程师一句话总结
> **“画每一层前，先问自己：这一步工艺怎么影响图形尺寸、对准、覆盖？”**  
把 14 步流程贴在工位，画线时实时对照，DRC/LVS 一次过。

##  CMOS制作基本步骤的相关文章 

  1. [CMOS制作步骤（一）：双阱工艺（twin well process）](http://www.chiplayout.net/cmos-double-well-process.html "CMOS制作步骤（一）：双阱工艺（twin well process）")
  2. [CMOS制作步骤（二）：浅槽隔离工艺STI(shadow trench isolation process)](http://www.chiplayout.net/cmos-sti-process.html "CMOS制作步骤（二）：浅槽隔离工艺\(STI process\)")
  3. [CMOS制作步骤（三）：多晶硅栅结构工艺(poly gate structural process)](http://www.chiplayout.net/cmos-polysilicon-gete-process.html "CMOS制作步骤（三）：多晶硅栅结构工艺")
  4. [CMOS制作步骤（四）：轻掺杂漏注入工艺LDD（lightly doped drain implants process）](http://www.chiplayout.net/cmos-ldd-process.html "CMOS制作步骤（四）：轻掺杂漏注入工艺（LDD process）")
  5. [CMOS制作步骤（五）：侧墙的形成（side wall spacer formation）](http://www.chiplayout.net/cmos-formation-side-wall.html "CMOS制作步骤（五）：侧墙的形成")
  6. [CMOS制作步骤（六）：源/漏注入工艺（S/D implant process)](http://www.chiplayout.net/cmos-fabrication-steps-f-source-drain-injection-technology.html "CMOS制作步骤（五）：侧墙的形成")
  7. [CMOS制作步骤（七）：接触（孔）形成工艺（contact formation）](http://www.chiplayout.net/cmos-contact-formation-process.html "CMOS制作步骤（七）：接触（孔）形成工艺")
  8. [CMOS制作步骤（八）：局部互连工艺LI（Local Interconnect process）](http://www.chiplayout.net/cmos-fabrication-steps-viii-local-interconnect-technology.html "CMOS制作步骤（八）：局部互连工艺LI")
  9. [CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成（Via-1 and Plug-1 formation）](http://www.chiplayout.net/cmos-via-1-plug-1-and-metal-1-interconnect-formation.html "CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成")
  10. [CMOS制作步骤（十）：Via-2, Plug-2,Metal-2及Top Metal形成（Via-2,Plug-2,metal2 interconnect and top metal formation](http://www.chiplayout.net/wp-admin/post.php?post=1027&action=edit)**[）](http://www.chiplayout.net/wp-admin/post.php?post=1027&action=edit)**

