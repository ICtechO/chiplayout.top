---
date: 2011-07-14 17:18:22
title: Fedora 15五笔和拼音输入法安装及配置
createTime: 2011-07-14T09:18:22.000Z
permalink: /os/2hdot
categories:
  - OS
tags:
  - IBUS
  - SCIM
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

> 基于 IBus 框架，一次配好，重启不失效。

## 1. 先装 IBus（系统缺省未装时）
```bash
su -                    # 切 root
yum install ibus        # 安装框架
```

## 2. 拼音输入法
1. **查看可用包**
```bash
yum list | grep pinyin
ibus-pinyin.i686 1.3.99.20110520-1.fc15 @updates
ibus-pinyin-db-open-phrase.noarch 1.3.99.20110520-1.fc15 @updates
ibus-sunpinyin.i686 2.0.3-1.fc15 @fedora
sunpinyin.i686 2.0.3-1.fc15 @fedora
sunpinyin-data-le.noarch 2.0.3-1.fc15 @fedora
ibus-pinyin-db-android.noarch 1.3.99.20110520-1.fc15 updates
scim-pinyin.i686 0.5.91-28.fc15 fedora
scim-python-pinyin.i686 0.1.13rc1-8.fc15 fedora
sunpinyin-devel.i686 2.0.3-1.fc15 fedora
xsunpinyin.i686 2.0.3-1.fc15 fedora
```
2. **推荐安装**（速度快、词库好）
```bash
yum install ibus-sunpinyin
```

## 3. 五笔输入法
1. **查看可用包**
```bash
yum list | grep wubi
ibus-table-chinese-wubi-jidian.noarch 1.3.0.20110114-2.fc15 @fedora
ibus-table-chinese-wubi-haifeng.noarch 1.3.0.20110114-2.fc15 fedora
scim-python-xingma-wubi.i686 0.1.13rc1-8.fc15 fedora
```
2. **安装极点五笔**
```bash
yum install ibus-table-chinese-wubi-jidian
```

## 4. 把输入法挂到 IBus
图形化操作（只需一次）：

Activities → Applications → **Input Method Selector**  
- 勾选 **Use IBus** → **Input Method Preferences**  
- **Input Method** → 勾选 **Customize active input method**  
- **Select an input method → Show all → Chinese →**  
  - **SunPinyin / Pinyin**（拼音）  
  - **Wubi-Jidian**（五笔）  
- **Add** → **Close**

## 5. 立即生效
注销或重启 GNOME Shell (`Alt+F2` → `r`) 即可用 **Super+Space** 切换输入法。hinese>>pinyin/wubi>>Add 完成 Fedora 15 五笔输入法和拼音输入法的安装及配置！
