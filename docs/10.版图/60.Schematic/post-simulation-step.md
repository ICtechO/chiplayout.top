---
date: 2010-11-23 08:52:19
title: 后仿模拟步骤
createTime: 2010-11-23T00:52:19.000Z
permalink: /Layout/66zc1
categories:
  - Schematic
tags:
  - post simulation
  - 后仿
coverImg: https://img.onedayxyy.cn/images/TeekCover/18.webp
---

后模拟是在Layout通过了DRC和LVS后才开始做的，通过模拟提取出来的网表可以精确的评估电路的速度，以及寄生参数带来的影响。后模拟的结果如果不能满足要求，那么就要重新调整器件参数甚至电路的形式。当然得到满意的后模拟结果也并不能确保最后芯片的结果。 

例子： 
1． 创建一个Schematic文件，如Inv。 注意：添加元器件的时候要选用带CDF参数，必须还要有ivpcell view. 如果没有现成的库，要自己建立。如果CDF中的model参数确定下来，要把它设为默认植。 
2． 在Schematic完成后生成Inv的symbol view。 
3． 调用上面生成的symbol，建立另外新的模拟用Schematic，Test-Inv。调用Analog Artist并模拟这个线路。 
4． 创建Inv Schematic的版图文件。 
5． 进行DRC检查。 
6． 进行版图提取Extractor。（寄生参数在这里提取），具体的文件写法参见DIVA介绍。 
7． 做LVS。 
8． 在Analog Artist中，重新设置，进行后模拟。 

前面的步骤应该都已经熟悉，下面介绍Analog Artist的设置。 在Setup菜单中选Environment项。 一个对话框会弹出来，如下，在这个对话框中可以控制Analog Artist很多参数。 我们要改变的是Switch View List这一行，这一行表示的是模拟器要模拟的文件类型。默认的设置里面没有Extracted这个文件类型，要把它加进去。 在Schematic的前面加进extracted然后OK即可。这时不管做何种类型的模拟，先会寻找有无extracted文件。
