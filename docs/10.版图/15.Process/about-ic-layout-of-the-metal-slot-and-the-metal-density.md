---
date: 2011-09-06 15:56:00
title: 关于IC版图中的metal slot和metal density
createTime: 2011-09-06T07:56:00.000Z
permalink: /Layout/wufym
categories:
  - Process
tags:
  - density
  - slot
coverImg: https://img.onedayxyy.cn/images/TeekCover/12.webp
---

在IC版图[layout]时，Design Rules中往往会注明金属线大于一定宽度时要挖slot，同时也会对metal density做出限定，小于规定的百分比时就要加dummy metal，由此看到的是这两条规则向着同一目的，那就是整个芯片上的金属的均匀性。 

![metal_slot](/public/metal-slot-and-metal-density-in-ic-layou_12D3B/metal_slot.jpg) 

试想芯片上的金属密度不够均匀，有的地方密度大，有的地方密度小，那么在经过金属淀积后，metal density小的地方已经出现了低凹，再进行刻蚀和抛光后，原本Layout（版图）上  
metal density较低的区域，对应在wafer上此时的metal的厚度要相比metal density较高区域的薄。故直接影响到wafer的平坦度，从而影响后续工序的精准度，造成  
IC之电性不良、直接影响wafer的良率。

当整个芯片layout金属密度过低时，wafer 上对应需要刻蚀掉的metal量就多，容易造成刻蚀不干净，有过多metal残留于wafer上，影响后续工序。而当整个芯片layout金属密度过高时，则wafer 上对应需要刻蚀掉的metal量就少，容易造成刻蚀过量，对正常的metal导线也去刻蚀掉
