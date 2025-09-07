---
date: 2011-09-07 15:59:00
title: 关于芯片中的seal ring…
createTime: 2011-09-07T07:59:00.000Z
permalink: /Layout/ck7rb
categories:
  - Layout
tags:
  - chip
  - ic
  - ring
  - seal
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

## **seal ring是什么** 
- 从**layout** 角度看，seal ring是一个由diff, contact, via和metal等layer按照一定的规则叠加组成的图形。 
- 从**工艺** 角度看，seal ring是一种氧化、钝化层结构 
- 从物理角度看，seal ring是介于芯片（chip）和划片槽（scrible line）之间的（保护）环。 
## **seal ring怎么画** 
如果不想承担什么风险， 给芯片添加seal ring这件事可以交给foundry，出钱就行。不过多数时候我们宁可自己动手去做这些事情。一般情况下foundry都会在design rule中清楚的规定seal ring的结构及尺寸。常见的seal ring会将工艺中所有的层都列出来，并标明 dark or clear，用这里的dark和clear去对照工艺制程中这些layer的dark或clear，如果同为dark或clear则seal ring上面有这层，反之则seal ring上没有这层。 
design rule中的contact和via都是我们常用的方孔，实际上长孔比方孔更好些，foundry这样建议的。。。 
seal ring一般要离芯片core有一定的距离，如果芯片面积宽松可以参考design rule，因为rule的规定通常比较大；当然出于成本的考虑，我们宁可 _根据流片经验自己定义_ 。 
## **seal ring怎么接** 
- 一般的PSUB工艺都会将seal ring做成P+的，接到芯片的ground，而其浮空一般也不会有影响；
- 无特殊情况不能接到 power。 最好不要用metal1去将core和seal ring连接在一起，而是用其它上层 metal；
  如果有diff层连到seal ring, 在靠近seal ring的diff上面做一小段salicide结构（通常是加rpo或sab），这样对防止ESD绝对好处大大的。 如有需要开槽的宽金属连接到seal ring，请尽量不要在靠近 seal ring的地方开槽，非开槽不可的话那尽量开的小点，这些都是防止外界的杂质等进入芯片。 
## **seal ring什么用** 
seal ring最根本也是最主要的作用就是防止芯片在切割的时候受到机械损伤，以下其它作用可以说是衍生的，搭顺风车的：
- a) Seal Ring接地，屏蔽芯片外的干扰； 
- b) Seal Ring可以防止潮气从侧面断口侵入； 
- c) 将切割所产生的静电就近接地，再由切割时邻近的seal ring共同分摊所产生的电流，将对die本体的冲击降到最小。
- d) …………
