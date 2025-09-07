---
date: 2013-11-25 15:00:15
title: windows7硬盘安装fedora19
createTime: 2013-11-25T07:00:15.000Z
permalink: /os/g756y
categories:
  - OS
tags:
  - fedora19
coverImg: https://img.onedayxyy.cn/images/TeekCover/19.webp
---

硬盘安装fedora就是将ISO镜像文件在windows的文件系统下放入linux可识别的文件系统，小于4G的单个文件可以放入FAT32 的分卷，但fedora19的ISO为4.34G，这就要先用Acronis Disk Director 划分出一个安装fedora19的分卷，一个存放ISO的分卷，且都为linux分区格式（ext2或ext3）, 然后再通过Ext2 Volume Manage在windows下挂载linux分区并将ISO拷贝到分卷，才能进行安装。网上有很多不负责任的方法，只说将ISO放放一个分区，根本不说方法。 必需的准备： 

  1. fedora19的ISO镜像文件 下载Fedora-19-x86_64-DVD.iso，并将该镜像中isolinux目录下的initrd.img和vmlinuz解压出来。
  2. Acronis Disk Director 用来将可用空间充足的磁盘分卷分割出来一个新的分卷用来安装fedora19。
  3. Ext2 Volume Manage 用来在windows下将安装文件存入linux格式的磁盘分卷。因为fedora19的DVD镜像大于了4G，已经不能被windows也能识别的FAT32格式磁盘所存储（FAT32单个文件大小最大4G）。 安装时请勾选Enable write support for Ext2 partitions及Enable force writing support on Ext3 partitions.
  4. EasyBCD 用来开机后引导安装命令
  5. 将硬盘接口设置为兼容模式：compatible.

安装fedora19：多说几句，fedora17及以前的版本我都用过，fedora18没用过，这次直接安装fedora19, 感觉是一种全新的体验，它去去除了以前的一步一步的逐步安装模式，而尽量的使的安装过程和设置转换成了并行模式。在启动时原来的grub框框被去掉了，使得系统选择的引导界面显得上了些档次，当然比起redhat的引导界面还得再美化下。 
  1. 打开Acronis Disk Director，选择管理本地计算机磁盘。选择本地硬盘可用空间较大的（推荐选择最后一个盘符），点右键，选择分割卷，新卷大小：35G（推荐大小），确定后选择该卷格式化为EXT3（可能需要重启计算机）。
  2. 在新卷上点右键，选择分割卷，原始卷大小：5G，确定后选择该卷并格式化为Linux swap。
  3. 对剩余的30G再进行分割，原始卷大小为20G（安装fedora19），新卷大小为10G(存放安装镜像，以后可以挂载到home等)。
  4. 打开Ext2 Volume Manage，选择工具与设置，配置文件系统驱动，点启用。全局默认参数设置里不勾选以只读方式加载分区，勾选支持EXT3的写操作，更改并退出。
  5. 选择10G的分卷，点右键，更改装配点盘符，添加，加载并退。选择工具与设置，重新加载系统信息。
  6. 完成上面的步骤打开我的电脑就会看到被临时加载的分卷，这时就可以将DVD镜像、initrd.img和vmlinuz一起复制到该盘。注意：initrd.img和vmlinuz要先解压再复制到这来，不然安装时可以会出错。
  7. 在Ext2 Volume Manage，选择工具与设置，选择10G的分卷，点右键，更改装配点盘符，选中已经加载的盘符，点删除。同时呢记住这个分卷的设备名的最后一个数字，很重要。
  8. 打开EasyBCD, 选择 Add New Entry--->NeoGrub, 选Install, 再选Configure. 在打开的menu.lst中添加下面的代码，并保存退出。 [code lang="bash"]title fedora19 root (hd0,8) kernel /vmlinuz linux repo=hd:/dev/sda9:/Fedora-19-x86_64-DVD.iso initrd /initrd.img[/code] ######################################## ##root（hd0,8）其中的8即为第7步中记住的那个数字### ##hd:/dev/sda9 其中的9即为第7步中记住的数字加1#### ########################################
  9. 重启系统。
  10. 选择NeoGrub Bootloader, 进入到了GRUB4DOS的引导界面，选择 Fedora19 回车开始加载文件。但是到这步后有可能会提示错误进行不下去。那么就要尝试去修改分卷的那个数字。方法是在 显示fedora19时按下面的提示按字母e去修改，比如改为root(hd0,9), hd:/dev/sda10。 我安装的时候ext2FSD显示的那个10G的分区是8，安装的时候就提示错误，改为9就对了。
  11. 前面10步才是重点，如果遇到问题反复查看 一下，或留言提问。后面真正开始安装就是小菜一碟了。
  12. 正确的加载文件后就进入安装，显示 welcome to fedora 19, 并让你选择语言。
  13. 配置网络，同时注意下面有个hostname.
  14. 接下来进入installation summary界面，会有三块内容需要配置，分别是LOCALIZATION， SOFTWARE和STORAGE，在LOCALIZATION中需要配置时区，键盘和语言，简单不多说；SOFTWARE中会自动检测到ISO镜像及网络，并默认选择GNOME Desktop做为软件环境，可以点击进行更详细的配置； STORAGE，这里是要选择你把fedora安装在哪里的地方，需要认真对待。具体方法是点击installation destination, 会列出你的硬盘，点击出现对号后点左上角的在DONE，会出会installation options的窗口，选择下面的custom partitioning, 完成后会在新界面的unknown下面列出所有分卷，选择要安装fedora19的那个20G的分卷，点+号， mount point选择 /, add mount point, 并在右边选择 reformat分卷为ext3, update setting, DONE. 出现 summary of changes, accept changes, 返回installation summary， 确定所有选项正确, Begin Installation(没有正确配置前这一项是不能点的)。
  15. 安装正式开始，同时在这里可以设置root密码和创建新用户。
  16. 漫长的等待后重新启动，然后进行简单的配置就可以进入fedora19了。
  17. 下次进入windows后别忘了打开easybcd, Add New Entry--->NeoGrub—> remove.


