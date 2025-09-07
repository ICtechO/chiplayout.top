---
date: 2021-08-18 01:55:38
title: qnap的container运行lubuntu
createTime: 2021-08-17T17:55:38.000Z
permalink: /nas/ozema
categories:
  - QNAP
tags:
  - container
  - docker
  - qnap
  - ubuntu
  - vnc
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---
ssh登陆qnap, 进入命令模式，先pull lubuntu到本地
    
    
```powershell
docker pull vncserver/lubuntu
run lubuntu
docker run -d --hostname lubuntu --name lubuntu --restart always -p 5901:5901 -e TZ=Asia/Jakarta vncserver/lubuntu
```

打开vnc, 输入host,和密码
    
```powershell
host: 192.168.3.xxx/:5901
username: developer
password: vncpasswd
```

![](/public/2021/08/vncserver_lubuntu.png)
