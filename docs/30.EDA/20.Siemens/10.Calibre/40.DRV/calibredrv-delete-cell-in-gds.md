---
date: 2022-05-13 06:59:03
title: calibredrv 删除GDS中的cell
createTime: 2022-05-12T22:59:03.000Z
permalink: /eda/gidlj
categories:
  - calibredrv
tags:
  - calibredrv
  - delete cell
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---

```sh
set GDS_FILE /home/user/test.gds
set GDS_FILE_NEW /home/user/test.new.gds
set RCELL_LIST [ list \   b
cella \
cellb \
cellc \
]
set L [layout create $GDS_FILE -dt_expand -preservePaths -preserveTextAttributes -preserveProperties]
foreach RCELL $RCELL_LIST {
    $L delete cell $RCELL -deleteChildCells
    puts "delete cell $RCELL"
}
$L gdsout $GDS_FILE_NEW
```
