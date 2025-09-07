---
date: 2010-12-23 03:04:09
title: IC版图之：windowsXP从硬盘安装 fedora 14
createTime: 2010-12-22T19:04:09.000Z
permalink: /os/lig00
categories:
  - OS
tags:
  - IC版图
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---

做为IC版图工程师，在个人电脑上装有linux系统还是有点必要滴，说不定哪天来劲在工作之余想学点东西。
fedora是众多linux系统之一，2003年9月Redhat自9.0以后不在推出个人使用的发行套件，而把这个项目与开源社区合作，形成了新的Fedora Project。 
Fedora官网：<http://fedoraproject.org> 
有些人可能觉得光盘安装方便点，可是对于没有光盘的人或者爱折腾（本人属于此类哈）的人而言，硬盘安装fedora14无疑是个好选择。 

 1. 从 <http://fedoraproject.org/zh_CN/get-fedora-options#formats> 下载Fedora 14 推荐适用于32位系统的DVD版，如果选择了64位，你会为可兼容的软件少而头疼不已。


 2. 下载grub4doc工具，完成解压后将grub4dos文件夹中的grldr文件放在XP所在的C盘（根目录）

下载地址1：[http://u.115.com/file/f3d71e7e4d#grub4dos-0.4.4.zip](http://u.115.com/file/f3d71e7e4d) 
下载地址2：<http://sourceforge.net/projects/grub4dos/>

3. 打开C盘根目录下的boot.ini文件，末尾加上 c:grldr=”fedra”,并将timeout=0改为timeout=5

*要注意的是boot.ini是个隐藏文件，而在我的电脑文件夹选项中去掉[隐藏受保护的操作系统文件前面的勾]才能看到。还有如果编辑或保存不了，请点右键属性，去掉只读属性 
1. 把Fedora-14-i386-DVD.iso镜像文件中的images文件夹解压到D盘


2. 把Fedora-14-i386-DVD.iso镜像文件中isolinux目录下的initrd.img和vmlinuz解压到D盘。


3. 把grub4dos的menu.lst也放在D盘，修改menu.lst,在最后加上如下代码： `title Install Fedora 14 kernel (hd0,4)/vmlinuz initrd (hd0,4)/initrd.img`

这里要说明是的要注意自己的硬盘分区编号，如果是正常的只有一块硬盘且只装的XP的话，你的D盘就是(hd0,4),E盘就是（hd0,5）,F盘就是（hd0,6）依次类推，如果想多了解点可以查看[linux下硬盘的编号识别,类似（hd[0-n],y）](http://www.chiplayout.net/?p=353 "Permanent Link to linux下硬盘的编号识别,类似（hd\[0-n\],y）")；而后面的vmlinuz和initrd.img目录也要注意，如果是按第5步放在分区根目录了，就是这样，如果是放在了isolinux目录下则要写成 （hd0,4）/isolinux/vmlinuz 的格式 3 

 1. 重新启动电脑，在系统选择界面中选择fedora, 准备开始从硬盘安装fedora 14


 2. 成功进入grub4doc引导，选择最后一个 Install Fedora 14


 3. 成功加载，选择简体中文


 4. 选择安装要用的image存储煤介，为硬盘。


 5. 选择install.img所在路径，这里如果是D盘就是5，EF.....对应67..，不过这里可以试的 没有的话就不会列出文件


 6. 进入Fedora 14安装界面


 7. 驱动器选择


 8. 安装类型选择


 9. 先择要安装Fedora 14的分区，并将该分区挂载到 根目录 / ,这里和XP差不多的


 10. 选择电脑启动时默认引的的系统，


 11. 安装开始。。。。。。


  12. 等待完成


