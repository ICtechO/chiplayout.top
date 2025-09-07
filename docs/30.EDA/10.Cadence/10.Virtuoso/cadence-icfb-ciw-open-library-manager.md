---
date: 2011-07-26 16:00:43
title: cadence icfb打开CIW自动弹出Library Manager
createTime: 2011-07-26T08:00:43.000Z
permalink: /eda/wn72d
categories:
  - EDA
tags:
  - ddsOpenLibManager()
coverImg: https://img.onedayxyy.cn/images/TeekCover/2.webp
---

据本人观察，大多数layouter在使用cadence时，输入icfb并打开CIW窗口后，接下来要做的事情就是去点Tools> Library Manager,虽然只需点两下鼠标，但如果能在CIW打开的同时能自动弹出 Library Manager 的窗口岂不更方便呢，只需要在 .cdsinit或leBindKeys.il中加一句代码就可以实现了。

  1. 在 .cdsinit中加入  
```cadence
ddsOpenLibManager()
```
  2. 在leBindKeys.il 加入  
```cadence
ddsOpenLibManager()
```



:::tip
O,L,M都是大写  
以上二选一！
:::
