---
date: 2020-03-15 02:36:29
title: calibredrv中hilight net
createTime: 2020-03-14T18:36:29.000Z
permalink: /eda/77968
categories:
  - calibredrv
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

有没有想过在calibredrv中hilight某条net路径呢？

icc导出数据 run calibre LVS, 顶层有label的short会在short中报出来，没有label的内部short会报在detail里

可以先在icc中点亮这条net，然后根据坐标在calibredrv中点亮坐标位置，由于有short，这条路径将整个short的路径都高亮了，可以参考ICC中的net, 找到对应的short点。

如果点亮的是Power|ground,那就及时ctrl+c

如何在calibredrv中点亮呢，默认选中shape，右键extract net， 只能点亮选中shape,

如果想点亮全部，就需要定义连接关系，如下：
    
```sh    
connect 20 22 by 21
connect 22 24 by 23
```
其中，20，21，22，23，24都为GDS中的layer number, 分别对应M1,V1,M2,V2,M3

然后在layer-->load layer properties中load定义连接关系的文件

最后一点：options-->nets-->Search depth: 选 All levels
