---
date: 2011-09-28 01:41:20
title: 让icfb脱离Terminal窗口后台运行
createTime: 2011-09-27T17:41:20.000Z
permalink: /eda/owbiq
categories:
  - EDA
tags:
  - icfb
  - nohup
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

## 背景
在红​​​帽​​​企​​​业​​​版​​​ Linux 6.1安装了cadence5141后，经同事提醒发现在Terminal运行icfb即使在后面加了＆，关闭Terminal后icfb也会停止运行（CIW关闭），而发现办公电脑上面redhat 4系列就不会有这个问题。不得其解啊，难道高版本的linux对EDA的支持真的很差么？ 
## 解决1
不过可以在icfb ＆前面加入 nohup命令让icfb脱离Terminal窗口后台运行 
```sh
$nohup icfb &
```
## 说明
nohup命令：如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用nohup命令。
该命令可以在你退出帐户/关闭终端之后继续运行相应的进程。
nohup就是不挂起的意思( no hang up)。 该命令的一般形式为： 
```sh
nohup command &
```
nohup 命令运行由 Command 参数和任何相关的 Arg 参数指定的命令，忽略所有挂断（SIGHUP）信号。
在注销后使用 nohup 命令运行后台中的程序。要运行后台中的 nohup 命令，添加 & （ 表示"and"的符号）到命令的尾部。
