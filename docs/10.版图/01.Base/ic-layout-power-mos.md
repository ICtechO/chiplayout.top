---
date: 2011-07-30 16:02:00
title: ic layout设计中的几种功率管(power mos)版图
createTime: 2011-07-30T08:02:00.000Z
permalink: /Layout/k1qvv
categories:
  - Layout
tags:
  - ic
  - mos
  - power
  - 版图
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

  1. 常规连线 优点：提供了源极和漏极间最大可能的金属连线数量，使连线宽度最大化 缺点：产生额外压使器件中的电流分布不均匀 

  [![power_mos_1](/public/2011/07/power_mos_1.jpg)](/public/2011/07/power_mos_1.jpg)
  
  2. 对角连线 优点：逐渐变细的总线可以减小偏置效应，使电流均匀分布于晶体管各叉指。 

  [![power_mos_2](/public/2011/07/power_mos_2.jpg)](/public/2011/07/power_mos_2.jpg)

  3. 华夫饼式 优点：面积最省 缺点：a)没有考虑金属边线影响；b)沟道存在大量转弯；c)没有背栅接触。 

  [![power_mos_3](/public/2011/07/power_mos_3.jpg)](/public/2011/07/power_mos_3.jpg)

  4. 曲栅式 曲栅增加了栅极的宽度，使栅极捏死紧密，可以轻易地容纳分布式背栅接触孔，栅极135度弯曲不易发生局部雪崩击穿，源和漏接触孔对角放置增加源、漏限流作用，改善器件稳定性。 

  [![power_mos_4](/public/2011/07/power_mos_4.jpg)](/public/2011/07/power_mos_4.jpg)


