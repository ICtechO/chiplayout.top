---
date: 2011-11-24 17:44:39
title: wordpress首页第一篇文章后插件广告代码
createTime: 2011-11-24T09:44:39.000Z
permalink: /wordpress/9yf6p
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

广告广告，又是广告，对于广大读者来说极其反感网站却不厌其烦的折腾的东西，目的就是希望读者有机会发发善心，动一下手中的鼠标，点燃我创作的激情哈。 就wordpress而言，发现有很多博客在首页第一篇文章后面放有一个宽尺寸的广告，不知道谁的创意，既然大家都这么放了，说明这个位置还是有可塑性的，我也在网络上search了下，目前有两种方法可以实现将广告置于第一篇文章后。 
**插a件零依赖，两行 PHP 搞定首页首篇文章或正文末尾广告。**

## 方案 A：首页第 1 篇文章下方显示广告
1. **编辑主题文件** `index.php`  
2. **在循环前**加计数器  
   ```php
   <?php $count = 1; ?>
   ```
3. **在 `the_content()` 之后**插入广告  
   ```php
   <?php if ($count === 1) : ?>
       <div style="text-align:center;margin:20px 0;">
           <!-- 广告代码开始 -->
           你的广告代码
           <!-- 广告代码结束 -->
       </div>
   <?php endif; $count++; ?>
   ```
4. 保存覆盖即可。

## 方案 B：只在正文页（single.php）末尾显示广告
1. **编辑主题文件** `single.php`  
2. **在 `the_content();` 之后**直接插入  
   ```php
   <div style="text-align:center;margin:20px 0;">
       你的广告代码
   </div>
   ```
3. 保存覆盖。

## 注意事项
- **编辑器**：请用 **Notepad++、VS Code** 等 UTF-8 无 BOM 保存，**不要用 Windows 记事本**。  
- **样式**：外层 `<div>` 可自定义宽度、居中等。  
- **缓存**：修改后若没立即生效，清浏览器缓存或 WP Super Cache 等缓存插件。

> 两行 PHP 替代广告插件，网站更轻，速度更快。