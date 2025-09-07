---
date: 2011-01-02 08:24:22
title: wordpress文章摘要字数限制
createTime: 2011-01-02T00:24:22.000Z
permalink: /wordpress/2k55v
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/7.webp
---

wordpress文章摘要字数限制和 [wordpress标题字数限制](http://www.chiplayout.net/?p=467) 的方法2是同一道理 用下面的代码即可解决  
    
```php
<?php echo mb_strimwidth(strip_tags(apply_filters('the_content', $post->post_content)), 0, 470,"......"); ?>
```   
   
