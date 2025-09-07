---
date: 2011-07-24 16:34:28
title: Ubuntu11.04窗口最小化/最打化/关闭按钮位置方向
createTime: 2011-07-24T08:34:28.000Z
permalink: /os/2v4qj
categories:
  - OS
tags:
  - gconf-editor
  - ubuntu
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

装个Fedora 15发现窗口只有最大化按钮，装了Ubuntu 11.04 发现窗口按钮位置都在左手边，对于习惯微软windows 风格的人来说，改变Ubuntu11.04窗口最小化/最打化/关闭按钮位置方向是我们毫不犹豫要做的事情。

  1. 按 Alt+F2 热键，输入 **gconf-editor** 打开配置编辑器，并 运行 （run）
  2. 依次点开**apps > metacity > general**选项
  3. 将 button_layout 值改为 menu:minimize,maximize,close

你会很意外，更改后的效果会立即出现，不用注销或重启滴～～～ 如果对 新装Fedora15的窗口按钮不满意，可以看下
[Fedora 15 添加“最小化/最大化/关闭](http://www.chiplayout.net/ubuntu11-04-window-minimize-maximize-close.html "Fedora 15 添加“最小化/最大化/关闭”按钮")  
