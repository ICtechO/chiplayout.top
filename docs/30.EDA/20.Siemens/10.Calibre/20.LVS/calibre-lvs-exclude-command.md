---
date: 2013-06-09 18:21:10
title: Calibre LVS EXCLUDE command
createTime: 2013-06-09T10:21:10.000Z
permalink: /eda/yzbhi
categories:
  - EDA
tags:
  - calibre
  - EXCLUDE
  - LVS
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

在版图验证过程中，常常需要临时跳过某些已知 IP、测试结构或 filler cell 的 LVS 比较。Calibre 提供了两种方式——**图形界面勾选** 或 **直接在 Rule 文件里写字段**——都能用一行 `EXCLUDE CELL` 搞定。

## 1. 图形界面（GUI）操作

1. 打开 **Calibre LVS → Options → Include**。  
2. 勾选 **Include SVRF commands**。  
3. 在下方的空白框里填入：

   ```txt
   EXCLUDE CELL layoutname
   ```

   其中 `layoutname` 是 **版图中的 cell 名称**，大小写需与 GDS 完全一致。  
4. 保存/运行即可，该 cell 在 LVS 时会被整体跳过。

> 提示：如果同时想忽略 **电路网表** 中的同名 cell，可再写一行  
> `LVS SPICE EXCLUDE CELL schematicname`（见下一节）。

## 2. 直接写进 LVS Rule 文件

把同样的命令插到 Rule 文件任意位置即可，例如：

```txt
// === 忽略版图中特定模块 ===
EXCLUDE CELL PAD_RING
EXCLUDE CELL FILL_CELL_*

// === 忽略网表中特定模块 ===
LVS SPICE EXCLUDE CELL  IO_TIE_HI
```

- 支持通配符 `*` 与 `?` 批量匹配。  
- Rule 文件一旦上线，团队所有人无需再手动勾选 GUI，减少沟通成本。

## 3. 常见组合场景

| 目的 | 命令示例 |
|---|---|
| 只跳过版图中的 filler | `EXCLUDE CELL FILL_*` |
| 只跳过网表中的 test IP | `LVS SPICE EXCLUDE CELL TEST_JTAG` |
| 同时跳过版图和网表中的某 cell | `EXCLUDE CELL RAM_MACRO` + `LVS SPICE EXCLUDE CELL RAM_MACRO` |

## 4. 一句话总结
> “**EXCLUDE CELL** 一行就够，GUI 和 Rule 文件二选一，让 LVS 无视任何你不想比对的模块。”