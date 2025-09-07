---
date: 2010-12-11 04:16:16
title: 使用linux diff命令进行文档比较
createTime: 2010-12-10T20:16:16.000Z
permalink: /os/7wg5n
categories:
  - OS
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

> 一行命令、一页参数，快速搞定文本/网表/规则文件对比。

---

## 1. 最常用：三行搞定
```bash
diff file1 file2              # 直接看差异
diff file1 file2 > result.txt # 结果重定向
diff -u file1 file2           # 统一格式（patch 常用）
```

---

## 2. 场景速配
| 需求 | 命令示例 |
|---|---|
| **只看是否不同** | `diff -q file1 file2` |
| **忽略空格/空行** | `diff -bB file1 file2` |
| **忽略大小写** | `diff -i file1 file2` |
| **递归比较目录** | `diff -r dir1 dir2` |
| **并排显示** | `diff -y --suppress-common-lines file1 file2` |
| **生成补丁** | `diff -uNr old/ new/ > fix.patch` |

---

## 3. 关键参数速记
| 参数 | 作用 |
|---|---|
| `-u` / `-U N` | 统一上下文 N 行（patch 友好） |
| `-y` | 左右并列，一眼对齐 |
| `-r` | 递归目录 |
| `-b` / `-w` | 忽略空格 / 所有空白 |
| `-B` | 忽略空行 |
| `-i` | 忽略大小写 |
| `-q` | 仅给出“是否不同”的结论 |
| `--exclude=*.bak` | 跳过备份文件 |

---

## 4. 结果速读
```
2c2                 # 第 2 行被 change
3a4                 # 第 3 行后 add 一行
5d4                 # 第 5 行被 delete
```
统一格式 `-u` 输出可直接用 `patch` 应用。

---

## 5. 实例：IC 版图常用
```bash
# 1) 网表差异
diff -u top.v.old top.v.new > top.patch

# 2) rule 文件忽略空格
diff -b rule1.drc rule2.drc

# 3) 目录递归，跳过 .svn
diff -r --exclude=.svn rtl_old rtl_new | less
```

---

> 记住 **diff -u** 和 **diff -y**，日常 90 % 场景全搞定。