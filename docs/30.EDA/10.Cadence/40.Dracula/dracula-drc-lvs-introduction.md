---
date: 2010-11-22 22:11:18
title: Dracula DRC及LVS简介
createTime: 2010-11-22T14:11:18.000Z
permalink: /eda/85svu
categories:
  - EDA
tags:
  - Dracula
coverImg: https://img.onedayxyy.cn/images/TeekCover/10.webp
---

Dracula （吸血鬼）是Cadence 的一独立的版图验证工具，它采用批处理的工作方式。Dracula 功能强大，目前被认为布局验证的标准，几乎全世界所有的IC 公司都拿它作sigh-off 的凭据。特别是对整个芯片版图的最后验证，一定要交由Dracula 处理。 

##  Basics of Dracula Verication
1. 版图验证与工艺相关-需要工艺信息数据库 
2. 版图验证输入-版图数据(GDSII格式);网表信息(用于LVS);工艺相关信息 
3. 验证方式-Incremental VS Full chip;Hierarchical VS Flatten;Online VS offline 

## Dracula 主要功能
1．设计规则检查－DRC * 
2．电气规则检查－ERC 
3．版图&原理图一致性检查－LVS * 
4．版图参数提取－LPE 
5．寄生电阻提取－PRE Dracula 做LVS和DRC之前先要导出layout的GDS,其中LVS要导出对应版图的CDL网表 

## DRC步骤
1. PDRACULA
2. /g drc.rul
3. /f
4. /jxrun.com
5. 检查完毕，在版图窗口，打开inverter的layout，选择Tools->Dracula Interactive，出现DRC菜单选项，选择其下的setup，在dracula data path输入结果存放路径.即可查看

> 如果有问题,改完layout后重新导出GDS,直接运行 jxrun.com就可以重新验证.

## LVS步骤:
1. LOGLVS
2. con CDL网表的路径及名稳定
3. cir CDL网表的顶层名,与要做验的layout相对应的
4. exit
5. PDRACULA
6. /g lvs.rul
7. /f
8. /jxrun.com
9. 检查完毕，在版图窗口，打开inverter的layout，选择Tools->Dracula Interactive，出现LVS项，选择其下的setup，在dracula data path输入结果存放路径.即可查看 (亦可以jxrun.com正确运行后输入vi \*.lvs查看结果)

> DRC及LVS都可以写好脚本直接运行即可,有兴趣的可以研究一下.
