---
date: 2010-11-24 02:45:06
title: unix系统 chmod命令使用和举例
createTime: 2010-11-23T18:45:06.000Z
permalink: /os/4b0dy
categories:
  - OS
tags:
  - chmod
  - unix
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

> 项目/系统管理员最常用的 `chmod` & `chown` 一次掌握，包含文字法、数字法及实战示例。


## 1. 文字设定法 `chmod`

### 语法
```bash
chmod [who][+|-|=][mode] 文件/目录
```

| 标识 | 含义 |
|---|---|
| **who** | **u** 属主 / **g** 属组 / **o** 其它 / **a** 所有 |
| **操作** | **+** 添加 / **–** 取消 / **=** 只保留 |
| **mode** | **r** 读 / **w** 写 / **x** 执行 / **X** 目录/可执行文件专用 / **s** SUID/SGID / **t** sticky |

### 实战示例
```bash
chmod a+x  sort       # 所有人 +x
chmod ug+w,o-x  text  # 属主/组 +w，其它 -x
chmod u+s  a.out      # 设置 SUID
```


## 2. 数字设定法 `chmod`

### 权限权重
```
r = 4, w = 2, x = 1
```

| 位数 | 对象 |
|---|---|
| 第 1 位 | **u** 属主 |
| 第 2 位 | **g** 属组 |
| 第 3 位 | **o** 其它 |

### 万能速记
```
7 = rwx, 6 = rw-, 5 = r-x, 4 = r--, 0 = ---
```

### 实战示例
```bash
chmod 644 mm.txt   # -rw-r--r--
chmod 750 wch.txt  # -rwxr-x---
chmod -R 755 /web  # 递归，目录/脚本统一 755
```


## 3. 属主 & 属组修改 `chown`

### 语法
```bash
chown [选项] 用户[:组] 文件/目录
```

| 选项 | 作用 |
|---|---|
| `-R` | 递归 |
| `-v` | 显示过程 |

### 实战示例
```bash
chown wang shiyan.c          # 仅改属主
chown -R wang.users /his     # 目录/子文件全部修改
```


## 4. 场景对照表

| 场景 | 命令 |
|---|---|
| 共享只读配置 | `chmod 644 file` |
| 脚本可执行 | `chmod u+x script.sh` |
| Web 目录开放 | `chmod -R 755 /var/www` |
| 仅属主可写 | `chmod 600 ~/.ssh/id_rsa` |
| 移交文件给同事 | `chown colleague:team file` |


## 5. 一页速记图
```
文字法：chmod u+x,g-w,o=r file
数字法：chmod 750 file
改主组：chown -R user:group dir
```

贴在工位，5 分钟搞定 Linux 权限！
