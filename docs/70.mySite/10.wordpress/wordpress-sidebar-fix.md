---
date: 2020-03-01 08:50:33
title: wordpress边栏随动完美版
createTime: 2020-03-01T00:50:33.000Z
permalink: /wordpress/dw9wh
categories:
  - wordpress
tags:
  - wordpress
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

相信很多小博主们为了这个边栏随动功能费心不少。最常见的问题就是无限下滚。[百度](http://www.baidu.com)发现知名博客知更鸟的博主发布一篇排名靠前，确实也不是无限滚动了。但是，有的主题底部还有别的容器，且占很多高度，如果在stop position里不把这个值减掉，边栏还会往下滚动这个高度。

以我使用的wordpress twentytwenty主题为例（进行了适当修改，加了边栏), 顶部是 header,中间是wrap,包含了primary和secondary, 底部有个footer-widget和site-footer.

首先在原来的基础上增加了primary和secondary的高度比较，只有primary高度大于secondary时才随动。

其次引入footerHeight这个变量，这个值从footer-widget获取，我给加了个id=“footer_nav”；还有site-footer的高度113.

最后我们在maxPosition 这行再减去footerHeight和113, 这样边栏就随动了底部容器上面停止了。

由于twentytwenty底部widget高度不固定，所以按照上面的方法好操作；如果底部固定不变的话，直接用chrome检查一下底部所有高度，然后在 maxPosition 这行减去就行

附上code.
    
```js
<script type="text/javascript">   
      var documentHeight = 0;   
        var topPadding = 15;   
        $(function() {
            if ($("#primary").height() > $("#secondary").height()) {   
                var offset = $("#secondary").offset();   
                documentHeight = $(document).height();   
                $(window).scroll(function() { 
                    var footerHeight = 0;  
                    if ($('#footer_nav').length > 0) {
                        footerHeight = $('#footer_nav').outerHeight(true);
                     }
                    var sideBarHeight = $("#secondary").height();   
                    if ($(window).scrollTop() > offset.top) {   
                        var newPosition = ($(window).scrollTop() - offset.top) + topPadding;   
                        var maxPosition = documentHeight - (sideBarHeight + 368 + footerHeight + 113);   
                        if (newPosition > maxPosition) {   
                            newPosition = maxPosition;   
                        }   
                        $("#secondary").stop().animate({   
                            marginTop: newPosition   
                        });   
                    } else {   
                        $("#secondary").stop().animate({   
                            marginTop: 0   
                        });   
                    };   
                });   
            };   
        });
</script> 
```   