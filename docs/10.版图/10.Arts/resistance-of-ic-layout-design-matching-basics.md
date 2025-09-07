---
date: 2011-08-24 15:52:00
title: IC版图设计中电阻的匹配基础篇
createTime: 2011-08-24T07:52:00.000Z
permalink: /Layout/xy5ca
categories:
  - Layout
tags:
  - ic
  - 匹配
  - 版图
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---

在IC版图（layout）的设计中，作为无源器件的电阻，其匹配也是很重要的，一个优秀的IC版图工程师将会遵守更多的匹配规则，使其因工艺产生的误差减小到最少。 

1. 遵循三个匹配的原则：电阻应该被放置相同的方向、相同的器件类型以及相互靠近。这些原则对于减少工艺误差对模拟器件的功能的影响是非常有效的。
2. 使用相同的类型、相同宽度、长度电阻以及相同的间距，版图如下图所示。 

[![做到了匹配的电阻版图](/public/fd6cd5d0da93_150B/better-match-layout.png) ](/public/fd6cd5d0da93_150B/better-match-layout.png) 

[![没有匹配效果的电阻版图](/public/fd6cd5d0da93_150B/bad-match-layout.png)](/public/fd6cd5d0da93_150B/bad-match-layout.png)

3. 对于高精确的电阻，建议电阻的宽度为工艺最小宽度的5倍，这样能够有效降低工艺误差。版图如下图所示。 

[![关于电阻的最小宽度](/public/fd6cd5d0da93_150B/The-minimum-width-of-the-resistance.png)](/public/fd6cd5d0da93_150B/The-minimum-width-of-the-resistance.png)

4. 对于高精确的电阻，建议电阻的宽度为工艺最小宽度的5倍，这样能够有效降低工艺误差。版图如下图所示。

[![两侧加dummy电阻的版图](/public/fd6cd5d0da93_150B/boths-sides-add-dummy-resistant.png)](/public/fd6cd5d0da93_150B/boths-sides-add-dummy-resistant.png)

5. 避免使用短的电阻，因为短的电阻更容易受工艺误差的影响，中度匹配的电阻一般应该大于5方块电阻，精确匹配的电阻一般至少不小于50um。
6. 使用交叉阵列电阻。如果阵列中有大量的电阻时，建议把电阻放置成多层的结构，形成二维阵列。版图如下图所示。 

[![两侧加dummy电阻的版图](/public/fd6cd5d0da93_150B/Two-dimensional-array-layout-for-matching-resistor.png)](/public/fd6cd5d0da93_150B/Two-dimensional-array-layout-for-matching-resistor.png)

7. 匹配的电阻要远离大功率器件、开关晶体管以及数字晶体管，减少耦合的影响。
8. 不要在匹配的电阻上使用金属连线，尽可能避免耦合和噪音的影响。版图如下图所示。 

[![匹配电阻上有金属线穿过的版图](/public/fd6cd5d0da93_150B/metal-line-cross-match-layout.png)](/public/fd6cd5d0da93_150B/metal-line-cross-match-layout.png)

9. 对于一些阻值小于20欧姆的电阻，使用金属层(metal layer)来做电阻，会得到准确的阻值。


