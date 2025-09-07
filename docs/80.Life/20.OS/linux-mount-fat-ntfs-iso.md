---
date: 2011-07-23 09:04:15
title: linux下(mount)挂载FAT/NTFS/ISO文件系统
createTime: 2011-07-23T01:04:15.000Z
permalink: /os/wvnyz
categories:
  - OS
tags:
  - FAT
  - ISO
  - NTFS
  - 挂载
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

相信有不少习惯window的童鞋们是刚开始玩linux，而大量有用的东西存放在windows的文件系统中，使得我们束手无策，下面就介绍一下 [《linux下(mount)挂载FAT/NTFS/ISO文件系统》](http://www.chiplayout.net/linux-mount-fat-ntfs-iso.html "linux下(mount)挂载FAT/NTFS/ISO文件系统") 的方法。

1. 先运行fdisk，查看相应信息  
```bash
sudo fdisk -l
```
1. fat格式，sda(x)代表盘符也可能是hda(x) /mnt指目的目录  
```bash
sudo mount -t vfat /dev/sda(x) /mnt
```
2. ntfs格式  
```bash
sudo mount -t ntfs-3g /dev/sda(x) /mnt -o force
```
3. 光盘  
```bash
sudo mount -t iso9660 /dev/cdrom /mnt
```
4. 卸载  
```bash
sudo umount /mnt
```

也许在 fedora或 redhat下用su进入root后并不能使用fdisk，需要用  
```bash
su -\
```
