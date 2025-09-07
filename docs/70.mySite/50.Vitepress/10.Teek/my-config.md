---
title: 博客搭建
date: 2025-03-07 09:16:28
permalink: /my-config
categories:
  - 博客搭建
tags:
  - teek
  - vitepress
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

## TODO
- [x] 导航设置
- [x] 添加目录页
- [x] 默认折叠边栏
- [x] vuepress `imageCard` 转vitepress `imgcar`
- [x] date改createTime

## 导航设置
1. 新建 `\.vitepress\CustomCfg\Nav.ts`
```js
// nav导航栏配置
export const Nav = [
    { text: '首页', link: "/" },
    { text: '博客', link: '/myvp'},
    { text: '版图', link: '/layout'},  
    { text: 'EDA',
      items: [
        { text: 'Cadence',
          items: [
            { text: 'Virtuoso', link: '/virtuoso' },
            { text: 'Abstract', link: '/abstract'},
          ],
        },
        { text: 'Siemens',
          items: [
            { text: 'Calibre DRC', link: '/calibre-drc'},
            { text: 'Calibre LVS', link: '/calibre-lvs'},
          ],
        },
        { text: 'Synophys ICC', link: '/synophysICC'},
        { text: 'Linux',
          items: [
            { text: 'Find', link: '/linux-find', },
            { text: 'sed',  link: '/linux-sed', },
            { text: 'awk',  link: '/linux-awk' },
          ],
        },        
      ],
    },  

    { text: '编程',
      items: [
        { text: 'skill',  link: '/skill' },
        { text: 'svrf',   link: '/svrf' },
        { text: 'tvf',    link: '/tvf' }, 
        { text: 'tcl',    link: '/tcl' },  
        { text: 'shell',  link: '/shell'}, 
        { text: 'python', link: '/python'},                             
      ],
    },  
    
    { text: '索引',
      items: [
        { text: '分类', link: '/categories' },
        { text: '标签', link: '/tags' },
        { text: '归档', link: '/archives'},
        { text: '清单', link: '/articleOverview'},
      ],
    },  

    { text: '关于',
      items: [
        { text: '关于我',   link: '/about-me' },
        { text: '关于本站', link: '/about-website' },
      ],
    },       
  ]
```
2. 在 `.vitepress\config.mts` 中引用 `Nav.ts`

```js
import { Nav } from "./CustomCfg/Nav"; // [!code ++]
```
3. 在`.vitepress\config.mts` 中调用`Nav`
删除原来的`nav:`后面`[]`中的所有内容，新加`nav: Nav,`
```js
export default {
  ...
  themeConfig: {
    nav: Nav, // [!code ++]
    nav: [ // [!code --]
      { text: 'Guide', link: '/guide' }, // [!code --]
      { text: 'Config', link: '/config' }, // [!code --]
      { text: 'Changelog', link: 'https://github.com/...' } // [!code --]
    ] // [!code --]
  }
  ...
}
```

## 添加目录页

[参考 Teek#目录页配置](https://teek.tianke99.cn/reference/catalogue-page.html)
:::warning
目录页数据来源于 `vitepress-plugin-catalogue` 插件实现，如果禁用了该插件，目录页将不会生效。
:::


## 默认折叠边栏
在 `.vitepress\config.mts`  ， `vitePlugins` 中配置sidebarOption

```js
vitePlugins: {
	sidebar: true, // 是否启用 sidebar 插件
	  sidebarOption: {
		  // initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
		  collapsed: true, //打开侧边栏自动收缩功能
	  },
},
```

## vuepress `imageCard` 转vitepress `imgcar`

参考 [vuepress 图片卡片转vitepress](/convert_imagecard/)

## date改createTime
所有数据经历了wordpress XML -- python --> md --> vuepress --> vitepress
从vitepress的目录copy到vitepress后，frontmatter在原有createTime的基础上加了一行date, 导致所有文章显示的创建时间是copy时间， 通过`python`脚本将 `date`值改的和 `createTime` 一致

参考 [刷新date值为createTime](/fix-frontmatter-date/)

## 