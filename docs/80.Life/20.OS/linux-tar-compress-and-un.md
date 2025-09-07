---
date: 2020-10-01 07:09:18
title: linux系统常见压缩与解压
createTime: 2020-09-30T23:09:18.000Z
permalink: /os/tmi36
categories:
  - OS
tags:
  - tar
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---


## tar 介绍

|1|-c: 建立压缩档案   |
|---|---|
|2|-x：解压   |
|3|-t：查看内容   |
|4|-r：向压缩归档文件末尾追加文件   |
|5|-u：更新原压缩包中的文件   这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。   |
|6|-z：有gzip属性的   |
|7|-j：有bz2属性的   |
|8|-Z：有compress属性的   |
|9|-v：显示所有过程   |
|10|-O：将文件解开到标准输出   |
|11|-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。

## .tar 格式的压缩与解压

## 压缩为.tar 格式

| 1 | tar -cvf top.gds.tar top.gds |
| --- | --- |

## 解压.tar 格式

| 1 | tar -xvf top.gds.tar |
| --- | --- |

## .tar.gz 格式的压缩与解压

## 压缩为.tar.gz 格式

| 1 | tar -czvf top.gds.tar.gz top.gds |
| --- | --- |

## 解压.tar.gz 格式

| 1 | tar -xzvf top.gds.tar.gz |
| --- | --- |

## .tar.bz2 格式的压缩与解压

## 压缩为.tar.bz2 格式

| 1 | tar -cjvf top.gds.tar.bz2 top.gds |
| --- | --- |

## 解压.tar.bz2 格式

| 1 | tar -xjvf top.gds.tar.bz2 |
| --- | --- |

## .tar.Z 格式的压缩与解压

## 压缩为.tar.Z 格式

| 1 | tar -cZvf top.gds.tar.Z top.gds |
| --- | --- |

## 解压.tar.Z 格式

| 1 | tar -xZvf top.gds.tar.Z |
| --- | --- |

## .rar 格式的压缩与解压

## 压缩为.rar 格式

| 1 | rar a tip.gds.rar top.gds |
| --- | --- |

## 解压.rar 格式

| 1 | unrar e tar.gds.rar |
| --- | --- |

## .zip 格式的压缩与解压

## 压缩为.zip 格式

| 1 | zip top.gds.zip top.gds |
| --- | --- |

## 解压.zip 格式

| 1 | unzip top.gds.zip |
| --- | --- |