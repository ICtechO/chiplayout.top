---
date: 2022-12-07 01:21:46
title: tcl/tclsh文件IO
createTime: 2022-12-06T17:21:46.000Z
permalink: /program/sar75
categories:
  - program
tags:
  - close
  - gets
  - OPEN
  - puts
  - read
  - TCL
  - TCLSH
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---

将文件输出到文件
    
```tcl
#!/usr/bin/tclsh
set ofp [open "input.txt" w+]
puts $ofp "test"
close $ofp
```    
    

从文件中整体读取
    
```tcl
#!/usr/bin/tclsh
set ifp [open "input.txt" r]
set all_line [read $ifp]
puts $all_line
close $ifp
```    
    

从文件件中逐行读取
    
    
```tcl
#!/usr/bin/tclsh
set ifp [open "input.txt" r]
while { [gets $ifp line] >= 0 } {
   puts $line
}
close $ifp
```    
    

文件打开时可选模式

模式|  描述  
---|---  
r|  打开一个现有的文本文件读取并且文件必须存在。这是没有指定accessMode时使用的默认模式。  
w|  打开用于写入的文本文件中、，如果它不存在，则一个新文件创建，其他现有的文件将被截断。  
a|  打开写在追加模式，文件必须存在一个文本文件。在这里，程序将开始追加到现有的文件内容的内容。  
r+|  打开用于读取和写入两种的文本文件。文件必须已经存在。  
w+|  打开用于读取和写入两种的文本文件。如果它存在首先截断文件为零长度，否则创建该文件，如果它不存在。  
a+|  打开用于读取和写入两种的文本文件。它，如果它不存在，创建该文件。读数将从头开始，但写只能追加。
