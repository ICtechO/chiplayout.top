---
date: 2025-08-17 04:35:47
title: Python类特殊成员
createTime: 2025/02/08 22:11:59
permalink: /program/12l0n
categories:
  - python
coverImg: https://img.onedayxyy.cn/images/TeekCover/17.webp
---
Python 类中，凡是以双下划线 "__" 开头和结尾命名的成员（属性和方法），都被称为类的特殊成员（特殊属性和特殊方法）。例如，类的 __init__(self) 构造方法就是典型的特殊方法。

Python 类中的特殊成员，其特殊性类似 C++ 类的 private 私有成员，即不能在类的外部直接调用，但允许借助类中的普通方法调用甚至修改它们。如果需要，还可以对类的特殊方法进行重写，从而实现一些特殊的功能。

当然，除了 __init__(self) 之外，Python 类中还含有很多特殊成员，包括 __del__(self)、__new__(self) 等，本章会一一为你进行详细的讲解。

本章内容：

1. [Python __new__()方法详解](https://c.biancheng.net/view/5484.html)

2. [Python __repr__()方法：显示属性](https://c.biancheng.net/view/2367.html)

3. [Python __del__()方法：销毁对象](https://c.biancheng.net/view/2371.html)

4. [Python __dir__()用法：列出对象的所有属性（方法）名](https://c.biancheng.net/view/2372.html)

5. [Python __dict__属性：查看对象内部所有属性名和属性值组成的字典](https://c.biancheng.net/view/2374.html)

6. [Python setattr()、getattr()、hasattr()函数用法详解](https://c.biancheng.net/view/2378.html)

7. [Python issubclass和isinstance函数：检查类型](https://c.biancheng.net/view/2298.html)

8. [Python __call__()方法（详解版）](https://c.biancheng.net/view/2380.html)

9. [什么是运算符重载，Python可重载运算符有哪些？](https://c.biancheng.net/view/5739.html)

10. [Python重载运算符实现自定义序列](https://c.biancheng.net/view/vip_6085.html)

11. [什么是迭代器，Python迭代器及其用法](https://c.biancheng.net/view/5419.html)

12. [Python项目实战之迭代器实现字符串的逆序输出](https://c.biancheng.net/view/vip_6086.html)

13. [Python生成器详解](https://c.biancheng.net/view/2393.html)

14. [Python生成器（send，close，throw）方法详解](https://c.biancheng.net/view/vip_7092.html)

15. [Python @函数装饰器及用法（超级详细）](https://c.biancheng.net/view/2270.html)

16. [Python装饰器的应用场景](https://c.biancheng.net/view/vip_6087.html)
[3-variable](3-variable.md)
