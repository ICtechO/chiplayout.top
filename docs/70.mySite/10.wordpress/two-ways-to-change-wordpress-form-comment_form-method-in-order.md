---
date: 2011-12-01 20:48:24
title: 两种更改wordpress评论表单comment_form()顺序方法
createTime: 2011-12-01T12:48:24.000Z
permalink: /wordpress/iwmpf
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

---
wordpress默认的评论表单名称（昵称，邮箱地址，网站）都在输入栏的前面，可是由于邮箱地址四个字使表单有些错乱，可以通一个函数将这些名称替换到表单后面，也可以直接通过自定义comment\_form()中的参数实现如标题效果。两种方法代码如下  
## 第一种  
```php
// This is stupid fields customization  
function zbench\_comment\_fields ($fields) {  
foreach ($fields as $name => $field) {  
$fields\[$name\] = preg\_replace(‘/((?:.\*?)<\\/label>)\\s\*(\\\*<\\/span>)?\\s\*()/’,’\\3\\1\\2′,$field);  
}  
return $fields;  
}  
add\_filter(‘comment\_form\_default\_fields’, ‘zbench\_comment\_fields’);  
?>  
```

## 第二种  
```php
function mytheme\_formchange($arg) {  
$arg\[‘author’\] = ‘ ‘. ‘   ‘. ( $req? ‘ \* ‘: ” ).   ‘ ‘;  
$arg\[’email’\] = ‘ ‘. ( $req? ‘ \* ‘: ” ).’ ‘;  
$arg\[‘url’\] = ‘ ‘.’ ‘;  
$arg\[‘url’\] = ‘ ‘.’ ‘;  
return $arg;  
}  
add\_filter(‘comment\_form\_default\_fields’, ‘mytheme\_formchange’);\[/cc\]
```