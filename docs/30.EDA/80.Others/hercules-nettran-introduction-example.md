---
date: 2011-07-18 18:38:31
title: Hercules自带子程序 nettran 使用介绍举例
createTime: 2011-07-18T10:38:31.000Z
permalink: /eda/his99
categories:
  - EDA
tags:
  - Hercules
  - nettran
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

CHIP电路网表一般是spice、cdl 格式或是APR产生的 .v(verilog)格式，但是在特定的工具环境下我们需要将他们格式进行相互转换。Hercules自带子程序 **nettran** 就可以可以实现这个功能，为我们提供诸多便利，其功能十分强大，在下面的内容中将对Hercules自带子程序nettran使用及参数进行简单介绍。

  1. **Hercules自带子程序 nettran 使用介绍及举例：命令使用**

nettran [-verilog] [-hercules] [-s p] [-cdl ][-cdl-a] [-sp-fr] [-verilog-b0< netName>] [-verilog-b1] [-equiv < Equiv file > ] [-acct] [-noflatten] [-outType < netlist_Type>] -outName < filename >

  2. **Hercules自带子程序 nettran 使用介绍及举例：参数介绍**

**-verilog** 指读入verilog 网表格式，还支持读入hercules 格式(-hercules)、spice 格式（-sp）、cdl 格式

（-cdl）；

**-cdl-a** 和 **-sp-fr** 可以设置读入cdl 和spice 网表的选项，即全部元件（包含无源器件R,C,L 等）还是放弃读入无源器件（如不读R, 不读C 等）:-cdl-a 是全部读入，-sp-fr 是过滤掉电阻部分；

对verilog 中1’b0, 1’b1 的处理，nettran可以用网络名来取代，如-verilog-b0 VSS –verilog-b1 VDD ；

**-equiv** 参数指转换的时候产生部分Equivalence File （后面要讲的），便于添加其余；

**-acct** 产生统计文件，即这个网表的元件总数的统计；

当spice 网表有参数初始化时，用-noflatten 来传递参数，否则有可能造成计量单位错误；输出类型有spice、 hercules 、edif、verilog、

MilkyWay 格式，缺省是hercules 格式。

  3. **Hercules自带子程序 nettran 使用介绍及举例：应用实例**
- **把cdl 转换成hercules 的格式**
```sh
nettran -cdl pll_risc.cdl -noflatten -ou tName pll_r isc.sch
```
- **把布线后的.v 按照各个单元的网表形成hercules 格式用于LVS**
```sh
nettran -cdl st d.cdl p ad.sp cache_core.sp pll_risc.sp –verilog TOPCELL.hv –verilog-b0 VSS –verilog- b1 VDD –noflatten –outName TOPCELL.sch
```
- **把含有寄生RC 的标准单元网表和.v 合并成总网表，进行仿真**
```sh
nettran -cdl st d.cdl -cdl-a m odule.v -outT ype spice -outName module.sp
```
- **把hercules 格式转换成spice 格式, 并产生统计文件count**
```sh
nettran –hercules T OPCELL.sch -acct count –outT ype spice –outName TOPCELL.sp
```
- **把综合后.v(verilog) 按照标准单元的网表转换成总的spice 网表**

这个比较常，可以在[《利用v2lvs和nettran将.v(verilog)网表转为spice》一文中查看](http://www.chiplayout.net/calibre-v2lvs-command-guide.html "利用v2lvs和nettran将.v\(verilog\)网表转为spice")



