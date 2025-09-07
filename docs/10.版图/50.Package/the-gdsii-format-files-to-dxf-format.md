---
date: 2011-09-02 15:59:54
title: 将GDSII格式文件转为DXF格式
createTime: 2011-09-02T07:59:54.000Z
permalink: /Layout/ff7a4
categories:
  - Package
tags:
  - dxf
  - gds
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

前几天有个芯片要封装(package)，PE那边要一份芯片PAD图形，但要是AutoCAD可读的DXF格式，而不是送GDSII给他们。问了一下公司的老员工说以前就是GDS或是用office visio对着layout(版图)描的，不知道怎么把GDSII格式转为DXF格式。。。 汗了一下在网上看到说是用LinkCAD可以进行GDS TO DXF的转换，也找不到下载的地方，好不容易到到某某论坛，可惜要高昂的金币才能下载完LinkCAD，所以没有软件，也不知道如何操作。最后找英文的，终于有个在Windows下用ASM 3500将 GDSII转成DXF的文章，大概操作步骤分享一下。

![asm3500_flow](/public/219269578adf_12078/asm3500_flow.gif) ![gds2dxfw_gdsii](/public/219269578adf_12078/gds2dxfw_gdsii.gif) 

其实看过程都挺简单的就是个GDSII到DXF的转换，比如我们要将 demo.gds转为demo.dxf。
GDSII文件由诸如polygons, path with width, cells, text和layers等信息组成，我们就是要将这些信息转为DXF，并保持相同的层次（hierarchy），相同的层（layer）/单元名称（cell name）。用户可以控制sacle和output layer name等参数，也可以选择默认。 
## 第一步 打开GDSII文件 
![gds2dxfw_main](/public/219269578adf_12078/gds2dxfw_main.gif) 
启用GDS2DXF工具，并打开想要转换为DXF格式的GDSII文件，如demo.gds . 
## 第二步 配置转换 
![gds2dxfw_config](/public/219269578adf_12078/gds2dxfw_config.gif) 
从主菜单中单击“Configuration”打开配置窗口，选择“Translation Setting”选项卡，可以直接点OK确认，但如果你在GDSII文件有更多的layer and points, 需要分别将默认的64 layer和200 points值改的更大些。 
Scale Divisor 为1就是GDS的图形被按1:1的比例转换为DXF，如果将值设置为2000，即将2000um转为1英寸。 建议使用Circle Mapping，当程序检测到一个polygon像circle时就会在DXF文件中把这个polygon转换为一个circle。 点击OK，保存设置 
## 第三步 选择要转换的层 
![gds2dxfw_layers](/public/219269578adf_12078/gds2dxfw_layers.gif) 
从主菜单点击“Layers”按钮，就会出现 Layers Setting 的窗口，确认你想要转换的层被选中，如果有必要还可以在 DXF Layer Name 中填写 layer name。 完成后点击OK保存。 
## 第四步 开如GDSII TO DXF转换 
在主菜单上点击“Translate”按钮开始转换。 
## 第五步 查看结果 
经过转换，DXF格式的文件 demo.dxf已被创建，可以启动 AutoCAD并load demo.dxf文件进行查看。 
![gds2dxfw_dxf](/public/219269578adf_12078/gds2dxfw_dxf.gif)  
ASM 3500 下载页面 http://www.artwork.com/gdsii/asm3500/
