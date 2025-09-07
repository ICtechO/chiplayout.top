---
date: 2011-07-21 23:42:00
title: ubuntu11.04启动不在工作频率范围分辨率修改
createTime: 2011-07-21T15:42:00.000Z
permalink: /os/caug9
categories:
  - OS
tags:
  - ubuntu
  - 分辨率
  - 工作频率范围
coverImg: https://img.onedayxyy.cn/images/TeekCover/5.webp
---

[windows7硬盘安装ubuntu 11.04](http://www.chiplayout.net/windows7-from-hard-disk-install-ubuntu-11-04.html "window7硬盘安装ubuntu 11.04") 
后启动时显示 不在工作频率范围 并 黑屏 ，等会就直接到桌面了，后来才知道是 ubuntu 11.04 安装完成后默认分辨率的问题。修改 /boot/grub/grub.cfg 中的set gfxmode=800×600就可以了。具体方法如下

按下“Ctrl+Alt+T”打开 Terminal 输入
```bash
sudo gedit /boot/grub/grub.cfg
```

找到下面这行

```bash
set gfxmode=Auto
```

将修改为

```bash
set gfxmode=800×600
```

重启就可以看到系统选择画面了
