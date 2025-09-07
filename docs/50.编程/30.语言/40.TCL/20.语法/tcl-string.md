---
date: 2023-09-12 14:53:57
title: TCL string
createTime: 2023-09-12T06:53:57.000Z
permalink: /program/5cvnb
categories:
  - TCL
tags:
  - string
  - TCL
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

Tcl 的原始数据类型是字符串，我们常常可以在Tcl找到引用字符串的唯一语言。这些字符串可以包含字母数字字符，数字，布尔值，甚至是二进制数据。 TCL采用16位Unicode字符和字母数字字符，可以包含字母包括非拉丁字符，数字或标点符号。

布尔值，可以表示为1，yes 或 true 为真值和0，no 或 false 为假值。

## 字符串表示

不同于其他语言，在TCL，只有一个字时，不需要包含双引号。示例如下，

```tcl
#!/usr/bin/tclsh
set myVariable hello
puts $myVariable
```

当上述代码被执行时，它会产生以下结果。

```tcl
hello
```    

当要表示多个字符串，我们可以使用双引号或大括号。它如下所示。

```tcl
#!/usr/bin/tclsh

set myVariable "hello world"
puts $myVariable
set myVariable {hello world}
puts $myVariable
```

当上述代码被执行时，它会产生以下结果。

```tcl
hello world
hello world
```

## 字符串转义序列

字符文字可以是一个普通的字符（例如，'x'），转义序列（如“\t'），或通用字符（例如，'\u02C0'）。

Tcl有一些字符，当他们前面加一个反斜杠他们将有特殊的含义，它们被用来表示类似的换行符（\n）或制表符（\t）。在这里，有一些转义序列代码的列表：

转义序列 | 意思
---|---  
\\ | \ 字符
\' | ' 字符
\" | " 字符
\? | ? 字符
\a | 警报或铃
\b | 退格
\f | 换页
\n | 新一行
\r | 回车
\t | 水平制表
\v | 垂直制表

以下为例子来说明一些转义字符序列：

```tcl
#!/usr/bin/tclsh

puts("Hello\tWorld\n\n");
```

让我们编译和运行上面的程序，这将产生以下结果：
```tcl
Hello   World
``` 

## 字符串命令

子命令字符串命令列表列如下表。

SN | 方法及描述
---|---  
1 |  **compare**  string1 string2 比较字string1和string2字典顺序。如果相等返回0，如果string1在string2出现之前返回-1，否则返回1。
2 |  <bfirst< b="">string1 string2</bfirst<> 返回string1中第一次出现string1索引的位置。如果没有找到，返回-1。
3 |  **index**  string index 返回索引的字符。
4 |  **last**  string1 string2 返回索引string1在string2中出现的最后一次。如果没有找到，返回-1。
5 |  **length**  string 返回字符串的长度。
6 |  **match pattern**  string 返回1，如果该字符串匹配模式。
7 |  **range**  string index1 index2 返回指定索引范围内的字符串，index1到index2。
8 |  **tolower**  string 返回小写字符串。
9 |  **toupper**  string 返回大写字符串。
10 |  **trim**  string ?trimcharacters? 删除字符串两端的trimcharacters。默认trimcharacters是空白。
11 |  **trimleft**  string ?trimcharacters? 删除字符串左侧开始的trimcharacters。默认trimcharacters是空白。
12 |  **trimright**  string ?trimcharacters? 删除字符串左端trimcharacters。默认trimcharacters是空白。
13 |  **wordend**  findstring index 返回索引字符findstring包含字符索引单词。
14 |  **wordstart**  findstring index 返回findstring中第一个字符的含有索引中的字符索引的单词。
    

一些常用的Tcl字符串子命令的例子在下面给出。

### 字符串比较

```tcl
#!/usr/bin/tclsh

set s1 "Hello"
set s2 "World"
set s3 "World"
puts [string compare s1 s2]
if {[string compare s2 s3] == 0} {
puts "String \'s1\' and \'s2\' are same."; 
} 

if {[string compare s1 s2] == -1} {
puts "String \'s1\' comes before \'s2\'.";
}

if {[string compare s2 s1] == 1} {
puts "String \'s2\' comes before \'s1\'.";
}
```    

