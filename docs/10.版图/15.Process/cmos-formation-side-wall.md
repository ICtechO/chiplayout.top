---
date: 2011-08-05 16:16:00
title: CMOS制作步骤（五）：侧墙的形成
createTime: 2011-08-05T08:16:00.000Z
permalink: /Layout/aujin
categories:
  - Process
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

> 两步搞定：CVD 淀积二氧化硅 + 各向异性干法刻蚀，无需掩膜即可在多晶硅栅两侧“自动”留下隔离侧墙。

---

## 1. 目的
- 阻挡大剂量源漏注入过于靠近沟道  
- 防止沟道过短或源漏穿通  
- 为后续 **LDD / S/D 注入** 提供自对准隔离

---

## 2. 工艺流程（仅 2 步）

| 步骤 | 工艺 | 关键参数 / 说明 |
|---|---|---|
| **1. 淀积** | **CVD** 二氧化硅 | 整片覆盖，厚度 ≈ 几十 ~ 百 nm |
| **2. 反刻** | **各向异性干法刻蚀** | 离子溅射，垂直速率 >> 侧向速率；<br>多晶硅顶面一旦露出即刻停止；<br>侧壁残留 ≈ 侧墙宽度 |

> **无需光刻掩膜**：利用刻蚀的各向异性与多晶硅自身高度差，形成自对准侧墙。

---

## 3. 结果示意 

::: imgCard
```yaml
- img: /public/2011/08/cmos-side-wall-formation.jpg
```
:::


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


