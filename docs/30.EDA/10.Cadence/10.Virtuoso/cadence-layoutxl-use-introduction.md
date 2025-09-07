---
date: 2013-09-09 15:41:41
title: cadence layoutXL使用简介
createTime: 2013-09-09T07:41:41.000Z
permalink: /eda/14e57
categories:
  - EDA
tags:
  - layoutXL
coverImg: https://img.onedayxyy.cn/images/TeekCover/11.webp
---

上周有篇短文说明了[layoutXL的优缺点](http://www.chiplayout.net/layoutxl-advantages-disadvantages.html "cadence layoutXL优缺点")，但工作中根据自己的实际情况可以选择要使用的工具，因为layoutXL显示飞线的原因，我经常在做一些数字单元时会用到它。利用闲时，大概写了一下layoutXL的简单使用，仅供参考与简单学习。 
## 一、 启动layoutXL
  有两种方法： 
  - a) 从schematic打开layout：在Schematic窗口依次点击 Tools-> Design Synthesis-> LayoutXL-> Create New&Open Existing, 点OK； 
  - b) 从layout打开schematic，在Layout窗口点Tools-> Layout XL; 依次点击Connectivity-> Update -> Source, 选择Schematic填写Library与Cell, 点OK. 
## 二、 生成PIN和cell
  有两种方法 
  - a) 全部生成 依次点击 Design-> Gen From Source, 在打开的Layout Generation Option窗口，通过选择Layout Generation中的I/O Pins和Instances生成全部PIN和cell，选其一则只生成一种 选择I/O Pins的Layer、Width和Heigth；Pin Label Shape选Label, 并点击Pin Label Options打开Set Pin Label Text Style设置相关； 
  - b) 选择性生成 在Layout窗口选择Create-> Pick From Schematic, 用鼠标在Schematic窗口选择要生成的pin或cell（按住shift多选 ，ctrl反选），松开鼠标按键，移动到 layout窗口，点鼠标左键确认。 
## 三、 布局
  如果schematic已提前做好布局，依次点击Edit-> Place As IN Schematic则可以自动按schematic摆放布局，但这一方法一般得不到我们想要的结果，还得自己手动去耐心布局。 
## 四、 飞线
  这也许使用LayoutXL提高效率的最大目的。 
  - a) 显示飞线，依次点击Connectivity-> Show Incomplete Nets, 出现Show Incomplete Nets，在Incomplete中通过Select All可以选择显示所有飞线，也可以在列出的所有net列表中通过Ctrl或Shift加鼠标左键单选或多选。 
  - b) 依次点击Connectivity-> Hide Incomplete Nets则可以隐藏所有飞线。 
  - c) 建议选择性显示部分飞线进行连线操作，全部显示时由于颜色种类有限和飞线太多反而让人识别不清。 
## 五、 更新。
  如果schematic有改动则可以依次点击Connectivity-> Update-> Components And Nets打开 Layout Generation Options, 会列出layout中没有但schematic中有的pin, 点击Ok后则会在layout窗口中产生schematic中新加的cell和pin, schematic中已删除的则在layout中会打叉。
