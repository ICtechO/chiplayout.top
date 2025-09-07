---
date: 2025-08-17 04:35:47
title: 添加Hyper-V至window功能列表
createTime: 2025/08/12 21:54:57
permalink: /os/9ub2g
categories:
  - OS
tags:
  - hyper-v
  - windows7
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---
## 功能列表中没有Hyper-V
在启用或关闭windows功能列表中没有`Hyper-V`

## 是否可以安装
在powershell中输入以下命令

```powershell
systeminfo.exe
```

在末尾查看 `Hyper-V` 要求是否都是`是`

```powershell
Hyper-V 要求:       虚拟机监视器模式扩展: 是
                    固件中已启用虚拟化: 是
                    二级地址转换: 是
                    数据执行保护可用: 是
```

## 添加`Hyper-V`功能
将下面的code保存为`Hyper-V.txt` ,并以管理员身份运行

```powershell
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V -All /LimitAccess /ALL
pause
```

## 安装

在启用或关闭windows功能列表中选择`Hyper-V`