---
date: 2025-08-22 15:35:55
title: pnpm安装
permalink: /pages/089aba
categories:
  - mySite
coverImg: https://img.onedayxyy.cn/images/TeekCover/6.webp
---
## 使用npm安装pnpm

```powershell
npm install -g pnpm
```


## 验证

```powershell
pnpm -v
```

## 问题
有的安装完成提示下面的问题
```powershell
pnpm : 无法加载文件 C:\Users\xxx\AppData\Roaming\npm\pnpm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 http
s:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
```

解决变法就是用以管理员身份打开`powershell` 输入以下命令
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

出现提示时，输入 `Y` 或 `A` 确认。

关闭当前 `powershell`, 正常开一个
`pnpm -v` 再次测试