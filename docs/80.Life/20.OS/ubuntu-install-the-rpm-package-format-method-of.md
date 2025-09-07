---
date: 2011-12-10 15:51:31
title: Ubuntu中安装RPM格式软件包的方法
createTime: 2011-12-10T07:51:31.000Z
permalink: /os/uk3o2
categories:
  - OS
source: >-
  https://www.chiplayout.net/ubuntu-install-the-rpm-package-format-method-of.html
author:
  - - - admin
tags:
  - rpm
  - ubuntu
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

新系统总是缺这个少那个的，刚运行说缺少libXp.so.6，想起来原来有这个package，但是RPM格式的，而ubuntu下的软件包格式是DEB的，RPM不能直接安装。不过想着应该能将rpm转为deb，果然用alien可以把rpm转换成deb。不过先要安装alien, 执行  
sudo apt-get install alien

安装完成后就可以将rmp转为deb的，方法如下  
```bash
sudo alien xxxx.rpm  
```
完成后会生成一个同名的xxxx.deb

用下面的命令安装deb包  
```bash
sudo dpkg -i xxxx.deb
```

注意，用alien转换的deb包并不能保证100%顺利安装，所以可以找到deb最好直接用deb
