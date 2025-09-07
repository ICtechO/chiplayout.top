---
date: 2021-07-30 07:49:08
title: 利用QNAP上的容器安装启动virtuoso617及calibre2015
createTime: 2021-07-29T23:49:08.000Z
permalink: /eda/2m368
categories:
  - EDA
tags:
  - calibre
  - docker
  - qnap
  - virtuoso
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

在论坛上看到利用docker下载并打开virtuoso及calibre，并利用VNC登陆，省去安装和破解的麻烦，于是就尝试一下。  

## 尝试一
先是在windows下安装了ubuntu 20和fedora 33, 又在这两个系统里分别安装了docker, 但因为初试也不懂docker反正最后没成功；  

## 尝试二
其次又在windows下直接安装docker及ubuntu， 远程桌面依旧没成功。   

## 尝试三
最后想直之前给家里配的 NAS, 威联通的QNAP,本身是linux服务器，能否直接在上面装个docker什么的，结果登陆发现这QNAP实考虑周全，早就预置了container, 就支持docker, 于是很容易就按论坛指引打开了virtuoso及calibre

### 第一步
命令登陆 QNAP, 打开 windows的 powershell, 输入如下命令，@前是用户名，后面的主机局域网IP
```sh    
    ssh admin@192.168.3.151
```
- 出现如下提示，输入密码
```sh    
    admin@192.168.3.151's password:
```

- 出现命令选项，选Q
```sh    
      +-----------------------------------------------------------------------------------------------------------------+
      |  Console Management - Main menu                                                                                 |
      |                                                                                                                 |
      |  1: Show network settings                                                                                       |
      |  2: System event logs                                                                                           |
      |  3: Reset to factory default (password required)                                                                |
      |  4: Activate/ deactivate a license                                                                              |
      |  5: App management                                                                                              |
      |  6: Reboot in Rescue mode (w/o configured disk)                                                                 |
      |  7: Reboot in Maintenance Mode                                                                                  |
      |  Q: Quit (return to normal shell environment)                                                                   |
      +-----------------------------------------------------------------------------------------------------------------+
      >> Q
```    

- 回车后出再下面提示选Y
```sh    
      +-----------------------------------------------------------------------------------------------------------------+
      |  Main > Quit                                                                                                    |
      |                                                                                                                 |
      |  Are you sure you want to exit the console menu and return to normal shell environment? (Y/N)                   |
      +-----------------------------------------------------------------------------------------------------------------+
      >> Y
```    

### 第二步
- 按论坛的方法用下面的命令先把image pull到本地，**需要连网** , 共22.7G, 需要一些时间
```sh    
    docker pull phyzli/centos8_xfce4_tigervnc_virtuosoic617_mmsim15_calibre2015
```
- 然后用下面的命令启动docker, mac地址和hostname不能更改，要不然自己需要重新生成license， -p 5092是 vnc端口
```sh    
    docker run -it -p 5902:5902 --hostname lizhen --mac-address 02:42:ac:11:00:02 phyzli/centos8_xfce4_tigervnc_virtuosoic617_mmsim15_calibre2015
```
- 这时候shell窗口也会切换到指定的hostname，输入vnc的开启命令
```sh    
    vncserver -geometry 1920x1080 :2
```
- 或者docker run完成后用网页登陆QNAP打开container就可以看到运行的docker了，点击启动的那个，再进入控制台启动vnc

![](/public/2021/07/docker-in-qnap.png)

- 推荐 real VNC, <https://www.realvnc.com/download/file/viewer.files/VNC-Viewer-6.21.406-Windows.exe>

- 打开后直接在地址栏输入192.168.3.151:5902,及密码就可以链接了

- 进去后右键 terminal, 直接输入virtuoso即可

![](/public/2021/07/qnap-docker-virtuoso-calibre-f.png)
