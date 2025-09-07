---
date: 2021-11-03 08:24:19
title: calibredrv rdbout用法
createTime: 2021-11-03T00:24:19.000Z
permalink: /eda/m1tnw
categories:
  - calibredrv
tags:
  - calibre
coverImg: https://img.onedayxyy.cn/images/TeekCover/6.webp
---

**$L rdbout******

****Converts all polygons on a layer into RDB output.****

****

  * Usage 
```sh        
        $L rdbout rdb_filename -cell cellName -layers layer_0...layer_n [-hier] [-properties]
```
  * Arguments 
    * rdb_filename 

A required argument specifying the output Calibre RVE ASCII database to create.

    * -cell cellName 

A required argument specifying the name of the cell to start scanning the layer from.

    * -layers layer_0...layer_n 

A required argument specifying the layers to scan.

    * -hier 

An optional argument specifying to scan in hierarchical mode. The default is flat.

    * -properties 

An optional argument to specify preserving properties when scanning layers.

  * Return Values 

None.

  * Description 

Converts all polygons on a layer into RDB output. They can subsequently be viewed with the Calibre RVE graphical debug program.

When layernames are defined, they are output as checknames. If layernames are not available, the command uses the following convention to generate checknames:

LAYER_layer_datatype

  * Examples 
```sh        
layout0 rdbout mylayer1.rdb -cell lab2 -layers 1
```


****
