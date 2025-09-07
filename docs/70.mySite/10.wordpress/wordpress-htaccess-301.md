---
date: 2011-08-09 19:57:00
title: htaccess将多域名301定向到主域名
createTime: 2011-08-09T11:57:00.000Z
permalink: /wordpress/nlm4h
categories:
  - wordpress
tags:
  - htaccess
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

七月开始启用了新申请的www.chiplayout.net的域名，之前的www.layoutcn.com的又不想放弃，在网上找了下，利用.htaccess将旧域名301永久定向到新域名是取好的办法。刚好使用的linux主机支持 mod rewrite ,所以很容易就实现了多域名定向到了主域名。
先把带www的和不带www的新旧域名全都绑定到了主机上，然后在根目录的.htaccess中添加了以下内容： 
```php
Options +FollowSymLinks  
RewriteEngine On  
RewriteCond %{HTTP_HOST} ^layoutcn.com [NC,OR]  
RewriteCond %{HTTP_HOST} ^www.layoutcn.com [NC,OR]  
RewriteCond %{http_host} ^chiplayout.net [NC]  
RewriteRule ^(.*)$ http://www.chiplayout.net/$1 [L,R=301]  
```
