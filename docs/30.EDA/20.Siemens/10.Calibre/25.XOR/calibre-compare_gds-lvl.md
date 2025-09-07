---
date: 2010-12-11 05:50:54
title: 利用calibre自带compare_gds命令进行LVL
createTime: 2010-12-10T21:50:54.000Z
permalink: /eda/ac8d0
categories:
  - EDA
tags:
  - calibre
  - compare_gds
  - gds
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

> 场景：layout 金属改版后，需要直观查看「改了哪些 layer、动了多少处」。  
> 工具：Mentor Calibre 自带的 `compare_gds` + RVE。


## 1. 准备环境
- 确保 Calibre 已正确安装并在 `$PATH` 中。  
- 在 Terminal 中新建并进入 diff 目录，防止结果文件散落各处。

```sh
mkdir diff && cd diff
```


## 2. 一键比对 GDS
```sh
compare_gds \
  /data/project1.gds   topcellname \
  /data/project2.gds   topcellname \
  DIFF.RESULT
```
- 第 1/3 个参数：改版前的 GDS 及其 topcell。  
- 第 2/4 个参数：改版后的 GDS 及其 topcell。  
- 最后一个参数：任意给定的结果文件名前缀，会自动生成 `.db` 等附属文件。

## 3. 启动 RVE 查看差异
```sh
calibre -gui
```

1. 工具栏点击 **RVE**。  
2. **Open Calibre DataBase** 窗口：  
   - **Database Type** 务必先选 **DRC/ERC**（否则可能找不到文件）。  
   - **Browse…** → 选中刚才生成的 `DIFF.RESULT.db` → **OK**。  
3. 出现与 DRC 结果一致的图形界面：  
   - 列表中直接显示改动过的 layer 及差异数量。  
   - 点击条目可高亮对应图形区域。

> ![calibre_rve](/public/2011/07/calibre_rve.gif)

## 4. 更高效的交互方式
如果你已经在 **Virtuoso Layout Editor** 中打开了最新 layout：

- 菜单 `Calibre > RVE`  
- 直接加载 `DIFF.RESULT.db`  
- 在差异列表中 **双击数字**，layout 视图会立刻跳转到改动位置，节省来回切换时间。


## 5. 小结
| 步骤 | 命令/操作 | 关键提示 |
|---|---|---|
| 环境 | `mkdir diff && cd diff` | 防止文件散落 |
| 比对 | `compare_gds … DIFF.RESULT` | topcell 名称必须一致 |
| 查看 | `calibre -gui` → RVE | 先选 **DRC/ERC** 类型 |
| 交互 | Virtuoso → `Calibre > RVE` | 双击结果直达改动坐标 |

一条命令 + 一个 GUI，改版差异一目了然，Tape-out 前必备技能 Get ✔