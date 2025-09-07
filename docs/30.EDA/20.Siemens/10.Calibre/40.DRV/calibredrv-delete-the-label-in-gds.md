---
date: 2022-08-04 05:51:09
title: calibredrv删除GDS中所有label
createTime: 2022-08-03T21:51:09.000Z
permalink: /eda/3ptvf
categories:
  - calibredrv
tags:
  - calibredrv
  - delete text
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

也不知道有啥用啊，看到有人找呢，刚好calibredrv的manual中有讲到怎么删除gds中top cell的label, 将这段包装成函数， 历遍所有cell就可以实现删除所有。
    
```sh    
proc deltxtlayer {L topcell} {
  set layers [$L layers]
  for {set i 0} {$i < [llength $layers]} {incr i} {
    # Search text label in all layers
    set lay [lindex $layers $i]
    set inst_all [$L iterator text $topcell $lay range 0 end]
    set text_num [llength $inst_all]
    if { $text_num > 0 } {
      # Fnd if layer does have some text labels
      for {set j 0} {$j < $text_num} {incr j} {
        # Delete all text labels
        set inst [lindex $inst_all $j]
        set text_str [lindex $inst 0]
        set text_x [lindex $inst 1]
        set text_y [lindex $inst 2]
        set text_strans [lindex $inst 4]
        if { [string compare $text_strans ""] == 0 } {
          $L delete text $topcell $lay $text_x $text_y $text_str
          puts "$L delete text $topcell $lay $text_x $text_y $text_str"
        } else {
          $L delete text $topcell $lay $text_x $text_y $text_str \
          [lindex $inst 3] [lindex $inst 4] [lindex $inst 5] \
          [lindex $inst 6]
          puts "$L delete text $topcell $lay $text_x $text_y $text_str \
          [lindex $inst 3] [lindex $inst 4] [lindex $inst 5] \
          [lindex $inst 6]"
        }
      }
    }
  }
}
set ingdsfile [lindex $argv 0]
set outgdsfile [lindex $argv 1]
set L [ layout create $ingdsfile -dt_expand -preservePaths \
  -preserveTextAttributes -preserveProperties]
foreach topcell [$L cells] {
  deltxtlayer $L $topcell
}
$L gdsout $outgdsfile
```    

将上面的代码保存为deltxtlayer.tcl, 运行下面的代码，in.gds和out.gds 为自己输入和输出的
    
```sh    
alibredrv deltxtlayer.tcl in.gds out.gds
```

* * *
