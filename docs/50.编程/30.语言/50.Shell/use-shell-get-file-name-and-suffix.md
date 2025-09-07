---
date: 2022-10-22 02:12:15
title: shell获取文件名和缀
createTime: 2022-10-21T18:12:15.000Z
permalink: /program/2s1rx
categories:
  - shell
tags:
  - shell
  - suffix
coverImg: https://img.onedayxyy.cn/images/TeekCover/12.webp
---

```bash
x="CHIP.cdl"
x_list=(`echo $x | tr '.' ' '`)
export suffix=${x_list[$((${#x_list[@]}-1))]}
export top=${x_list[$((${#x_list[@]}-2))]}

echo $suffix
cdl
echo $top
CHIP
```