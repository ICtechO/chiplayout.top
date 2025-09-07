---
date: 2025-08-21 05:38:46
title: 查找layout view中的隐藏layer
permalink: /skill/qihyn
categories:
  - Script
  - skill
tags:
  - layerNum
  - skill
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

## 需求原因
1. 版图中有不明图形将cell bBox撑的很大，有黑边
2. `strmout` log中会有类似 `99:42213` 的不明layer

## 分析
1. 有的是·`tech-lib`更换， 新的`tech-lib`中有没有定义原有 `lib` 中的layer, 这样virtuoso会自动赋值 layerNum 和 purposeNum
2. 有的是 `tech-lib` 中有定义， 但`display`中没有定义，也会在 strmout log中报出来

## 解决
1. 针对上面的第二种情况， 在`display`中添加 `tech-lib`中的layer就能看到，相对简单；当然也可以直接删除
2. 上面第一种情况，可以用脚本`report`一下

## 代码

```cadence
lLayerList = '(99 66 23)
libName = "xxxx"
libId = ddGetObj(libName)
allCell = libId~>cells~>name
foreach(cell allCell
	cv = dbOpenCellViewByType(libName cell "layout" "maskLayout" "r")
	objs = setof(tmp cv~>shapes member(tmp~>layerNum lLayerList))
	when(length(objs)>0
		foreach(obj objs
			printf("%s %ss %L %L\n" cell obj~>objType obj~>bBox obj~>layerNum)
		)
	)
)
```