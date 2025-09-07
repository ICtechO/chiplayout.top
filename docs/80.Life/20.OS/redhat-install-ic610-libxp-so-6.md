---
date: 2011-08-08 19:00:22
title: Redhat安装IC610出现libXp.so.6解决方法
createTime: 2011-08-08T11:00:22.000Z
permalink: /os/thi01
categories:
  - OS
tags:
  - ic610
  - libXp.so.6
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

感觉Ubuntu对EDA软件的支持还是有点欠缺，这能折腾到Redhat AS 5上面来了，在安装Candence IC610时出现了libXp.so.6的问题。后来在Redhat OS的安装镜像中找到了两个RPM包包，安装后就能正常运运行CDROM1中的SETUP.SH了。 
```bash
rpm -ivh libXp-1.0.0-8.1.el5.i386.rpm  
rpm -ivh libXp-devel-1.0.0-8.1.el5.i386.rpm
```
安装顺序不能变的，如果觉得在安装镜像中找这两个包包太麻烦，还有一个更麻烦的方法，就是115网盘下载。  
[libXp.so.6 115u下载 http://u.115.com/file/aq7hqbwf#libXp.so.6.zip](http://u.115.com/file/aq7hqbwf#libXp.so.6.zip "libXp.so.6.zip")