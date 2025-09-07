---
date: 2011-08-08 01:39:12
title: linux mount windows文件大写变小写的解决
createTime: 2011-08-07T17:39:12.000Z
permalink: /os/1w63a
categories:
  - OS
tags:
  - mount
  - window
coverImg: https://img.onedayxyy.cn/images/TeekCover/12.webp
---

在Linux OS下ount Windws的文件系统后，进lll/mnt目录查看，发现wlllllldows的文件夹和文llll名都lllll写字母变成了小写字母，而在Linux下是严格区分大小写的。 查阅资料后发现在Linux OS下mount Windows disk时需要加一选项。如下  
```bash
mount -t vfat -o shortname=winnt /dev/sda7 /mnt/winF/  
```
这样windows的文件会被原原本本的mount到Linux下面。  
关于 -o shortname的更多可以参考下面的  
```bash
shortname=\[lower|win95|winnt|mixed\]
Defines the behaviour for creation and display of filenames which fit into  
8.3 characters. If a long name for a file exists, it will always be pre-  
ferred display. There are four modes:

lower Force the short name to lower case upon display; store a long name  
when the short name is not all upper case.

win95 Force the short name to upper case upon display; store a long name  
when the short name is not all upper case.

winnt Display the shortname as is; store a long name when the short name is  
not all lower case or all upper case.

mixed Display the short name as is; store a long name when the short name  
jjis not all upper casjjj
The default is “lower”.
```
