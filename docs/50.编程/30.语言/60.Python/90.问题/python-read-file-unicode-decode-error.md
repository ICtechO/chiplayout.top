---
date: 2020-02-05 02:42:04
title: Python读取文件时出现UnicodeDecodeError
createTime: 2020-02-04T18:42:04.000Z
permalink: /program/fhcrr
categories:
  - python
tags:
  - gbk
  - python
coverImg: https://img.onedayxyy.cn/images/TeekCover/5.webp
---

运行下面code时
    
```python    
with open('style.css','r',encoding='utf-8') as f:
	for line in f:
		print(line)
```
出现错误
    
```python     
UnicodeDecodeError: 'gbk' codec can't decode byte 0x9d in position 1947: illegal multibyte sequence
```
将open代码改为
    
```python    
with open('style.css','r',encoding='utf-8') as f:
	for line in f:
		print(line)
```
