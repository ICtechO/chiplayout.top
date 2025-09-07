---
date: 2023-12-01 07:26:10
title: c-shell/csh基础语法简介
createTime: 2023-11-30T23:26:10.000Z
permalink: /program/a459s
categories:
  - shell
tags:
  - c-shell
  - csh
  - cshell
  - shell
coverImg: https://img.onedayxyy.cn/images/TeekCover/6.webp
---

在unix系统中，常用的shell有sh，bash，csh/tcsh, ksh.

sh来自于systemV的Unix，是传统的Unix的shell，直到现在很多的系统管理员仍然喜欢使用sh。  
bash来自于BSD Unix，语法非常类似于C语言，所以通常有C/C++编程背景的开发人员最喜欢使用。  
ksh是对sh的扩展，且吸收了csh的一些有用的功能，但是由于开始ksh的license是AT&T，所以后来出现了很多的ksh的开源版本，例如mksh，pdksh等。  
bash是现在很多Linux的发行版中默认的shell，综合了其他shell的很多优点。  
下面描述csh的一些基本的语法(在sh环境中执行csh切换到csh环境)：

## 1） 变量

通过set来定义局部变量x,通过`$x`或`${x}`来使用变量x的值，`$%x`表示变量的值的长度, `$?x`来判断变量x是否设置，如设置则为1，否则为0。

```bash
set x = 5
echo $x
echo ${x}kg
echo $%x
```

  
全局变量的定义setenv v value 该变量将被此shell派生的所有子shell继承。

`$$`表示当前进程的PID， `$status` 或 `$?` 表示退出状态。

## 2）数组

定义数组`myarr`, 通过`$myarr[index]`来访问数组中的值，注意index是从1开始的。通过`$myarr`或`$myarr[*]`来访问数组所有的元素。通过`$#myarr`来查看元素的个数。

```bash
set myarr = (str1, str2,str3)
echo $myarr[2]
echo $myarr
echo $myarr[*]
```

## 3）命令替换

通过set x = `cmd`来执行命令，且结果赋值给变量。

```bash
set d = date
echo $d
echo $d[6]-$d[2]-$d[3]
```

## 4)命令行参数

通过`$argv[1]`,`$argv[2]`或`$1`,`$2`来访问命令行参数。命令行参数的个数为`$#argv`。

## 5）文件名扩展的元字符
```bash
只能使用?,*,[abc],[a-c]。  
```

## 6）IO重定向和管道

将命令的输出重定向到文件为>。  
将命令的输出重定向并追加到文件为>>。  
将命令的输入重定向到文件为<。 将命令的报错信息重定向到一个文件(cmd>/dev/tty)>&errors。  
将命令的输出和错误输出分别重定向(cmd > goodstuff) >& badstuff。

将命令的输出和报错信息重定向到一个文件cmd>&file。  
将命令的输出经管道发往另一个命令cmd|cmd.  
将命令的输出和报错信息经管道发往另一个命令cmd|&cmd。  
条件语句为 cmd && cmd 或 cmd || cmd。  
command<<WORD 表示将command的输入重定向为从第一个WORD处开始，到下一个WORD处之间的内容（即here文档）。

## 7）从键盘读取并保存到变量中

```bash
set var = $<
```

## 8)算术
```bash
@ var = 5 + 5
echo $var
@ v2 = $var + 3
echo $v2
```

## 9)代字符号扩展

`~username` 表示username的home目录。  


## 10)别名
```bash
alias m more 为more创建别名m。  
alias 列出所有的alias。  
unalias m 用来删除more的alias定义。
```

## 11)初始化文件

`.login` 在登录时执行的文件。  
`.cshrc` 在每次调用shell时都执行的文件。

## 12) label 和 goto

csh中没有函数的概念，使用类似windows批处理中的label和goto。
```bash
goto label
……
label:
….
```

## 13) if/else/switch/case
    
```bash
if(expression)then
	commands
endif

if {(command)} then
	commands
endif

if(expression) then
	commands
else if(expression) then
	commands
else
	commands
endif

switch("$value")
	case pattern1:
		commands
		breaksw
	case pattern2:
		commands
		breaksw
	default:
		commands
		breaksw
endsw
```    

## 14 while/foreach
    
```bash
while(expression)
	commands
	continue
	break
end

foreach var (wordlist)
	commands
end
```    

## 15、repeat

`repeat`表示重复执行后面的命令。
```bash
repeat 3 "echo helloworld"  
```


## 16、csh中设置环境变量PATH的方法

csh中使用path代替PATH，设置类似于数组的使用。

```bash
set path = ($path /home)  
echo $path  
echo $PATH  
```
    

## 17、source等价于其他shell中的.

`source`使得程序在当前的shell中被执行，而不是派生子进程来执行。

## 18、转义字符与单双引号

引号必须成对出现，而且必须在同一行上配对。可以用反斜杠来转义换行符，这样就能在下一行配对了。  
单引号可用于保护双引号，双引号也可以用来保护单引号。  
单引号保护除历史字符(！)之外的所有元字符不被解释。  
双引号保护除历史字符(！)，变量替换字符($)和反引号(用于命令替换)之外的所有元字符，使其不被解释。

## 19、历史command

`history`用来查看command执行的历史。  
`!!`用来执行上一条命令。

## 20、pushd和popd用来维护目录栈

## 21、csh -vx用来显示输入的原样和变量替换后的脚本，用来帮助调试。

## 22、在脚本中处理中断
    
```bash
onintr finish 
  <script continues here> 
finish: 
onintr - # Disable further interrupts 
echo Cleaning temp files 
exit 1
```

  
`onintr` 命令后跟一个标号名，finish是用户自定义的标号。如果发生中断，控制将被转移到finish标号。通常该行位于脚本的开头。除非当程序正在执行时按ctrl+C（中断键），此时控制将被转移到该标号。onintr - 表示屏蔽所有的中断，此时按下ctrl+C将会被忽略。   
  


## 23、noclobber 禁止覆盖变量，设定 $noclobber 预设变量改变输出重定向特性.   


变量设定语法 `set noclobber`   
取消变量设定语法 unset noclobber   
这个 noclobber 变量，它的功能便是停止重定向符号`>`的覆盖（overwiting）已存在文件以及符号`>>`要将字符写入一个不存在的文件时，自动产生该文件的特性。   
仅用两个例子让读者明白，设定后的实际使用状况。   


  * 例子一： 
```bash
% ps axu > testfile 
% set noclobber 
% echo "test set noclobber" > testfile 
testfile: File exists. 
% echo "test set noclobber" >! testfile 
% 
```

  * 例子二： 


```bash
% set noclobber 
% cat /etc/passwd >> nopass 
nopass: No such file or directory 
% cat /etc/passwd >>! nopass 
%
```


## 24\. 大写转小写

```bash
set inputString = "Hello World"
set lowerCaseString = `echo $inputString | tr '[:upper:]' '[:lower:]'`
echo $lowerCaseString
```    