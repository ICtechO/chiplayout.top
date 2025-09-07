---
date: 2011-08-01 16:01:32
title: 利用nettran将.v/verilog网表转为spice网表
createTime: 2011-08-01T08:01:32.000Z
permalink: /eda/241tv
categories:
  - EDA
tags:
  - nettran
  - spice
  - verilog
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---

## 背景
之前有文章中中已经提到了利用nettran实现多种格式网表之间的转换，下面说一下nettran是如何将 verilog网表转为spice网表的。  

## 用法
```sh
nettran -verilog verilog.v -verilog-b0 GND -verilog-b1 VDD -cdl std_lib.cdl -outType spice -outName spice.spi  
```

## 说明
```sh 
-verilog verilog.v #用来指定输入的verilog文件  
-verilog-b0 GND #将verilog.v文件中的默认地 b0 在要输出的文件中改为GND  
-verilog-b1 VDD #将verilog.v文件中的默认电源 b1 在要输出的文件中改为VDD  
-cdl std_lib.cdl #将verilog.v文件中调用了的标准单元所在的std_lib.cdl 输出到spice.spi中  
-outType spice #指定输出类型为spice格式  
-outName spice.spi #指定输出的spice格式网表的文件名为 spice.spi 
```
> 更多关于 netttan 的使用可查看 [《Hercules自带子程序 nettran 使用介绍举例》 ](http://www.chiplayout.net/use-nettran-verilog-to-spice-netlist.html "Hercules自带子程序 nettran 使用介绍举例")
