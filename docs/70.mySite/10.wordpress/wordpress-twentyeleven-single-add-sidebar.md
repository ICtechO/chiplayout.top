---
date: 2012-05-04 05:14:17
title: wordpress自带Twentyeleven文章页添加侧边栏
createTime: 2012-05-03T21:14:17.000Z
permalink: /wordpress/1ujj4
categories:
  - wordpress
tags:
  - sidebar
  - twentyeleven
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

wordpress自带的Twentyeleven主题文章页面是没有侧边的，可以通过简单胡修改css文件实现添加，但要保留不带侧边的页面模板，改动就比较大了。
*注：twentyeleven的页面模板有不带边栏和带边栏两种。
今天发现Twentyeleven有无侧边可以通过修改functions.php中的twentyeleven_body_classes( $classes )函数做如下修改并在相关页面添加get_sidebar();就可以实现侧边了。 

```php
function twentyeleven_body_classes( $classes ) {
	if ( function_exists( ‘is_multi_author’ ) && ! is_multi_author() )  
		$classes[] = ‘single-author’;
	if ( is_page() && ! is_page_template( ‘showcase.php’ ) && ! is_page_template( ‘sidebar-page.php’ ))  
		$classes[] = ‘singular’;
	return $classes;  
}  
add_filter( ‘body_class’, ‘twentyeleven_body_classes’ );
```

最后打开要添加sidebar的文件，如single.php,在前加上就OK了 
