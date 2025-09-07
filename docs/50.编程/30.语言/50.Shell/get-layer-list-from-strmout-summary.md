---
date: 2025-08-17 04:35:48
title: 使用 `awk` 从strmout summary提取layer list
createTime: 2025/02/24 21:38:41
permalink: /program/aerzf
categories:
  - shell
tags:
  - awk
  - layers
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

在日常编程和数据处理中，我们经常需要从文本文件中提取特定部分的内容。例如，提取某个特定标记之间的数据，或者处理日志文件中的特定段落。对于这类任务，`awk` 是一个非常强大且高效的工具。它不仅语法简洁，而且执行效率高，尤其适合处理大型文本文件。

## 问题背景

假设我们有一个文stream out summary，文件中包含多个部分，我们需要提取从'Statistics of Layers'开始到第三个分隔行之间的内容。例如，文件内容如下：

```plaintext
adf
b
dadf
da

Statistics of Layers
---------------------------------------------------
A    B    C    D
---------------------------------------------------
A1   B1   C1   D1
A2   b2   c2   d2
A3   b3   c2   d3
---------------------------------------------------

Summary
...............
```

我们的目标是从 "Statistics of Layers" 开始，提取到第三个分隔行（由多个 `-` 组成）之间的内容。

## 使用 `awk` 解决问题

`awk` 是一个专门为文本处理设计的工具，它逐行读取文件内容，并可以根据模式匹配和条件判断来处理每一行。以下是实现上述需求的 `awk` 脚本：

### `extract.awk` 脚本
```bash
#!/usr/bin/awk -f

BEGIN {
    start_pattern = "Statistics of Layers"  # 定义起始标记
    sep_pattern = "^-+$"                   # 定义分隔行的模式（由多个 - 组成）
    dash_count = 0                         # 初始化分隔行计数器
    in_section = 0                         # 初始化状态标志
}

# 检查是否是起始行
$0 ~ start_pattern {
    in_section = 1  # 进入目标区域
    next           # 跳过当前行
}

# 如果在目标区域内
in_section {
    # 检查是否是分隔行
    if ($0 ~ sep_pattern) {
        dash_count++  # 分隔行计数器加 1
        if (dash_count == 3) {
            exit  # 如果是第三组分隔行，退出脚本
        }
    } else {
        print $0  # 打印目标行
    }
}
```

### 脚本解释
1. **`BEGIN` 块**：
   - 定义起始标记 `start_pattern` 和分隔行模式 `sep_pattern`。
   - 初始化分隔行计数器 `dash_count` 和状态标志 `in_section`。

2. **起始行匹配**：
   - 当某一行匹配起始标记时，设置 `in_section` 为 1，表示进入目标区域。

3. **目标区域处理**：
   - 在目标区域内，检查每一行是否匹配分隔行模式。
   - 如果匹配分隔行，分隔行计数器加 1。
   - 如果分隔行计数器达到 3，退出脚本。
   - 如果不是分隔行，则打印当前行。

### 如何运行脚本
1. **保存脚本**：
   将上述内容保存为 `extract.awk` 文件。

2. **运行脚本**：
   ```bash
   awk -f extract.awk input_file > extracted_content.txt
   ```
   其中 `input_file` 是你的输入文件名，例如 `test2.txt`。

### 输出文件内容
```plaintext
A    B    C    D
---------------------------------------------------
A1   B1   C1   D1
A2   b2   c2   d2
A3   b3   c2   d3
```

## 为什么选择 `awk`？

1. **高效性**：
   - `awk` 是专门为文本处理设计的，逐行读取文件内容，不会将整个文件加载到内存中，因此非常适合处理大型文件。

2. **简洁性**：
   - `awk` 的语法简洁明了，能够用较少的代码实现复杂的文本处理逻辑。

3. **灵活性**：
   - `awk` 支持模式匹配、条件判断和变量操作，能够轻松处理各种复杂的文本格式。

## 总结

通过使用 `awk`，我们可以高效地从文本文件中提取特定内容，而无需编写复杂的脚本。`awk` 的强大功能和简洁语法使其成为文本处理任务中的首选工具。如果你在日常工作中需要处理文本文件，不妨尝试使用 `awk`，它可能会给你带来意想不到的便利和效率提升。
