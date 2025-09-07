---
date: 2011-07-30 04:06:52
title: 利用linux tree命令移除*.cdslck文件脚本
createTime: 2011-07-29T20:06:52.000Z
permalink: /os/kivv7
categories:
  - OS
tags:
  - .cdslck
  - script
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

之前有篇文章已经说过在layout时产生.cdslck 文件的删除方法，今天再介绍一个利用脚本删除的方法。保存下面一段代码为 rmlcks.sh，并将其权限改为755，直接运行并确认就可以删除.cdslck文件了。

1. 该脚本用到了linux tree命令，如果你的系统中没有tree 先执行以下命令安装 tree  
```bash
sudo apt-get install tree
```
2. 请将以下代码保存为 rmlcks.sh  
```bash
#!/bin/sh  
tree -if | grep ‘cdslck’ > txt  
var=\`cat txt\`  
for i in $var; do  
rm -i $i  
done  
rm -i txt
```
3. 在Terminal窗口  
```bash
chmod 755 rmlcks.sh
```
4. 执行 rmlcks.sh  
```bash
./rmlcks.sh
```
	在Terminal窗口会输出查找结果，按 y 回车就可以删除.cdslck文件。 例如下面我做的一个test  
```bash
rm: remove regular empty file \`./test/eg1.cdslck’? y  
rm: remove regular empty file \`./test/eg2.cdslck’? y  
rm: remove regular empty file \`./test/eg3.cdslck’? y  
rm: remove regular file \`txt’? y
```

个人感觉还是很实用滴东西呵