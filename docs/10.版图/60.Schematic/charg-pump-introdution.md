---
date: 2011-05-22 01:53:00
title: 电荷式ChargePump工作原理
createTime: 2011-05-21T17:53:00.000Z
permalink: /Layout/lrcfd
categories:
  - Schematic
tags:
  - chargepump
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

现在在一些便携式电子产品中，特别是需要驱动多LED时，都需要一个升压电路，传统的逆变器不满足现在电子产品小型化，集成化的特点，因此在现在DC/DC中通常采用charge pump技术，可以用soc的设计思想将升压模块集成到ic中，实现1x，1.5x，2x的升压。下面简单地介绍一下电荷式Charge Pump的工作原理（同样也有电感式Charge Pump，在此不予以介绍）。 Charge Pump，亦称电荷汞，其基本原理很简单：Q=C*U。C固定，如果电压大的话，电量也多。其升压过程可用下图来表示： ![clip_image001](http://layoutcn.gotoip2.com/wp-content/uploads/2011/06/clip_image001.gif) 下面用富晶公司的FS9821（MSP类型）来简单地介绍一下这个过程： FS982x是一款MSP，工作电压2.2-3.6V，内部有14bit（实际有24bit），6ch的ADC，，内置1-2个op，risc核，lcd驱动等，其工作电流仅4mA，待机电流（时钟模式）0.01mA,内部有2x的升压电路，可将电池电压升高到外部所需的工作电压4.4v-7.2v。其也是采用Charge Pump将电源电压升高到其的两倍： 步骤一：ic内部首先将VDDP接CB，VSS接CA，VDD开始对CAB电容充电，如下图所示： ![clip_image003](http://layoutcn.gotoip2.com/wp-content/uploads/2011/06/clip_image003.jpg) ![clip_image004](http://layoutcn.gotoip2.com/wp-content/uploads/2011/06/clip_image004.jpg) 步骤二：ic内部将VDDP接至CA，VGG接至CB，VDD与CAB开始对CVGG电容充电，如下图所示： ![clip_image006](http://layoutcn.gotoip2.com/wp-content/uploads/2011/06/clip_image006.jpg) ![clip_image007](http://layoutcn.gotoip2.com/wp-content/uploads/2011/06/clip_image007.jpg) 最后CVGG上的电压实际上是CVDD的电压加上CAD的电压，由于充电有一个过程，所以开关的不同的开关频率可控制CVGG充电电压。 因此最后就实现了倍压的做法！
