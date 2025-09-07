---
date: 2023-01-16 05:17:32
title: shell下运行virtuoso的skill脚本
createTime: 2023-01-15T21:17:32.000Z
permalink: /eda/vw21p
categories:
  - EDA
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

与大多EDA工具一样，就是 nogui+replay, 具体如下
```sh
virtuoso -nograph -replay xxxx.il -log xxxx.log
```