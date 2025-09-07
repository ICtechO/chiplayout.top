---
date: 2011-08-19 16:08:00
title: IC layout中CMOS晶体管匹配基础篇
createTime: 2011-08-19T08:08:00.000Z
permalink: /Layout/whxoc
categories:
  - Layout
tags:
  - ic
coverImg: https://img.onedayxyy.cn/images/TeekCover/18.webp
---

晶体管的匹配在模拟电路中有很高的应用频率，比如一些差分对电路，主要依靠栅极到源极电压的匹配。同时像电流镜，主要依靠漏极电流的匹配。通常匹配的版图设计能够使电压的偏差减少到±5mv，使漏极电流有±l％的误差。

## 不同W的MOS管版图（layout）
::: imgCard
```yaml
- img: /public/d5e59ba5c87a_13BED/different-width-mos-layout.png
  desc: 使用相同长度的手指状的图形。不同长度和宽度的晶体管的匹配是很差的，甚至晶体管的匹配必须要求有相同的通道长度(channellen h)，不要试图去匹配不同长度和宽度的晶体管。
```
:::


## 不同方向不匹配的MOS版图与同方向匹配的MOS版图
::: imgCard
```yaml
- img: /public/d5e59ba5c87a_13BED/different-direction-match-mos-layout.png
  desc: 所有的晶体管必须有相同的方向，并相 差带来的功能的影响。MOS layout(版图)如下图所示互靠近。 这样能有效的减少模拟电路由于工艺误所示。
```
:::


## 质心对称匹配的MOS版图（layout）
::: imgCard
```yaml
- img: /public/d5e59ba5c87a_13BED/Centroid-symmetrical-match-mos-layout.png
  desc: 使用相同重心的版图规则。中等以上精度的匹配晶体管，要求必须要是相同重心布局，通常是通过分割大的晶体管成偶数个的手指状晶体管来实现，同时要把他们放在交叉的阵列中。比如在有相同差分对的放大电路中，采用晶体管同重心的版图方法来得到灵敏的模拟电路版图，以至于有一个精确的输出。
```
:::


## 两端添加了DUMMY MOS管的匹配版图（layout）
::: imgCard
```yaml
- img: /public/d5e59ba5c87a_13BED/dummy-mos-match-mos-layout.png
  desc: 
```
:::


## 匹配晶体管上走线的版图（layout）
::: imgCard
```yaml
- img: /public/d5e59ba5c87a_13BED/metal-line-cross-mos-match-layout.png
  desc: 不要在需要匹配的晶体管上走金属连线，这样能够最大可能避免噪音和耦合的影响，特别是一些敏感的器件。
```
:::


## Gate由Metal连接的MOS版图（layout）
::: imgCard
```yaml
- img: /public/d5e59ba5c87a_13BED/metal-connection-mos-gate-layout.png
  desc: 连接手指状晶体管栅极要使用金属线，不要使用多晶硅连接。在中度匹配和精确匹配CMOS晶体管中，使用金属线的效果要比多晶硅的效果好很多。
```
:::


## Gate由Poly连接的MOS版图（layout）
::: imgCard
```yaml
- img: /public/d5e59ba5c87a_13BED/poly-connection-mos-gate-layout.png
  desc: 连接手指状晶体管栅极要使用金属线，不要使用多晶硅连接。在中度匹配和精确匹配CMOS晶体管中，使用金属线的效果要比多晶硅的效果好很多。
```
:::


> 使用NMOS晶体管进行匹配要比PMOS晶体管效果要好，因为NMOS晶体管有更好的灵活性。


