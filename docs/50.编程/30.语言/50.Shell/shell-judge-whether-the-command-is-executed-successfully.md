---
date: 2022-12-09 17:56:16
title: shell判断命令是否执行成功
createTime: 2022-12-09T09:56:16.000Z
permalink: /program/20im9
categories:
  - shell
tags:
  - $?
  - shell
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

shell中可以通过判断$?是否为0来获取上一条shell命令的执行结果。如果成功就是0，失败为1。语句if [ $? -eq 0 ] 是判断if语句的上一个命令执行如果成功就执行if中的语句，否则就执行else中的内容。
    
    
    #在lvs.report中查找CORRECT
    grep "CORRECT" lvs.report
    if [ $? -ne 0 ]; then
            echo "LVS is not CORRECT"
    else
            echo "LVS is CORRECT"
            rm -rf svdb
    fi
