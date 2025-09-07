---
date: 2010-11-28 06:54:29
title: LOCOS之birds beak(鸟嘴效应)
createTime: 2010-11-27T22:54:29.000Z
permalink: /Layout/u93i4
categories:
  - Process
tags:
  - birds beak
  - STI
  - 半导体制造技术
  - 浅槽隔离
  - 鸟嘴效应
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

>在传统的硅的局部氧化（LOCOS）过程中，当氧扩散穿越已生长的氧化物时，它也会在其它方向上扩散。一些氧原子纵向扩散进入硅，另一些氧原子横向扩散，这样就造成氮化物掩膜下有着轻微的侧面氧化生长。由于氧化层比消耗的硅更厚，所以在氮化物掩膜下的氧化生长会装氮化物的边缘抬高。这种现现被称为“鸟嘴效应”（bird's beak）。

::: imgCard
```yaml
- img: /public/2011/06/bb1.jpg
  name: “鸟嘴效应”（bird's beak）
```
:::


它是LOCOS工艺中一种不好的现象，而且氧化物越厚，“鸟嘴效应”更显著。通常会在氮化物和硅之间生长一层薄氧化层，称之为垫氧(pad oxide), 这样可以有效的减小氮化物掩膜和硅之间的应力。另外采用（111）晶向的P沟工艺比采用（100）晶向的N沟工艺有更短的“鸟嘴”；若SiO2膜加厚，则可减小缺陷，但“鸟嘴”就增大。

1. 在同等工艺的情况下，鸟嘴的尺寸是不会有太大改变的，所以，当尺寸变小时，鸟嘴部份就会吃掉很多isolation的空间，所以必须通过工艺的改变来缩小鸟嘴，但还是有一定限度的，所以不会随尺寸的缩小无限收缩鸟嘴大小

2. 以上说的是鸟嘴，那么当鸟嘴已不能再缩时，收缩space的唯一办法就是把nitride之间的space做的很小，这样total isolation space ~ nitride space + 2*鸟嘴。可是这样做的后果就是，当nitride space 太小时，通过locos长的field oxide会长不厚，直接导致field isolation fail, 即场开启电压不能符合要求。

3. 现在的STI工艺，就克服了field oxide thinning的问题，当然，sti depth是变得越来越深了，space也是越来越小了，可是机台方面的发展似乎还能应付尺寸缩小时的要求

::: imgCard
```yaml
- img: /public/2011/06/bb2.jpg
```
:::


>参考资料：《半导体制造技术》 page220
