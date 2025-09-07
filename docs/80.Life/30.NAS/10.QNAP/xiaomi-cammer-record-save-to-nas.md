---
date: 2022-10-10 01:53:03
title: 米家摄像头添加NAS存储
createTime: 2022-10-09T17:53:03.000Z
permalink: /nas/nal32
categories:
  - QNAP
tags:
  - qnap
  - SMB
  - 小米摄像头
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

发现小米摄像头到NAS的存储失效了，找了好久原因，原来是SMB版本问题.

登陆NAS后打开控制台，选网络和文件服务，win/mac/NFS/EebDAV, 微软网络，高级设置，最低SMB版本设置为SMB1.

你家打开小米摄像头后，选网络存储，选择NAS，登陆后就可以看到可选的文件夹了
