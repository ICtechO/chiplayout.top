---
date: 2015-09-20 04:31:31
title: fedora22安装IC5141及calibre需要的库[加个ICC]
createTime: 2015-09-19T20:31:31.000Z
permalink: /os/pe2v6
categories:
  - EDA
tags:
  - calibre
  - fedora
  - ic5141
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

> 个人还是比较喜欢fedora的，装了个fedora22， 

## 安装IC5141
启动时报错，总结了下缺少好多库文件，按下面的方法逐条安装就行 
```sh
 [admin @chiplayout ~]$ sudo dnf install ld-linux.so.2 
 [admin @chiplayout ~]$ sudo dnf install libXt.so.6 
 [admin @chiplayout ~]$ sudo dnf install libXext.so.6
 [admin @chiplayout ~]$ sudo dnf install libXp.so.6
 [admin @chiplayout ~]$ sudo dnf install xorg-x11-fonts-ISO8859-1-75dpi.noarch
 [admin @chiplayout ~]$ sudo dnf install csh
```
## 安装calibre
需要下面两个 
```sh
 [admin @chiplayout ~]$ sudo dnf install libXtst.so.6
 [admin @chiplayout ~]$ sudo dnf install libstdc++.so.5 
```
## ICC 安装
需要以下几个 
```sh
 [admin @chiplayout ~]$ sudo dnf install libncurses.so.5
 [admin @chiplayout ~]$ sudo dnf install libXrender.so.1
 [admin @chiplayout ~]$ sudo dnf install libXrandr.so.2
 [admin @chiplayout ~]$ sudo dnf install libXft.so.2
 [admin @chiplayout ~]$ sudo dnf install libjpeg.so.62
 [admin @chiplayout ~]$ sudo dnf install libpng12.so.0 
 ```
