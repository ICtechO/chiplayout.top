---
date: 2012-06-27 02:16:08
title: wordpress默认主题twentyeleven修改（二）：wp_head()
createTime: 2012-06-26T18:16:08.000Z
permalink: /wordpress/y6wq8
categories:
  - wordpress
tags:
  - wordpress
  - wp_head()
coverImg: https://img.onedayxyy.cn/images/TeekCover/17.webp
---

用浏览器查看wordpress默认主题twentyeleven时发现网页head区域有许多链接，仔细看了下有wordpress的版本号，首页，文章及评论的Feed地址，首页、前后文、第一篇文章及相邻文章的链接，还有离线发布接口。这些冗余的链接要么不利于SEO，要么具有不安全因素，所以将其加以优化有着一定的必要性。可是打开主题header.php并发现不了这些链接。其实他们都是由wp_head()函数引入的，但wp_head()是不能随便删掉的，有些插件需要它的支持。但是，我们可以在functions.php中加入以下代码进行wp_head()的优化，每一句的作用已在后面注明，可以根据需要进行删减。
```php
<?php
remove_action( 'wp_head', 'wp_generator' );     //移除wordpress版本号  
remove_action( 'wp_head', 'rsd_link' );            //离线编辑接口  
remove_action( 'wp_head', 'wlwmanifest_link' );    //针对widows live write的离线发布链接  
remove_action( 'wp_head', 'index_rel_link' );    //移除首页链接  
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );//移除前后文链接  
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );//移除第一篇文章链接  
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );//移除相邻文章链接  
remove_action( 'wp_head', 'rel_canonical' );//移除Canonical标记  
remove_action( 'wp_head', 'feed_links', 2 );//移除文章Feed   
remove_action( 'wp_head', 'feed_links_extra', 3 );//移除评论Feed 

?>
```