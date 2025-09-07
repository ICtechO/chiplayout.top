---
date: 2013-08-26 16:44:09
title: cadence layoutXL优缺点
createTime: 2013-08-26T08:44:09.000Z
permalink: /eda/es43m
categories:
  - EDA
tags:
  - layoutXL
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

可能有的同行喜欢用layoutXL, 个人根据自己的使用总结了一下它的优点和缺点。 
## 优点
- 一可以方便的将电路中的所有instance准确无误的导入的Layout中，当然这也是建立在前期充分准备的基础上的
- 第二点就是导入的layout cell是和schematic对应的，你在schematic中点cell, layout中就会自动点亮与之对应的cell, 反之也是；
- 第三点就是它会显示对应的连接关系，不用看电路也能准确的把所有net连接起来。 
## 缺点
- 第一，由于导入至layout中的instance都有了与电路对应的唯一的instance name所以布局上就有点费时。 比如电路中的 i1和i2都是用的同一个cell, 那么不用layoutXL时， 两个cell随便放都行，但用了layoutXL, 两个cell就必须与i1和i2对应。 
- 第二，layoutXL的飞线是靠pin的名字连接的，一但导入的时候把所有的pin也导进来了，那么就需要把这些pin移动到对应的net上，而不是随手打个label就可以的，因为这样不会显示飞线的，所以手慢的人又会多用一些时间。 
- 第三，个人觉得比较适用使用了standard cell的数字电路或IP, 对于mos较多的模拟电路不太适用。 真的纯属个人观点，欢迎同行指正。
