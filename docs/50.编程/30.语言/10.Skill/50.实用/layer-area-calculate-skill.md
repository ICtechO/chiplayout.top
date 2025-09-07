---
date: 2013-09-16 22:41:41
title: IC layout中计算Layer面积的skill
createTime: 2013-09-16T14:41:41.000Z
permalink: /skill/0iuih
categories:
  - program
tags:
  - skill
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

这个skill脚本可以用来计算layer的面积，包括Path、Rectange、Polygon。  
用法：复制代码保存为 layer_area.il,  
在icfb的CIW窗口

`load "layer_area.il"`

在layout界面选中要测量的图形, 按下 Alt+a 即可弹出所选图形的面积。  
如果依次选择多个图形，在按下Alt+a时显示所选的第一个图形面积，点击Close关闭后显示第二个图形面积，再按下Close关闭后显第三个图形面积。  
下图依次选取了diff, poly和metal三个layer, 按Alt+a则显示diff面积，点Close显示poly面积，再点Close显示metal面积。  
PS.这只能计算flat的layer面积，不能计算instance的面积。
::: imgCard
```yaml
- img: /public/2013/08/JW_Area.gif
```
:::


```cadence
/*   Synopsis : CL_Area()   */

procedure(CL_Area()   
	prog((cvId selObj area number shape Box points point1 point2 length width ) 
		cvId = getEditRep(hiGetCurrentWindow())   
		selObj = geGetSelSet(cvId)  
		number = length(selObj)   
		if(zerop(number) then   
			CLMessage("Error!!" 'Close "Please select a layer." )   
			return()   
		)  
		geDeselectAll(hiGetCurrentWindow())   
		foreach(shape selObj   
			area = 0   
			case( shape~>objType   
				("rect"   
					Box = shape~>bBox   
					area = (car(cadr(Box)) - car(car(Box))) * (cadr(cadr(Box)) - cadr(car(Box)))   )
				("polygon"   
					number = length(shape~>points)   
					points = shape~>points   
					points = append(points list(car(points)))  
					while(!zerop(number)   
						point1 = car(points)   
						points = cdr(points)   
						point2 = car(points)   
						area = area + ( car(point1) * cadr(point2) )   
						area = area - ( car(point2) * cadr(point1) )   
						number--   
					);while   
					area = abs(area/2)   
				)  
				("path"   
					number = shape~>nPoints   
					points = shape~>path   
					width = shape~>width  
					while(!zerop(number-1)   
						point1 = car(points)   
						points = cdr(points)   
						point2 = car(points)  
						if(equal(car(point1) car(point2))   
							length = abs(cadr(point1) - cadr(point2))   
							length = abs( car(point1) - car(point2))   
						);if   
						area = area + length * width   
						number--   
					);while  
					case(shape~>pathStyle   
						("extendExtend" area = area + width*width )   
						("varExtendExtend" area = area + (shape~>beginExt+shape~>endExt)*width )    
						("roundRound" area = area + 4/9.0 * width * width ) 
						;(w/3^2) * 4   (t );truncateExtend   
					);case   
				)  (
				t   area = 0.0   )   
			);case  
			geSelectObject(shape)   
			if(zerop(area) then   
				CLMessage("Error!!" 'Close "This is not a layer.")   
				sprintf(area "Area = unknown")   
			else   
				sprintf(area "Area = %f" area)   
			)   
			CLMessage("Layer Area" 'Close area)   
			geDeselectFig(shape)   
		);foreach  
	);prog   
);procedure  
;-------------------------------------------------------   
procedure(CLMessage(title button message)   
	prog( ()   
		hiDisplayAppDBox(   
			?name 'CLDBox   
			?dboxBanner title   
			?buttonLayout button   
			?dboxText message   
		)   
	);prog   
);procedure   

hiSetBindKey("Layout" "Alt<Key>a" "CL_Area()")
```



