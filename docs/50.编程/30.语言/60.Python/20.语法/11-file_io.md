---
date: 2025-08-17 04:35:47
title: Python文件操作(I/O)
createTime: 2025/02/08 22:11:59
permalink: /program/hzjmt
categories:
  - python
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---
# Python文件操作（I/O）

[< 上一节](https://c.biancheng.net/view/vip_6166.html)[下一节 >](https://c.biancheng.net/view/5690.html)

![Python文件操作（I/O）](https://c.biancheng.net/uploads/allimg/190228/2-1Z22Q51J9493.gif)和其它编程语言一样，Python 也具有操作文件（I/O）的能力，比如打开文件、读取和追加数据、插入和删除数据、关闭文件、删除文件等。

除了提供文件操作基本的函数之外，Python 还提供了很多模块，例如 fileinput 模块、pathlib 模块等，通过引入这些模块，我们可以获得大量实现文件操作可用的函数和方法（类属性和类方法），大大提供编写代码的效率。

本章内容：

1. [什么是文件路径，Python中如何书写文件路径？](https://c.biancheng.net/view/5690.html)

2. [Python绝对路径和相对路径详解](https://c.biancheng.net/view/5693.html)

3. [Python文件基本操作（入门必读）](https://c.biancheng.net/view/4709.html)

4. [Python open()函数详解：打开指定文件](https://c.biancheng.net/view/2544.html)

5. [以文本格式和二进制格式打开文件，到底有什么区别？](https://c.biancheng.net/view/vip_6167.html)

6. [Python read()函数：按字节（字符）读取文件](https://c.biancheng.net/view/2545.html)

7. [Python readline()和readlines()函数：按行读取文件](https://c.biancheng.net/view/2546.html)

8. [Python write()和writelines()：向文件中写入数据](https://c.biancheng.net/view/4758.html)

9. [Python close()函数：关闭文件](https://c.biancheng.net/view/4770.html)

10. [Python seek()和tell()函数详解](https://c.biancheng.net/view/4780.html)

11. [Python with as用法详解](https://c.biancheng.net/view/4817.html)

12. [什么是上下文管理器，Python with as底层原理详解](https://c.biancheng.net/view/vip_6169.html)

13. [Python pickle模块：实现Python对象的持久化存储](https://c.biancheng.net/view/5736.html)

14. [Python fileinput模块：逐行读取多个文件](https://c.biancheng.net/view/2547.html)

15. [Python linecache模块用法：随机读取文件指定行](https://c.biancheng.net/view/2553.html)

16. [Python pathlib模块用法详解](https://c.biancheng.net/view/2541.html)

17. [Python os.path模块常见函数用法（实例+详细注释）](https://c.biancheng.net/view/2542.html)

18. [Python fnmatch模块：用于文件名的匹配](https://c.biancheng.net/view/2543.html)

19. [Python os模块详解](https://c.biancheng.net/view/vip_6172.html)

20. [Python tempfile模块：生成临时文件和临时目录](https://c.biancheng.net/view/2560.html)
[3-variable](3-variable.md)
