---
date: 2022-08-12 05:57:37
title: docker和主机之间数据交换
createTime: 2022-08-11T21:57:37.000Z
permalink: /nas/hc7pu
categories:
  - QNAP
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---

电脑和QNAP之间的交互可以用ftp, QNAP和docker可以用 docker cp, 需要先查看docke的ID

可以先登陆QNAP, 打开App center, 打开container, 点击正在运行的docker，就可以查到ID

QNAP到docker可以用如下命令
    
```powershell    
docker cp xxxxx 6994f789d928:/root
```
docker到QNAP可以用如下命令
```powershell    
docker cp  6994f789d928:/root xxxxx
```

登陆 QNAP方法如下, 打开 windows的 powershell, 输入如下命令，@前是用户名，后面的主机局域网IP
    
```powershell    
ssh admin@192.168.3.151
```


出现如下提示，输入密码
    
```powershell    
admin@192.168.3.151's password:
```


出现命令选项，选Q
    
```powershell    

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
    

回车后出再下面提示选Y
    
    
```powershell    
  +-----------------------------------------------------------------------------------------------------------------+
  |  Main > Quit                                                                                                    |
  |                                                                                                                 |
  |  Are you sure you want to exit the console menu and return to normal shell environment? (Y/N)                   |
  +-----------------------------------------------------------------------------------------------------------------+
>> Y
```

第二步就可以按论坛的方法用下面的命令先把image pull到本地，**需要连网** , 共22.7G, 需要一些时间
