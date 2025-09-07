---
date: 2024-01-14 05:07:36
title: 半导体芯片的切割道中不添加dummy会怎么样
createTime: 2024-01-13T21:07:36.000Z
permalink: /Layout/ou523
categories:
  - Process
tags:
  - dicing
  - die
  - dummy
  - scribe line
  - street
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

>在半导体芯片制造过程中，切割道（scribe line 或 street）是晶圆上用于分隔各个芯片（die）的细线，其主要作用是在晶圆划片（dicing）时提供指导线，以确保芯片能够准确切割。在切割道中添加dummy patterns（或称为dummy structures）是一种常见的做法，这些dummy patterns并不具有电路功能，但在制造过程中起到一些重要作用：

## dummy作用
  1. 增强结构强度：Dummy patterns可以增加晶圆边缘的机械强度，减少在划片和后续封装过程中的芯片损坏。
  2. 保持工艺一致性：在晶圆的边缘或切割道中添加dummy patterns有助于保持整个晶圆上工艺的均匀性，因为它们可以模拟中心区域的密集电路布局，从而减少工艺变化。
  3. 控制应力和翘曲：Dummy patterns可以帮助平衡晶圆上的应力分布，减少由于工艺引起的晶圆翘曲。


## dummy影响
如果在切割道中不添加dummy patterns，可能会产生以下影响：

  * 增加芯片损坏风险：在晶圆划片时，由于缺少额外的结构支持，芯片边缘更容易受损。
  * 工艺均匀性受影响：晶圆边缘的电路密度与中心区域相比可能会有较大差异，导致晶圆边缘区域的工艺特性与中心区域不一致。
  * 晶圆翘曲和应力分布不均：没有dummy patterns的晶圆在制造过程中可能会出现较大的翘曲和不均匀的应力分布，这会影响芯片的性能和可靠性。



>总之，虽然dummy patterns在芯片的功能上不起作用，但它们在确保制造过程中的质量和一致性方面扮演着重要角色。缺少dummy patterns可能会导致制造过程中的各种问题，影响最终产品的性能和可靠性。
