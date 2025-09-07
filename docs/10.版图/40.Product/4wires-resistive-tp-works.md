---
date: 2010-10-16 22:51:00
title: 常用低成本：四线电阻式触摸屏原理
createTime: 2010-10-16T14:51:00.000Z
permalink: /Layout/2xusd
categories:
  - IC
tags:
  - TP
  - 电阻式
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

四线电阻式触摸屏的结构如图1，在玻璃或丙烯酸基板上覆盖有两层透平，均匀导电的ITO层，分别做为X电极和Y电极，它们之间由均匀排列的透明格点分开绝缘。
其中下层的ITO与玻璃基板附着，上层的ITO附着在PET薄膜上。X电极和Y电极的正负端由“导电条”（图中黑色条形部分）分别从两端引出，且X电极和Y电极导电条的位置相互垂直。引出端X-，X+，Y-，Y+一共四条线，这就是四线电阻式触摸屏名称的由来。
当有物体接触触摸屏表面并施以一定的压力时，上层的ITO导电层发生形变与下层ITO发生接触，该结构可以等效为相应的电路，

如下图2： 
::: imgCard
```yaml
- img: /public/2011/08/4wires-resistive-TP-works-001.jpg
  name: 图1
  desc: 4wires-resistive-TP-works-001
```
:::


::: imgCard
```yaml
- img: /public/2011/08/4wires-resistive-TP-works-002.jpg
  name: 图2
  desc: 4wires-resistive-TP-works-002
```
:::


::: imgCard
```yaml
- img: /public/2011/08/4wires-resistive-TP-works-003.jpg
  name: 图3
  desc: 4wires-resistive-TP-works-003
```
:::



计算触点的X,Y坐标分为如下两步： 
1. 计算Y坐标，在Y+电极施加驱动电压Vdrive， Y-电极接地，X+做为引出端测量得到接触点的电压，由于ITO层均匀导电，触点电压与Vdrive电压之比等于触点Y坐标与屏高度之比。 
2. 计算X坐标，在X+电极施加驱动电压Vdrive， X-电极接地，Y+做为引出端测量得到接触点的电压，由于ITO层均匀导电，触点电压与Vdrive电压之比等于触点X坐标与屏宽度之比。 

::: imgCard
```yaml
- img: /public/2011/08/4wires-resistive-TP-works-004.jpg
  name: 图3
  desc: 4wires-resistive-TP-works-004
```
:::


 测得的电压通常由ADC转化为数字信号，再进行简单处理就可以做为坐标判断触点的实际位置。 
 四线电阻式触摸屏除了可以得到触点的X/Y坐标，还可以测得触点的压力，这是因为top layer施压后，上下层ITO发生接触，在触点上实际是有电阻存在的，如图3的Rtouch。
 压力越大，接触越充分，电阻越小，通过测量这个电阻的大小可以量化压力大小。 
 
 **碰触时第一层偏置电压 （图三） 因第二层 测量端 输出阻抗大 所以电阻忽略不计电压降基本为0 所以测量到X轴噶点距离 Y轴面同理 只不过是调转方向**
