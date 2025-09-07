---
date: 2021-09-16 08:27:06
title: wordpress中调用bootstrap的SVG图标
createTime: 2021-09-16T00:27:06.000Z
permalink: /wordpress/04o80
categories:
  - wordpress
tags:
  - bootstrap
  - SVG
  - twentytwenty
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---

想用[bootstrap](https://v5.bootcss.com/docs/getting-started/introduction/)搞一个wordpress主题出来，但又想参考twentytwenty主题的部分功能，尤其是用twentytwenty_the_theme_svg()函数调用SVG图标。

整个先把wordpress twentytwenty本来的SVG图标都换成了 [Bootstrap 图标](https://icons.bootcss.com/) 的透明图标，然后将 twentytwenty_the_theme_svg函数中的`$color`赋值给SVG标签的class，最后调了一下变量顺序方便使用。

先在[Bootstrap 图标库](https://icons.bootcss.com/)页面找到需要的图标，点击进入图标代码面，如下图复制code.

[![](/public/2021/09/copy_bootstrap_icon_code.png)](/public/2021/09/copy_bootstrap_icon_code.png)点击红圈复制

打开 classes/class-twentytwenty-svg-icons.php, 找到类似下面的语句

```php    
'folder'             => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
<path fill="#1A1A1B" d="M2.8,1.85 C2.275329,1.85 1.85,2.27532949 1.85,2.8 L1.85,15.4 C1.85,15.9246705 2.275329,16.35 2.8,16.35 L17.2,16.35 C17.724671,16.35 18.15,15.9246705 18.15,15.4 L18.15,5.5 C18.15,4.97532949 17.724671,4.55 17.2,4.55 L9.1,4.55 C8.8158,4.55 8.550403,4.40796403 8.392757,4.17149517 L6.845094,1.85 L2.8,1.85 Z M17.2,2.85 C18.663555,2.85 19.85,4.03644541 19.85,5.5 L19.85,15.4 C19.85,16.8635546 18.663555,18.05 17.2,18.05 L2.8,18.05 C1.336445,18.05 0.15,16.8635546 0.15,15.4 L0.15,2.8 C0.15,1.33644541 1.336445,0.15 2.8,0.15 L7.3,0.15 C7.5842,0.15 7.849597,0.292035965 8.007243,0.528504833 L9.554906,2.85 L17.2,2.85 Z"/>
</svg>',
```
按格式替换为下面code或将下面的添加
    
```php    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-symlink" viewBox="0 0 16 16">
      <path d="m11.798 8.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
      <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm.694 2.09A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09l-.636 7a1 1 0 0 1-.996.91H2.826a1 1 0 0 1-.995-.91l-.637-7zM6.172 2a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
    </svg>
```

继续在 classes/class-twentytwenty-svg-icons.php找到如下代码
    
```php    
if ( array_key_exists( $icon, $arr ) ) {
	$repl = '<svg class="svg-icon" aria-hidden="true" role="img" focusable="false" ';
	$svg  = preg_replace( '/^<svg /', $repl, trim( $arr[ $icon ] ) ); // Add extra attributes to SVG code.
	$svg  = str_replace( '#1A1A1B', $color, $svg );   // Replace the color.
	$svg  = str_replace( '#', '%23', $svg );          // Urlencode hashes.
	$svg  = preg_replace( "/([\n\t]+)/", ' ', $svg ); // Remove newlines & tabs.
	$svg  = preg_replace( '/>\s*</', '><', $svg );    // Remove whitespace between SVG tags.
	return $svg;
}
```

改为
    
```php    
if ( array_key_exists( $icon, $arr ) ) {
	$repl = '<svg ';
	$svg  = preg_replace( '/^<svg /', $repl, trim( $arr[ $icon ] ) ); // Add extra attributes to SVG code.
	$svg  = preg_replace( '/class="(.*)" v/', 'class="$1 '.$color.'" v', $svg );   // Replace the color.
	$svg  = preg_replace( "/([\n\t]+)/", ' ', $svg ); // Remove newlines & tabs.
	$svg  = preg_replace( '/>\s*</', '><', $svg );    // Remove whitespace between SVG tags.
	return $svg;
}
```

这一步是为了使svg标签的class值能用$color赋值

然后打开inc/svg_icon.php
    
    
```php
twentytwenty_the_theme_svg( $svg_name, $group = 'ui', $color = '')
```

改为
    
```php
 twentytwenty_the_theme_svg( $svg_name, $color = '', $group = 'ui' ) 
```

这一步是将`$color`与`$group`做交换，方便调用：
    
    
```php
 twentytwenty_the_theme_svg('folder','text-info');
//folder为图标名称， text-info为bootstrap的css
```

效果如下图
