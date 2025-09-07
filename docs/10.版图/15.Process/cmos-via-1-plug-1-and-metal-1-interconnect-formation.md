---
date: 2011-08-17 16:08:00
title: CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成
createTime: 2011-08-17T08:08:00.000Z
permalink: /Layout/092o6
categories:
  - Process
tags:
  - metal
  - plug
  - via
coverImg: https://img.onedayxyy.cn/images/TeekCover/18.webp
---

>层间介质（ILD）充当了各层金属间以及第一层金属与硅之间的介质材料。层间介质上有许多小的通孔，这些层间介质上的细小开口为相邻的金属层之间提供了电学通道。通孔中有导电金属（通常是钨，称为钨塞）填充，钨塞放置在适当的位置，以形成金属层间的电学通路（见图1，图2）。第一层层间介质是下面将要介绍的一系列互连工艺的第一步。 

##  * Via-1形成的主要步骤 [caption id="" align="alignnone" width="610"]![via-1-formation](/public/2011/08/via-1-formation.jpg) Via-1形成的主要步骤[/caption]


  1. 第一层ILD氧化物 在薄膜区利用CVD设备在硅片表面淀积一层氧化物。这层氧化物（第一层IDL）将充当介质材料，通孔就制作在这一层介质上
  2. 氧化物磨抛 用CMP的方法磨抛第一层ILD氧化物，清洗硅片除去抛光工艺中引入的颗粒
  3. 第十层掩膜，第一层ILD刻蚀 硅片先在光刻区刻印然后在刻蚀区刻蚀。直径不到0.25 um的小孔刻蚀在第一层ILD氧化物上。这一步要进行严格的CD、OL以及缺陷检测


##  * Plug-1形成的主要步骤 [caption id="" align="alignnone" width="610"]![plug-1-formation](/public/2011/08/plug-1-formation.jpg) Plug-1形成的主要步骤[/caption]


  1. 金属淀积Ti阻挡层（PVD） 在薄膜区利用PVD设备在整个硅片表面淀积一薄层Ti。Ti衬垫于能孔的底部及侧壁上。Ti充当了将钨限制在通孔当中的粘合剂
  2. 淀积氮化钛（CVD) 在Ti的上表面淀积一薄层氮化钛。在下一步沉积中，氮化钛充当了钨的扩散阻挡层
  3. 淀积钨（CVD） 用另一台CVD设备在硅片上淀积钨。钨填满小的开口形成plug
  4. 磨抛钨 磨抛被钨涂覆的硅片直到第一层ILD的上表面


##  * 第一层金属互连的形成 [caption id="" align="alignnone" width="610"]![metal-1-formation](/public/2011/08/metal-1-formation.jpg) 第一层金属互连的形成[/caption]


  1. 金属钛阻挡层淀积（PVD） 与其它金属工艺一样，钛是淀积于整个硅片上的第一层金属。它提供了Plug和下一层Metal之间的良好键合。同样它与ILD材料的结合也非常紧密，提高了金属叠加结构的稳定性
  2. 淀积铝铜合金（PVD） 在薄膜区利用PVD设备将铝铜合金溅射在有钛覆盖的硅片上。铝中加入1%的铜提高了铝的稳定性
  3. 淀积氮化钛（PVD） 在铝铜合金层上淀积一薄层氮化钛充当下一次光刻中的抗反射层
  4. 第十一层掩膜，金属刻蚀 先用光刻胶刻印硅片，然后用等离子体刻蚀机刻蚀sandwich结构


##  * CMOS制作基本步骤的相关文章


  1. [CMOS制作步骤（一）：双阱工艺（twin well process）](http://www.chiplayout.net/cmos-double-well-process.html "CMOS制作步骤（一）：双阱工艺（twin well process）")
  2. [CMOS制作步骤（二）：浅槽隔离工艺STI(shadow trench isolation process)](http://www.chiplayout.net/cmos-sti-process.html "CMOS制作步骤（二）：浅槽隔离工艺\(STI process\)")
  3. [CMOS制作步骤（三）：多晶硅栅结构工艺(poly gate structural process)](http://www.chiplayout.net/cmos-polysilicon-gete-process.html "CMOS制作步骤（三）：多晶硅栅结构工艺")
  4. [CMOS制作步骤（四）：轻掺杂漏注入工艺LDD（lightly doped drain implants process）](http://www.chiplayout.net/cmos-ldd-process.html "CMOS制作步骤（四）：轻掺杂漏注入工艺（LDD process）")
  5. [CMOS制作步骤（五）：侧墙的形成（side wall spacer formation）](http://www.chiplayout.net/cmos-formation-side-wall.html "CMOS制作步骤（五）：侧墙的形成")
  6. [CMOS制作步骤（六）：源/漏注入工艺（S/D implant process)](http://www.chiplayout.net/cmos-fabrication-steps-f-source-drain-injection-technology.html "CMOS制作步骤（六）：源/漏注入工艺")
  7. [CMOS制作步骤（七）：接触（孔）形成工艺（contact formation）](http://www.chiplayout.net/cmos-contact-formation-process.html "CMOS制作步骤（七）：接触（孔）形成工艺")
  8. [CMOS制作步骤（八）：局部互连工艺LI（Local Interconnect process）](http://www.chiplayout.net/cmos-fabrication-steps-viii-local-interconnect-technology.html "CMOS制作步骤（八）：局部互连工艺LI")
  9. [CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成（Via-1 and Plug-1 formation）](http://www.chiplayout.net/cmos-via-1-plug-1-and-metal-1-interconnect-formation.html "CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成")
  10. [CMOS制作步骤（十）：Via-2, Plug-2,Metal-2及Top Metal形成（Via-2,Plug-2,metal2 interconnect and top metal formation）](http://www.chiplayout.net/wp-admin/post.php?post=1027&action=edit)


