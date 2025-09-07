---
date: 2011-12-10 01:55:46
title: 非插件wordpress首页幻灯片效果
createTime: 2011-12-09T17:55:46.000Z
permalink: /wordpress/oegpj
categories:
  - wordpress
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---

网站形形色色，可不管打哪个，大多都会在首页有个幻灯片效果, 这样给人一种观赏性，图片会使访客的视觉效果达到最佳。其次通过这种方式体现出来的内容明显会比其它文字性的内容更能体现出内容的丰富性，所以就会很容易吸引访客进行深入阅读。其重要性也不用多说了。如果你需要，那就往下看了。我用的 wordpress, 所以以wordpress为例进行说明。 
1. 先去 orbit 官网下载素材包包：<http://matt.zurb.s3.amazonaws.com/orbit-1.2.3.zip> 不过官网比较慢，我已将下好的传到了 u115网盘：<http://115.com/file/cl1vv2kb#orbit-1.2.3.zip> 
2. 将压缩包整个解压到主题JS目录 
3. 在head.php的之间添加所需JS和CSS [cc lang="html"] [/cc] 
4. 在之间需要展示幻灯的地方加入 [cc lang="html"]  [/cc] * 是在function.php中定义的一个文章缩略图自动获取函数，具体可以查看[wordpress文章自动缩略图无图随机图片](http://www.chiplayout.net/wordpress-thumbnail-random.html "本文固定链接 http://www.chiplayout.net/wordpress-thumbnail-random.html") 
5. 在orbit-1.2.3.css中通过修改#featured中的width和height来获得合适的大小 
6. 这样已经成功的在网页中加入了幻灯效果 
7. 如果需要更多的自定义样式，可以修改jquery.orbit-1.2.3.js中的参数，挑几个给大家说一下。 [cc lang="javascript"]timer: true, // 值为true可以让幻灯自己切换，同时在右上角显示一个切换动态图标 advanceSpeed: 3000， //切换时间 directionalNav: false, // 关闭左右两边的切换按键 bullets: true, // 开启下方的圆点状切换小按钮[/cc] 这样设置的效果可以进入[站点首页](http://www.chiplayout.net)进行查看
