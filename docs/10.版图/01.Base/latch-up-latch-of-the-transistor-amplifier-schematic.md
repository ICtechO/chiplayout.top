---
date: 2011-09-15 16:03:00
title: latch up(闩锁效应)之三极管放大原理
createTime: 2011-09-15T08:03:00.000Z
permalink: /Layout/mmo5v
categories:
  - Layout
tags:
  - latch up
  - 三极管
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

其实做为IC版图工程师，要了解的东西挺多的，但能了解的又没多少，latch up效应就是这些没多少中的需要了解的一个。
当然只知道latch up怎么形成还不够，还要知道形成后的现象，latch前怎么预防，latch后怎么处理，都应该知道。而且发现面试的时候，latch up总是少不了的问题。所以接下来的几天里针对latch up写一些文章。
在CMOS IC中，有很多三极管模型，正是由于这些三极管的电流放大作用，让芯片出现问题，左图就是以前做的一个项目发生latch-up后，metal线都炸断了。所以先了解一下三极管电流放大作用。 

![latch-up](/public/latch-up_AA1/latch-up.jpg) 

至于三极管是怎么形成的，正偏反偏等不多说了，只有简单的公式和数字说明其放大作用，但一张示例图片不能少滴。 

![npn-i](/public/latch-up_AA1/npn-i.jpg) 

根据节点电流定律，三极管的三个极电流满足 
IE=IC+IB，   
可以设 IC=αIE   
可以算出 IC=（α/(1-α)）IB   
令β=α/(1-α),   
此β被称为电流放大倍数，一般三极管的α值在0.97到0.99之间，则β约在32到99之间。
也就是说IC约是32到99倍的IB，那么可以想像，IB哪怕只有一点点，IC就会被放大为几十倍IB。 
而在CMOS IC的三极管模型中，正是衬底和阱寄生的电阻产生的IB，被无限次的放大后形成强大的IC从而击毁芯片。 在下一篇中将解说这个IB是怎么被无限次放大的。
