---
date: 2011-06-21 23:52:00
title: SILICIDE、SALICIDE和POLYCIDE工艺的整理
createTime: 2011-06-21T15:52:00.000Z
permalink: /Layout/el3ps
categories:
  - Process
tags:
  - polycide
  - salicide
  - silicide
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---

>Silicide、Salicide和Polycide，这三个名词对应的应用应该是一样的，都是利用硅化物来降低POLY上的连接电阻.。 

## SILICIDE
就是金属硅化物，是由金属和硅经过物理－化学反应形成的一种化合态，其导电特性介于金属和硅之间，而POLYCIDE和SALICIDE则是分别指对着不同的形成ILICIDE的工艺流程，下面对这两个流程的区别简述如下：
### POLYCID
其一般制造过程是，栅氧化层完成以后，继续在其上面生长多晶硅(POLY-SI），然后在POLY上继续生长金属硅化物（silicide），其一般为 WSi2 （硅化钨）和 TiSi2 （硅化钛）薄膜，然后再进行栅极刻蚀和有源区注入等其他工序，完成整个芯片制造。
### SALICIDE
它的生成比较复杂，先是完成栅刻蚀及源漏注入以后，以溅射的方式在POLY上淀积一层金属层（一般为 Ti,Co或Ni），然后进行第一次快速升温煺火处理（RTA），使多晶硅表面和淀积的金属发生反应，形成金属硅化物。根据煺火温度设定，使得其他绝缘层（Nitride 或 Oxide）上的淀积金属不能跟绝缘层反应产生不希望的硅化物，因此是一种自对准的过程。然后再用一中选择性强的湿法刻蚀（NH4OH/H2O2/H20或H2SO4/H2O2的混合液）清除不需要的金属淀积层，留下栅极及其他需要做硅化物的salicide。另外，还可以经过多次煺火形成更低阻值的硅化物连接。跟POLYCIDE不同的是，SALICIDE可以同时形成有源区S/D接触的硅化物，降低其接触孔的欧姆电阻，在深亚微米器件中，减少由于尺寸降低带来的相对接触电阻的提升。另外，在制作高值POLY电阻的时候，必须专门有一层来避免在POLY上形成SALICIDE ，否则电阻值就上不了。

>对于金属硅化物以及目前又开始热门的金属栅极的制作，特性分析，工艺流程，有很多文献 可以参考，但作为LAYOUT设计者而言，不需要了解这么多，就是明白这个东西的作用是什么应该 就足够了。。 希望能给大家一点帮助。。。 

## Salicide / Polycide 使用条件？

- Salicide 可以减小栅极和源漏电阻
- Polycide 可以减小栅极电阻

## 怎么选择
什么时候选择哪一种呢？两者使用前提条件是什么呢？有什么使用限制呢？ 
### 一、看你Care的是什么？ 
  1. Salicide自对准效果很好，且Rs也很小。但是Thermal Stable不好。 而且会有C49和C54的相位转换，电阻差异很大哦。所以这个一般需要Wet Etch前后各一步Thermal来。如果一步到位对小线宽的Gate控制不好。因为反应过程中是Si扩散到界面与Ti反应。这样就会有一定量的横向反应。
  2. Polycide的Rs会比较大一些，但是Thermal下比较稳定。以上在0.35-0.6甚至0.8um都有在用。0.25及其以下用CoSi2，对线宽控制比较好，因为Co与Si反应的时候，是Co进入界面与Si反应，这样横向反应就比SiTi2的小，因为Poly的边界决定了线宽不会延伸。nm时代就要用NiSix了，Thermal稳定性很差，但是因为它不能用前面的原因是他更Care工艺过程中的Thermal Burdget，所以不得不用它了

### 二、 
  1. 1SALICIDE产生BRIDGING现象 扩散速度较金属快的话，则容易跑到SPACER上，反应生成bridging。也就是硅化物的形成已经 在源漏和栅极上了，这样就会出现桥接，尤其在细线宽情况下。salicide如果使用TI/CO的话，这个情况比较严重。 POLYCIDE是不会有这种情况的。
  2. 一般的掺杂物在SALICIDE中的扩散速度极快，所以在多晶中的掺杂物很容易进入salicide而流串到其他地方，多晶硅也因掺杂物流失会有空乏现场产生。对于CMOS的应用，则会有P型和N型掺杂物的相互污染导致VT的变化，严重影响电路运行。有时需要在进行SALICIDE之前，往多晶里面掺入N什么的。减小这种效应。
  3. 由于SALICIDE的源漏电阻比采用POLYCIDE的小很多，所以相对来说，在打源漏接触孔时，SALICIDE会比POLYCIDE的少。源漏如果打的孔多的话，也会影响布局密度。
  4. 较注重元件关闭状态以及漏电流大小的电路产品，如DRAM，多采用POLYCIDE，因为SALICIDE过程容易造成S/D和衬底接触面的漏电流，严重影响记忆元胞的资料保存能力。 这是我获得的一些原因。另一些还没有弄明白原理。

### 三、 
  1. Briding现象：就是我说的那个TiSi2和CoSi2对线宽的控制上。因为他们反应机理不同，一个是金属扩散到界面与硅反应，另一个是硅扩散到界面与金属反应。这两种区别很大程度上决定了SPACER的上面有没有金属硅化物的生成的。
  2. 它的道理好像不对：Silicide对杂质有无Barrier的作用暂且不论，即使它没有Barrier功能，那POLY中的杂质（一般为P）也是向上扩散的。而ILD一般是BPSG，类似于SiO2，吸B排P，这样P也很难被扩散到BPSG中，即使跑到ILD中，似乎也影响不到Vt。而为了防止Vt的变化，一般都是在长Gate Oxide的过程中掺入 N 的元素气体来阻止杂质透过Gate Oxide金属Channel区而影响Vt。
  3. 第三点有道理，因为CT Rs确实与CT CD成反比。但是开孔多一点还是有有帮助的，并不是说我CT Rs够了，我就只开一个孔就完了。不行的，这样很容易造成电流局部集中。电流集边效应的。
  4. Memory的不是很懂，不过似乎有道理。对小线宽的Logic CMOS也有同样的问题的，会有GS Leakage的

  以文档形式下载：<http://u.115.com/file/clvtem7b># 
  硅化物Silicide.zip 原文转自：<http://hi.baidu.com/lixu1113/blog/item/452ba027c615f70a908f9d6c.html>
