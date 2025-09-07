---
date: 2022-12-08 00:20:09
title: wordpress主题GeneratePress添加浏览次数
createTime: 2022-12-07T16:20:09.000Z
permalink: /wordpress/nryav
categories:
  - wordpress
tags:
  - generatepress
  - post
  - view
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---

首先在function.php最后面加入如下代码
    
```php
/* visited count */
function record_visitors()
{
	if (is_singular())
	{
	  global $post;
	  $post_ID = $post->ID;
	  if($post_ID)
	  {
		  $post_views = (int)get_post_meta($post_ID, 'views', true);
		  if(!update_post_meta($post_ID, 'views', ($post_views+1)))
		  {
			add_post_meta($post_ID, 'views', 1, true);
		  } 		
	  }
	}
}
add_action('wp_head', 'record_visitors');
 
///function：post_views
///comment：get reading times of the article
function post_views($before = '  ', $after = ' views', $echo = 1)
{
  global $post;
  $post_ID = $post->ID;
  $views = (int)get_post_meta($post_ID, 'views', true);
  if ($echo) echo $before, number_format($views), $after;
  else return $views;
}
```   

打开 inc/structure/post-meta.php, 第212行改为
```php
$byline = '<span class="byline">%1$s<span class="author%8$s" %5$s><span class="author-name"%7$s>%4$s</span></span></span> <span class="posted-on">%9$s</span>';
```    
第227行末尾加逗号，并新加行
```php
post_views()
```    
