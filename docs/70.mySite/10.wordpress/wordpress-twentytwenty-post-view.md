---
date: 2020-02-11 06:11:01
title: wordpress twentytwenty主题访问计数
createTime: 2020-02-10T22:11:01.000Z
permalink: /wordpress/ad23i
categories:
  - wordpress
tags:
  - twentytwenty
  - wordpress
  - 访问计数
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

也不知道为什么wordpress官方主题中从来不加入文章访问计数，就像以前的ios从来不加android功能一样。2020换了wordpress twentytwenty主题，加入文章计数。

funtions.php中加入下面code
    
```php
    /* 访问计数 */
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
     
    /// 函数名称：post_views
    /// 函数作用：取得文章的阅读次数
    function post_views($before = '(点击 ', $after = ' 次)', $echo = 1)
    {
      global $post;
      $post_ID = $post->ID;
      $views = (int)get_post_meta($post_ID, 'views', true);
      if ($echo) echo $before, number_format($views), $after;
      else return $views;
    }
```   

inc/template-tags.php中找到
    
```php
// Comments link.
if ( in_array( 'comments', $post_meta, true ) && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {

	$has_meta = true;
	?>
	<li class="post-comment-link meta-wrapper">
		<span class="meta-icon">
			<?php twentytwenty_the_theme_svg( 'comment' ); ?>
		</span>
		<span class="meta-text">
			<?php comments_popup_link(); ?>
		</span>
	</li>
	<?php

}
```   

在其后面插入
```php
// Views.
if ( in_array( 'views', $post_meta, true ) ) {

	$has_meta = true;
	?>
	<li class="post-views meta-wrapper">
		<span class="meta-icon">
			<span class="screen-reader-text"><?php _e( 'Post views', 'twentytwenty' ); ?></span>
			<?php twentytwenty_the_theme_svg( 'views' ); ?>
		</span>
		<span class="meta-text">
			<?php post_views(' ', ' views'); ?> 
		</span>
	</li>
	<?php

}
```

还是在inc/template-tags.php中找到下面一段加入**views**  
下面code中已加好
    
```php
$post_meta = apply_filters(
	'twentytwenty_post_meta_location_single_top',
	array(
		'author',
		'post-date',
		'comments',
		'sticky',
		'categories',
		'views',
	)
);
```

这样就应该能看到计数了

如果还想丰富点，能加个svg图标，就需要打开classes/class-twentytwenty-svg-icons.php, 找到下面的array
    
```php
public static $ui_icons = array(
```    

在其中加入下面的code
    
```php

'views'          => '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 32 32	">
<path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
</svg>',
```
