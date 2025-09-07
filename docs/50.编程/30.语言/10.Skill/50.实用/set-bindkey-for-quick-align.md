---
date: 2025-08-17 04:35:48
title: 为quick设置快捷键
createTime: 2025/02/01 22:11:59
permalink: /skill/as839
categories:
  - skill
tags:
  - skill
  - quick align
  - virtuoso
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

## 切换无间距和用户间距

**快捷键:** `Ctrl + 右键`

```cadence
hiSetBindKey("Layout" "ctrl<Btn3Down>" "leSetEnv(\"quickAlignSpacingType\" if(leGetEnv(\"quickAlignSpacingType\")==\"user\" then \"none\" else \"user\"))")
```

## 切换启用和禁用复制引用

**快捷键:** `Ctrl + 双击右键`

```cadence
hiSetBindKey("Layout" "ctrl<Btn3Down>(2)" "leSetEnv(\"quickAlignMode\" if(leGetEnv(\"quickAlignMode\")==\"MoveOrStretch\" then \"Copy\" else \"MoveOrStretch\"))")
```

## 使用说明

1. 将上述代码复制到 `**.cdsinit**` 文件中。
2. 重启 **Virtuoso** 或 **icfb**。

---

**注意事项：**

- 该脚本用于在Cadence Virtuoso Layout Editor中设置快捷键，以便快速切换对齐模式和间距类型。
- `Ctrl + 右键`: 在无间距和用户定义间距之间切换。
- `Ctrl + 双击右键`: 在启用和禁用复制引用模式之间切换。