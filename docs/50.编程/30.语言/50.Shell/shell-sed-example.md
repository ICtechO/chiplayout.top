---
date: 2021-04-01 08:58:59
title: 最常用的sed脚本
createTime: 2021-04-01T00:58:59.000Z
permalink: /program/l0elj
categories:
  - shell
tags:
  - sed
  - shell
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

sed最常用的就是查找替换生成新的文件，下面这个就是先把旧文件复制为新的，然后在新的中做替换
    
    
    #!/bin/bash
    if [ $# -ne 2 ];then
      echo "Usage:  $0 old-file new-file"
      exit
    fi
    cp $1 $2
    sed -i "s#xxx#111#" $2
    sed -i "s#yyy#222#" $2
    sed -i "s#zzz#333#" $2

运行一下看看结果
    
    
    %:cat a
    xxx
    yyy
    zzz
    %:./sed.sh a b
    cat b
    111
    222
    333
