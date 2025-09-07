---
date: 2023-09-19 05:13:26
title: TCL list
createTime: 2023-09-18T21:13:26.000Z
permalink: /program/kimjr
categories:
  - TCL
tags:
  - list
  - TCL
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---

列表是Tcl的基本可用数据类型之一。它是用于表示项目的有序集合。它可以包括不同类型的在同一列表的项目。此外，一个列表可以包含另一个列表。

需要注意的一个重要的事情是，列表表示为完全串并处理在需要时，形成的各个项目。所以要避免大的列表，在这种情况下，可使用数组代替。

## 创建一个列表

列表的一般语法如下。
```tcl
set listName { item1 item2 item3 .. itemn }
# or
set listName [list item1 item2 item3]
# or 
set listName [split "items separated by a character" split_character]
```    


一些例子如下面给出。

```tcl
#!/usr/bin/tclsh

set colorList1 {red green blue}
set colorList2 [list red green blue]
set colorList3 [split "red_green_blue" _]
puts $colorList1
puts $colorList2
puts $colorList3
```


当上述代码被执行时，它会产生以下结果。

```tcl
red green blue
red green blue
red green blue
```

## 追加项目到列表

追加项目到列表的语法如下。

```tcl
append listName split_character value
# or
lappend listName value
```


一些例子如下面给出。

```tcl
#!/usr/bin/tclsh

set var orange
append var " " "blue"
lappend var "red" 
lappend var "green" 
puts $var
```

当上述代码被执行时，它会产生以下结果。

```tcl
orange blue red green
```

## 列表长度

列表长度的语法如下。

```tcl
llength listName
```

例如，列表长度如下例所示。

```tcl
#!/usr/bin/tclsh

set var {orange blue red green}
puts [llength $var] 
```

当执行上面的代码，产生以下结果：

```tcl
4
```

## 列表索引项

用于选择在指定索引的列表项如下。

```tcl
lindex listname index
```

例如，列表索引项目如下所示。

```tcl
#!/usr/bin/tclsh

set var {orange blue red green}
puts [lindex $var  1]
```

当执行上面的代码，产生以下结果：

```tcl
blue
```

## 插入索引项目

在列表特定索引插入项目的语法如下。

```tcl
linsert listname index value1 value2..valuen
```


例如，在列表特定的索引插入项目如下。

```tcl
#!/usr/bin/tclsh

set var {orange blue red green}
set var [linsert  $var 3 black white]
puts $var
```

当执行上面的代码，产生以下结果：

```tcl
orange blue red black white green
```

## 更换项目索引

用于替换列表项以特定索引的语法如下。

```tcl
lreplace listname firstindex lastindex value1 value2..valuen
```

例如用于替换列表项以特定的索引如下。

```tcl
#!/usr/bin/tclsh

set var {orange blue red green}
set var [lreplace $var 2 3 black white]
puts $var
```

当执行上面的代码，产生以下结果：

```tcl
orange blue black white
```

## 设置指数项目

用于设置列表项在特定索引下面的语法给出。

```tcl
lset listname index value 
```

例如设置列表项的索引具体如下。

```tcl
#!/usr/bin/tclsh

set var {orange blue red green}
lset var 0 black 
puts $var
```

当执行上面的代码，产生以下结果：

```tcl
black blue red green
```

## 转换列表变量

复制值到变量的语法如下。

```tcl
lassign listname variable1 variable2.. variablen
```

例如，用于将列表到变量如下。

```tcl
#!/usr/bin/tclsh

set var {orange blue red green}
lassign $var colour1 colour2
puts $colour1
puts $colour2
```

当执行上面的代码，产生以下结果：

```tcl
orange
blue
```

## 排序列表

排序列表的语法如下。

```tcl
lsort listname
```

进行列表的排序如下例子。

```tcl
#!/usr/bin/tclsh

set var {orange blue red green}
set var [lsort $var]
puts $var
```

当执行上面的代码，产生以下结果：

```tcl
blue green orange red
```