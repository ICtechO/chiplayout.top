---
date: 2011-07-27 16:25:12
title: Resize the Command Interface Window (CIW)
createTime: 2011-07-27T08:25:12.000Z
permalink: /eda/16bbb
categories:
  - EDA
tags:
  - CIW
  - resize
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

Command Interface Window (CIW)是一个命令行窗口。
这个窗口的尺寸和位置是由显示屏的左下和右上的坐标来固定的，左下角为它的原点，cadence默认CIW在屏幕底部中间（如下图），可以通过修改相应的文件将其调整到自己喜欢的屏幕位置。 
[![Resize-cadence-CIW](/public/2011/07/image002.jpg)](/public/2011/07/image002.jpg) 
先说一下resize CIW格式: 
```sh
hiResizeWindow(window(1) list(左下水下坐标:左下垂直坐标 右上水平坐标:右上垂直坐标))
```
如
```sh
hiResizeWindow(window(1) list(1:25 800:200))
```
 只需要将这句代码加入到 **.cdsinit** 文件中，cadence启动后就将CIW 的位置调整到了屏幕左下角，如下图所示 
 [![Resize-cadence-CIW](/public/2011/07/image004.jpg)](/public/2011/07/image004.jpg) 
 有谁知道CIW中以下 warnning 怎么搞定啊， 是在 Ubuntu11.04上装的Cadence IC610
 ```sh
Warning: Cannot convert string "-adobe-helvetica-bold-r-*-*-12-*-*-*-*-*-*-*" to type FontStruct 
Warning: Cannot convert string "-adobe-helvetica-bold-r-*-*-12-*-*-*-*-*-*-*" to type FontStruct 
Warning: Cannot convert string "-adobe-courier-medium-r-*-*-12-*-*-*-*-*-*-*" to type FontStruct
``` 
