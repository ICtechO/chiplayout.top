---
date: 2011-01-02 07:36:05
title: wordpress标题字数限制
createTime: 2011-01-01T23:36:05.000Z
permalink: /wordpress/z6zjg
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

wordpress标题字数限制
## 方法1： 
在functions.php最后加入以下代码 
```php
 <?php function excerpttitle($max_length) { 
	 $title_str = get_the_title(); 
	 if (mb_strlen($title_str,'utf-8') > $max_length ) { 
		 $title_str = mb_substr($title_str,0,$max_length,'utf-8').'…'; 
	 } 
	 return $title_str; 
 }?> 
 ```
  这就定义了一个函数，如何调用呢在你想要使用字数限制的页面，将原有的 
```php
<?php the_title(); ?>
```

替换成 
```php
<?php the_title(); ?> //[!code --]
<?php echo excerpttitle(**20**);?> //[!code ++]
```

这个是网络上最常用到的方法了，只是通过使用有个缺陷，就是把一个字母和一个汉字都当做了一个字符 结果就是一篇拥有大于20个字母的英文标题也会被限制为20个字母，而大于20个汉字的中文标题被限制为20个汉字 wordpress标题字数限制

## 方法2： 
这个方法很简单，直接将 
```php
<?php the_title(); ?>
```

替换为 

```php
<?php the_title(); ?> //[!code --]
<?php echo mb_strimwidth(get_the_title(), 0, 40, '...'); ?> //[!code ++]
```

>说明：这个方法是就是一般的一个汉字字符等于两个英文字符，比如上面的设置中为40，那么如果标题是英文则输出40个字符，如果标题是中文，则输出40/2=20个字符，觉得好用啊！ 只是这个方法需要PHP 服务器支持 MB 库（mbstring 库 全称是 Multi-Byte String 即各种语言都有自己的编码，他们的字节数是不一样的，目前php内部的编码只支持ISO-8859-*, EUC-JP, UTF-8 其他的编码的语言是没办法在 php 程序上正确显示的。解决的方法就是通过 php 的 mbstring 函数库来解决），不过现在的PHP服务器都有此功能了。 
>此方法亦可用于[wordpress文章摘要字数限制](http://www.chiplayout.net/?p=471)
