---
date: 2021-03-18 07:00:52
title: Use Calibredrv delete cell name prefix or suffix
createTime: 2021-03-17T23:00:52.000Z
permalink: /eda/qsd8o
categories:
  - calibredrv
tags:
  - prefix
  - suffix
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

```sh
set ingds ./xxx.gds
set outgds ./yyy.gds

### open source gds
set L [layout create $ingds -dt_expand -preservePaths -preserveTextAttributes]

### get all cells
set allCell [$L cells]

### travel each cell
foreach c $allCell {
	### match the cell have suffix
	if [string match *_suffix $c] {
		### set new cell name as no suffix
		set newc [string map {“_suffix” “”} $c]
		### if new cell exists
		if [$L exists cell $newc] {
			puts “$newc exist!!!!!!!!!!!!!!”
		} else {
			### change the cell name to new
			$L cellname $c $newc
		}
	}
}
$L gdsout $outgds
```
