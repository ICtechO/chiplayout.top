---
date: 2011-09-08 16:50:50
title: Cadence Layout Turbo提取PAD坐标
createTime: 2011-09-08T08:50:50.000Z
permalink: /eda/rrgkg
categories:
  - EDA
tags:
  - pad
  - turbo
  - 坐标
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

今天正在做的这个项目差不多快完成了，PE那边要PAD坐标，提前为封装做准备。一直用用Cadence Tools中的Layout Turbo提取PAD坐标的，顺便记录一下过程。全文是文字说明，没有截图，因为是内网，都懂的。。。 

  1. 打开要提取PAD坐标Layout, 一般会将所有PAD单独做在一个CELL内，不过要用Turbo Tools，和PAD相关的Layer都要flatten。如TOP Metal，PAD(opening)，BUMP(COG)，TOP Metal pin四层
  2. 在Virtuoso Layout Edit界面打点击 Tools选择 Layour Turbo，切换到Turbo Tools工具
  3. 在菜单中点击Options选择Turbo Toolbox...，这时会弹出 Turbo Toolbox Options 窗口，将以下三项选中：Enable Toolbox ■，Use Bindkeys ■，Use Mousekeys ■；在Rules File中选择Browse...，选择pad.rule 文件。如果没有现成的文件，可以点击下面的Rule File Utility...，在弹出的界面进行rule的编辑，很简单的。
  4. 完成上面步骤后点击OK就可以弹出Toolbox_Menu的工具栏了。点INFO(大概在Toolbox_Menu的DONE上面)，就可以弹出Datta Info工具栏，选择最下面的PADINFO，就会出现Turbo Toolbox Pad Information Tool窗口。
  5. 在出现的Turbo Toolbox Pad Information Tool窗口选择Command Mode Pad Info Extract ◆， Bond Pad Texting Layer选择pad label的Layer, 一般是TOP Metal pin Bond Pad Layer 先择BUMP或COG dg Hierarchy Text Depth和Hierarchy Search Depth这两项用默认的0就可以了 Min Pad Dimension 是你的PAD的最小宽度，小于这个值的PAD坐标不会提取，所以一般设置为你要提取的PAD的最小宽度 sort Direction选择顺时针Clockwise或逆时针counter Clockwise，还有几个其它的，没尝试 Pad 1 Coordinate 是要指定一个开始的PAD的坐标，可以点击下面的Select First Pad for Sorting在layout界面用鼠标点标第一个PAD的坐标中心点， Save To file? ■ 选中后可以在 Save File Name这个指定一个结果存储的文件如 ./padInfoFile，
  6. 在完成上面步骤中的所有选项后，点OK，程序就会运行，成功提取的PAD坐标会弹出窗口显示出来，没有成功提取的也会弹出一个信息窗口。至此已经利用Cadence Layout Turbo Tool提取了PAD的坐标
  7. 数据处理。可以将生成的文件导入到Excel表格中，看起来更直观，也可以很快的算出PAD的pitch，用以核对提取出的PAD坐标是否有错位等。。。 具体的方法是新建一个Excel表，依次点击数据-导入外部数据-导入数据选择之前生成的PAD坐标文件，因为文件没有后缀，所以文件类型选择所有文件才会显示。在了出来的导入向导中选择固定宽度，并设定从哪行开始导入，因为Turbo生成的文件前面有一些其它信息。下一步，根据提示划分列，下一步，完成，确定。数据就会导入到Excel表中

用Layout Turbo导出的文件包含： Pad Name, Pad X, Pad Y, Pad Area, Pad Openings X:Y 等信息。 如果过程中有不对或不全面的，还请大家补充    
