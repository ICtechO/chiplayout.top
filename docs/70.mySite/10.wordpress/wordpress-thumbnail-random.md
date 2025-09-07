---
date: 2011-12-10 01:50:32
title: wordpress文章自动缩略图无图随机图片
createTime: 2011-12-09T17:50:32.000Z
permalink: /wordpress/yavb6
categories:
  - wordpress
tags:
  - thumbnail
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/5.webp
---

为文章添加缩略图是wordpress本有的一个特色功能，可并不是每篇文章都有图可加，且每次都记得添加，下面介绍wordpress文章自动截取文章内第一张图片为缩略图，如果没有图片则随机获取预置的图片。这与以往不同点就是让默认图片随机选择，而不是以往的只显示一张图的那。 首先在主题images文件夹中建立文件夹， random-thumb, 里面放放置 0.jpg, 1.jpg, 2.jpg ....更多些命名规则的图片 将以下代码加入function.php中 

```php
if ( function_exists('add_theme_support') )
	add_theme_support('post-thumbnails');
	function catch_first_image() {
		global $post, $posts;$first_img = '';
		ob_start();
		ob_end_clean();
		$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
		$first_img = $matches [1] [0];
		if(empty($first_img)){
			$random = mt_rand(1, 10);
			echo get_bloginfo ( 'stylesheet_directory' );
			echo '/images/random/'.$random.'.jpg';
		}
		return $first_img;
	}
;
```

```php
<?php echo catch_first_image() ?>
```
