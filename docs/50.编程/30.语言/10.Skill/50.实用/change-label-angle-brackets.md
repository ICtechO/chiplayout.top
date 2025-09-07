---
date: 2011-08-10 16:15:18
title: 将label中的尖括号转为中括号的skill
createTime: 2011-08-10T08:15:18.000Z
permalink: /skill/5mra5
categories:
  - program
tags:
  - label
  - skill
coverImg: https://img.onedayxyy.cn/images/TeekCover/5.webp
---

说实话，经常遇到的是把APR中的带[ ]的label转为带< >，这尖括号改为中括号还挺少用的，不过今天是网上转悠的时候遇到了，本着现在不用，以后可能用的想法，就留个备份了。使用说明程序中已说明。
```cadence
/*******************************************************************************  
* DISCLAIMER: The following code is provided for Cadence customers to use at *  
* their own risk. The code may require modification to satisfy the *  
* requirements of any user. The code and any modifications to the code may *  
* not be compatible with current or future versions of Cadence products. *  
* THE CODE IS PROVIDED “AS IS” AND WITH NO WARRANTIES, INCLUDING WITHOUT *  
* LIMITATION ANY EXPRESS WARRANTIES OR IMPLIED WARRANTIES OF MERCHANTABILITY *  
* OR FITNESS FOR A PARTICULAR USE. *  
*******************************************************************************/  
; *Solution_No: 11094824  
; *Title: How to change Pin labels from “<>” to “[]”  
; Name: CCSchangeLabelDelimiter.il  
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  
; Save this code to a file such as CCSchangeLabelDelimiter.il  
; and then load in CIW as  
; load(“CCSchangeLabelDelimiter.il”).  
; Then type CCSchangeLabelDelimiter() in CIW.  
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  
procedure(CCSchangeLabelDelimiter()  
	let( (cv mylabels myUniquelabels tmpcv labelText name  
	index newlab)  
		;;cv = geGetEditCellView()  
		cv = dbOpenCellViewByType(“master” “MUX”   “layout_test” nil “a”)  
		;;search the cell hierarchy for labels that start   with “A” and end with “>”  
		;;The third argument defines the number of hierarchy   levels you wish to search  
		mylabels=leSearchHierarchy( cv cv~>bBox 32  
			“label”  
			list( list( “text” “==” “^A” ) list(“text”  
			“==” “>$”))  
		)  
		;;create a list of unique labels  
		myUniquelabels = nil  
		foreach(x mylabels  
			unless(member(x myUniquelabels)  
				myUniquelabels = cons(x   myUniquelabels)  
			)  
		)  
		foreach(lab myUniquelabels  
		labelText =   lab~>theLabel  
		name =   car(parseString(labelText   “[“))  
		index=   car(parseString(cadr(parseString(labelText   ” 
		newlab=   buildString(list(buildString(list(name   index ) “[“) “]”) “”)  
		printf(“Original Label was %sn”   labelText)  
		printf(“The new Label would be   %sn” newlab)  
		;;if label is not in top level, we need to   open the instance master in edit   
		;;mode to modify the label  
		if(lab~>cellView~>cellName !=   cv~>cellName then  
			tmpcv =   dbOpenCellViewByType(lab~>cellView~>libName  
				lab~>cellView~>cellName  
				lab~>cellView~>viewName  
				nil “a”)  
			;;println(lab~>name)  
			lab~>theLabel = newlab  
			dbSave(tmpcv)  
			dbClose(tmpcv)  
		)  
		;; for top level labels  
		;;println(lab~>name)  
		lab~>theLabel = newlab  
		)  
		dbSave(cv)  
		dbClose(cv)  
	);let  
);procedure  
;  
; Save this code to a file such as CCSchangeLabelDelimiter.il  
; Load in the Virtuoso CIW using load(“CCSchangeLabelDelimiter.il”)  
; Then type CCSchangeLabelDelimiter() in the CIW.  
;  
;; End of CCSchangeLabelDelimiter.il[/cc]
```