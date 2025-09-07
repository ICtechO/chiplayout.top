---
date: 2011-06-16 08:51:32
title: WordPress 非插件实现五个常用功能
createTime: 2011-06-16T00:51:32.000Z
permalink: /wordpress/my0ai
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/18.webp
---

今天给大家分享**最新评论** ，**评论最多文章** ，**相关文章** ，**最新文章** ，**随机文章** 五个常用功能的代码调用。 [代码来源](http://www.saywp.com/wordpress/5-basic-function-in-wordpress-theme-without-using-plugins.html)

## 最新评论

在需要添加最新评论的地方插入如下代码则可： 
```php
<?php global $wpdb; 
$sql = "SELECT DISTINCT ID, post_title, post_password, comment_ID, comment_post_ID, comment_author, comment_date_gmt, comment_approved, comment_type,comment_author_url, SUBSTRING(comment_content,1,30) AS com_excerpt FROM $wpdb->comments LEFT OUTER JOIN $wpdb->posts ON ($wpdb->comments.comment_post_ID = $wpdb->posts.ID) WHERE comment_approved = '1' AND comment_type = '' AND post_password = '' ORDER BY comment_date_gmt DESC LIMIT 10"; 
$comments = $wpdb->get_results($sql); 
$output = $pre_HTML; 
foreach ($comments as $comment) { 
	$output .= "n<li>". "<a href="" . get_permalink($comment->ID)."#comment-" . $comment->comment_ID . "" title="on ".$comment->post_title . "">".strip_tags($comment->comment_author)."</a>" .": " .strip_tags($comment->com_excerpt)."</li>"; } 
	$output .= $post_HTML; echo $output; ?>
```

## 评论最多文章

在需要添加评论最多的文章列表地方插入如下代码则可： 

```html
<ul class="most-comments"> 
	<?php $result = $wpdb->get_results("SELECT comment_count,ID,post_title FROM $wpdb->posts ORDER BY comment_count DESC LIMIT 0 , 10"); 
	foreach ($result as $post) { 
		setup_postdata($post); 
		$postid = $post->ID; 
		$title = $post->post_title; 
		$commentcount = $post->comment_count; 
		if ($commentcount != 0) { 
	?> 
	<li>
		<a href="<?php echo get_permalink($postid); ?>" title="<?php echo $title ?>"> 
		<?php echo $title ?>
		</a> 
		(<?php echo $commentcount ?>)
	</li> 
	<?php 
	} } ?> 
</ul>
```

## 相关文章

是的，就是连相关文章列表我们也不需要插件支持，下面的代码会根据文章中的tag标签自动判断何篇文章与当前相关，而且相关性也很强！ 

```html
<ul> <?php $tags = wp_get_post_tags($post->ID); if ($tags) { $first_tag = $tags[0]->term_id; $args=array( 'tag__in' => array($first_tag), 'post__not_in' => array($post->ID), 'showposts'=>10, 'caller_get_posts'=>1 ); $my_query = new WP_Query($args); if( $my_query->have_posts() ) { while ($my_query->have_posts()) : $my_query->the_post(); ?> <li><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?> <?php comments_number(' ','(1)','(%)'); ?></a> </li> <?php endwhile; } } ?> </ul>
```

## 最新文章

调用代码如下 

```html
<?php $limit = get_option('posts_per_page'); $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; query_posts('showposts=' . $limit=7 . '&paged=' . $paged); $wp_query->is_archive = true; $wp_query->is_home = false; ?> <?php while(have_posts()) : the_post(); if(!($first_post == $post->ID)) : ?> <ul> <li><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></li> </ul> <?php endif; endwhile; ?>
```

## 随机文章

```html
<?php query_posts(array('orderby' => 'rand', 'showposts' => 1)); if (have_posts()) : while (have_posts()) : the_post(); the_title(); the_excerpt(); endwhile; endif; ?>
```

上面的5个功能是一般WordPress主题中被使用得最为频繁，而且在一个WordPress主题中内建这些功能其实很容易。 另外，使用这些简单的代码不仅让主题需要使用的插件得以减少，或者这还是那些正在寻找合适主题的朋友的愿望所在。 
