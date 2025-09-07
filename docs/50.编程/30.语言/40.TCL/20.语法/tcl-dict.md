---
date: 2023-09-22 06:02:12
title: TCL字典dict
createTime: 2023-09-21T22:02:12.000Z
permalink: /program/wtm86
categories:
  - TCL
tags:
  - dict
  - TCL
coverImg: https://img.onedayxyy.cn/images/TeekCover/2.webp
---

词典是用于值映射到键的布置。常规字典的语法如下所示。

```tcl
dict set dictname key value
# or 
dict create dictname key1 value1 key2 value2 .. keyn valuen
```   


用于创建字典的一些例子如下所示。

```tcl
#!/usr/bin/tclsh

dict set colours  colour1 red 
puts $colours
dict set colours  colour2 green
puts $colours

set colours [dict create colour1 "black" colour2 "white"]
puts $colours
```

当执行上面的代码，产生以下结果：

```tcl
colour1 red
colour1 red colour2 green
colour1 black colour2 white
```

## 字典的大小

用于获取字典的大小语法如下所示。

```tcl
[dict size dictname]
```

用于打印的尺寸一个例子如下所示。

```tcl
#!/usr/bin/tclsh

set colours [dict create colour1 "black" colour2 "white"]
puts [dict size $colours]
```

当执行上面的代码，产生以下结果：

```tcl
2
```

## 字典迭代

打印键和字典的值一个简单的字典迭代如下图所示。

```tcl
#!/usr/bin/tclsh
set colours [dict create colour1 "black" colour2 "white"]
foreach item [dict keys $colours] {
	set value [dict get $colours $item]
	puts $value
}
```


当执行上面的代码，产生以下结果：

```tcl
black
white
```

## 字典的键值

字典键检索值的语法如下所示。

```tcl
[dict get $dictname $keyname]
```

用于键检索值的示例如下面给出。

```tcl
#!/usr/bin/tclsh
set colours [dict create colour1 "black" colour2 "white"]
set value [dict get $colours colour1]
puts $value
```

当执行上面的代码，产生以下结果：

```tcl
black
```

## 字典中的所有键

用于检索在字典的所有键的语法如下所示。

```tcl
[dict keys $dictname]
```

用于打印所有的键一个例子如下所示。

```tcl
#!/usr/bin/tclsh
set colours [dict create colour1 "black" colour2 "white"]
set keys [dict keys $colours]
puts $keys
```

当执行上面的代码，产生以下结果：

```tcl
colour1 colour2
```

## 字典中的所有值

用于检索在字典中的所有值的语法如下所示。

```tcl
[dict values $dictname]
```

用于打印的所有值一个例子如下所示。

```tcl
#!/usr/bin/tclsh
set colours [dict create colour1 "black" colour2 "white"]
set values [dict values $colours]
puts $values
```

当执行上面的代码，产生以下结果：

```tcl
black white
```

## 关键存在于字典

检查一个键是否存在于字典的语法如下所示。

```tcl
[dict values $dictname]
```

用于检查一个键是否存在于字典的一个例子如下所示。

```tcl
#!/usr/bin/tclsh
set colours [dict create colour1 "black" colour2 "white"]
set result [dict exists $colours colour1]
puts $result
```

当执行上面的代码，产生以下结果：

```tcl
1
```
