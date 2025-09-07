---
date: 2011-12-13 01:22:45
title: 亲测fedora16安装calibre2008所需的lib
createTime: 2011-12-12T17:22:45.000Z
permalink: /os/88c1z
categories:
  - OS
tags:
  - calibre
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

经本人亲自测试，在新发行的fedora16上安装calibre2008需要以下几个库文件的支持，我是在安装过程中跟据提示依次安装的 
```bash
yum install glibc.i686 
yum install libstdc++.so.6
yum install libXp.so.6
yum install libXt.so.6
yum install libXtst.so.6
yum install libstdc++.so.5
```