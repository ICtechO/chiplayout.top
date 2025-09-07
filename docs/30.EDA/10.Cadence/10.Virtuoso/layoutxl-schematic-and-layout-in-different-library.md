---
date: 2013-08-19 22:22:40
title: layoutXL时电路和版图不同库
createTime: 2013-08-19T14:22:40.000Z
permalink: /eda/5camz
categories:
  - EDA
tags:
  - layoutXL
  - lxUseCell
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

## 问题
在使用layoutXL时，如果电路和版图不在同一个库里，那通过电路导入的layout将是比较乱的，甚至有的只是mos管。
## 方法
处理的办法就是在电路中点要生成layout的cell, 然后按q, 在弹出的Edit Object Properties窗口点add, 出现Add Property窗口，按下面的方法进行设置。 
```sh
Name: lxUseCell 
Type: string 
Value: layout_LIb layout_cell ayout_view 
Choices: 空白 
layout_lib: layout所在的库，即你的pcell所在的库 
layout_cell: layout的名字，即你的pcell的名字 
layout_view: 一般为 layout 一般就是先做底层cell
```
那么如果电路按照上面给每个cell都添加了 lxUseCell的值，那么就可以调出你做的cell了。 
## 补充
除了这种方法，还可以通过写map文件[或dumpcdf修改后再load](http://www.chiplayout.net/using-cdfdumpall.html "使用cdfDumpAll产生和编辑CDF信息")这两种方法，但个人觉得都没上面的简单。
