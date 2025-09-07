---
date: 2020-01-30 19:17:41
title: python之操作列表
createTime: 2020-01-30T11:17:41.000Z
permalink: /program/8wzrr
categories:
  - python
tags:
  - for
  - range
  - 元组
coverImg: https://img.onedayxyy.cn/images/TeekCover/16.webp
---

  1. 用for遍历整个列表 
```python

>>> cells =['cellA', 'cellB', 'cellC', 'cellD'] 
>>> for cel in cells: 
... print(cel) 
... cellA cellB cellC cellD
```
  2. For循环中加入操作 
```python

>>> cells =['cellA', 'cellB', 'cellC', 'cellD'] 
>>> for cel in cells: 
... print('cells list include ' + cel + '.') 
... cells list include cellA. cells list include cellB. cells list include cellC. cells list include cellD.
```
  3. For循环后加入操作 
```python

>>> cells =['cellA', 'cellB', 'cellC', 'cellD'] 
>>> for cel in cells: 
... print('cells list include ' + cel + '.') 
... 
>>> print('that is all cells') cells list include cellA. cells list include cellB. cells list include cellC. cells list include cellD. that is all cells 
```
  4. For循环在某一范围"使用range()" 
```python
>>> cells = ['cellA', 'cellB', 'cellC', 'cellD'] 
>>> for i in range(0,3): 
#实际中 0<=i<3 
... print(cells[i]) 
... cellA cellB cellC
``` 
range()函数可以指定步长 
```python

>>> cells = ['cellA', 'cellB', 'cellC', 'cellD','cellE','cellF','cellG'] 
>>> for i in range(0,7,2): 
... print(cells[i]) 
... cellA cellC cellE cellG
```
  5. 使用range()创建数字列表 
```python
>>> numbers = list(range(1,6)) 
>>> print(numbers) [1, 2, 3, 4, 5]
``` 
range()函数可以指定步长 
```python
>>> numbers = list(range(1,6,2)) 
>>> print(numbers) [1, 3, 5] 
```
  6. 数字列表的简单计算 
```python
>>> digitals = list(range(1,10)) 
>>> print(digitals) [1, 2, 3, 4, 5, 6, 7, 8, 9] 
>>> min(digitals) 1 
>>> max(digitals) 9 
>>> sum(digitals) 45
```
  7. 列表切片 
```python

>>> cells = ['cellA', 'cellB', 'cellC', 'cellD','cellE','cellF','cellG'] 
>>> print(cells[0:4]) #第一个至第3个 ['cellA', 'cellB', 'cellC', 'cellD'] 
>>> print(cells[:4]) #第一个至第3个 ['cellA', 'cellB', 'cellC', 'cellD'] 
>>> print(cells[2:]) #第3个至最后一个 ['cellC', 'cellD', 'cellE', 'cellF', 'cellG'] 
>>> print(cells[-2:]) #倒数第2个至最后一个 ['cellF', 'cellG']
```
  8. 遍历切片 
```python
>>> cells = ['cellA', 'cellB', 'cellC', 'cellD','cellE','cellF','cellG'] 
>>> for cel in cells[:4]: 
... print(cel) 
... cellA cellB cellC cellD
```
  9. 复制列表 
```python
>>> cells = ['cellA', 'cellB', 'cellC', 'cellD','cellE','cellF','cellG'] 
>>> another = cells[:] 
>>> print(another) ['cellA', 'cellB', 'cellC', 'cellD', 'cellE', 'cellF', 'cellG']
```
  10. 定义元组 元组用圆括号表示，其元素不可更改，但可以重新定义，可以用索引访问。 
```python
>>> dimenssions = (200, 300) 
>>> print(dimensions[0]) 200 
>>> print(dimensions[1]) 300
```
  11. 遍历元组 
```python
>>> dimensions = (200, 300) 
>>> for dim in dimensions: 
... print(dim) 
... 200 300
```
  12. 修改元组变量 
```python
>>> dimensions = (200, 300) 
>>> for dim in dimensions: 
... print(dim) 
... 200 300
``` 
重新定义 
```python
>>> dimensions = (400, 500) 
>>> for dim in dimensions: 
... print(dim) 
... 400 500
```
