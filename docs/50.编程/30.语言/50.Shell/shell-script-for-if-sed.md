---
date: 2021-03-23 08:03:32
title: shell脚本备忘
createTime: 2021-03-23T00:03:32.000Z
permalink: /program/kiu8z
categories:
  - shell
tags:
  - shell
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---


    #!/usr/bin/bash
    echo "hello world"
    #for 循环和C一样
    for ((i=1; i<11; i++))
      do
       if ((i<10)); then
         #变量赋值，等号前后没有空格
         tsk=test_0$i
       else
         tsk=test_$i
       fi
         #打印当前值
         echo $tsk
        #判断目录是否存在
        if [ -d $tsk ]; then
          rm  -rf $tsk
          echo "$tsk is exist, will delete and create new"
          mkdir $tsk
        else
          mkdir $tsk
          echo "$tsk is not exist, it will be created"
        fi
        #shell copy当前文件到新目录
        cp a b c d $tsk
        #shell进入新目录
        cd $tsk
        #shell sed替换xxx
        sed -i "s/xxx/$tsk/g" d
        #shell返回上次目录
        cd -
      done
    
