---
date: 2015-04-20 15:29:00
title: calibre lvs中的 LVS BOX
createTime: 2015-04-20T07:29:00.000Z
permalink: /eda/66s6z
categories:
  - EDA
tags:
  - BOX
  - calibre
  - DRC
  - LVS
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---

[![mentorgraphics](/public/m_12C81/mentorgraphics_thumb.gif)](/public/m_12C81/mentorgraphics.gif) 在calibre LVS时, 当电路的某个cell只有PIN没有device时, 可以使用LVS BOX 格式: 

> **LVS BOX** [SOURCE LAYOUT | SOURCE | LAYOUT] _cell [cell …]_

参数: 
```sh
> SOURCE LAYOUT | SOURCE | LAYOUT 
#SOURCE — 声明电路 
#LAYOUT — 声明版图 
#cell 要BOX的cell name
```
举例: 
```sh
> LVS BOX lay_name sch_name (推荐)
```
或
```sh
> LVS BOX LAYOUT lay_name LVS BOX SOURCE sch_name
```
用法： 

> 可以在 LVS RULE中写入命令，也可以打开calibre LVS界面选择Calibre LVS Options, 点include选项，勾选include SVRF commands, 在下面的空白处填入．

好多人都记不住版图在前还是电路在前, 最好记住的方法是: 做为版图工程师, 版图最重要, 所以在前面. 你也可能会用到 EXCLUE CELL, 可以查看 [Calibre LVS EXCLUDE command](http://www.chiplayout.net/calibre-lvs-exclude-command.html)
