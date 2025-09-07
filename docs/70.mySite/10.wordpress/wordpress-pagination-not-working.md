---
date: 2021-09-05 00:52:36
title: wordpress分页失效治疗方法
createTime: 2021-09-04T16:52:36.000Z
permalink: /wordpress/dx6dy
categories:
  - 未分类
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

当我们在页面使用了query_posts时，wordpress默认分页会失效。拿我的页面治疗过程来说，首先要在循环前重新定义page值，其次在function文件中加入分页函数，最后修改CSS.

下面就是第一步代码，我是在page页if（have_post)前加的，其实$args中只要paged就行，其它自己定，要点是paginate();  
wp_reset_query();这两是在主循环后的。
    
    
    <?php
        //Fix homepage pagination
        if ( get_query_var('paged') ) { $paged = get_query_var('paged'); } else if ( get_query_var('page') ) {$paged = get_query_var('page'); } else {$paged = 1; }
    
        $args = array(  'orderby'=>'date', 'paged' => $paged);
        $wp_query = new WP_Query();
        $wp_query->query( $args );
        while ($have_posts()) : the_post(); 
    ?>
    
    <!--your loop stuff here -->
    
    <?php endwhile; ?>
    <nav>
       <?php paginate();
       wp_reset_query(); ?>
    </nav>

下面的加入到function.php, 但第17行的'page/%#%/'和固定链接有关系，%#%是页码，有的可能是'?page=%#%/'
    
    
    '?page=%#%/'
    
    
    function arke_paginate() {
    	global $wp_query, $wp_rewrite;
    	$wp_query->query_vars['paged'] > 1 ? $current = $wp_query->query_vars['paged'] : $current = 1;
    
    	$pagination = array(
    	    'base' => @add_query_arg('page','%#%'),
    	    'format' => '',
    	    'total' => $wp_query->max_num_pages,
    	    'current' => $current,
    	    'show_all' => true,
    	    'type' => 'list',
    	    'next_text' => '&raquo;',
    	    'prev_text' => '&laquo;'
    	    );
    
    	if( $wp_rewrite->using_permalinks() )
    	    $pagination['base'] = user_trailingslashit( trailingslashit( remove_query_arg( 'page', get_pagenum_link( 1 ) ) ) . 'page/%#%/', 'paged' );
    
    	if( !empty($wp_query->query_vars['s']) )
    	    $pagination['add_args'] = array( 's' => get_query_var( 's' ) );
    	echo '<nav class="navigation pagination">';
    	echo paginate_links( $pagination );
    	echo '</nav>';
    }

下面是美化css了，加入了主题style.css中就可以，具体效果看个人爱好了
    
    
    ul.page-numbers {
        margin: 20px 0 10px;
        width: 100%;
        padding: 0;
        font-size: 12px;
        line-height: normal;
        clear: both;
        float: left;
    }
    
    ul.page-numbers li {
           float: left;
           list-style: none;
        }
    
    ul.page-numbers a,
    ul.page-numbers span {
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        background: -webkit-gradient(linear, left top, left bottom, from(#E4E3E3), to(#FFFFFF));
        background: -moz-linear-gradient(top,  #E4E3E3,  #FFFFFF);
        filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#E4E3E3', endColorstr='#FFFFFF');
        padding: 3px 4px 2px 4px; 
        margin: 2px;
        text-decoration: none;
        border: 1px solid #ccc;
        color: #666;
    }
    
    ul.page-numbers a:hover,
    ul.page-numbers span.current {  
        border: 1px solid #666;
        color: #444;
    }
