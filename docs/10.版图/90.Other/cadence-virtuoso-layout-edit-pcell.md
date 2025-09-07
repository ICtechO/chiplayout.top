---
date: 2010-12-24 21:21:10
title: 利用Cadence virtuoso layout edit制做pcell
createTime: 2010-12-24T13:21:10.000Z
permalink: /Layout/jw3qq
categories:
  - Layout
tags:
  - pcell
  - virtuoso
coverImg: https://img.onedayxyy.cn/images/TeekCover/5.webp
---

基本的mos管的pcell建立   在新建的cellview中进行以下操作   Tools-pcell   先layout出一个最简单的MOS 管   定义channal 长度和宽度L，W： 

[![利用Cadence-virtuoso-layout-edit制做pcellpng001](/public/2011/07/Cadence-virtuoso-layout-editpcellpng001.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng001.png)   

点击stretch命令进行横向和纵向拉伸   Stretch in X ： 
将出现的控制线，跨过你所需要拉伸的所有layer，然后按enter出现下图所示的图框   

[![利用Cadence-virtuoso-layout-edit制做pcellpng002](/public/2011/07/Cadence-virtuoso-layout-editpcellpng002.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng002.png) 

Name or Expression for stretch：自己取个名字，比如L代表了channal channel   Reference Dimension （Default）：L的尺寸，默认为控制线所经过的最小layer宽度   
其他的几个选项可以调整layer 拉伸的方向和最小最大值   W用stretch in Y定义   然后看看成果   点击compile –to pcell，进行编辑   

[![利用Cadence-virtuoso-layout-edit制做pcellpng003](/public/2011/07/Cadence-virtuoso-layout-editpcellpng003.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng003.png)   

[![利用Cadence-virtuoso-layout-edit制做pcellpng004](/public/2011/07/Cadence-virtuoso-layout-editpcellpng004.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng004.png)   

点击OK，并且保存。   可以看到现在调用出来的MOS 已经是一个可以编辑W，L的器件了。但是我们有的时候我们要用到多个finger并联，所以可以通过设置另外一个参数M来实现。   因为M实际上就是一个finger复制M次，所以我们要用到repetition选项，如果这样直接使用这个操作，无法实现我们需要的结果，现在进行repetition的L是原始的L但是希望得到的是L改变后的复制，所以我们用到stretch-qualify   点击Qualify，此时控制线可选，点击控制L的线，并希望与其一起变化的layer，并双击或者enter确定  
[![利用Cadence-virtuoso-layout-edit制做pcellpng005](/public/2011/07/Cadence-virtuoso-layout-editpcellpng005.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng005.png)   

现在就可以进行repetition操作了。   我们还需要定义一个X方向的辅助参数ods，   

[![利用Cadence-virtuoso-layout-edit制做pcellpng006](/public/2011/07/Cadence-virtuoso-layout-editpcellpng006.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng006.png)   

选中需要repeatlayer，一般是poly，contact，metal，   Repetition-repeat in X，   

[![利用Cadence-virtuoso-layout-edit制做pcellpng007](/public/2011/07/Cadence-virtuoso-layout-editpcellpng007.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng007.png)   

Ok，然后进行compile-to pcell   同样的方法不用定义ods，然后其他定义和上相同，调用两个pcell可以看出两者的不同   

[![利用Cadence-virtuoso-layout-edit制做pcellpng008](/public/2011/07/Cadence-virtuoso-layout-editpcellpng008.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng008.png)   

横向的repeat后，要进行纵向的repeat   一般选择contact repeat。   选种需要repeat的layer，然后repeatition-repeat in X and Y   

[![利用Cadence-virtuoso-layout-edit制做pcellpng009](/public/2011/07/Cadence-virtuoso-layout-editpcellpng009.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng009.png)   

上面的参数要根据自己的工艺进行定义   

[![利用Cadence-virtuoso-layout-edit制做pcellpng010](/public/2011/07/Cadence-virtuoso-layout-editpcellpng010.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng010.png)   

这就是一个简单的MOS 的pcell建立方法。   下面的定义我们可以用于一个pcell 可以做多个调用，比如我们要用到pmos和nmos，他们两个之间只有一层layer不同，我们可以选择这层layer，来实现NMOS 或者是PMOS，同样我们的一个芯片中很可能要用到不同电压的器件，比如这个工艺所用的1.8 v和3.3v的器件，3.3V比1.8V的多了一层layer，我们可以选择这个层次的有无来选择两种不同的器件，我们就以这个例子来定义。   选择需要定义的层次，然后   

[![利用Cadence-virtuoso-layout-edit制做pcellpng011](/public/2011/07/Cadence-virtuoso-layout-editpcellpng011.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng011.png)   

出现的图框中进行定义   

[![利用Cadence-virtuoso-layout-edit制做pcellpng012](/public/2011/07/Cadence-virtuoso-layout-editpcellpng012.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng012.png)   

Ok   Compile-to pcell并保存   

[![利用Cadence-virtuoso-layout-edit制做pcellpng013](/public/2011/07/Cadence-virtuoso-layout-editpcellpng013.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng013.png)   

[![利用Cadence-virtuoso-layout-edit制做pcellpng014](/public/2011/07/Cadence-virtuoso-layout-editpcellpng014.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng014.png)

如上两图，可以通过TG？的选择，实现MOS从3.3V到1.8V的转换   Parameterized shapes的定义   

[![利用Cadence-virtuoso-layout-edit制做pcellpng015](/public/2011/07/Cadence-virtuoso-layout-editpcellpng015.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng015.png)   

选中一层layer ，且只能选种一层layer 然后define：   

[![利用Cadence-virtuoso-layout-edit制做pcellpng016](/public/2011/07/Cadence-virtuoso-layout-editpcellpng016.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng016.png)   

Margin代表说调用图中离左边缘的距离   
[![利用Cadence-virtuoso-layout-edit制做pcellpng017](/public/2011/07/Cadence-virtuoso-layout-editpcellpng017.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng017.png)   

红色定义的layer，margin=0时   

[![利用Cadence-virtuoso-layout-edit制做pcellpng018](/public/2011/07/Cadence-virtuoso-layout-editpcellpng018.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng018.png)   

Margin=2时，   

[![利用Cadence-virtuoso-layout-edit制做pcellpng019](/public/2011/07/Cadence-virtuoso-layout-editpcellpng019.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng019.png)   

Repeat along shape：是在上个定义的基础上进行定义，选种另外一层layer   

[![利用Cadence-virtuoso-layout-edit制做pcellpng020](/public/2011/07/Cadence-virtuoso-layout-editpcellpng020.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng020.png)   

Define   

[![利用Cadence-virtuoso-layout-edit制做pcellpng021](/public/2011/07/Cadence-virtuoso-layout-editpcellpng021.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng021.png)   

上图参数要选择合适的值   

[![利用Cadence-virtuoso-layout-edit制做pcellpng022](/public/2011/07/Cadence-virtuoso-layout-editpcellpng022.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng022.png)   

这个定义可以定义多层layer ，因此可以定义其他可以用到的层次比如via，metal，等等   同时我们还可以用这两个选项进行path的设置如下图   

[![利用Cadence-virtuoso-layout-edit制做pcellpng023](/public/2011/07/Cadence-virtuoso-layout-editpcellpng023.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng023.png)   

设置参数，然后和上述步骤相同   

[![利用Cadence-virtuoso-layout-edit制做pcellpng024](/public/2011/07/Cadence-virtuoso-layout-editpcellpng024.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng024.png)   

Reference point的定义   [![利用Cadence-virtuoso-layout-edit制做pcellpng025](/public/2011/07/Cadence-virtuoso-layout-editpcellpng025.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng025.png)   

在前面Parameterized shapes的基础上进行下面的定义，选种layer   设置endpoint of the path ，选择cont需要定义的位置   

[![利用Cadence-virtuoso-layout-edit制做pcellpng026](/public/2011/07/Cadence-virtuoso-layout-editpcellpng026.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng026.png)   

[![利用Cadence-virtuoso-layout-edit制做pcellpng027](/public/2011/07/Cadence-virtuoso-layout-editpcellpng027.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng027.png)   

[![利用Cadence-virtuoso-layout-edit制做pcellpng028](/public/2011/07/Cadence-virtuoso-layout-editpcellpng028.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng028.png)   

[![利用Cadence-virtuoso-layout-edit制做pcellpng029](/public/2011/07/Cadence-virtuoso-layout-editpcellpng029.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng029.png)   

同理，define by parameterized 和上面同样定义适用于不是矩形图形，   

[![利用Cadence-virtuoso-layout-edit制做pcellpng030](/public/2011/07/Cadence-virtuoso-layout-editpcellpng030.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng030.png)   

可以调节参数X来进行调节上述图形。   Inherieted paraneters   

[![利用Cadence-virtuoso-layout-edit制做pcellpng031](/public/2011/07/Cadence-virtuoso-layout-editpcellpng031.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng031.png) 

这个设置主要用于多层次的设置，比如我要建立一个inv，我可以利用已经建立好PMOS，NMOS来实现这个功能，比如我要建立一个NMOS/PMOS，L和M相同，但是W不同的一个inv，如果只是象原来那样设置的话，我无法改变PMOS和NMOS的L，W，M，只能改边最上面设置的几个参数   [![利用Cadence-virtuoso-layout-edit制做pcellpng032](/public/2011/07/Cadence-virtuoso-layout-editpcellpng032.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng032.png)   

[![利用Cadence-virtuoso-layout-edit制做pcellpng033](/public/2011/07/Cadence-virtuoso-layout-editpcellpng033.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng033.png) 

选中PMOS然后定义 [![利用Cadence-virtuoso-layout-edit制做pcellpng034](/public/2011/07/Cadence-virtuoso-layout-editpcellpng034.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng034.png)   

定义上述的各种参数   [![利用Cadence-virtuoso-layout-edit制做pcellpng035](/public/2011/07/Cadence-virtuoso-layout-editpcellpng035.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng035.png)

NMOS 同样定义   这个时候进行上层poly，M 的设置，   

[![利用Cadence-virtuoso-layout-edit制做pcellpng036](/public/2011/07/Cadence-virtuoso-layout-editpcellpng036.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng036.png)   

**然后根据要求进行连线**   **Parameterized layers**   **这个命令可以选择一些layer进行随意变换，比如**   **选种一层TG**   

[![利用Cadence-virtuoso-layout-edit制做pcellpng037](/public/2011/07/Cadence-virtuoso-layout-editpcellpng037.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng037.png)   

**Define**   

[![利用Cadence-virtuoso-layout-edit制做pcellpng038](/public/2011/07/Cadence-virtuoso-layout-editpcellpng038.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng038.png)   

**第二个选项可以不填，属于可选选项**   **Compile-to pcell ，调用**   

[![利用Cadence-virtuoso-layout-edit制做pcellpng039](/public/2011/07/Cadence-virtuoso-layout-editpcellpng039.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng039.png)   

**在TG中填入任何一种layer，如nwl，图中的TG便NWL 所替代。**   

**Parameterized label：**  

[![利用Cadence-virtuoso-layout-edit制做pcellpng040](/public/2011/07/Cadence-virtuoso-layout-editpcellpng040.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng040.png)   

**如上图在设置了W，L的MIM电容后进行如下操作**   

**Define**   

[![利用Cadence-virtuoso-layout-edit制做pcellpng041](/public/2011/07/Cadence-virtuoso-layout-editpcellpng041.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng041.png)   

Lable中写入关系如需要计算或标示的关系式   

[![利用Cadence-virtuoso-layout-edit制做pcellpng042](/public/2011/07/Cadence-virtuoso-layout-editpcellpng042.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng042.png)   

Compile-to pcell，可以看到调用的pcell可以直接将电容面积计算出来，如果将电容的单位容值加进去，也可以直接计算出电容值。   

[![利用Cadence-virtuoso-layout-edit制做pcellpng043](/public/2011/07/Cadence-virtuoso-layout-editpcellpng043.png)](/public/2011/07/Cadence-virtuoso-layout-editpcellpng043.png)                                                                                                                                                                                
