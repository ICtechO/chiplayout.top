---
date: 2012-07-22 08:24:35
title: div+css不显示最后一个li标签border两种方法
createTime: 2012-07-22T00:24:35.000Z
permalink: /wordpress/vyxw4
categories:
  - wordpress
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/16.webp
---

如题，想说的是如何才能让div+css不显示最后一个li标签border的方法，主要是网站导航菜单一般会为li定义一个border-right, 使得li标签在视觉上用小竖线隔开来，让用户具有良好的体验。但最后一个li后面再没有东西了，其border的存在显得有些多余。可以用CSS3和js将其去掉。

**CSS3:**

```css
#cat-nav li:last-child{border:none;}
```

**JS:**

```js
$(function(){$(“#cat-nav li:last”).css(“border”,”none”);})
```

这两个各缺点，CSS3部分浏览器不支持，而JS是能少用就少用的东西。。。