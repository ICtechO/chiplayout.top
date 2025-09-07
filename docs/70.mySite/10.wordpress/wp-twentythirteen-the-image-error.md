---
date: 2013-04-17 07:38:23
title: WP twentythirteen主题 the_image() error
createTime: 2013-04-16T23:38:23.000Z
permalink: /wordpress/t0mf9
categories:
  - wordpress
tags:
  - the_image()
  - twentythirteen
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/16.webp
---


第13行
```php
<?php the_image( 'twentythirteen-image-post' ); ?>
```

改为 
```php
<?php the_post_format_image( 'twentythirteen-image-post' ); ?>
```
