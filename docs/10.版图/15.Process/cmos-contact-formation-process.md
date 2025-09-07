---
date: 2011-08-12 16:15:00
title: CMOS制作步骤（七）：接触（孔）形成工艺
createTime: 2011-08-12T08:15:00.000Z
permalink: /Layout/37wq0
categories:
  - Process
tags: null
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

## **接触孔形成工艺** 
目的是在所有硅的有源区形成金属接触。这层金属接触可以使硅和随后沉积的导电材料更加紧密地结合起来（如下图）。硅片表面的沾污和氧化物被清洗掉后，会利用物理气相沉积(PVD)在硅片表面沉积一层金属，即在一个等离子的腔体中带电的氩离子轰击金属靶，释放出金属原子，使其沉积在硅片表面。之后对硅片进行高温退火，金属和硅在高温下形成金属硅化物,最后用化学方法刻蚀掉没有发生反应的金属，将金属的硅化物留在了硅表面。

![cmos-contact-formation-process](/public/2011/08/cmos-contact-formation-process.jpg)

## 接触（孔）形成工艺

钛是做金属接触的理想材料，它的电阻很低，可以与硅发生反应形成TiSi <sub>2 </sub> (钛化硅)，而钛和二氧化硅不发生反应，因此这两种物质不会发生化学的键合或者物于是聚集。因此钛能够轻易地从二氧化硅表面除去，而不需要额外的掩膜。钛的硅化物在所有有源硅的表面保留了下来（如源、漏和栅）。

- CMOS制作基本步骤的相关文章
1. [CMOS制作步骤（一）：双阱工艺（twin well process）](http://www.chiplayout.net/cmos-double-well-process.html "CMOS制作步骤（一）：双阱工艺（twin well process）")
2. [CMOS制作步骤（二）：浅槽隔离工艺STI(shadow trench isolation process)](http://www.chiplayout.net/cmos-sti-process.html "CMOS制作步骤（二）：浅槽隔离工艺(STI process)")
3. [CMOS制作步骤（三）：多晶硅栅结构工艺(poly gate structural process)](http://www.chiplayout.net/cmos-polysilicon-gete-process.html "CMOS制作步骤（三）：多晶硅栅结构工艺")
4. [CMOS制作步骤（四）：轻掺杂漏注入工艺LDD（lightly doped drain implants process）](http://www.chiplayout.net/cmos-ldd-process.html "CMOS制作步骤（四）：轻掺杂漏注入工艺（LDD process）")
5. [CMOS制作步骤（五）：侧墙的形成（side wall spacer formation）](http://www.chiplayout.net/cmos-formation-side-wall.html "CMOS制作步骤（五）：侧墙的形成")
6. [CMOS制作步骤（六）：源/漏注入工艺（S/D implant process)](http://www.chiplayout.net/cmos-fabrication-steps-f-source-drain-injection-technology.html "CMOS制作步骤（六）：源/漏注入工艺")
7. [CMOS制作步骤（七）：接触（孔）形成工艺（contact formation）](http://www.chiplayout.net/cmos-contact-formation-process.html "CMOS制作步骤（七）：接触（孔）形成工艺")
8. **[CMOS制作步骤（八）：局部互连工艺LI（Local Interconnect process）](http://www.chiplayout.net/cmos-fabrication-steps-viii-local-interconnect-technology.html "CMOS制作步骤（八）：局部互连工艺LI")**
9. **[CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成（Via-1 and Plug-1 formation）](http://www.chiplayout.net/cmos-via-1-plug-1-and-metal-1-interconnect-formation.html "CMOS制作步骤（九）：Via-1, Plug-1及Metal-1互连的形成")**
10. **[CMOS制作步骤（十）：Via-2, Plug-2,Metal-2及Top Metal形成（Via-2,Plug-2,metal2 interconnect and top metal formation）](http://www.chiplayout.net/wp-admin/post.php?post=1027&action=edit)**

