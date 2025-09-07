---
date: 2013-09-02 16:19:38
title: Linux程序Top 命令详解
createTime: 2013-09-02T08:19:38.000Z
permalink: /os/xo03h
categories:
  - OS
tags:
  - Linux
  - top
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---
top：动态观察程序的变化

使用权限：

所有使用者

语法格式：

top \[-\] \[d delay\] \[q\]

\[c\]\[/c\]

\[S\] \[s\] \[n\]

使用说明：

即时显示 process 的动态

主要参数：

\-d ：后面可以接秒数，就是整个程序画面更新的秒数。预设是 5 秒；

\-b ：以批次的方式执行 top ，还有更多的参数可以使用喔！通常会搭配数据流重导向来将批次的结果输出成为档案。

\-n ：与 -b 搭配，意义是，需要进行几次 top 的输出结果。

\-p ：指定某些个 PID 来进行观察监测而已。

在 top 执行过程当中可以使用的按键指令：

? ：显示在 top 当中可以输入的按键指令；

P ：以 CPU 的使用资源排序显示；

M ：以 Memory 的使用资源排序显示；

N ：以 PID 来排序喔！

T ：由该 Process 使用的 CPU 时间累积 (TIME+) 排序。

k ：给予某个 PID 一个讯号 (signal)

r ：给予某个 PID 重新制订一个 nice 值。

使用实例：

范例1：每两秒钟更新一次 top ，观察整体信息

\[code lang=”bash”\]  
\[root@linux ~\]# top -d 2  
top – 18:30:36 up 30 days, 7 min, 1 user, load average: 0.42, 0.48, 0.45  
Tasks: 163 total, 1 running, 161 sleeping, 1 stopped, 0 zombie  
Cpu(s): 4.7% us, 4.0% sy, 6.3% ni, 82.5% id, 0.4% wa, 0.1% hi, 2.0% si  
Mem: 1033592k total, 955252k used, 78340k free, 208648k buffers  
Swap: 1052216k total, 728k used, 1051488k free, 360248k cached  
<==如果加入 k 或 r 时，就会有相关的字样出现在这里喔！

PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND  
3981 apache 34 19 84012 11m 7352 S 17.3 1.2 0:00.09 httpd  
1454 mysql 16 0 289m 40m 2228 S 3.8 4.0 115:01.32 mysqld  
3985 dmtsai 15 0 2148 904 668 R 3.8 0.1 0:00.03 top  
1 root 16 0 3552 552 472 S 0.0 0.1 0:08.90 init  
2 root RT 0 0 0 0 S 0.0 0.0 0:52.76 migration/0  
3 root 34 19 0 0 0 S 0.0 0.0 0:03.01 ksoftirqd/0  
\[/code\]

范例2：将 top 的信息进行 2 次，然后将结果输出到 /tmp/top.txt

\[code lang=”bash”\]  
\[root@linux ~\]# top -b -n 2 > /tmp/top.txt\[/code\]

\# 这样一来，嘿嘿！就可以将 top 的信息存到 /tmp/top.txt 档案中了。  
范例3：假设 10604 是一个已经存在的 PID ，仅观察该程序

\[code lang=”bash”\]  
\[root@linux ~\]# top -d 2 -p10604  
top – 13:53:00 up 51 days, 2:27, 1 user, load average: 0.00, 0.00, 0.00  
Tasks: 1 total, 0 running, 1 sleeping, 0 stopped, 0 zombie  
Cpu(s): 0.0% us, 0.0% sy, 0.0% ni, 100.0% id, 0.0% wa, 0.0% hi, 0.0% si  
Mem: 385676k total, 371760k used, 13916k free, 131164k buffers  
Swap: 1020116k total, 880k used, 1019236k free, 95772k cached

PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND  
10604 root 16 0 5396 1544 1244 S 0.0 0.4 0:00.07 bash\[/code\]

top 也是个挺不错的程序观察工具！但不同于 ps 是静态的结果输出， top 这个程序可以持续的监测 (monitor) 整个系统的程序工作状态，例如上面的范例一所示啊！ 在预设的情况下，每次更新程序资源的时间为 5 秒，不过，可以使用 -d 来进行修改。 top 主要分为两个画面，上面的画面为整个系统的资源使用状态，基本上总共有六行， 显示的内容依序是：

• 第一行：显示系统已启动的时间、目前上线人数、系统整体的负载(load)。 比较需要注意的是系统的负载，三个数据分别代表 1, 5, 10 分钟的平均负载。 一般来说，这个负载值应该不太可能超过 1 才对，除非您的系统很忙碌。 如果持续高于 5 的话，那么…..仔细的看看到底是那个程序在影响整体系统吧！

• 第二行：显示的是目前的观察程序数量，比较需要注意的是最后的 zombie 那个数值，如果不是 0 ，嘿嘿！好好看看到底是那个 process 变成疆尸了吧？！

• 第三行：显示的是 CPU 的整体负载，每个项目可使用? 查阅。需要观察的是 id (idle) 的数值，一般来说，他应该要接近 100% 才好，表示系统很少资源被使用啊！ ^\_^。

• 第四行与第五行：表示目前的物理内存与虚拟内存 (Mem/Swap) 的使用情况。

• 第六行：这个是当在 top 程序当中输入指令时，显示状态的地方。 例如范例四就是一个简单的使用例子。  
至于 top 底下的画面，则是每个 process 使用的资源情况。比较需要注意的是：

• PID ：每个 process 的 ID 啦！

• USER：该 process 所属的使用者；

• PR ：Priority 的简写，程序的优先执行顺序，越小越早被执行；  
• NI ：Nice 的简写，与 Priority 有关，也是越小越早被执行；

• %CPU：CPU 的使用率；

• %MEM：内存的使用率；

• TIME+：CPU 使用时间的累加；