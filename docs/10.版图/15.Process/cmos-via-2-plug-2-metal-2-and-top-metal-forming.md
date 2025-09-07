---
date: 2011-08-18 16:17:00
title: CMOS制作步骤（十）：Via-2, Plug-2,Metal-2及Top Metal形成
createTime: 2011-08-18T08:17:00.000Z
permalink: /Layout/2gzw8
categories:
  - Process
tags:
  - metal
  - plug
  - via
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

>在Via-1, Plug-1及Metal-1互连形成后，接下来形成的是Via-2, Plug-2及Metal-2。除了要填充Metal-1上刻蚀出的大小不等的间隙，ILD-2的制作与ILD-1的制作非常相似。间隙的填充使用介电材料填充间隙，这些材料能够进入细小的空间从而避免了能够影响电学性能的空洞和其它缺陷的形成。两种常见的填充间隙的方法分别是SOG反刻和HDPCVD，后者更常用些。间隙填满以后，可利用CVD系统完成ILD-2的氧化物淀积，之后氧化物被平坦化、刻印，然后刻蚀形成Plug所需的via hole。 

##  * Via-2形成
::: imgCard
```yaml
- img: /public/2011/08/via-2-formation.jpg
  name: Via-2形成的主要步骤
```
:::



  1. ILD-2间隙填充 最新的间隙填充方法是利用高浓度等离子体工艺交替地淀积和刻蚀ILD氧化物，刻蚀与淀积是同时进行的。最后在金属的间隙间形成了没有空洞或空洞极少的致密氧化物
  2. ILD-2氧化物淀积 利用等离子体增强PVD系统淀积ILD-2氧化层剩余的部分
  3. ILD-2氧化物平坦化 在下一步刻印步骤前磨抛硅片，平坦化其表面
  4. 第十二层MASK，ILD-2刻蚀 利用光刻胶刻印硅片，随后利用等离子体刻蚀机刻蚀ILD-2氧化物


##  * Plug-2形成
主要步骤 
::: imgCard
```yaml
- img: /public/2011/08/plug-2-formation.jpg
  name:  Plug-2形成的主要步骤
```
:::


  1. 金属淀积钛阻挡层（PVD） 与其它金属工艺一样，在硅片上淀积的第一层金属是钛。钛可以使Plug和下一层metal紧密地结合起来。同样，它与ILD材料的结合也非常紧密。所以它能够提高金属叠加结构的稳定性
  2. 淀积氮化钛（CVD） 一薄氮化钛淀积在钛层的上表面。氮化钛充当钨淀积过程中的阻挡层
  3. 淀积钨（CVD） 利用另一台CVD设备在硅片上淀积钨。钨填充幼小的通孔，形成plug
  4. 磨抛钨 磨抛有钨涂覆的硅片直到ILD-2氧化物的上表面，留下通孔中的plug


##  * Metal-2互连的形成
  1. 淀积、刻蚀Metal-2 Metal-2结构的淀积与Metal-1结构的淀积完全一样。其结构由钛、铝铜合金和氮化钛三层构成。利用等离子体刻蚀机通过刻印后光刻胶中的窗口刻蚀Metal-2
  2. 填充ILD-3的间隙 Metal-2刻蚀以后，利用HDPCVD设备填充金属间隙，得到至密的二氧化硅填充物
  3. 淀积、平坦化ILD-3氧化物 利用等离子体优化的方法淀积ILD-3氧化物。随后平坦化氧化物得到平整的表面
  4. 刻蚀via-3，淀积钛/氮化钛，淀积钨，平坦化 平坦化钨直到ILD-3氧化物的上表面。通孔中留下的钨塞为Metal-2和Metal-3间提供互连 
::: imgCard
```yaml
- img: /public/2011/08/metal-2-formation.jpg
  name: Metal-2互连的形成
```
:::



##  * Metal-3制作
一直到压点和合金制作 重复工艺制作Metal-3和Metal-4后，完成Metal-4刻蚀，紧接着利用薄膜工艺淀积ILD-5。由于刻印的结构比先前工艺形成的尺寸要大很多，所以这一层介质不需要进行化学机械抛光。刻蚀ILD-5使得在Metal-5的淀积过程中通孔能够被金属填充。Metal-5淀积的厚度比先前的sandwich结构厚一些。刻蚀Metal-5，在必要的地方形成压焊点，在不需要的地方将金属除去。 
::: imgCard
```yaml
- img: /public/2011/08/full-coms-cross-section.jpg
  name: Full-CMOS-Cross-Section
```
:::


工艺的最后一步包括再次生长二氧化硅层（ILD-6）以及随后生长顶层氮化硅。这一层氮化硅称为钝化层，目的是保护产品免受潮所、划伤以及沾污的影响。最后在扩散炉中进行低温合金步骤。这一步加热过程有助于提高互连金属间的冶金接触，从而提高器件的电学性能和可靠性。这一步合金操作必须小心以免产品过加热而引起永久性的结构缺陷。 

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


