---
date: 2011-09-21 23:16:53
title: windows7 bcdedit.ex 无法打开启动数据配置存储
createTime: 2011-09-21T15:16:53.000Z
permalink: /os/nt7pl
categories:
  - OS
tags:
  - bcdedit
  - windows7
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---


> 适用于 Windows 7 + Fedora / Red Hat 双系统，全部步骤亲测可用，重启不丢引导。

---

## 1. 先解决 bcdedit “拒绝访问”
> 现象：`bcdedit` 报 **“无法打开启动配置数据存储 拒绝访问”**

**原因**：CMD 没有管理员权限  
**解决**（三选一）[^1^][^8^][^9^]：

| 方法 | 操作 |
|---|---|
| **推荐** | 开始 → 搜索 **cmd** → 右键 **cmd.exe** → **以管理员身份运行** |
| 快速 | Win+R → 输入 `cmd` → Ctrl+Shift+Enter |
| 永久 | cmd.exe → 属性 → 兼容性 → 勾“以管理员身份运行” |

---

## 2. 安装 Fedora / Red Hat 关键步骤
### 2.1 预留空间  
- 在 Win7 **磁盘管理** 中腾出 **未分配空间**（建议 ≥ 20 GB）。  
- **不要**格式化，留给安装程序。

### 2.2 安装选项  
- **引导程序位置**：选择 **/boot 所在分区**（而非 MBR），避免破坏 Win7 引导[^3^]。  
- **时区**：去掉 **UTC** 勾，防止两个系统时间错乱[^3^]。

---

## 3. 安装完成后 Win7 看不到 Linux？两种修复方案

### 方案 A：EasyBCD（图形化，零命令）
1. 下载 [EasyBCD](http://neosmart.net/dl.php?id=1)。  
2. 打开 → Add New Entry → **Linux/BSD**  
   - Type：GRUB 2  
   - Drive：选择 **/boot 分区**（100 MB 左右那个）  
   - **Add Entry** → 重启即出现双系统菜单[^3^]。

### 方案 B：bcdedit 手动添加 GRUB4DOS（无第三方软件）
1. 复制 `grldr` `grldr.mbr` `menu.lst` 到 **C:\**  
2. 管理员 CMD 执行：
```bat
bcdedit /create /d "Fedora" /application bootsector
:: 会得到 {GUID}
bcdedit /set {GUID} device partition=C:
bcdedit /set {GUID} path \grldr.mbr
bcdedit /displayorder {GUID} /addlast
```
3. 编辑 `C:\menu.lst` 末尾追加：
```
title Fedora
root (hd0,X)
kernel (hd0,X)/vmlinuz linux askmethod repo=hd:/dev/sdaY:/
initrd (hd0,X)/initrd.img
boot
```
> X = /boot 分区序号，Y = ISO 所在分区序号。

## 4. 删除 Linux（随时回滚）

- **EasyBCD**：删除条目 → 保存 → 磁盘管理删除 Linux 分区即可。
- **bcdedit**：
	```bat
	bcdedit /enum           # 找到 {GUID}
	bcdedit /delete {GUID}
	```
    

## 5. 一页速记

|步骤|关键命令 / 工具|
|:--|:--|
|提权|管理员 CMD|
|装系统|选 /boot 分区装 GRUB|
|修引导|EasyBCD 或 bcdedit|
|回滚|bcdedit /delete|

照表操作，Win7 + Fedora / Red Hat 双系统 10 分钟搞定！
