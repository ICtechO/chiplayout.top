---
date: 2014-12-24 07:31:26
title: wordpress首页不显示置顶文章
createTime: 2014-12-23T23:31:26.000Z
permalink: /wordpress/xd3am
categories:
  - ALL
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

更新到了最新的wordpress 4.1, 新主题 twentyfifteen 也带了更好的移动体验。 但是置顶文章占去了文章列表的第一页，不想让置顶文章在前面显示了， 让所有文章按照时间顺序显示。 查询了wordpress的 wp_query()函数， 有一段就是介绍don't show sticky posts(不显示置顶文章), 官方的说明也顺便解决了使用wp_query()不能翻页的问题。代码如下。 
将 
```php
while ( have_posts() ) : the_post();
```
改为 
```php 
$paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1; 
$args = array( 'ignore_sticky_posts' => 1, 'post__not_in' => get_option( 'sticky_posts' ), 'posts_per_page' => get_option( 'posts_per_page'), 'paged' => $paged, );
$query = new WP_Query( $args ); 
while ( $query->have_posts() ) : 
	$query->the_post(); 
```