让我们编译和运行上面的程序，这将产生以下结果：

```tcl
-1
String 's1' comes before 's2'.
String 's2' comes before 's1'.
```    

### 字符串索引

```tcl
#!/usr/bin/tclsh
set s1 "Hello World"
set s2 "o"
puts "First occurrence of $s2 in s1"
puts [string first $s2 $s1]
puts "Character at index 0 in s1"
puts [string index $s1 0]
puts "Last occurrence of $s2 in s1"
puts [string last $s2 $s1]
puts "Word end index in s1"
puts [string wordend $s1 20]
puts "Word start index in s1"
puts [string wordstart $s1 20]
```    

让我们编译和运行上面的程序，这将产生以下结果：

```tcl
First occurrence of o in s1
4
Character at index 0 in s1
H
Last occurrence of o in s1
7
Word end index in s1
11
Word start index in s1
6
```   

### 字符串长度

```tcl
#!/usr/bin/tclsh
set s1 "Hello World"
puts "Length of string s1"
puts [string length $s1]
``` 

让我们编译和运行上面的程序，这将产生以下结果：

```tcl
Length of string s1
11
```    

### 处理大小写

```tcl
#!/usr/bin/tclsh
t s1 "Hello World"
puts "Uppercase string of s1"
puts [string toupper $s1]
puts "Lowercase string of s1"
puts [string tolower $s1]
```    

让我们编译和运行上面的程序，这将产生以下结果：

```tcl
Uppercase string of s1
HELLO WORLD
Lowercase string of s1
hello world
```

### 修整字符

```tcl
#!/usr/bin/tclsh
set s1 "Hello World"
set s2 "World"
puts "Trim right $s2 in $s1"
puts [string trimright $s1 $s2]
set s2 "Hello"
puts "Trim left $s2 in $s1"
puts [string trimleft $s1 $s2]
set s1 " Hello World "
set s2 " "
puts "Trim characters s1 on both sides of s2"
puts [string trim $s1 $s2]
```    

让我们编译和运行上面的程序，这将产生以下结果：

```tcl
Trim right World in Hello World
Hello 
Trim left Hello in Hello World
 World
Trim characters s1 on both sides of s2
Hello World
```    

### 匹配字符串

```tcl
#!/usr/bin/tclsh
set s1 "test@test.com"
set s2 "*@*.com"
puts "Matching pattern s2 in s1"
puts [string match "*@*.com" $s1 ]
puts "Matching pattern tcl in s1"
puts [string match {tcl} $s1]
```

让我们编译和运行上面的程序，这将产生以下结果：

```tcl
Matching pattern s2 in s1
1
Matching pattern tcl in s1
0
```

### Append 命令

```tcl
#!/usr/bin/tclsh
set s1 "Hello"
append s1 " World"
puts $s1
```    

让我们编译和运行上面的程序，这将产生以下结果：
```tcl
Hello World
```

### Format 命令

Tcl显示格式format说明如下列表。
指示符 | 使用
---|---  
%s | 字符串表示
%d | 整数表示
%f | 浮点表示
%e | 指数形式浮点表示
%x | 十六进制表示


一些简单下面的例子给出。

```tcl
#!/usr/bin/tclsh
puts [format "%f" 43.5]
puts [format "%e" 43.5]
puts [format "%d %s" 4 tuts]
puts [format "%s" "Tcl Language"]
puts [format "%x" 40]
```

让我们编译和运行上面的程序，这将产生以下结果：

```tcl
43.500000
4.350000e+01
4 tuts
Tcl Language
28
```

## Scan命令

scan命令用于分析基于对格式说明的字符串。一些例子如下所示。

```tcl
#!/usr/bin/tclsh
puts [scan "90" {%[0-9]} m]
puts [scan "abc" {%[a-z]} m]
puts [scan "abc" {%[A-Z]} m]
puts [scan "ABC" {%[A-Z]} m]
```

当上述代码被编译和执行时，它产生了以下结果：

```tcl
1
1
0
1
```