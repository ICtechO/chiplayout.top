---
date: 2020-01-29 18:17:04
title: Python之列表基础
createTime: 2020-01-29T10:17:04.000Z
permalink: /program/3ratr
categories:
  - python
tags:
  - append
  - del
  - insert
  - len
  - pop
  - python
  - remove
  - reverse
  - sort
  - sorted
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

  1. 定义列表 python中用中括号[]表示列表，列表元素用逗号（,）隔开 
```python
>>> cells = ['cellA','cellB','cellC'] >>> print(cells) ['cellA', 'cellB', 'cellC']
```
 定义一个空的列表 
```python
>>> cells = [] >>> print(cells) []
```
  2. 索引介绍及访问列表元素 python列表中，索引是从0开始的，而不是1，所以第一个元素索引为0。 
```python
>>> cells = ['cellA','cellB','cellC'] 
>>> print(cells[0]) cellA 
>>> print(cells[1]) cellB 
>>> print(cells[2]) cellC 
>>> print(cells[-1]) 
#指定索引[-1]可以让python返回列表最后一个元素。 
cellC 
>>> print(cells[-2]) 
#指定索引[-2]可以让python返回列表倒数第二个元素。 
cellB
```
  3. 修改列表元素 
```python
>>> cells = ['cellA','cellB','cellC'] 
>>> print(cells) ['cellA', 'cellB', 'cellC'] 
>>> cells[0] = 'blockA' 
>>> print(cells) ['blockA', 'cellB', 'cellC']
```
  4. 添加元素到列表"append" 
```python
>>> cells = ['cellA','cellB','cellC'] 
>>> cells.append('cellD') 
>>> print(cells) ['cellA', 'cellB', 'cellC', 'cellD']
```
  5. 列表中插入元素"insert" 
```python
>>> cells = ['cellA','cellB','cellC'] 
>>> cells.insert(0,'cellX') 
>>> print(cells) ['cellX', 'cellA', 'cellB', 'cellC']
```
  6. 删除列表中的元素"del" 
```python
>>> cells = ['cellA','cellB','cellC'] 
>>> del cells[0] >>> print(cells) ['cellB', 'cellC'] 
>>> cells = ['cellA','cellB','cellC'] 
>>> del cells[-1] >>> print(cells) ['cellA', 'cellB']
```
  7. 弹出列表中指定元素“pop()” 
```python
>>> cells = ['cellA','cellB','cellC'] 
>>> second_cell = cells.pop(1) 
>>> print('The second cell is '+ second_cell + '.') 
The second cell is cellB. 
>>> print(cells) ['cellA', 'cellC'] 
#索引[1]被弹出后已自动从列表中删除
```
  8. 根据索引值删除列表中元素“remove()” 
```python
>>> cells = ['cellA','cellB','cellC','cellA'] 
>>> cells.remove('cellA') 
>>> print(cells) ['cellB', 'cellC', 'cellA'] 
#revome只会删除第一个指定的值
```
  9. 永久性排序列表“sort()” 
```python
>>> cells = ['cellB','cellD','cellC','cellA'] 
>>> cells.sort() 
>>> print(cells) ['cellA', 'cellB', 'cellC', 'cellD']
```
sort（reverse=True)可以反向排序 
```python
>>> cells = ['cellB','cellD','cellC','cellC'] 
>>> cells.sort(reverse=True) 
>>> print(cells) ['cellD', 'cellC', 'cellC', 'cellB']
```
  10. 临时性排序列表"sorted()" sorted不会永久改变列表顺序，只是临时的 
```python
>>> cells = ['cellB','cellD','cellC','cellA'] 
>>> print('original list is:');print(cells) original list is: ['cellB', 'cellD', 'cellC', 'cellA'] 
>>> print('sorted list is:');print(sorted(cells)) sorted list is: ['cellA', 'cellB', 'cellC', 'cellD'] 
>>> print('original list is:');print(cells) original list is: ['cellB', 'cellD', 'cellC', 'cellA']
```
  11. 反转列表"reverse" 
```python
>>> cells =['cellA', 'cellB', 'cellC', 'cellD'] 
>>> print(cells) ['cellA', 'cellB', 'cellC', 'cellD'] 
>>> cells.reverse() 
>>> print(cells) ['cellD', 'cellC', 'cellB', 'cellA']
```
  12. 获取列表长度"len" 
```python
>>> cells =['cellA', 'cellB', 'cellC', 'cellD'] 
>>> len(cells) 4
```


