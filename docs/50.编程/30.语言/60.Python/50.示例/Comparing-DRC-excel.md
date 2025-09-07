---
date: 2025-08-17 04:35:48
title: DRC结果对比：使用Python自动化Excel数据对比
createTime: 2025/02/25 23:00:42
permalink: /program/ihjfn
categories:
  - python
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---

在电子设计自动化（EDA）领域，DRC（Design Rule Check）是确保设计符合制造要求的关键步骤。然而，在实际工作中，我们常常需要对比不同版本的DRC结果，以找出差异和问题。手动对比这些结果不仅耗时，还容易出错。幸运的是，借助Python和Pandas库，我们可以轻松实现DRC结果的自动化对比。

### 场景描述

假设我们有两个DRC结果文件（`1.xlsx` 和 `2.xlsx`），它们的结构如下：

| A   | B   | C   |
|-----|-----|-----|
| A1  | 2   | 67  |
| A2  | 3   | 87  |
| A3  | 6   | 9999|
| ... | ... | ... |

我们需要实现以下目标：

1. 如果`1.xlsx`中的`A`列值能在`2.xlsx`的`A`列找到，则在同一行输出两个文件的`A`、`B`、`C`列。
2. 如果`1.xlsx`中的`A`列值在`2.xlsx`中找不到，则输出`1.xlsx`的`A`、`B`、`C`列，`2.xlsx`的列为空。
3. 如果`2.xlsx`中的`A`列值在`1.xlsx`中找不到，则输出`2.xlsx`的`A`、`B`、`C`列，`1.xlsx`的列为空。
4. 结果文件中，`A`、`B`、`C`列包含`1.xlsx`的所有内容，`D`、`E`、`F`列包含`2.xlsx`的所有内容。

### 实现方法

我们将使用Python的`pandas`库来处理Excel文件，并实现上述逻辑。

#### 安装依赖

在开始之前，请确保安装了以下Python库：
```bash
pip install pandas openpyxl
```

#### 脚本代码

以下是实现DRC结果对比的Python脚本：

```python
import pandas as pd

# 加载文件1和文件2
file1 = pd.read_excel('1.xlsx', header=None)
file2 = pd.read_excel('2.xlsx', header=None)

# 为两个文件添加列名
file1.columns = ['A', 'B', 'C']
file2.columns = ['A', 'B', 'C']

# 初始化结果列表
result = []

# 遍历文件1的每一行
for index1, row1 in file1.iterrows():
    id1, value1_1, value2_1 = row1['A'], row1['B'], row1['C']
    match = file2[file2['A'] == id1]
    
    if not match.empty:
        # 如果找到匹配的ID，获取文件2中的对应数据
        id2, value1_2, value2_2 = match.iloc[0]
        result.append([id1, value1_1, value2_1, id2, value1_2, value2_2])
    else:
        # 如果没有找到匹配的ID，将文件1的数据与空值组合
        result.append([id1, value1_1, value2_1, None, None, None])

# 遍历文件2的每一行，检查是否有未匹配的行
for index2, row2 in file2.iterrows():
    id2, value1_2, value2_2 = row2['A'], row2['B'], row2['C']
    if id2 not in file1['A'].values:
        # 如果文件2中的ID在文件1中找不到，将文件2的数据与空值组合
        result.append([None, None, None, id2, value1_2, value2_2])

# 将结果转换为DataFrame
result_df = pd.DataFrame(result, columns=['A', 'B', 'C', 'D', 'E', 'F'])

# 保存结果到Excel文件
result_df.to_excel('result.xlsx', index=False, header=True)

print("结果已保存到result.xlsx文件中。")
```

#### 输出结果

运行脚本后，生成的`result.xlsx`文件将包含以下结构：

| A   | B   | C   | D   | E   | F   |
|-----|-----|-----|-----|-----|-----|
| A1  | 2   | 67  | A1  | 2   | 67  |
| A2  | 3   | 87  | A2  | 3   | 87  |
| A3  | 6   | 9999| None| None| None|
| None| None| None| A4  | 55  | 77  |

### 总结

通过上述脚本，我们可以高效地对比两个DRC结果文件，并生成一个清晰的结果文件。这种方法不仅节省了时间，还减少了人为错误。你可以根据实际需求进一步扩展脚本，例如处理更复杂的数据结构或添加日志功能。

希望这篇文章对你有所帮助！如果你有任何问题或需要进一步的改进，请随时留言。

---

### 关于作者

[你的名字] 是一名专注于电子设计自动化（EDA）和数据分析的工程师，致力于通过技术提升工作效率。如果你对本文感兴趣，欢迎关注我的博客，获取更多相关内容。

---

你可以根据需要调整这篇博文的内容，比如添加更多背景信息、扩展代码功能，或者结合实际案例进行说明。