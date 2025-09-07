---
date: 2010-12-21 20:21:25
title: linux下硬盘的编号识别,类似（hd[0-n],y）
createTime: 2010-12-21T12:21:25.000Z
permalink: /os/p9myr
categories:
  - OS
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/17.webp
---

今天晚上在从硬盘安装 fedora 14 时， 遇到要在 menu.lst 文件中写入从安装镜像中解压出来的 initrd.img 和 vmlinuz 这两个文件所在的磁盘，但却不是window的那种，而是用(hd0,x)这样表示的，找了些资料，终于对linux下硬盘的编号表示有个简单了解。  
首先我们用（hd\[0-n\],y）这种格式表示linux下的磁盘编号，那么hd就不用说了，而［0－n］是指的磁盘的主分区和扩展分区，后面的y是逻辑分区。现在拿只一块硬盘且装有XP的磁盘来说，C盘是主分区用（hd0,0）表示, 而后面的其它C盘D盘E盘都属于另一个扩展分区用（hd0,1）表示，而从D盘开始依次是(hd0,4), (hd0,5), (hd0,6)… 比如我今天从硬盘安装 fedora 14时就把镜像文件放在 F盘，我在menu.lst文件中写入的便是

> title Install Fedora 14
> kernel (**hd0,6**)/isolinux/vmlinuz
> initrd (**hd0,6**)/isolinux/initrd.img

一般来说如果没有对硬盘做个特殊改动，就会如上面所说，但有些人在用PartitionManager时可能会对分区做出更改，比如把某个逻辑分区强制为主分区。自己是个菜鸟啊，觉得知道这些应该就可以了，呵呵