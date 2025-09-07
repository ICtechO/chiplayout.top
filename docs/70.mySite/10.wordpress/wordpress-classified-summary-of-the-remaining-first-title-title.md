---
date: 2011-11-29 19:52:00
title: wordpress分类第一篇标题+摘要其余标题
createTime: 2011-11-29T11:52:00.000Z
permalink: /wordpress/solpd
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/6.webp
---

> 让wordpress某个分类下第一篇文章输出标题和摘要，而后面的只输出标题，这种形式广泛的应用在CMS布局的BLOG中，为大多WP站长所喜欢，以下代码就可以实现 获取ID=2的分类下第一篇文章并输出摘要 
```php
 <?php query_posts('showposts=1&cat=2′); 
 while (have_posts()) : 
	 the_post(); 
 ?> 
 <h3>
	<a href="<?php the_permalink() ?>" 
		title="<?php the_title(); ?>" rel="bookmark">
		<?php the_title(); ?>
	</a>
</h3> 
<?php the_excerpt('Continue Reading &raquo;'); ?>
<?php endwhile; ?> 
```
获取ID=2的分类下除第一篇后的四篇的标题

```php
 <?php query_posts('showposts=4&offset=1&cat=2′); 
	 while (have_posts()) : 
	 the_post(); 
 ?> 
 'showposts=4&offset=1′); 表示选取4篇文章，去除第一篇文章，也就是选取除去第一篇文章外的最新4篇文章
```
> 原文： http://www.wpbars.com/wordpress-new-post/
