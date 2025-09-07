---
date: 2017-08-01 08:19:25
title: iscape运行错误
createTime: 2017-08-01T00:19:25.000Z
permalink: /eda/wrd86
categories:
  - EDA
tags:
  - installscape
  - iscape
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

:::caution
Initializing InstallScape using JVM at /opt/iscape.04.23-s008/runtime/LNX86/bin/java. This might take some time... Exception in thread "main" java.lang.UnsatisfiedLinkError: /opt/iscape.04.23-s008/runtime/LNX86/lib/i386/xawt/libmawt.so: libXtst.so.6: cannot open shared object file: No such file or directory at java.lang.ClassLoader$NativeLibrary.load(Native Method) at java.lang.ClassLoader.loadLibrary0(Unknown Source) at java.lang.ClassLoader.loadLibrary(Unknown Source) at java.lang.Runtime.load0(Unknown Source) at java.lang.System.load(Unknown Source) at java.lang.ClassLoader$NativeLibrary.load(Native Method) at java.lang.ClassLoader.loadLibrary0(Unknown Source) at java.lang.ClassLoader.loadLibrary(Unknown Source) at java.lang.Runtime.loadLibrary0(Unknown Source) at java.lang.System.loadLibrary(Unknown Source) at sun.security.action.LoadLibraryAction.run(Unknown Source) at java.security.AccessController.doPrivileged(Native Method) at java.awt.Toolkit.loadLibraries(Unknown Source) at java.awt.Toolkit.(Unknown Source) at com.khanpur.installer.gui.InstallerUI.main(InstallerUI.java:107)` 
:::

```sh
sudo dnf install libXtst.so.6 
/opt/iscape/bin/iscape.sh /xxx/IC610_lnx86.Base/CDROM1:::/xxx/ic610
```
