---
date: 2011-11-29 04:42:43
title: 让wordpress分类循环起来
createTime: 2011-11-28T20:42:43.000Z
permalink: /wordpress/3xxpj
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/6.webp
---

在wordpress中，多数情况下我们在做CMS布局时都是一个分类一个分类的单独定制，使得代码变得杂乱，使得验以理清和修改。通过foreach我们可以让wordpress分类循环起来，再将文章循环嵌套在分类循环中，我们就可以实现简单的CMS布局。如下图所示：

![image](/public/76ff2983a17c_12293/image.png)

代码如下：其中 用到了get_categories()函数，默认全部分类，要指定分类则如
```php
get_categories('include=5,7,10,8')，数字即为分类ID
```
    
    
```php
$categories = get_categories('include=5,7,10,8');// 得到所有分类列表
foreach ($categories as $cat) { // 循环所有分类
$catid = $cat->cat_ID;// 得到分类ID
query_posts("showposts=5&cat=$catid"); // 得到分类下10篇最新文章
?>
```