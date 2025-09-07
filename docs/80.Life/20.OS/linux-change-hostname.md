---
date: 2011-06-24 00:04:16
title: Linux下更改计算机名 HOSTNAME=计算机名
createTime: 2011-06-23T16:04:16.000Z
permalink: /os/d7398
categories:
  - OS
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---

昨天装redhat的时候计算机名没有做特殊修改，默认为localhost，今晚想起来改成了网站的老域名＠LayoutCN。 需要修改/etc/sysconfig/network和/etc/hosts 两个文件。可以参考如下步骤

```bash
[loongsky@LayoutCN ~]$ vi /etc/sysconfig/network NETWORKING=yes NETWORKING_IPV6=no HOSTNAME=LayoutCN
[loongsky@LayoutCN ~]$ vi /etc/hosts 
# Do not remove the following line, or various programs 
# that require network functionality will fail. 
#127.0.0.1 localhost.localdomain localhost 
192.168.1.4 LayoutCN LayoutCN  #//[!code ++]

```


   
