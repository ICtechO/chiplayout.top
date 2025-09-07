---
date: 2012-06-23 00:17:34
title: wordpress默认主题twentyeleven修改（一）：style.css
createTime: 2012-06-22T16:17:34.000Z
permalink: /wordpress/7s7d0
categories:
  - wordpress
tags:
  - twentyeleven
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

一直很欣赏wordpress默认主题twentyeleven，它每次都会随着wordpress的升级给我们带来一些新的功能，而且所有的代码都有注释，便于二次改造。但它上下左右留白太多，对于想要尽可能多展示自己网页内容的童鞋们来说，把它进行改造是很有必要的。下面就对该主题的style.css的structure进行简单的修改。 ![twentyeleven](/public/2012/06/screenshot.png) 找到第69行 /* =Structure 

  * 去除body左右空白。 style.css:73 padding:0 2em; padding:0;
  * 去除page上下空白。 style.css:76 margin: 2em auto; margin: 0 auto;
  * 减少标题高度。 style.css:512 padding: 3.65625em 0 0; padding: 2em 0 0;
  * 减少副标题高度。 sytle.css:529 margin: 0 270px 3.65625em 0; margin: 0 270px 2em 0;
  * 整体结构改变。 所有的 7.6%改为2% -26.4%改为-30% 34%改为31% 58.4%改为67% 18.8%改为28%

改完后的CSS如下所示。 
```css
/* =Structure
————— */

body {
padding: 0;
}
#page {
margin: 0 auto;
max-width: 1000px;
}
#branding hgroup {
margin: 0 2%;
}
#access div {
margin: 0 2%;
}
#primary {
float: left;
margin: 0 -30% 0 0;
width: 100%;
}
#content {
margin: 0 31% 0 2%;
width: 67%;
}
#secondary {
float: right;
margin-right: 2%;
width: 28%;
}; }
```