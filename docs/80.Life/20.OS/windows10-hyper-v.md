---
date: 2021-03-10 07:37:48
title: windows10添加虚拟机Hyper-v
createTime: 2021-03-09T23:37:48.000Z
permalink: /os/szo08
categories:
  - OS
tags:
  - hyper-v
  - Windows10
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

将下面代码保存为xx.bat, 右键以管理员运行即可开始安装
```bat
	pushd "%~dp0"
    hhhhr /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
    for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
    del hyper-v.txt
    Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL

```