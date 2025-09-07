---
date: 2011-11-24 20:36:26
title: wordpress首页任意文章后插入广告代码（非插件）
createTime: 2011-11-24T12:36:26.000Z
permalink: /wordpress/k19jh
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---

也许在首页第一篇文章后插入广告还不能让人满意，那可以在任意文章后插入广告吗，答案是肯定的，只要[《wordpress首页第一篇文章后插件广告代码》](http://www.chiplayout.net/after-the-first-post-wordpress-plugin-page-ad-code.html)的基础上稍微扩展一下，就能达到目的。

## 方法一：
其于在[《wordpress首页第一篇文章后插件广告代码》](http://www.chiplayout.net/after-the-first-post-wordpress-plugin-page-ad-code.html)方法一的扩展  
[cc lang=”php”][/cc]  
在其前面加上  
[cc lang=”php”][/cc]  
找到[cc lang=”php”][/cc]在其后加入一下代码  
[cc lang=”php”]  
  
第一篇和第三篇文章后广告代码  
[/cc]  
**代码复制完后要确认单引号和双引号未变为中文或全角**  
其中if后面的 括号中即为要加入广告的文章序号，上面例子为在第一和第二篇后中入广告。

## 方法二：
找到[cc lang=”php”][/cc]直接在其后加入如下代码  
[cc lang=”php”]current_post == 0) : ?> //0代表第一篇文章  
广告代码1  
current_post == 5) : ?> //5第表第六篇文章  
广告代码2  
  
[/cc]  
**代码复制完后要确认单引号和双引号未变为中文或全角**  
此方法是在[《wordpress首页第一篇文章后插件广告代码》](http://www.chiplayout.net/after-the-first-post-wordpress-plugin-page-ad-code.html)方法二的基础上演变而来, 不好的地方就是广告代码出现了多次，这是没必要的

## 方法三：
此法可谓是法一和法二的结合，相当好用  
[cc lang=”php”]current_post == 3 || $wp_query->current_post == 6 || $wp_query->current_post == 2) : ?>  
第四篇和第七篇文章后广告代码  
[/cc]  
**代码复制完后要确认单引号和双引号未变为中文或全角**
