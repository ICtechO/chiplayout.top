---
date: 2020-08-18 06:07:10
title: vim diff的介绍
createTime: 2020-08-17T22:07:10.000Z
permalink: /vim/n05sz
categories:
  - editor
tag:
  - vimdiff
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

Vimdiff 是一个强大的工具，用于比较和合并两个或多个文件。它基于 Vim 编辑器，提供了直观的界面和丰富的功能，帮助用户快速发现文件之间的差异，并进行高效的合并操作。本文将详细介绍 Vimdiff 的启动方式、常用操作以及一些实用技巧。

---

## 1. 启动 Vimdiff

Vimdiff 的启动方式灵活多样，以下是几种常用的场景：

### 1.1 直接从外部打开两个文件

- 使用 `vimdiff` 命令直接启动：
    
    bash复制
    
    ```bash
    vimdiff FILE_1 FILE_2
    ```
    
- 使用 `vim` 命令并添加 `-d` 参数：
    
    bash复制
    
    ```bash
    vim -d FILE_1 FILE_2
    ```
    

这两种方式都会直接打开两个文件，并自动进入比较模式。

### 1.2 在 Vim 中打开文件后进行比较

- 先打开一个文件，再使用 `:vertical diffsplit` 命令打开另一个文件进行对比：
    
    bash复制
    
    ```bash
    vim FILE_1
    :vertical diffsplit FILE_2
    ```
    
- 同时打开两个文件后，手动启动比较模式：
    
    bash复制
    
    ```bash
    vim -On FILE_1 FILE_2
    :diffthis  # 需要在两个窗口中分别输入
    ```
    

---

## 2. 改变文件位置

在比较文件时，可以根据个人习惯调整窗口的显示位置：

- `Ctrl-w K`：将当前窗口移到最上方。
    
- `Ctrl-w H`：将当前窗口移到最左侧。
    
- `Ctrl-w J`：将当前窗口移到最下方。
    
- `Ctrl-w L`：将当前窗口移到最右侧。
    

---

## 3. 锁定和解锁滚动条

默认情况下，Vimdiff 会锁定两个文件的滚动条，使它们同步滚动。如果需要解锁滚动条，可以使用以下命令：

- `:set noscrollbind`：解锁滚动条。
    
- `:set scrollbind`：重新锁定滚动条并重新对齐。
    

---

## 4. 快速跳转到差异点

在修改文件时，Vimdiff 提供了快捷键来快速跳转到差异点：

- `]c`：跳转到下一个差异点。
    
- `[c`：跳转到上一个差异点。
    
- `n]c`：跳过 `n` 个差异点，跳转到下一个差异点。
    
- `n[c`：跳过 `n` 个差异点，跳转到上一个差异点。
    

---

## 5. 文件合并

Vimdiff 提供了便捷的文件合并功能，以下是两个常用命令：

- `dp`（diff put）：将当前文件的内容复制到另一个文件中。
    
- `do`（diff get）：将另一个文件的内容复制到当前文件中。
    

---

## 6. 手动修改文件

如果需要手动修改文件，可以使用以下快捷键跳转到不同的窗口：

- `Ctrl-w`：跳转到下一个窗口。
    
- `Ctrl-h`：跳转到左边窗口。
    
- `Ctrl-j`：跳转到下方窗口。
    
- `Ctrl-k`：跳转到上方窗口。
    
- `Ctrl-l`：跳转到右边窗口。
    

---

## 7. 手动更新差异

在修改文件后，如果 Vim 没有自动刷新差异，可以手动更新：

vim复制

```vim
:diffupdate
```

---

## 8. 折叠无差异项

Vim 默认会折叠无差异的行，以帮助用户更清晰地查看差异部分。也可以手动展开或折叠：

- `zo`：展开折叠的无差异项。
    
- `zc`：折叠无差异项。
    

---

## 9. 修改上下文行数

Vim 默认显示 6 行上下文，可以根据需要修改上下文行数：

vim复制

```vim
:set diffopt=context:n  # 设置显示 n 行上下文
```

---

## 实例演示

假设我们有两个文件 `file1.txt` 和 `file2.txt`，内容如下：

**file1.txt**:

复制

```
Line 1
Line 2
Line 3
```

**file2.txt**:

复制

```
Line 1
Line 2 modified
Line 3
```

使用 `vimdiff file1.txt file2.txt` 启动后，Vimdiff 会自动显示两个文件的差异。通过快捷键 `[c` 和 `]c`，我们可以快速跳转到差异点，并使用 `dp` 或 `do` 来合并修改。

---

## 总结

Vimdiff 是一个功能强大的文件比较工具，它不仅提供了直观的界面，还支持高效的文件合并和手动修改。通过掌握上述技巧，用户可以更高效地处理文件差异，提升工作效率。