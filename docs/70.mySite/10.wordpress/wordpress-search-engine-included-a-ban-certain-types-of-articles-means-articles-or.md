---
date: 2011-09-14 16:09:09
title: wordpress禁止搜索引擎收录某篇或某类文章的方法
createTime: 2011-09-14T08:09:09.000Z
permalink: /wordpress/wwz5g
categories:
  - wordpress
tags:
  - seo
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/2.webp
---

为了让网站内容能让搜索引擎很很的收录，SEO成为了每个站长追逐不尽的道路。网站运行将近两个月了，网站关键词“IC版图”google排名第九，可百度七十多，“IC layout”差的不能说;“芯片版图”和“chip layout”到是不错，可是大家喜欢在百度或google输入的是IC版图还是ic layout,或芯片版图还是chip layout，就真不知道了。虽然站内的分类和文章都是我仔细想过和工作相关的，但是重点不突出，觉得还是应该禁止搜索引擎收录不太重要的文章或某个类文章，把重点才让他拿去。 先说**禁止搜索引擎收录某分类文章** ，可以将下面的代码插入和之间 [cc lang="php"]ID == 5) { echo ''; }[/cc] 数字5就是不让收录的分类ID，比如5在我的站点中分类名是《行业动态》，该分类及其下属文章就不被收录，因为这里的文章非原创，不想因为这些影响网站排名。 再说说**禁止搜索引擎收某篇文章** ，是借用了wordpress自定义域，同样把下面的代码插入和之间 [cc lang="php"]ID, ‘noindex’, true); if (!empty($private)) { echo ‘’; } ?>[/cc] 在写日志或文章的时候在日志编辑器中添加新自定义域，名称为 private，值可以是任意非空字符串，建议用 post id，这样就可以实现指定的文章不被收录啦。
