---
date: 2020-04-11 17:16:42
title: calibredrv create reference cell
createTime: 2020-04-11T09:16:42.000Z
permalink: /eda/gugug
categories:
  - calibredrv
tags:
  - calibre
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

calibredrv操作gds真的是太方便了，在介绍过了《[calibredrv merge GDS file](https://www.chiplayout.net/calibredrv-merge-gds-file.html)》和《[怎么flatten一个GDS所有层次](https://www.chiplayout.net/2462-2.html)》后，有同学提出了怎么能把另一个新GDS调用到已有的GDS。其实方法有好几种，结果也稍有不同，下面举个常用的例子。

假设我们有个 A.gds, top cell是ATOP, 有了B.gds, top cell是BTOP， 之前说过的merge gds file， 可以把A.gds和B.gds合并，要么 ATOP和BTOP平级，要么 ATOP和BTOP同属一个新top的子cell， 那如何让 BTOP作为ATOP的子cell呢？也就是不改变ATOP的情况下把BTOP调用到ATOP。

其实这在 calibredrv的文档中 $L create cell 介绍时已经给出了现成的例子，如下
```sh  
#Extracts a cell from an existing layout into a new GDS file:
# Load existing layout.
set Llayout [layout create mylayout.gds]
# Create an empty layout.
set Lnew [layout create]
# Create topcell for new layout.
$Lnew create cell TOP
# Copy MyGeom cell to new layout, calling it MyGeomNew. Copies all
# geometry, but not placements.
$Lnew create cell MyGeomNew $Llayout MyGeom
# Place MyGeomNew cell reference in new layout.
$Lnew create ref TOP MyGeomNew 0 0 0 0 1
# Export new layout.
$Lnew gdsout new.gds
```
这是创建了一个新的layout, 新的top为TOP， 并为这个TOP调用已有的mylayout.gds中的mygeomnew cell，最后保存为new.gds

但实际上我们要达到开头说的A和B的目的，还需修改一下这个例子

第一步，打开 A和B的gds， 用 layout create命令
    
```sh    
# Load A.gds.
set layoutA [layout create A.gds]
# Load B.gds.
set layoutB [layout create B.gds]
```
第二步，这时打开的是两个不同cell，所以需要所b.gds中的BTOP copy到a.gds 中
```sh
# Copy BTOP from B.gds to A.gds
$layoutA create cell BTOP $layoutB BTOP
```
第三步，ATOP中调用BTOP, 用到create ref命令
```sh    
#crate reference cell
$layoutA create ref ATOP BTOP 0 0 0 0 1
```
最后用 gdsout命令保存新的gds
```sh  
# Export new layout.
$layoutA gdsout c.gds
```
完整的code如下
```sh
# Load A.gds.
set layoutA [layout create A.gds]
# Load B.gds.
set layoutB [layout create B.gds]
# Copy BTOP from B.gds to A.gds
$layoutA create cell BTOP $layoutB BTOP
#crate reference cell
$layoutA create ref ATOP BTOP 0 0 0 0 1
# Export new layout.
$layoutA gdsout c.gds
```
teriminal下输入
```sh    
alibredrv xxx.txt
```
其实还有个layout import命令可以先把B的gds导入到A,再创建ref  
或者将A.gds和B.gds 合并后再创建ref
