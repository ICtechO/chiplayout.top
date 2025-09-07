---
date: 2010-11-28 11:53:43
title: 浅槽隔离工艺（STI）
createTime: 2010-11-28T03:53:43.000Z
permalink: /Layout/ulzxx
categories:
  - Process
tags:
  - STI
  - 浅槽隔离工艺
coverImg: https://img.onedayxyy.cn/images/TeekCover/2.webp
---

相信很多在现在看工艺厂的相关文档时，会看到有些图上面标有STI的注释，STI是英文 shallow trench isolation的简称，翻译过来为 浅槽隔离 工艺。 STI通常用于0.25um以下工艺，通过利用氮化硅掩膜经过淀积、图形化、刻蚀硅后形成槽，并在槽中填充淀积氧化物，用于与硅隔离。 下面详细介绍一下浅槽隔离的步骤，主要包括：槽刻蚀、氧化物填充和氧化物平坦化。 

## * 槽刻蚀


  1. 隔离氧化层。硅表面生长一层厚度约150埃氧化层；可以做为隔离层保护有源区在去掉氮化物的过程中免受化学沾污。
  2. 氮化物淀积。硅表面生长一薄层氮化硅：a)由于氮化硅是坚固的掩膜材料，有助于在STI氧化物淀积过程中保护有源区 b)在CMP时充当抛光的阻挡材料。
  3. 掩膜，浅槽隔离
  4. STI槽刻蚀。在经过上面的光刻之后把没有被光刻胶保护的区域用离子和强腐蚀性的化学物质刻蚀掉氮化硅、氧化硅和硅。需要注意的是会在沟槽倾斜的侧壁及圆滑的底面有助于提高填充的质量和隔离结构的电学特性

![STI-1](/public/2011/06/STI1.jpg)

##  * 氧化物填充


  1. 沟槽衬垫氧化硅 硅片再次清洗和去氧化物等清洗工艺后，高温下在曝露的隔离槽侧壁上生长150埃的氧化层，用以阻止氧分子向有源区扩散。同时垫氧层也改善硅与沟槽填充氧化物之间的界面特性
  2. 沟槽CVD氧化物填充

![STI-2](/public/2011/06/STI2.jpg)

## 氧化物平坦化


  1. 化学机械抛光
  2. 氮化物去除

![STI-3](/public/2011/06/STI3.jpg)

## CMOS制作基本步骤的相关文章


  1. [CMOS制作步骤（一）：双阱工艺（twin well process）](http://www.chiplayout.net/cmos-double-well-process.html "CMOS制作步骤（一）：双阱工艺（twin well process）")
  2. [CMOS制作步骤（二）：浅槽隔离工艺STI(shadow trench isolation process)](http://www.chiplayout.net/cmos-sti-process.html "CMOS制作步骤（二）：浅槽隔离工艺\(STI process\)")
  3. [CMOS制作步骤（三）：多晶硅栅结构工艺(poly gate structural process)](http://www.chiplayout.net/cmos-polysilicon-gete-process.html "CMOS制作步骤（三）：多晶硅栅结构工艺")
  4. [CMOS制作步骤（四）：轻掺杂漏注入工艺LDD（lightly doped drain  implants process）](http://www.chiplayout.net/cmos-ldd-process.html "CMOS制作步骤（四）：轻掺杂漏注入工艺（LDD process）")
  5. [CMOS制作步骤（五）：侧墙的形成（side wall spacer formation）](http://www.chiplayout.net/cmos-formation-side-wall.html "CMOS制作步骤（五）：侧墙的形成")
  6. [CMOS制作步骤（六）：源/漏注入工艺（S/D implant process)](http://www.chiplayout.net/cmos-fabrication-steps-f-source-drain-injection-technology.html "CMOS制作步骤（六）：源/漏注入工艺")
  7. [CMOS制作步骤（七）：接触（孔）形成工艺（contact formation）](http://www.chiplayout.net/cmos-contact-formation-process.html "CMOS制作步骤（七）：接触（孔）形成工艺")
  8. [CMOS制作步骤（八）：局部互连工艺LI（Local Interconnect process）](http://www.chiplayout.net/cmos-fabrication-steps-viii-local-interconnect-technology.html "CMOS制作步骤（八）：局部互连工艺LI")
  9. [CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成（Via-1 and Plug-1 formation）](http://www.chiplayout.net/cmos-via-1-plug-1-and-metal-1-interconnect-formation.html "CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成")
  10. [CMOS制作步骤（十）：Via-2, Plug-2,Metal-2及Top Metal形成（Via-2,Plug-2,metal2 interconnect and top metal formation）](http://www.chiplayout.net/wp-admin/post.php?post=1027&action=edit)


