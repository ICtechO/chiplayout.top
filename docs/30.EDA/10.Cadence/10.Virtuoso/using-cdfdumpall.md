---
date: 2012-08-22 00:21:01
title: 使用cdfDumpAll产生和编辑CDF信息
createTime: 2012-08-21T16:21:01.000Z
permalink: /eda/ekg6y
categories:
  - EDA
tags:
  - cdfDumpAll
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---

## about
关于cdfDumpAll，它的作用就是能够产生一个ASCII文件，其内容包括了library下每个cell的parameters, simulator information和properties。通过编辑这个文件就可以改变cell参数，这比在图形化的界面进入各个cell要方便好多，当然前提是你对使用文本的兴趣大于使用界面。 

## **Dumping整个library的CDF:**

创建和编辑已存在library的所有CDF信息的ASCII文件:

  - 在cadence的CIW窗口按照skill语言格式输入一下命令 
  ```sh
  cdfDumpAll(＂libName＂ ＂fileName＂ ?edit t）
  ```
  - CDF文件会窗口打开，这时可以更改library下的每个cell的信息，有时候可能要添加新的CDF参数
  - 用下面的命令在CIW窗口load这个文件 
  ```sh 
  load "fileName"
  ```



> 更改library的数据操作需要有library的读写权限

=======================================分割线========================================= 

## **Dumping某个cell的CDF：**

创建和修改单个cell所有CDF信息的ASCII文件:

  - 在cadence的CIW窗口按照skill语言格式输入一下命令: 
  ```sh
  cdfDump("libName" "fileName" ?cellName "cellName" ?edit t）
  ```
  - CDF文件会窗口打开，这时可以更改library下当前cell的信息，有时候可能要添加新的CDF参数
  - 用下面的命令在CIW窗口load这个文件: 
  ```sh
  load "fileName"
  ```
> 更改library的数据操作需要有library的读写权限
