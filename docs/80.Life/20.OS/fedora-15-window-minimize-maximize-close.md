---
date: 2011-07-10 02:15:34
title: Fedora 15 添加“最小化/最大化/关闭”按钮
createTime: 2011-07-09T18:15:34.000Z
permalink: /os/t3cnt
categories:
  - OS
tags:
  - gconf-editor
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---

> 默认只有关闭按钮？3 行命令让它变回「- □ ✖」经典布局。

## 1. 安装 gconf-editor
```bash
su -                # 输入 root 密码
yum install gconf-editor.i686
```

## 2. 修改布局
1. **Alt + F2** 调出运行框，输入 `gconf-editor` 回车  
2. 依次展开左侧树：  
   `desktop → gnome → shell → windows`  
3. 右侧找到 **button_layout**，双击修改为：  
   ```
   :minimize,maximize,close
   ```
   （冒号在开头，表示按钮全部放在右侧）

## 3. 立即生效
注销或重启 GNOME Shell（`Alt+F2` → `r` → 回车）即可看到经典三按钮。

## 4. 一键脚本（可选）
保存以下内容为 `fix_buttons.sh`，下次直接跑脚本：
```bash
#!/bin/bash
gconftool-2 --set /desktop/gnome/shell/windows/button_layout \
            --type string ":minimize,maximize,close"
```
赋予执行权限后：
```bash
chmod +x fix_buttons.sh
./fix_buttons.sh
```

> Fedora 15 的 GNOME 3 默认布局极简，通过 gconf-editor 可轻松恢复传统体验。
