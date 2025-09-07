---
date: 2011-08-03 18:30:00
title: CMOS制造中的多晶硅栅结构工艺
createTime: 2011-08-03T10:30:00.000Z
permalink: /Layout/emc2g
categories:
  - Process
tags:
  - gate
  - polysilicon
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

> 四步完成：栅氧 → 淀积 Poly → 光刻 → 刻蚀；特征尺寸由此定义，同时自对准掩蔽后续 S/D 注入。
---

## 1. 工艺地位
- **特征尺寸决定者**：栅长 = 工艺节点  
- **自对准掩膜**：后续 LDD / S/D 注入均以它为硬掩膜  
- **关键质量指标**：线宽控制、侧壁陡直度、表面粗糙度

## 2. 四步流程

| 步骤 | 工艺 & 设备 | 关键参数 / 目的 |
|---|---|---|
| **1. 栅氧化层生长** | **干氧/湿氧氧化炉** | 8–15 Å 高 k 或 SiO₂；去除原生氧化层 + 钝化界面 |
| **2. 多晶硅淀积** | **LPCVD + SiH₄** | 100–300 nm，可现场掺杂（N⁺/P⁺ poly） |
| **3. 光刻** | **DUV 光刻机 + 掩膜版** | 定义栅极图形；CD 控制 ≤ ±2 nm |
| **4. 刻蚀** | **各向异性等离子体刻蚀** | 垂直侧壁、无底切；终点检测至栅氧层 |

## 3. 结果示意

::: imgCard
```yaml
- img: /public/2011/08/coms-polysilicon-gate-process.jpg
```
:::


- 栅长 Lg = 光刻/刻蚀精度  
- 栅高 Hpoly ≈ 淀积厚度  
- 侧壁陡直度 > 85°（保证后续 spacer 均匀）

## 4. 版图/工艺接口要点
- **最小栅长** 在版图层 `POLY` 中定义  
- **栅-有源间距** 需满足设计规则（DRC）  
- **刻蚀偏置** 需在 OPC 阶段补偿

> 一句话：先长一层超薄栅氧，再淀积掺杂多晶硅，通过 DUV + 等离子刻蚀把“尺子”刻出来——这就是整个 CMOS 工艺的特征尺寸原点。


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


