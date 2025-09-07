---
date: 2011-08-13 01:11:21
title: 无插件实现wordpress文章开头及末尾添加广告
createTime: 2011-08-12T17:11:21.000Z
permalink: /wordpress/3gias
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/17.webp
---

前几天google adsense申请通过了，一直在看怎么在网站中加入google ads, 看到好多论坛及网站可以在文章开头及末尾加入ADS，于是。。。 有了下面的方法，大家一直在追求的无插件法。
打开wordpress主题里的functions.php，在末尾加入下面的代码，将<p></p>之间的文字改为ADS代码就可以了。 
```php
function insertAD($content) { 
	if(is_single()) { $html = ' 广告代码/图片广告链接 ';
		//文章开头广告 
		$content = $html . $content; $content.= ' 广告代码2/图片广告链接 ';
		//文章结尾广告 } 
		return $content; 
} 
add_filter ('the_content', 'insertAD'); ?>
```
