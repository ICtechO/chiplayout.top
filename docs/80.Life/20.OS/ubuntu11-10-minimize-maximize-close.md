---
date: 2011-12-07 16:04:37
title: Ubuntu11.10窗口最小化/最打化/关闭按钮位置方向
createTime: 2011-12-07T08:04:37.000Z
permalink: /os/w2drd
categories:
  - OS
tags:
  - ubuntu
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

受不了redhat的古板，还是装回ubuntu, 
这次人版本是11.10，进入系统后不习惯窗口最小化/最打化/关闭按在窗口标题栏的左边，想按11.04的办法换一下位置
发现默认没有 gconf-editor , 所以先装 gconf-editor, Ctrl+Alt+T调出终端，执行 
```bash
sudo apt-get install gconf-editor[
```
然后按照[《Ubuntu11.04窗口最小化/最打化/关闭按钮位置方向》](http://www.chiplayout.net/ubuntu11-04-window-minimize-maximize-close.html "Ubuntu11.04窗口最小化/最打化/关闭按钮位置方向")就OK了
