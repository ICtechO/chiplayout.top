---
date: 2015-10-28 07:17:26
title: fedora22 admin is not in the sudoers file
createTime: 2015-10-27T23:17:26.000Z
permalink: /os/oh60p
categories:
  - OS
tags:
  - fedora22
  - sudo
coverImg: https://img.onedayxyy.cn/images/TeekCover/14.webp
---


**环境**：全新安装 Fedora 22，安装时将用户名设为 `admin`。  
**现象**：执行 `sudo` 时提示

```
admin is not in the sudoers file. This incident will be reported.
```

## 解决步骤

1. **切换到 root**  
   ```bash
   su -
   ```

2. **编辑 sudoers 文件**  
   ```bash
   visudo
   ```

3. **找到并修改配置**  
   定位到：
   ```
   ## Allow root to run any commands anywhere
   root    ALL=(ALL)       ALL
   ```
   在其下方 **新增一行**：
    ```bash
    ## Allow root to run any commands anywhere
    root    ALL=(ALL)       ALL
    admin   ALL=(ALL)       ALL #[!code ++]
    ```

4. **保存并退出**  
   在 vim 中按 `Esc`，输入 `:wq` 回车。

5. **验证**  
   打开新的终端，执行：
   ```bash
   sudo gedit /etc/test
   ```
   不再报错即可。

---

> 编辑完成后，用户 `admin` 即拥有完整 `sudo` 权限。