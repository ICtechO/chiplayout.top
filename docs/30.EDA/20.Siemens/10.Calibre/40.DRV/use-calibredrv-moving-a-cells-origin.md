---
date: 2021-03-14 16:11:25
title: use calibredrv Moving a Cell‘s Origin
createTime: 2021-03-14T08:11:25.000Z
permalink: /eda/hvay9
categories:
  - EDA
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---
> mydeltax和mydeltay为offset value

```sh    
set mylayout mylayout.gds
set myoutfile myoutfile.gds
set mydeltax 12.0
set mydeltay 15.0
set L [layout create $mylayout -dt_expand]
set mytopcell [$L topcell]
$L cellname $mytopcell myoldtopcell
set mydbunits [$L units user]
$L create cell $mytopcell
$L create ref $mytopcell myoldtopcell \
[expr $mydeltax / $mydbunits] \
[expr $mydeltay / $mydbunits] 0 0 1
$L expand cell myoldtopcell
$L gdsout $myoutfile $mytopcell
```