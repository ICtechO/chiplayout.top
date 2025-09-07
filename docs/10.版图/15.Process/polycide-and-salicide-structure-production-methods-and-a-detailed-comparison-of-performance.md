---
date: 2011-08-26 15:55:00
title: POLYCIDE与SALICIDE结构,制程及性能详细对比
createTime: 2011-08-26T07:55:00.000Z
permalink: /Layout/a6e23
categories:
  - Process
tags:
  - polycide
  - salicide
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

>之前有篇《[SILICIDE、SALICIDE和POLYCIDE工艺的整理](http://www.chiplayout.net/silicide-salicide-polycide-different.html "Silicide、Salicide和Polycide 工艺的整理")》中已经对POLYCIDE与SALICIDE的区别做过比较，但只是些零散的文字性的描述，本篇将加入部分图片，用以说明POLYCIDE和SALICIDE在结构目的，工艺，源漏电阻，热稳定性，硅和金属的互扩散以及对掺杂的影响等几方向的不同。 
## **POLYCIDE与SALICIDE工艺结构图** 
::: imgCard
```yaml
- img: /public/fe0ee6901924_5DC/image001.png
  name: POLYCIDE工艺结构图（1）
```
:::

::: imgCard
```yaml
- img: /public/fe0ee6901924_5DC/image002.png
  name:  POLYCIDE工艺结构图（2）
```
:::

::: imgCard
```yaml
- img: /public/fe0ee6901924_5DC/image005.png
  name: SALICIDE工艺结构图（1）
```
:::

::: imgCard
```yaml
- img: /public/fe0ee6901924_5DC/image006.png
  name: SALICIDE工艺结构图（2）
```
:::


##  工艺目的
### POLYCIDE 

  1. 减小栅极电阻

### SALICIDE 
  1. 减小栅极电阻;
  2. 减小源漏接触电阻

## 制作方法
### POLYCIDE 

  1. 复合层的淀积, 在淀积POLY并掺杂后，连续淀积硅化物（一般为WSi2或者TiSi2）
  2. 栅极的刻蚀。

### SALICIDE 
  1. 制作金属层 在源漏注入以后，溅射一层金属（一般为Co/Ti）
  2. 硅化物的形成 进行第一次升温退火，控制适当温度，使得金属和硅生成硅化物，而绝缘层上的金属不会和绝缘层反应生成硅化物。
  3. 多于金属的去除 用湿法（氨水+双氧水）除去未反应成silicide的金属。
  4. 第二次退火进一步降低电阻

## 工艺区别

  1. 源漏电阻方面 POLYCIDE 源漏电阻没有减小，为了减小源漏接触电阻，需要打的孔比采用SALICIDE要多一些。 SALICIDE 可明显减小源漏接触电阻，设计上就允许采用更小的源漏扩散区面积，并由此进一步减小了S/D和衬底之间的寄生电容，进一步降低RC延迟。
  2. 热稳定性 POLYCIDE：较好 SALICIDE：第一次回火形成的硅化物电阻率较高（生成C49相位结构，温度为T1以下）。需要更高温度的第二次回火，降低电阻(生成C54相位，温度在T1-T2之间).
	  ::: imgCard
```yaml
- img: /public/fe0ee6901924_5DC/image009.png
```
:::

	  ::: imgCard
```yaml
- img: /public/fe0ee6901924_5DC/image010.png
```
:::

	  但是，随着silicide厚度的降低以及栅极线宽减小，C49转化为C54的临界温度T1升高，C54结构发生团块化的临界温度T2降低，以致于会出现T1=T2，甚至T2小于T1的情况。这样，随着温度升高，C49结构直接发生团块化，就不存在C54结构这个区间，硅化物的电阻始终较高。故：SALICIDE工艺不适合于0.25um以下的制程。（但是采用Co等其他金属，可以减小这种现象发生，也就是不同金属材料和Si反应，生成物的C49-C54转化温度区间T1-T2会不同，所以实际上0.18um有采用salicide工艺的。）
  3. Si和金属的互扩散 
	- POLYCIDE：淀积WSi，可以促使硅化物和POLY更好的结合。金属和Si的互扩散不影响器件性能和栅极。 
	- SALICIDE： 
		- a) 线条边缘电阻升高（对细线条影响严重） 对于TiSi2，在形成硅化物的过程中，Si是主要扩散物，在边缘处，可反应的Si少，所以形成的硅化物层就薄，电阻就大，表现出来的结果就是线条边缘的电阻较大，对于细线条的情况此影响非常严重。
		- b) Si扩散到金属上，引起的桥接问题 由于Si扩散到金属中的速度大于金属扩散到硅中的速度（对于Ti和Si），所以硅化物不仅会在金属与硅的直接接触面形成，还会在SPACER上形成（尽管在这里金属与氧化层是直接接触），这样就容易造成桥接。 
	  ::: imgCard
```yaml
- img: /public/fe0ee6901924_5DC/image012.png
```
:::

		- c) 通过选择合适的硅化物金属，可减小上述三种效应（比如用Co/Ni代替Ti）。
  4. 对掺杂的影响 
	  - POLYCIDE：只淀积在POLY层上，不存在此类问题。 
	  - SALICIDE： 
		  - a) salicide在N/P区的反应情况不同，对于N+Si区，形成的硅化物较薄，电阻 较大。P区的情况相反。 
		  - b) 一般杂质在salicide中的扩散速度极快，所以在多晶中的掺杂物容易进入硅 化物层，而流串至其他地方。多晶会因为掺杂物的流失而产生严重的空乏效 应。对于CMOS工艺，则会有P型N型掺杂物的相互污染，导致Vth的变化。

##  相关资料下载
contrast_polycide_and_salicide.zip
