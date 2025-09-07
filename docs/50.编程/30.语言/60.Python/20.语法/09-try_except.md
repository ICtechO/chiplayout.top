---
date: 2025-08-17 04:35:47
title: Python异常处理
createTime: 2025/02/08 22:11:59
permalink: /program/atq6b
categories:
  - python
coverImg: https://img.onedayxyy.cn/images/TeekCover/17.webp
---
# Python异常处理机制

[< 上一节](https://c.biancheng.net/view/vip_6087.html)[下一节 >](https://c.biancheng.net/view/4593.html)

程序运行时常会碰到一些错误，例如除数为 0、年龄为负数、数组下标越界等，这些错误如果不能发现并加以处理，很可能会导致程序崩溃。

和 C++、Java 这些编程语言一样，Python 也提供了处理异常的机制，可以让我们捕获并处理这些错误，让程序继续沿着一条不会出错的路径执行。

> 可以简单的理解异常处理机制，就是在程序运行出现错误时，让 Python 解释器执行事先准备好的除错程序，进而尝试恢复程序的执行。

借助异常处理机制，甚至在程序崩溃前也可以做一些必要的工作，例如将内存中的数据写入文件、关闭打开的文件、释放分配的内存等。

Python 异常处理机制会涉及 try、except、else、finally 这 4 个关键字，同时还提供了可主动使程序引发异常的 raise 语句，本章都会为你一一讲解。

本章内容：

1. [什么是异常处理，Python常见异常类型（入门必读）](https://c.biancheng.net/view/4593.html)

2. [Python异常处理机制到底有什么用？](https://c.biancheng.net/view/vip_7101.html)

3. [Python try except异常处理详解（入门必读）](https://c.biancheng.net/view/4599.html)

4. [Python异常处理机制的底层实现](https://c.biancheng.net/view/vip_7103.html)

5. [Python try except else详解](https://c.biancheng.net/view/4600.html)

6. [Python try except finally：资源回收](https://c.biancheng.net/view/2316.html)

7. [Python异常处理机制结构详解](https://c.biancheng.net/view/vip_7107.html)

8. [Python raise用法（超级详细，看了无师自通）](https://c.biancheng.net/view/2360.html)

9. [Python sys.exc_info()方法：获取异常信息](https://c.biancheng.net/view/4611.html)

10. [Python traceback模块：获取异常信息](https://c.biancheng.net/view/2362.html)

11. [Python自定义异常类及用法](https://c.biancheng.net/view/vip_6088.html)

12. [Python异常机制使用细则，正确使用Python异常处理机制（入门必读](https://c.biancheng.net/view/vip_6089.html)

13. [Python logging模块用法快速攻略](https://c.biancheng.net/view/vip_6090.html)

14. [Python IDLE调试程序详解](https://c.biancheng.net/view/vip_6091.html)

15. [Python assert调试程序](https://c.biancheng.net/view/vip_6092.html)
[3-variable](3-variable.md)
