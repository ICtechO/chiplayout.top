---
date: 2011-08-02 16:45:00
title: 晶体管版图的画法对其电阻的影响
createTime: 2011-08-02T08:45:00.000Z
permalink: /Layout/10e78
categories:
  - Layout
tags:
  - resistance
  - transistor
  - 晶体管
  - 版图
  - 电阻
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---

我们都知道在CMOS工艺中的晶体管由源极（active）,栅极（poly-silicon） 和漏极（active）区域组成，但是要使其工作我们必需给三端都接上信号。因此就会有金属线电组，接触孔电阻，源区电阻，接触孔到栅极电阻以及栅极电阻，在IC版图设计时如何去减小这些电阻成为我们讨论的话题。、 下图显示了一个具有相当复杂电阻模型的晶体管，不同的电阻代表不同的穿过晶体管沟道宽度的电流。左边这晶体管中所示的电流弧线代表者不同的电阻模型，并在右图给出了每种电阻模型对应的近似电路。 

![cmos-resistance-0](/public/2011/08/cmos-resistance-01.jpg) 

值得注意的是主导电阻是源区电阻，大概是metal1电阻的1000倍多，是接触孔电阻的10倍多。这样我们可以想像如果要减少整个晶体管的电阻，就需要先最小化源区的电阻。为了说明这点，下面用一个晶体管不同的连接的影响来说明为什么要这样做。 

1. 基本的布局，两端电阻总值为R

![cmos-resistance-1](/public/2011/08/cmos-resistance-11.jpg)

2. 电阻较高，总值大概为2R 

![cmos-resistance-2](/public/2011/08/cmos-resistance-21.jpg)

3. 电阻最小，总值大概为R/2 

![cmos-resistance-3](/public/2011/08/cmos-resistance-31.jpg)

所以，总结一下，如是设计方面要求晶体管电阻要尽量低，我们在ic layout design时就应该考虑不要随意的挖掉源区和漏区上的接触孔以及覆盖在接触孔两边的金属线，而是要孔尽量多些，线尽量宽些。
