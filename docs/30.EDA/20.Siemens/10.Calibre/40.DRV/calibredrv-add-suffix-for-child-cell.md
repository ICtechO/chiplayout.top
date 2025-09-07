---
date: 2021-12-04 08:17:56
title: calibredrv给GDS中的cell加后缀
createTime: 2021-12-04T00:17:56.000Z
permalink: /eda/ofdm5
categories:
  - calibredrv
tags:
  - calibre
  - calibredrv
  - suffix
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

```sh
set L [layout create xxx.gds -dt_expand -preservePaths -preserveTextAttributes -preserveProperties]
set T  {$L topcell]
set clist [$L cells]
foreach child $clist {
  if {$child !=$T} {
    $L cellname $child ${child}_yourSuffix
  }
}
$L gdsout xxx_new.gds
```
