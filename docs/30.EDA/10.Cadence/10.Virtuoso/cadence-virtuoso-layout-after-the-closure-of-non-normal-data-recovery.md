---
date: 2011-11-11 17:06:31
title: cadence virtuoso 非正常关闭后layout数据恢复
createTime: 2011-11-11T09:06:31.000Z
permalink: /eda/pclzx
categories:
  - EDA
tags:
  - layout
  - virtuoso
  - 版图
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

大清早的该死的virtuoso莫名其妙连续关闭两次，打的好几十label没保存就没了，郁闷不已。所以尝试一下cadence virtuoso非正常关闭后的layout数据恢复。 
依次进入 ./library/cell/layout目录 会看到以下三次文件 
```sh
layout.cdb #每次编辑的版图文件信息、数据 
layout.cd% #上次版图编辑后的save信息 
layout.cd- #异常退出后系统自动保存的信息
```
所以，当异常退出发生后， 
```sh
mv layout.cdb layout.cdb_bak #备份 
cp layout.cd- layout.cdb #替换
```
即可恢复非正常关闭后的数据。
