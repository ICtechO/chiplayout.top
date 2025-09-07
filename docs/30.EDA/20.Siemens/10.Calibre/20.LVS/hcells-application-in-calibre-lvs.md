---
date: 2011-08-06 23:08:00
title: 简单提一下calibre-LVS中hcells的应用
createTime: 2011-08-06T15:08:00.000Z
permalink: /eda/6158b
categories:
  - EDA
tags:
  - calibre
  - hcells
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

## 背景
在做大屏LCD Driver的chip layout TOP层验证时，因为SRAM和APR部分layout(版图) 太过于复杂，而电脑配置如果有限，**calibre LVS** 运行到一半时就会因为内存不足而中断，无法继续。因此需要用到**hcells** ，他可以简化schematic和layout的层次，有效的提高calibre的性能，同时也会缩短LVS所需要的时间。 
## 简介
_hcell_ 英文意思是 _hierarchically corresponding cell，_ 我把它翻译为 _层次化对应的单元_ 。 在一般情况下，在layout(版图)和source中相对应的hcell列表应该是比较简单的，且这些cell在层次化的结构中出现了很多次。一个详细的hcell列表是没用必要的，往往适得其反。这是因为在Calibre LVS时层次化的单元会被选择性的打散以提高性能，而密集的单元会影响calibre的性能。在hcell列表中的cells则不会被打平。指定某些像通孔（via）或其它一些小的单元也会阻碍calibre LVS的性能。 在calibre LVS hcells中，layout(版图) cell name和相对应的source cell name可能是一样的，也可能不同。可以指定一对多的关系，即一个layout(版图) cell name对应多个不同的source cell name。当然也可以指定多对一的关系，即一个source cell name对应多个layout(版图) cell name。但是多对多的关系是不被允许的。 
## 举例
1. 下面举个例子说明一下 hcells 文件的格式 
```sh
//layout source ABC DEF ABC GHI ABC JKL UVW XYZ RST XYZ OPQ XYZ UVW GHI OPQ DEF
```
2. 一对多的例子：同一layout cell name 对应不同的source cell name 
 ```sh
 //layout source ABC DEF ABC GHI ABC JKL
```
3. 多对一的例子:不同的layout cell name 对应不同的 source cell name 
```sh
//layout source UVW XYZ RST XYZ OPQ XYZ
```
4. 当然，多对多不允许的例子也来一个
```sh
//layout source UVW XYZ RST XYZ OPQ XYZ OPQ GHI
```
这种会提示 
:::tips
error. OPQ mapped previously to XYZ 
which is mapped to three different names.
:::

## 使用
 说了这么些，具体怎么使用用呢？ 先打开calibre Interactive –LVS 界面，点左面的 Inpus，选择 **H-cells** (netlist的右边)选项卡，在**Use H-Cells file** 前面打钩，如果有已经写好的hcell.txt文件，就点后面的 **…** 选择事先写好的上hcell文件;如果没有的画，在那里输入你想要的hcell文件的名字，如hcell.txt，点后面的view，会提示你文件不存在是否创建，点是，就可以打开一个编辑界面，进行hcells的编写。Calibre LVS其它的设置和使用和平时一样.
