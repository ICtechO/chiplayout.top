---
date: 2013-11-04 02:25:59
title: Forced off yum process
createTime: 2013-11-03T18:25:59.000Z
permalink: /os/gyvs9
categories:
  - OS
tags:
  - yum
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

Sometimes when you use yum upgrade some of the files, the following occurs: 

> another app is currently holding the yum lock; waiting for it to exit ...

Can be forced off the yum processes: 

```sh
rm -f /var/run/yum.pd
```


Then you can use yum command.
