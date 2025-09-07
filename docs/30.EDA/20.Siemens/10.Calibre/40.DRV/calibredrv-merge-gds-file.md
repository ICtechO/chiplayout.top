---
date: 2020-03-29 07:02:59
title: calibredrv merge GDS file
createTime: 2020-03-28T23:02:59.000Z
permalink: /eda/v1s41
categories:
  - calibredrv
tags:
  - calibre
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

calibredrv对GDS的操作真的很丰富，比如之前的 利用calibredrv flatten GDS： <https://www.chiplayout.net/2462-2.html>。 那这次给大家分享一下怎么利用calibredrv合并GDS。

先看贴一下calibredrv合并GDS需要的命令
```sh
layout filemerge -in input_file1 [layer_bump1]  
[-in input_file2 [layer_bump2] …]  
[-infile {  
-name filename  
[-layerbump layer_bump]  
[[-exclude_layer {layer1 …}] |  
[-include_layer {layer1 …}]]  
} ] …  
[-indir directory]  
-out output_file  
[-mode mode]  
[-cblockmode [auto | 0 | 1]]  
[-smartdiff [-ignoretext] [-ignoreproperty] [-convertpathtopoly]]  
[-noemptycells 0 | 1]  
[-createcache 0 | 1]  
[-exclude_layer {layer1 …}] |  
[-include_layer {layer1 …}]  
[-createtop cellname]  
[-topcell topcellname]  
[-map_cell cellname mapcellname]  
[-preserve filterfile]  
[-tmp tmpdir]  
[-verbose]
```

看起来很多option，其实通常用到-in和-out就够用了

比如我们要将 file1.gds和file2.gds merge在一起产生新的out.gds
    
```sh    
alibredrv -a layout filemerge -in file1.gds -in file2.gds -out out.gds
```

但我们要避免 file1和file2 top cell 名字一样造成覆盖的情况，还需加上 -rename
    
```sh    
alibredrv -a layout filemerge -in file1.gds -in file2.gds -rename -out out.gds
```
实际情况我们还需要加个 -createtop, 没有这个选项，被merge的两个gds的top的平级的，有了这个选项，两个gds文件中的top cell都将做为指定top的子cell
    
```sh    
alibredrv -a layout filemerge -in file1.gds -in file2.gds -in file3.gds -rename -createtop new_top -out out.gds
```

如果需要merge更多的gds file, 增加-in就可以了
    
```sh    
calibredrv -a layout filemerge -in file1.gds -in file2.gds -in file3.gds -rename -createtop new_top -out out.gds
```
