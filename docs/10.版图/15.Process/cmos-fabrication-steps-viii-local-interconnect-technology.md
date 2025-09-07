---
date: 2011-08-16 16:11:00
title: CMOS制作步骤（八）：局部互连工艺
createTime: 2011-08-16T08:11:00.000Z
permalink: /Layout/gjoac
categories:
  - Process
tags:
  - 局部互连
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

## 局部互连
CMOS制作步骤中接触孔形成后下一步便是在晶体管以及其它钛硅化物接触之间布金属连接线。在下面的工艺流程中用的方法称为**局部互连** （LI）。形成局部互连的步骤与形成浅槽隔离的步骤一样复杂。工艺首先要求淀积一层介质薄膜，接下来是化学机械抛光、刻印、刻蚀和钨金属淀积，最后以金属层抛光结束（图1和图2）。这种工艺称为大马士革（damascene），名字取自几千年前叙利亚大马士革的一位艺术家发明的一种技术。这步工艺的最后结果是在硅片表面得到了一种类似精制的镶嵌首饰或艺术品的图案。图3描绘了这些金属线是如何嵌入氧化物侧壁之间的。 

::: imgCard
```yaml
- img: /public/2011/08/cmos-LI-001.jpg
```
:::


  ## 形成**局部互连** 氧化硅介质的步骤
::: imgCard
```yaml
- img: /public/2011/08/cmos-LI-002.jpg
```
:::



  1. 氮化硅化学气相淀积 用化学气相淀积工艺先淀积一层氧化硅作为阻挡层。这层氮化硅将硅有源区保护起来，使之与随后的掺杂淀积层隔绝
  2. 掺杂氧化物的化学气相淀积 局部互连结构中的局部互连介质成分是由化学气相沉积的二氧化硅提供的。二层氧化硅要用磷或硼轻掺杂。二氧化硅中引入杂质能够提高下班的介电特性。随后的快速退火能够使下班流动，得到更加平坦的表面
  3. 氧化层抛光 利用化学机械抛光工艺平坦化局部互连的氧化层。
  4. 第九层掩膜，局部互连刻蚀 硅片在光刻区刻印然后在刻蚀区刻蚀。在局部互连的氧化层中制作出窄沟槽，这些沟槽定义了局部互连金属的路径形式


  ## 制作**局部互连** 金属的步骤
  ::: imgCard
```yaml
- img: /public/2011/08/cmos-LI-003.jpg
```
:::



  1. 金属钛淀积（PVD工艺） 一薄阻挡层金属钛衬垫于局部互连沟道的底部和侧壁上，这一层钛充当了钨与二氧化硅间的粘合剂。
  2. 氮化钛沉积 钨化钛立即淀积于钛金属层的表面充当金属钨的扩散阻挡层
  3. 钨淀积 钨填满局部互连的沟槽并覆盖硅片表面。之所以用钨而不是铝来做局部互连金属是因为钨能够无空洞地填充孔，形成钨塞。另一个原历是钨良好的磨抛特性
  4. 磨抛钨 钨被磨抛到局部互连介质层的上表面


  ## CMOS制作基本步骤的相关文章


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


