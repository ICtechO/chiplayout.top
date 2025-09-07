---
date: 2023-09-20 06:05:40
title: TCL文件I/O
createTime: 2023-09-19T22:05:40.000Z
permalink: /program/zoyl5
categories:
  - TCL
tags:
  - close
  - gets
  - OPEN
  - puts
  - read
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

TCL支持文件处理使用内置命令，如：open, read, puts, gets 和 close.

一个文件代表了一个字节序列，不要紧，如果它是一个文本文件或二进制文件。

## 打开文件

TCL使用open命令在Tcl中打开文件。打开文件的语法如下。

```tcl
open fileName accessMode
```    


在这里，文件名是字符串文字，用它来命名文件名，accessMode可以是以下值之一：

模式 | 描述  
---|---  
r | 打开一个现有的文本文件读取并且文件必须存在。这是没有指定accessMode时使用的默认模式。  
w | 打开用于写入的文本文件中、，如果它不存在，则一个新文件创建，其他现有的文件将被截断。  
a | 打开写在追加模式，文件必须存在一个文本文件。在这里，程序将开始追加到现有的文件内容的内容。  
r+ | 打开用于读取和写入两种的文本文件。文件必须已经存在。  
w+ | 打开用于读取和写入两种的文本文件。如果它存在首先截断文件为零长度，否则创建该文件，如果它不存在。  
a+ | 打开用于读取和写入两种的文本文件。它，如果它不存在，创建该文件。读数将从头开始，但写只能追加。  
  
## 关闭文件

要关闭一个文件，请使用close命令。close 的语法如下。

```tcl
close fileName 
```

当程序完成使用该文件已被打开的一个程序中的任何文件都必须关闭。在大多数情况下，文件不需要被明确地关闭;它们会自动关闭，当文件对象会自动终止。

## 写入文件

puts命令用于写入一个打开的文件。

```tcl
puts $filename "text to write"
```

一个简单写入文件的例子如下所示。

```tcl
#!/usr/bin/tclsh

set fp [open "input.txt" w+]
puts $fp "test"
close $fp
```

当上述代码被编译和执行时，它创建根据目录的新文件input.txt（在该程序的工作目录）。

## 读取文件

以下是简单从文件中读取的命令：

```tcl
set file_data [read $fp]
```

读与写一个完整的例子如下所示。

```tcl
#!/usr/bin/tclsh

set fp [open "input.txt" w+]
puts $fp "test"
close $fp
set fp [open "input.txt" r]
set file_data [read $fp]
puts $file_data
close $fp
```

当上述代码被编译和执行时，它读取在前面的部分创建的文件，并且产生以下结果：

```tcl
test
```

下面是另一个例子读取文件，文件一行一行直到结束。

```tcl
#!/usr/bin/tclsh

set fp [open "input.txt" w+]
puts $fp "test\ntest"
close $fp
set fp [open "input.txt" r]

while { [gets $fp data] >= 0 } {
   puts $data
}
close $fp
```

当上述代码被编译和执行时，它读取在前面的部分来创建的文件，并且产生以下结果：

```tcl
test
test
```
