---
date: 2011-09-26 15:54:17
title: cadence5141 icfb x_openfonts error
createTime: 2011-09-26T07:54:17.000Z
permalink: /eda/0dhgz
categories:
  - EDA
tags:
  - ic5141
  - icfb
coverImg: https://img.onedayxyy.cn/images/TeekCover/6.webp
---

在REDHAT企业版6.1平台安装了Cadence IC5141后，在启动icfb的时候遇到“X Error of failed request”，导致icfb不能成功启动，具体错误如下： 
:::caution
X Error of failed request: BadName (named color or font does not exist) Major opcode of failed request: 45 (X_OpenFont) Serial number of failed request: 18 Current serial number in output stream: 19
:::
 其实这是字体错误，在新的REDHAT企业版6.1中X_OpenFont的字体版本较高，而IC5141用的是旧版本redhat上的字体，因此下载额外的字体包进行安装就可以解决问题。 下载字体包 RPM包1：
 [xorg-x11-fonts-75dpi-7.5-4.fc15.noarch.rpm](http://115.com/file/aqymrxuo "xorg-x11-fonts-75dpi-7.5-4.fc15.noarch.rpm") 
 [U115网盘下载](http://115.com/file/aqymrxuo "xorg-x11-fonts-75dpi-7.5-4.fc15.noarch.rpm") RPM包2：
 [xorg-x11-fonts-ISO8859-1-75dpi-7.5-4.fc15.noarch.rpm](http://115.com/file/cltp6ytq "xorg-x11-fonts-ISO8859-1-75dpi-7.5-4.fc15.noarch.rpm") 
 [U115网盘下载](http://115.com/file/cltp6ytq "xorg-x11-fonts-ISO8859-1-75dpi-7.5-4.fc15.noarch.rpm") 
 安装字体包（需root权限） [code lang="bash"]#
 ```sh
 rpm -ivh xorg-x11-fonts-75dpi-7.5-4.fc15.noarch.rpm
 rpm -ivh xorg-x11-fonts-ISO8859-1-75dpi-7.5-4.fc15.noarch.rpm
 ```
 在其它linux平台可以使用在线安装 xorg-x11-fonts-75dpi-7.5-4.fc15.noarch.rpm和 xorg-x11-fonts-75dpi-7.5-4.fc15.noarch.rpm
