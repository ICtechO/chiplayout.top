---
date: 2013-08-12 16:40:12
title: 测量path长度及rectangle长宽
createTime: 2013-08-12T08:40:12.000Z
permalink: /skill/f84af
categories:
  - program
tags:
  - skill
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

这个skill脚本可以用来测量path的长度和rectangle的长宽。
用法：复制代码保存为 measurelength.il, 在icfb的CIW窗口 
`load "measurelength.il"` 
在layout界面选中要测量的path或rectangle, 按下 Ctrl+k 即可显示相关尺寸，如下图所示。 
::: imgCard
```yaml
- img: /public/2013/08/Path_Length.gif
```
:::

```cadence
/* Synopsis : Path_Length() 
	Version : 1.0a 
	Description : Measure Path & Rectangle Length */ 
procedure( Path_Length() 
	prog( (winId cvId selObj shape points llx lly urx ury) 
		winId = hiGetCurrentWindow() 
		cvId = getEditRep(winId) 
		selObj = geGetSelSet(cvId) 
		leClearAllRuler(cvId) 
		foreach(shape selObj 
			case( shape~>objType 
				("rect" || "inst" 
					Box = shape~>bBox 
					llx = car(car(Box)) 
					lly = cadr(car(Box)) 
					urx = car(cadr(Box)) 
					ury = cadr(cadr(Box) ) 
					points= list((llx:(lly+ury)/2)(urx:(lly+ury)/2))
					leCreateRuler(cvId points) 
					points= list(((llx+urx)/2:lly)((llx+urx)/2:ury)) 
					leCreateRuler(cvId points) 
				) 
				("path" 
					points = shape~>path leCreateRuler(cvId points) ) 
				(t hiDisplayAppDBox(?name 
					'JWPath_Length 
					?buttonLayout  'Close 
					?dboxBanner "Warning!!" 
					?dboxText "No Select Objet (rect/cell/path)")
				) 
			);case )
		;foreach 
	);prog 
);procedure 
hiSetBindKey("Layout" "Ctrl<Key>k" "Path_Length()") 
```