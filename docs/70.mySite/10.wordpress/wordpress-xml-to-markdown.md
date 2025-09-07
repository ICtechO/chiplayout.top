---
date: 2025-08-17 04:35:48
title: wordpress(XML)转markdown
createTime: 2025/07/22 22:04:37
permalink: /wordpress/k7czq
categories:
  - docs
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

## 为什么要XML转MD

## 下载Node.js
能玩这个的，应该都安装过了

## 从wordpress下载XML
登陆wordpress后台
选 工具 --> 导出


## 
 <p>解决：<a href="https://so.csdn.net/so/search?q=git&amp;spm=1001.2101.3001.7020" target="_blank" class="hl hl-1" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=git&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;git\&quot;}&quot;}" data-tit="git" data-pretit="git">git</a> SSL certificate problem: unable to get local issuer certificate</p>
<p>错误： git SSL certificate problem: unable to <a href="https://so.csdn.net/so/search?q=get&amp;spm=1001.2101.3001.7020" target="_blank" class="hl hl-1" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=get&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;get\&quot;}&quot;}" data-tit="get" data-pretit="get">get</a> local issuer certificate<br>
这个问题是由于没有配置信任的<a href="https://so.csdn.net/so/search?q=%E6%9C%8D%E5%8A%A1%E5%99%A8&amp;spm=1001.2101.3001.7020" target="_blank" class="hl hl-1" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=%E6%9C%8D%E5%8A%A1%E5%99%A8&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;服务器\&quot;}&quot;}" data-tit="服务器" data-pretit="服务器">服务器</a>HTTPS验证。默认，cURL被设为不信任任何CAs，就是说，它不信任任何服务器验证。</p>
 
```bash
$ git config --global http.sslVerify false
$ git clone https://github.com/ytechie/wordpress-to-markdown.git
$ cd wordpress-to-markdown/
$ npm install xml2js to-markdown
```

Copy your Wordpress content export into the folder as export.xml. Then run the script
```bash
$ node convert.js
```
 标题中有: