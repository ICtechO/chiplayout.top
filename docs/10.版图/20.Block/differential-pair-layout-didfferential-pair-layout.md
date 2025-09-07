---
date: 2011-09-13 20:01:01
title: 差分对版图(Didfferential Pair Layout)
createTime: 2011-09-13T12:01:01.000Z
permalink: /Layout/64jqr
categories:
  - Layout
tags:
  - pair
coverImg: https://img.onedayxyy.cn/images/TeekCover/2.webp
---

::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/1-Basic-Differential-Pair-Layout.jpg
  name: Basic Differential Pair Layout
  desc: Good matching in the absence of cross-chip gradients; both drain currents flow in same direction.
```
:::


::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/2-Alternative-Differential-Pair-Layout.jpg
  name: Alternative Differential Pair Layout
  desc: More compact, but worse matching than previous case; drain currents flow in opposite directions.
```
:::


::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/3-Common-Centroid-Layout.jpg
  name: Common Centroid Layout
  desc: Q1 and Q2 have a common centroid, which makes them immune from cross-chip gradients. Best matching performance possible.
```
:::


::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/4-Alternative-Common-Centroid-Layout.jpg
  name: Alternative-Common-Centroid-Layout
  desc: Immune from cross-chip gradients like previous case, but area is saved by sharing sources.
```
:::


::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/5-Differential-Pair-with-Very-Wide-Transistors.jpg
  name: Differential Pair with Very Wide Transistors
  desc: Very wide transistors can lead to awkward layout and significant series gate resistance.
```
:::


::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/6-Multi-Finger-Transistors.jpg
  name: Multi-Finger Transistors
  desc: Multi-fingered gates save space and reduce series resistance in gate. Notice that drains are selected to minimize parasitic capacitance to bulk.
```
:::


::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/7-Common-Centroid-Layout-with-Multi-Fingered-Gates.jpg
  name: Common Centroid Layout with Multi-Fingered Gates
  desc: Drain-to-bulk parasitic capacitance is minimized; sources are partially shared to save area.
```
:::


::: imgCard
```yaml
- img: /public/75efee0e3e45_12EBC/8-Doughnut-Transistors.jpg
  name: Doughnut-Transistors
  desc: Gives the minimum Cgd (gate-to-drain overlap) and Cdb (drain-to-bulk) parasitic capacitances for a given W/L ratio. May be used to minimize Miller effect when high speed is desired and a dominant pole is created elsewhere.
```
:::



