---
date: 2010-12-01 17:47:23
title: 无插件wordpress自动生成缩略图
createTime: 2010-12-01T09:47:23.000Z
permalink: /wordpress/advqk
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

昨天试用WPINK这个主题，感觉能自动生成文章缩略图，无图则显示预设图片这个功能不错，所以就拿来主义，三步走。 
首先
要在 主题 的functions.php中加入以下代码 
```php
//Thumbnail 
if ( function_exists( 'add_theme_support' ) ) 
	add_theme_support( 'post-thumbnails' ); 
	//First Post Image function 
	catch_that_image() { 
		global $post, $posts; 
		$first_img = ''; 
		ob_start(); 
		ob_end_clean(); 
		$output = preg_match_all('/<img.+src=['"]([^'"]+)['"].*>/i', $post->post_content, $matches); 
		$first_img = $matches [1] [0]; 
		if(empty($first_img)){ 
			//Defines a default image 
			$site_url = bloginfo('template_url'); 
			$first_img = "$site_url/images/no-thumb.jpg"; 
		} 
	return $first_img; 
	} 
```
然后就是修改index.php 其次，在正文开始前加入以下代码（一般都能找到 
```php
<?php if ( function_exists("has_post_thumbnail") &）...
```
这样的一行，用下面的替换掉） 
```php
<?php if ( function_exists("has_post_thumbnail") && has_post_thumbnail() ) {
	the_post_thumbnail( 'thumbnail', array('class' => '**post-thumbnail** ')); 
?> 
<?php } else {?> 
	<a href="<?php the_permalink() ?>" title="<?php the_title(); ?>">
		<img src="<?php echo catch_that_image() ?>" alt="<?php the_title(); ?>" title="<?php the_title(); ?>" class="**post-thumbnail** " />
	</a>
 <?php } ?> 
```
 最后在CSS文件中定义一个 .post-thumbnail的类，他是定义缩略图的大小及边框等 样式 如： 
```css
 .post-thumbnail{ float:left; margin:0px 10px 0px 0px; padding:1px; width:160px; height:120px; border:1px solid #C5C5C5;}
```
