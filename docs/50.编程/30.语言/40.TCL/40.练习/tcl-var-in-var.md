---
date: 2021-10-14 06:42:56
title: TCL语言中变量嵌套
createTime: 2021-10-13T22:42:56.000Z
permalink: /program/xfjst
categories:
  - program
tags:
  - TCL
coverImg: https://img.onedayxyy.cn/images/TeekCover/12.webp
---

遇到的变量嵌套，可以用eval很好的解决，备忘如下。
    
```tcl
% set var1_value 11111
11111
% set var2_value 22222
22222
% foreach x "var1 var2" {
eval set var_value $${x}_value
puts $var_value
}
11111
22222
``` 