---
date: 2020-02-05 09:56:51
title: 利用Linux sleep命令延后执行程序
createTime: 2020-02-05T01:56:51.000Z
permalink: /os/hpw4o
categories:
  - 未分类
tags:
  - Linux
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

因为服务器资源受限，有个程序需要在别的程序完成后执行，可以利用sleep命令延时一段时间
    
    
    sleep 4h; source run.sh

4小时之后执行 source run.sh

sleep 语法
    
    
    sleep [--help] [--version] number[smhd]

参数说明

  * \--help : 显示辅助讯息
  * \--version : 显示版本编号
  * number : 时间长度，后面可接 s、m、h 或 d
  * 其中 s 为秒，m 为 分钟，h 为小时，d 为日数 


