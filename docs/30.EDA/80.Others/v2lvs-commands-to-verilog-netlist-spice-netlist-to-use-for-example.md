---
date: 2011-08-14 16:20:44
title: v2lvs命令将verilog网表转为spice网表使用举例
createTime: 2011-08-14T08:20:44.000Z
permalink: /eda/szlcm
categories:
  - EDA
tags:
  - spice
  - v2lvs
  - verilog
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

在[《calibre自带v2lvs命令使用指南》](http://www.chiplayout.net/v2lvs-commands-to-verilog-netlist-spice-netlist-to-use-for-example.html "calibre自带v2lvs命令使用指南")介绍了calibre v2lvs命令的参数及其作用，这篇主要对其如何将verilog网表转为spice网表进行举例说明。

  1. verilog网表转为spice网表,最基本的 
```sh
v2lvs -v verilog.v -o spice.spi
```

  2. verilog网表转为spice网表，并将需要附加的.verilog库转换到输出的spice.spi网表中 
```sh
v2lvs -v verilog.v -l other_lib.v -o spice.spi
```

  3. verilog网表转为spice网表，并将需要附加的.spice库 include 到生成的spice.spi网表中 
```sh
v2lvs -v verilog.v -s other_lib.spi -o spice.spi
```

  4. verilog网表转为spice网表，并将verilog中的地 s0、s1 分别改名为 GND和VDD 
```sh
v2lvs -v verilog_file -s0 GND -s1 VDD -o spice_file
```

  5. verilog网表转为spice网表,大综合 
```sh
v2lvs -v verilog.v -l other_lib.v -s other_lib.spi -s0 GND -s1 VDD -o spice.spi
```
 或者有更多的.verilog和.spice库需要以spice.spi中输出，可以使用多个-l和-s参数

以上只是个人使用中的一些小结，如有不正确和不全面之处希望大家留言补充。
