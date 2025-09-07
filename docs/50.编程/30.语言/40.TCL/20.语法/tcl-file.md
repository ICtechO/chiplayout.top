---
date: 2023-09-22 06:21:19
title: TCL文件操作file
createTime: 2023-09-21T22:21:19.000Z
permalink: /program/9grbg
categories:
  - TCL
tags:
  - dirname
  - glob
  - join
  - split
  - tail
  - TCL
coverImg: https://img.onedayxyy.cn/images/TeekCover/17.webp
---

## file命令

file命令用于获取文件的属性

**命令**| **解释**  
---|---  
**file dirname**|  返回文件的**目录部分**  
**file tail**|  返回文件的**文件名部分**  
**file extension**|  返回文件的**扩展名部分**  
**file nativename**|  返回**原生格式** 的文件名  
**file rootname**|  返回**除扩展名之外** 的部分  
**file split**|  返回**分割后的字符串** 部分  
**file join**|  file split 的**逆操作**  
  
## 管理当前工作目录和内容

**命令**| **解释**  
---|---  
**pwd**| **返回当前工作目录的 绝对路径**  
**cd**| **切换到 参数指定的目录**  
**glob**| **获取 当前工作目录下的内容**  
  
## 复制和重命名操作

**命令**| **解释**  
---|---  
**file copy**| **复制操作**  
**file rename**| **重命名操作**  
  
## 获取文件信息

**命令**| **解释**  
---|---  
**file exists**| **当前文件或目录是否存在**  
**file isfile**| **判断指定内容是否为文件**  
**file isdirectory**| **判断指定内容是否为目录**  
**file type**| **返回指定内容的类型**  
**file readable**| **判断是否有可读权限**  
**file writable**| **判断是否有可写权限**  
**file executable**| **判断是否有可执行权限**
