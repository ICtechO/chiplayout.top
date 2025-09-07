---
date: 2023-03-24 18:47:19
title: Flattening a List with Many Levels
createTime: 2023-03-24T10:47:19.000Z
permalink: /skill/qe8k4
categories:
  - program
tags:
  - flatten
  - list
  - skill
coverImg: https://img.onedayxyy.cn/images/TeekCover/4.webp
---

```cadence
procedure ( flatten ( numberList )
	foreach ( mapcan element numberList
		if ( listp ( element )
			flatten ( copy ( element )) ;;then
			ncons ( element ))
		); if
	); foreach
); procedure

x = '((1) ((2 (3) 4 ((5)) () 6) ((7 8 ()))) 9)
flatten(x) => (1 2 3 4 5 6 7 8 9)
x =>((1) ((2 (3) 4 ((5)) nil 6) ((7 8 nil))) 9)
```
