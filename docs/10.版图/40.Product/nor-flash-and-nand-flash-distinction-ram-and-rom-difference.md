---
date: 2013-07-01 15:24:29
title: NOR flash和NAND flash区别,RAM 和ROM区别
createTime: 2013-07-01T07:24:29.000Z
permalink: /Layout/yuji8
categories:
  - IC
tags:
  - nand
  - nor
  - ram
  - rom
coverImg: https://img.onedayxyy.cn/images/TeekCover/3.webp
---

> 一张思维导图帮你把 ROM、RAM、FLASH、DRAM、SRAM、PSRAM 及主流闪存卡一次说清。

---

## 1. 存储器总览

| 大类 | 细分 | 掉电数据 | 访问方式 | 典型容量 | 主要应用 |
|---|---|---|---|---|---|
| **ROM** | PROM / EPROM / EEPROM | **不丢失** | 随机 | KB–MB | 固件 |
| **FLASH** | NOR / NAND | **不丢失** | 块 | MB–TB | BIOS、U盘 |
| **RAM** | SRAM / DRAM / PSRAM | **丢失** | 随机 | KB–GB | 主存、缓存 |

---

## 2. ROM 家族

| 名称 | 可擦写 | 擦写粒度 | 寿命 | 备注 |
|---|---|---|---|---|
| **PROM** | 一次 | — | 1 次 | 已淘汰 |
| **EPROM** | UV 擦除 | 整片 | 1000 次 | 需紫外线 |
| **EEPROM** | 电擦除 | **字节** | 10⁵ 次 | 价格高、慢 |
| **Flash ROM** | 电擦除 | **扇区** | 10⁵–10⁶ 次 | 容量大、便宜 |

---

## 3. RAM 家族

| 类型 | 存储单元 | 刷新 | 速度 | 价格 | 用途 |
|---|---|---|---|---|---|
| **SRAM** | 6T 触发器 | 无 | 极快 | 极贵 | CPU 缓存 |
| **DRAM** | 1T+1C | **需要** | 快 | 便宜 | 主存 |
| **SDRAM** | 1T+1C | 同步时钟 | 更快 | 便宜 | PC/手机主存 |
| **DDR RAM** | SDRAM ×2 沿采样 | 同步 | 再翻倍 | 更便宜 | 主流内存 |
| **PSRAM** | 1T+1C (伪 SRAM) | **内部** | 中等 | 介于 SRAM 与 DRAM | 便携缓存 |

---

## 4. FLASH 双雄：NOR vs NAND

| 维度 | NOR | NAND |
|---|---|---|
| **容量段** | 1–16 MB | 8 MB–TB |
| **读速度** | 快（字节随机） | 慢（按页） |
| **写/擦速度** | 慢（5 s） | 快（4 ms） |
| **接口** | SRAM 并口 | 串行 I/O |
| **XIP** | ✅ 直接执行 | ❌ 需拷贝到 RAM |
| **寿命 (擦写)** | 10⁵ | 10⁶ |
| **坏块** | 几乎无 | 需 ECC & 坏块表 |
| **价格** | 高 | 低 |
| **典型应用** | BIOS、启动代码 | U盘、SSD、SD 卡 |

> **系统启动套路**：NOR 启动 → 把 OS/应用从 NAND 拷贝到 SDRAM 执行。

---

## 5. 常见闪存卡

| 卡种 | 尺寸 (mm) | 接口 | 特点 | 主要场景 |
|---|---|---|---|---|
| **CF** | 43×36×3.3 | 50 针 ATA | 坚固、高电压兼容 | 单反相机 |
| **MMC** | 32×24×1.4 | 7 针 SPI | 超小、轻 | 手机、MP3 |
| **SD** | 32×24×2.1 | 9 针 SD | 向下兼容 MMC | 相机、手机 |
| **Memory Stick** | 50×21×2.8 | 10 针 | 索尼专用 | 索尼设备 |

---

## 6. 记忆口诀

- **ROM**：掉电不丢，存代码；Flash 是升级版。  
- **RAM**：掉电即失，做缓存；SRAM 快贵，DRAM 慢便宜。  
- **FLASH**：NOR 能启动，NAND 大容量；卡式封装变 U 盘、SD、SSD。

---

> 一张图记牢：  
> ```
> 存储器
>  ├─ ROM（掉电不丢）
>  │   ├─ PROM/EPROM/EEPROM
>  │   └─ Flash → NOR vs NAND
>  ├─ RAM（掉电即失）
>  │   ├─ SRAM（6T，快贵）
>  │   ├─ DRAM（1T1C，刷新）
>  │   └─ PSRAM（伪 SRAM）
>  └─ 闪存卡 → CF / MMC / SD / MS
> ```