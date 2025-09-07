---
date: 2015-10-27 05:55:59
title: fedora22成功安装ICC
createTime: 2015-10-26T21:55:59.000Z
permalink: /os/pva5o
categories:
  - EDA
tags:
  - fedora22
  - icc
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

ICC安装完成启动时显示 `
:::warning
Fatal: Galaxy-Common+Galaxy-ICC is not enabled. (DCSH-1)
:::
 网上说绝对license问题，制作了好几个发现都不行，后来仔细看了log,说是hostid无法识别， 赶紧用lmhostid查看， hostid为空值。。。， 几经查找， fedora22把网卡命名为了enp7s0, 识别不出了， 好像要改为 eth0, 试以下方法 
 ```sh
 [admin@chiplayout ~]$ dnf install wireless-tools 
 [admin@chiplayout ~]$ vi /etc/iftab eth0 mac aa:bb:cc:dd:ee:ff :wq!
 ``` 
 先停用原来网卡,再进行更名 
 ```sh
 [admin@chiplayout ~]$ ifconfig enp7s0 down 
 [admin@chiplayout ~]$ ifrename -i enp7s0 -n eth0 
 [admin@chiplayout ~]$ ifconfig eth0 up 
 ```
在去启用license， 输入icc_shell -gui, OK 
[![Screenshot from 2015-10-24 00-29-27](/public/2015/10/Screenshot-from-2015-10-24-00-29-27.png)](/public/2015/10/Screenshot-from-2015-10-24-00-29-27.png)
