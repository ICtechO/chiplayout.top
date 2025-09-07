---
date: 2020-01-31 18:29:32
title: wordpress twentytwenty主题分类页面调用当前分类置顶文章
createTime: 2020-01-31T10:29:32.000Z
permalink: /wordpress/l7s8d
categories:
  - wordpress
tags:
  - twentytwenty
  - wordpress
  - 置顶
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

wordpress twentytwenty主题简单的风格还是值得尝试的，  
用下面的代码插入index.php的`</header>`标签后，就可以在分类页面调用当前分类置顶文章

```php
<?php
query_posts(array(
	"category__in" => array(get_query_var("cat")),
	"post__in" => get_option("sticky_posts"),
	'showposts' => 1,)
);
while(have_posts()) : the_post();
	$i++;
	if ( $i > 1 ) {
		echo '<hr class="post-separator styled-separator is-style-wide section-inner" aria-hidden="true" />';
	}
	get_template_part( 'template-parts/content', get_post_type() );
endwhile;
wp_reset_query();
?>
```    

另外，网上有好多在正常列表中排除置顶文章的代码，打眼一看就不好用啊，比如总共有3篇置顶文章，只显示一篇，另外两篇在正常列表中也被排除了。
