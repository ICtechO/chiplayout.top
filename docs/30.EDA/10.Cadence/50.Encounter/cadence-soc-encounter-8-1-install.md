---
date: 2016-04-13 06:42:27
title: cadence soc encounter 8.1 install
createTime: 2016-04-12T22:42:27.000Z
permalink: /eda/3ad2x
categories:
  - EDA
tags:
  - encounter
  - soc
coverImg: https://img.onedayxyy.cn/images/TeekCover/1.webp
---

其实安装过程和安装IC610一样，大概总结一下 
 1. 将下载的压缩包解压，默认会解压到SOC Encounter 8.1，尝试安装时不支持有空格的路径，所以将该目录里面的SOC08.10.000_lnx86.Base移动到了当前路径。 
 2. 新建安装路径，如 /xx/cds/soc810 
 3. 进入到 SOC08.10.000_lnx86.Base/CDROM1, 运行 ./SETUP.SH 
 4. terminal会有以下提示 
 :::tip
 Copyright 1985-2006 by Cadence Design Systems Inc. LICENSED SOFTWARE - REVERSE ASSEMBLY, REVERSE COMPILATION AND REVERSE ENGINEERING PROHIBITED. The information contained in this package is the proprietary property of Cadence Design Systems, Inc., or its licensors, and may only be used in accordance with the Cadence Design Systems license agreement under which this package is provided. Restricted Rights Notice to Government Users Use duplication or disclosure by the Government is subject to the restrictions as set forth in subparagraphs (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 252.227-7013. Unpublished - all rights reserved under the copyright laws of the United States. Cadence Design Systems, Inc. 555 River Oaks Parkway San Jose, California 95134 USA Located CDROM at /xx/cds/SOC08.10.000_lnx86.Base/CDROM1 
 Specify path of install directory [OR type [RETURN] to exit]: /xx/cds/soc810 (这里写要安装到哪里)  
 Detecting InstallScape for lnx86... 
 Checking InstallScape on media... 
 Could not detect an InstallScape for lnx86 platform using the PATH environment variable It is a good idea to have only one Installation of InstallScape for lnx86 platform. 
 If an InstallScape installation exists please help us find it. 
 Do you have InstallScape for lnx86 platform installed somewhere [y/n]?y（安装virtuoso时已经安装过了installscape） 
 Type the path to existing InstallScape installation for lnx86: 
 Specify the directory containing the ~iscape directory for lnx86 [(q to quit)]/xx/cds/installscape(installscape安装在哪里) 
 Existing InstallScape 
 installation directory: /xx/cds/installscape 
 Detected InstallScape for platform lnx86... 
 Checking its version... 
 InstallScape version 03.60.p02 for platform lnx86 is available on media (/xx/cds/SOC08.10.000_lnx86.Base/CDROM1) 
 InstallScape version 03.40.p06 for platform lnx86 is installed in /xx/cds/installscape 
 Your installed version seems to be older than the version on media. 
 Do you want to update InstallScape in /xx/cds/installscape [y/n]?y（原来的版本比较旧，是否要更新） 
 Extracting InstallScape version 03.60.p02 for platform lnx86 in /xx/cds/installscape 
 Starting up InstallScape in GUI mode DISPLAY environment variable is set to :0 
 If you do not see the InstallScape console window or the it seems to be hanging then kill this process. 
 Set your DISPLAY environment variable to a proper value and manually start InstallScape by typing: /xx/cds/installscape/iscape/bin/iscape.sh /xx/cds/SOC08.10.000_lnx86.Base/CDROM1:::/xx/cds/soc810 Initializing InstallScape using JVM at /xx/cds/installscape/iscape/runtime/LNX86/bin/java. This might take some time... 
 :::

 5. 选择安装目录 

 ![Screenshot from 2016-04-11 23-43-29](/public/2016/04/Screenshot-from-2016-04-11-23-43-29.png) 

 6. 手动选择安装列表 

 ![Screenshot from 2016-04-11 23-43-14](/public/2016/04/Screenshot-from-2016-04-11-23-43-14.png) 

 7. 一般全选了 

 ![Screenshot from 2016-04-11 23-43-47](/public/2016/04/Screenshot-from-2016-04-11-23-43-47.png) 

 8. 版本信息 

 ![Screenshot from 2016-04-11 23-43-57](/public/2016/04/Screenshot-from-2016-04-11-23-43-57.png)

 9. 开如安装了 

 ![Screenshot from 2016-04-11 23-44-10](/public/2016/04/Screenshot-from-2016-04-11-23-44-10.png) 

 10. 全部完成 
 
 ![Screenshot from 2016-04-11 23-48-25](/public/2016/04/Screenshot-from-2016-04-11-23-48-25.png)
