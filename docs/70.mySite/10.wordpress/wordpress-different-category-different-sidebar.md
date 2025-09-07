---
date: 2011-07-23 01:53:23
title: wordpress不同分类文章页面调用不同的边栏
createTime: 2011-07-22T17:53:23.000Z
permalink: /wordpress/lh34a
categories:
  - wordpress
tags:
  - seo
  - widget
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

自从用上了wordpress，每天都在SEO, 什么无插件，纯代码，技巧等等，抓住就用啊。今天发现用的主题始终是一样的边栏，感觉好单调， 强大的 if else 再次给力，实现了[《wordpress不同分类文章页面调用不同的边栏》](http://www.chiplayout.net/wordpress-different-category-different-sidebar.html "wordpress不同分类文章页面调用不同的边栏") ，方法如下。 打开主题中的 single.php 找到 

```php
<?php get_sidebar();?> 
```
替换为下面的代码 
```php
<?php get_sidebar();?>  //[!code --]
<?php if ( in_category(1) ) { 
	include_once('sidebar1.php'); 
} elseif (in_category(2)) { 
	include_once('sidebar2.php'); 
} elseif  (in_category(3) ) { 
	include_once('sidebar3.php'); 
} else { 
	include_once('sidebar.php'); 
} ?>
```
