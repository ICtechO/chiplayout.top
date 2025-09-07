---
date: 2011-07-28 16:06:38
title: 删除(解锁) view-layout目录中＊.cdslck文件
createTime: 2011-07-28T08:06:38.000Z
permalink: /Layout/3gb7t
categories:
  - Layout
tags:
  - .cdslck
  - clsAdminTool
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

在Cadence打开的情况下，我在们做IC layout时计算机可能会因为崩溃或断电而使你的view>layout目录或view>schematic目录中产生一个以 .cdslck 结尾的文件。有了这个文件，它会防止任何人去编辑、改变打开的 schematic 或 layout 。可以通过以下方法解决这个问题。

==利用 clsAdminTool==

1. 工具所在目录: /nfs/guille/a2/rh80apps/cadence/current/tools/bin/clsAdminTool
2. 在已经锁定的文件上级目录运行 clsAdminTool
3. 输入 ale . 列出当前目录下所有被锁定（\*.cdslck）文件.
4. 输入 are . 解锁当前目当下所有被锁定*.cdslck）文件


- 如果电脑崩溃时你只打开了一两个窗口，可以进入锁定文件所在目录手动删除 *.cdslck 文件
- 如果是当时你打开了很多窗口，有多个目录可能产生了 ＊.cdslck 文件，参考以下方法

```sh
cd ~ #// 返回你的根目录(home) 
find . -name "*.cdslck" #//查找所有 .cdslck文件 
find . -name "*.cdslck" -exec rm -f {} #//删除所有 *.cdslck 文件，但是这其中包括了含有 .cdslock的文件
```
希望对大家有所帮助。
