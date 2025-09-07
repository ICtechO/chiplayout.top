---
date: 2011-07-23 23:47:33
title: windows7硬盘安装ubuntu 11.04
createTime: 2011-07-23T15:47:33.000Z
permalink: /os/rfczv
categories:
  - OS
tags:
  - windows7
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

在 fedora 15上面折腾了好多天，最终还是没有把 cadence [ic610](http://www.chiplayout.net/?s=ic610) 装上，今晚下了个 ubuntu 11.04，终于装好了，明天看看还能不能把ic610装上。先分享一下 window7硬盘安装ubuntu经验。以前都是用grub4dos安装的，我觉得这个在windows XP用着不错，但自从用上windows7，就改用EasyBCD了，感觉用它在windows7环境下从硬盘安装任何linux都很容易。 

  1. 将下载好的 **ubuntu-11.04-desktop-i386.iso** 放至 F 盘根目录
  2. 将安装镜像中casper目录中的 **vmlinuz** 和**initrd.lz** 两个文件解压至 F 盘根目录
  3. 运行已经安装好的EasyBCD，按如下图所示依次点击 [cc lang="text"]Add New Entry NeoGrub Install Configure[/cc]
  4. 在弹出的menu.lst文件中添加如下码 ，并保存 [cc lang="bash"]title install ubuntu kernel (hd0,6)/vmlinuz iso-scan/filename=/ubuntu-11.04-desktop-i386.iso boot=casper splash initrd (hd0,6)/initrd.lz boot[/cc] (hd0,6)是 F 盘在linux环境下的编号 可查阅 [《linux下硬盘的编号识别,类似（hd[0-n],y）》](http://www.chiplayout.net/windows7-from-hard-disk-install-ubuntu-11-04.html "linux下硬盘的编号识别,类似（hd\[0-n\],y）")一文做简单了解
  5. 重启windows，在选择画面选择 NeoGrub Bootloader
  6. 进入Grub4dos界面，选择 Install Ubuntu 就会进入Ubuntu 在体验界面，如下图 [![ubuntu 11.04 界面](/public/c0a80cc9d801_287C/2011-7-23-14-56-22_thumb.jpg)](/public/2011/07/2011-7-23-14-56-22.jpg) **如果选择Install Ubuntu有错误，那是第4步磁盘编号不对，请根据提示按 ‘e’对第4步的硬盘编号进行编辑，kernel和initrd开头的两行编辑完成后按'b’保存，继续回到 Install Ubuntu，可以如此尝试直到出现上面界面**
  7. 同进安下 “Ctrl+Alt_T”打开 Terminal ，输入以下命令，防止安装过程中出现“无法卸载挂载点” [cc lang="bash"]sudo umount -l /isodevice[/cc]
  8. 开始安装，需要注意的是在 _分配磁盘空间（Allocated drive space）_ 那里选择 _其它选项（Something else），_ 防止破坏已有的操作系统。
  9. 安装完成后重启就OK了，如果启动时黑屏或显示器不在工作频率范围，可以查阅 [《ubuntu11.04启动不在工作频率范围分辨率修改》](http://www.chiplayout.net/ubuntu11-not-working-frequency-range.html "ubuntu11.04启动不在工作频率范围分辨率修改")


