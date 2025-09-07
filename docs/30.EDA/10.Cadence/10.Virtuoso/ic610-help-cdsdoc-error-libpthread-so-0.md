---
date: 2011-07-25 20:57:16
title: ic610帮助文档cdsdoc错误libpthread.so.0
createTime: 2011-07-25T12:57:16.000Z
permalink: /eda/ghdpg
categories:
  - EDA
tags:
  - cdsdoc
  - ic610
coverImg: https://img.onedayxyy.cn/images/TeekCover/18.webp
---
## 背景
按照网上cadence ic610的安装方法完成安装，并在 .bashrc 中进行设置，但 输入 cdsdoc 后不能打开 cadence 帮助文档，并提示 
:::caution
/home/eda/ic610/tools/jre/bin/java: error while loading shared libraries: libpthread.so.0: cannot open shared object file: No such file or directory
:::
 错误，逛遍了中外EDA 论坛，
 ## 解决办法。
  1. 首先在 .bashrc 中设置正确的 cdsdoc 的路径及快捷方式如下所示  
```sh
alias cdsdoc='$CDS_ROOT/tools/bin/cdsdoc'
```
  2. 下载[ libstdc++-2-libc6.1-1-2.9.0.so](http://u.115.com/file/e6yjwvpd# libstdc++-2-libc6.1-1-2.9.0.rar "http://u.115.com/file/e6yjwvpd")，进入保存目录  
```sh
sodu cp libstdc++-2-libc6.1-1-2.9.0.so /lib/libstdc++-2-libc6.1-1-2.9.0.so  
sodu ln -s /lib/libstdc++-2-libc6.1-1-2.9.0.so /usr/lib/libstdc++-2-libc6.1-1-2.9.0.so
```
  3. 打开$CDS_ROOT/tools/bin/cdsdoc，找到  
```sh
Set variable for Java to run on RedHat Linux 7.1  
#  
if [ $PLATFORM = "lnx86" ]; then  
if [ $ARCH = "x86_64" ]; then  
# AMD Opteron RHEE3.0  
LD_ASSUME_KERNEL=2.4.19  
export LD_ASSUME_KERNEL  
else  
#Standard x86 systems  
LD_ASSUME_KERNEL=2.2.5  
export LD_ASSUME_KERNEL  
fi  
fi
```  
修改为 
```sh
# Set variable for Java to run on RedHat Linux 7.1  
#  
if [ $PLATFORM = "lnx86" ]; then  
if [ $ARCH = "x86_64" ]; then  
# AMD Opteron RHEE3.0  
#LD_ASSUME_KERNEL=2.4.19  
#LD_ASSUME_KERNEL=2.6.27  
export LD_ASSUME_KERNEL  
else  
#Standard x86 systems  
#LD_ASSUME_KERNEL=2.2.5  
LD_ASSUME_KERNEL=2.6.27  
export LD_ASSUME_KERNEL  
fi  
fi
```
  4. 新开 Terminal 输入cdsdoc 即可打开 cadence 帮助文档 

[![CDSDoc- Library-cedence帮助文档](/public/2011/07/CDSDoc-Library.jpg)](http://www.chiplayout.net/ic610-help-cdsdoc-error-libpthread-so-0.html/cdsdoc-library)



