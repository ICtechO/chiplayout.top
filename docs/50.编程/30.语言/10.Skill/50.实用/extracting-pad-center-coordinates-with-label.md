---
date: 2013-12-18 06:01:01
title: 抽取PAD中心坐标与Label
createTime: 2013-12-17T22:01:01.000Z
permalink: /skill/a58nu
categories:
  - program
tags:
  - label
  - PAD中心坐标
coverImg: https://img.onedayxyy.cn/images/TeekCover/5.webp
---

```cadence
procedure(pad_center()
	let((cv cvsel out shp shape padarea padcenter textName layerName xtext ytext xpad ypad)
		cv=geGetEditCellView()
		filename=strcat(cv~>cellName ".txt")
		out=outfile(filename)
		all_pad_layer = setof( tmp cv~>shapes tmp~>lpp==list("CB" "drawing")
		all_pad_label = setof( tmp cv~>shapes tmp~>lpp==list("CB" "label"&&tmp~>objType=="label")

		foreach(shp all_pad
			padarea = shp~>bBox
			padcenter = hiBoxCenter(shp~>bBox)
			xpad = car(padcenter)
			ypad = cadr(padcenter)
			padarea_x1 = xCoord(xCoord(padarea))
			padarea_y1 = yCoord(xCoord(padarea))
			padarea_x2 = xCoord(yCoord(padarea))
			padarea_y2 = yCoord(yCoord(padarea))
			i=1
			foreach(label all_pad_label
				xtext = xCoord(label~>xy)
				ytext = yCoord(label~>xy)
				when(xtext>padarea_x1&&
					xtext<padarea_x2&&
					ytext>padarea_y1&&
					ytext<padarea_y2
					textName = shape~>theLabel
					xpad=float(xpad)
					ypad=float(ypad)
					fprintf(out "%d\t%s\t%f\t%f\t\n" i textName xpad ypad)
					i++
				)	
			); foreach
		);foreach
		close(out)
	);
);
hiSetBindkey("Layout" "j" "pad_center()")
```

基本思想是：首先要flatten layout, 让CB,labe浮在顶层  
将所有的PAD做成一个CELL，Label也全加上，打散全部，从PAD的某个相关层，抽取其中心坐标，如“CB”之类，首先取当前CELL所有的shapes,进行判断，是否是"CB"且是"drawing",如果是则进行取其bBOX的值,这是一个区域，不管是什么形状的，其bBox都是一个表示矩形的左下、右上坐标的一个list。然后这个值可以通过hiBoxCenter来计算中心，然后输出其X与Y的值.然后利用padarea 这个list，用geSelectArea，去选择这个区域内的所有东西，这样进行所选形状遍历就可以选到Label，若是你的Label标的出了这个框就选不到了，选不到的当然是不规范的Label了。接下来就可取到Label的名字、层次、层次类型、X坐标、Y坐标，然后就可以输出了。

这也有许多可改进的地方，如：某个PAD没有Label或者是用其它不合适的层打的Label，可以进行输出警告（这个在检查BUMP的时候比较有用）。还有应用就是比较Label的XY是否与PAD的中心是一样的，这个要求有点变态，但对出LEF有好处。还有就是做一个图形界面。去选识别层，就不用修改程序了，变得更通用些吧！

大家可以发挥一下，其实可以不做CELL，也不用打散，直接在原来的总图cellview里，去遍历所有的CELL，一层一层往下找（当然限定一下找的范围会快很多，比如：Ins == ”*PAD*“），然后将取得的list传给geSelectArea，去选当前的Label，然后一起输出。

呵呵，我仅在这里抛砖欢迎大家拍玉~~~~~~~~~
