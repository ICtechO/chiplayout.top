---
date: 2015-03-31 08:43:16
title: wordpress Fatal error  Allowed memory size of 134217728 bytes exhausted
createTime: 2015-03-31T00:43:16.000Z
permalink: /wordpress/9kz0k
categories:
  - wordpress
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---

各种办法都试了个遍，最后只有编辑 php.ini 文件的办法有作用 打开主机管理，选择自定义 php.ini, 默认memory_limit = 128M， Ok。
