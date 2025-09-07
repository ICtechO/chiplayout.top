---
date: 2016-03-30 08:59:54
title: fedora22 license auto start
createTime: 2016-03-30T00:59:54.000Z
permalink: /os/93xq7
categories:
  - EDA
tags:
  - fedora
  - license
  - rc.local
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

创建rc.local, 把要执行的内容写进 
```sh
[admin@chiplayout ~]$ sudo gedit/etc/rc.local **_lmgrd -c license.dat -l log_**
```
保存后,给他添加执行权限
```sh
[admin@chiplayout ~]$ sudo chmod +x /etc/rc.local
```
然后,添加一个chkconfig启动项 
```sh
[admin@chiplayout ~]$ cd /etc/rc.d/init.d 
[admin@chiplayout init.d]$ sudo gedit menci-autoexec
```
输入以下内容 
```sh
#!/bin/bash 
# # Menci-AutoExec: Execute /etc/rc.local on Fedora21. 
# # chkconfig: 345 00 99 
# description: Init script defined by Menci. 
### BEGIN INIT INFO 
### END INIT INFO 
./etc/rc.local
```
注意:注释不能少,少了那些注释下一步没法执行 最后 
```sh
[admin@chiplayout init.d]$ sudo chmod +x menci-autoexec 
[admin@chiplayout init.d]$ sudo chkconfig --level 345 menci-autoexec on
```
这句话配置chkconfig,让menci-autoexec在开机时自动被执行 而menci-autoexec里把调用转向我们熟悉的/etc/rc.local
