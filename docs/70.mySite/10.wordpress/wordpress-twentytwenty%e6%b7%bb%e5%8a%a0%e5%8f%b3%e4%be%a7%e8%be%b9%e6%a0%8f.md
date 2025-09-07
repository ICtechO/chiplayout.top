---
date: 2020-02-10 08:36:17
title: wordpress twentytwenty添加右侧边栏
createTime: 2020-02-10T00:36:17.000Z
permalink: /wordpress/rz4po
categories:
  - wordpress
tags:
  - sidebar
  - twentytwenty
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

header.php最后加入
    
```php
get_template_part( 'template-parts/modal-menu' );
?><div class="site-wrap"><?php
```    

删除index.php中的
    
```php
<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>
```

```php
//footer.php中<header>标签前加入
</div>
<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>
```

funtions.php找到下面code

```php
// Footer #2.
register_sidebar(
	array_merge(
		$shared_args,
		array(
			'name'        => __( 'Footer #2', 'twentytwenty' ),
			'id'          => 'sidebar-2',
			'description' => __( 'Widgets in this area will be displayed in the second column in the footer.', 'twentytwenty' ),
		)
	)
);
``` 

后面插入
```php
// Footer #0.
register_sidebar(
	array_merge(
		$shared_args,
		array(
			'name'        => __( 'Footer #0', 'twentytwenty' ),
			'id'          => 'sidebar-0',
			'description' => __( 'Widgets in this area will be displayed in the second column in the side.', 'twentytwenty' ),
		)
	)
);
```

```css
media ( min-width: 1000px ) {
```
改为
```css

@media ( min-width: 1000px ) {

#site-wrap {max-width: 100rem; width: 100rem; margin: 0 auto; overflow: hidden; display: block;}
/* Document Setup ------------------------ */
#site-content {max-width: 68rem; width: 100%; float: left;}
/* Helper Classes ------------------------ */
#site-sidebar {max-width: 30rem; width: 100%; float: right;}
```    