---
date: 2010-12-06 17:56:32
title: wordpress首页中不显示指定分类文章
createTime: 2010-12-06T09:56:32.000Z
permalink: /wordpress/zg6w6
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

想要如题效果，按以下方法，轻松搞定 在类似 
```php
<?php while (have_posts()) : the_post(); ?>
```
语句，即在 while循环之后加入如下语句 
```php
<?php if ((in_category('10')||in_category('11')||in_category('12')) && is_home() ) continue; ?> 
```
红色部分就是可自定义添加的，括号中的为指定分类的ID
