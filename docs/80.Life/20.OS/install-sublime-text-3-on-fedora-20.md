---
date: 2014-04-18 07:10:15
title: fedora20安装Sublime Text 3
createTime: 2014-04-17T23:10:15.000Z
permalink: /os/8uc31
categories:
  - OS
tags:
  - fedora20
  - sublime
coverImg: https://img.onedayxyy.cn/images/TeekCover/12.webp
---

XP退役了，玩玩linux, 由于fedora源于redhat，所以还是比较喜欢的。
一直用的sublime text编写代码，就网上搜了下fedora平台sublime text的安装，找到以简单NB的方法，就一句话。 
```bash
$ curl -L http://git.io/3Wr2CQ | sh 
```
 看了下，http://git.io/3Wr2CQ其实是写好的安装脚本，内容如下 
```bash
#!/bin/sh

# Sublime Text 3 install with Package Control
# http://simonewebdesign.it/blog/install-sublime-text-3-on-fedora-20/

# Run this script with:
# $ curl LINK_TO_THIS_SCRIPT | sh

curl -o ~/st3.tar.bz2 http://c758482.r82.cf2.rackcdn.com/sublime_text_3_build_3059_x64.tar.bz2
if tar -xf ~/st3.tar.bz2 –directory=$HOME; then
sudo mv ~/sublime_text_3/ /opt/
sudo ln -s /opt/sublime_text_3/sublime_text /bin/subl
fi
rm ~/st3.tar.bz2

# Package Control – The Sublime Text Package Manager: https://sublime.wbond.net
curl -o ~/Package Control.sublime-package https://sublime.wbond.net/Package%20Control.sublime-package
sudo mv ~/Package Control.sublime-package /opt/sublime_text_3/Packages/

# Add to applications list
cat << EOF > ~/.local/share/applications/sublime.desktop
[Desktop Entry]
Name=Sublime Text
Exec=subl %F
MimeType=text/plain;
Terminal=false
Type=Application
Icon=/opt/sublime_text_3/Icon/128×128/sublime-text.png
Categories=Utility;TextEditor;Development;
EOF

echo ""
echo "Sublime Text 3 installed successfully!"
echo "Run with: subl"
```
