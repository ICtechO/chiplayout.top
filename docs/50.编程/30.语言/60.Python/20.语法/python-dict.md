---
date: 2020-02-10 19:46:25
title: python之字典
createTime: 2020-02-10T11:46:25.000Z
permalink: /program/sjliz
categories:
  - python
tags:
  - clear
  - dictionary
  - pop
  - python
  - update
  - 字典
coverImg: https://img.onedayxyy.cn/images/TeekCover/12.webp
---

字典的定义，顾名思义，可以通过索引得到值。类似有很多不同的property，每个property对应各自的值。如：  

```python
>>> cell = {'name':'inv','type':'stdcell','length':'2um'}
>>> print(cell['name'])
inv
>>> print(cell['type'])
stdcell
```    

我们还可以调用字典类的构造函数dict(**kwargs)来定义一个字典，如：
    
    
```python
>>> cell = dict(name='inv',type='stdcell',length='2um')
```

如何查字典： 可以用方括号或get()函数。 
    
    
```python
>>> print(cell['type']) ##方法1
>>> print(cell.get('type')) ##方法2
```

字典中的元素个数
    
    
```python
>>> cell = {'name':'inv','type':'stdcell','length':'2um'}
>>> len(cell)
3
```

修改元素
    
    
```python
>>> cell = {'name':'inv','type':'stdcell','length':'2um'}
>>> cell['length'] ='3um'
>>> print(cell)
{'name': 'inv', 'type': 'stdcell', 'length': '3um'}
```
    

或者
    
    
```python
>>> cell_add = {'name':'nand2','height':'2um'}
>>> cell.update(cell_add)
>>> print(cell)
{'name': 'nand2', 'type': 'stdcell', 'length': '3um', 'height': '2um'}
#上面不仅可以更改name的值，还可以增加新键值。
```

删除元素
    
    
```python
>>> cell = {'name': 'nand2', 'type': 'stdcell', 'length': '3um', 'height': '2um'}
>>> cell.pop('height')
'2um'
>>> print(cell)
{'name': 'nand2', 'type': 'stdcell', 'length': '3um'}
>>> cell.clear() 
>>> print(cell)
{}
```

提取所有健或值
    
    
```python
>>> cell = {'name': 'inv', 'type': 'stdcell', 'length': '3um'}
>>> cell.keys()
dict_keys(['name', 'type', 'length'])
>>> cell.values()
dict_values(['inv', 'stdcell', '3um'])
>>> 
```

字典与列表的不同：

| 字典| 列表  
---|---|---  
序列| 无序，通过键来索引| 有序，用位置来索引。支持序列操作，如slice  
可变长度| 是|  是   
可修改|  是 |  是   
常用函数| get,keys,values,pop,update,clear| count,extend,index,insert,pop,remove,reverse,sort,clear
