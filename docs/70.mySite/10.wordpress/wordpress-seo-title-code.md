---
date: 2011-07-16 06:35:54
title: SEO必备wordpress title优化代码
createTime: 2011-07-15T22:35:54.000Z
permalink: /wordpress/bhcr1
categories:
  - wordpress
tags:
  - seo
  - title
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/12.webp
---

一段强大的SEO必备wordpress title优化代码，可以实现首页，搜索结果，404，存档，文章，页面，分类，标签等标题以不同格式出现，例如我的网点名称：芯片版图 - CHIPLAYOUT.net, 站点描述：致力于IC版图知识，打造全方位IC Layout 交流平台！ 示例如下： 

  * **首页** – 芯片版图 - CHIPLAYOUT.net | 致力于IC版图知识，打造全方位IC Layout 交流平台！
  * **搜索结果** – Search Results for wordpress - 5 articles
  * **404 (Error) Page** – 芯片版图 - CHIPLAYOUT.net | 404 Nothing Found
  * **Author Archives** – 芯片版图 - CHIPLAYOUT.net | Author Archives
  * **Single Post** – SEO必备wordpress title优化代码 | wordpress | 芯片版图 - CHIPLAYOUT.net
  * **Page** – [关于本站](http://www.chiplayout.net/about) | 芯片版图 - CHIPLAYOUT.net
  * **Category Page** – wordpress | wordpress使用记录 | 芯片版图 - CHIPLAYOUT.net
  * **Monthly Archive** – 芯片版图 - CHIPLAYOUT.net | Archive | 七月, 2011
  * **Day Archive** – 芯片版图 - CHIPLAYOUT.net | Archive | 七月 14, 2011
  * **Tag** – wordpress | 芯片版图 - CHIPLAYOUT.net

强大吧，只要用以下代码替换 head.php中的 title段代码就可以了 
```php
<!–?php if ( is_home() ) { ?–> | <!–?php bloginfo(‘description’); ?–><!–?php } ?–>
<!–?php if ( is_search() ) { ?–>搜索结果： <!–?php /* Search Count */ $allsearch = &#038;new WP_Query("s=$s&#038;showposts=-1"); $key =wp_specialchars($s, 1); $count = $allsearch—>post_count; _e(”); echo $key; _e(‘ — ‘); echo $count . ‘ ‘; _e(‘篇’); wp_reset_query(); ?&gt;<!–?php } ?–>
<!–?php if ( is_404() ) { ?–>404 Nothing Found | <!–?php } ?–>
<!–?php if ( is_author() ) { ?–>作者归档 | <!–?php } ?–>
<!–?php if ( is_single() ) { ?–><!–?php wp_title(”); ?–> | <!–?php $category = get_the_category(); echo $category[0]—>cat_name; ?&gt; | <!–?php } ?–>
<!–?php if ( is_page() ) { ?–> | <!–?php wp_title(”); ?–><!–?php } ?–>
<!–?php if ( is_category() ) { ?–><!–?php single_cat_title(); ?–> | <!–?php } ?–>
<!–?php if ( is_month() ) { ?–> | 月份归档 <!–?php the_time(‘F, Y’); ?–><!–?php } ?–>
<!–?php if ( is_day() ) { ?–> | 日期归档 <!–?php the_time(‘F j, Y’); ?–><!–?php } ?–>
<!–?php if (function_exists(‘is_tag’)) { if ( is_tag() ) { ?–><!–?php single_tag_title("", true); ?–> | <!–?php } ?–> <!–?php } ?–>
```