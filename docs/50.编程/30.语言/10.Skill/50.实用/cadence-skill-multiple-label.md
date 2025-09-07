---
date: 2010-11-23 05:38:46
title: skill编写的cadence打label增强程序
createTime: 2010-11-22T21:38:46.000Z
permalink: /skill/orkgc
categories:
  - program
tags:
  - label
  - skill
coverImg: https://img.onedayxyy.cn/images/TeekCover/8.webp
---

这个脚本的代码是费了很多事找到的，感觉还行，复制红色部分存为 **spHiCreateMultiLabel.il   。** 使用方法脚本中很详细的介绍了。 纯属他人劳动成果，请勿滥用！
    
 ```cadence
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;;;;;;;;;;;;;;;;;;;;;;;;; Create Multiple Labels ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; /*===================================================================================
    Important Notice:
    NA. =====================================================================================
    How to Use:
    1.Load file "spHiCreateMultiLabel.il"
    2.Enter interactive procedure name "spHiCreateMultiLabel()" in CIW.
    3.Select correct layer in your LSW.
    4.An option form will be displayed. If not , press "F3".
    4.Fill data in those fields based on your requirment.
    6.Click on your layout window to determine the origin of your labels.
    =====================================================================================
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    Author:Spark Su
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Revision History:
    1.0 22-Oct-2006
    Initial
    2.0 04-Dec-2006
    1. Delete TextLayer filed. Layer should be selected in LSW.
    2. Change local variable names.
    3.0 09-May-2008
    1. Add interactive procedure spHiCreateMultiLabel()
    2. Reduce global variables.
    =====================================================================================
    Global User Defined Procedures in This Script:
    spHiCreateMultiLabel()
    spHiCreateMultiLabelPtsDone()
    -------------------------------------------------------------------------------------
    Invoked Shared Global User Defined Procedures:
    NA.
    -------------------------------------------------------------------------------------
    Global Variables:
    spHiCreateMultiLabelOptionForm
    =====================================================================================
    End of readme.
    ===================================================================================*/ procedure(spHiCreateMultiLabel()
    ;--------------------------------------------------------------------------------
    if(!boundp('spHiCreateMultiLabelOptionForm) then
    hiCreateOptionsForm(
    'spHiCreateMultiLabelOptionForm
    "Create Label"
    list(
    hiCreateStringField(
    ?name 'spFieldTextMain
    ?prompt "Main Text"
    )
    hiCreateIntField(
    ?name 'spFieldNumStart
    ?prompt "From"
    ?value nil
    ?defValue 0
    ?range '(0 32767)
    )
    hiCreateIntField(
    ?name 'spFieldNumEnd
    ?prompt "To"
    ?value nil
    ?defValue 0
    ?range '(0 32767)
    )
    hiCreateIntField(
    ?name 'spFieldNumStep
    ?prompt "Step"
    ?value nil
    ?defValue 1
    ?range '(-1024 1024)
    )
    hiCreateFloatField(
    ?name 'spFieldFontSize
    ?prompt "FontSize"
    ?value nil
    ?defValue 0.5
    ?range '(0 255)
    )
    hiCreateCyclicField(
    ?name 'spFieldFontName
    ?prompt "FontName"
    ?defValue "stick"
    ?choices list("stick" "roman")
    )
    hiCreateCyclicField(
    ?name 'spFieldDirection
    ?prompt "Direction"
    ?defValue "Vertical"
    ?choices list("Vertical" "Horizontal")
    )
    hiCreateCyclicField(
    ?name 'Modeselect
    ?prompt "Mode"
    ?defValue "Auto"
    ?choices list("Auto" "Manual")
    )
    hiCreateFloatField(
    ?name 'spFieldPitch
    ?prompt "Pitch"
    ?value nil
    ?range '(-1024 1024)
    )
    hiCreateCyclicField(
    ?name 'spFieldJustification
    ?prompt "Justification"
    ?defValue "centerCenter"
    ?choices list("lowerLeft" "centerLeft" "upperLeft" "lowerCenter" "centerCenter"
    "upperCenter" "lowerRight" "centerRight" "upperRight" )
    )
    hiCreateCyclicField(
    ?name 'spFieldJoint
    ?prompt "Joint"
    ?choices list("< >" "[ ]")
    )
    hiCreateCyclicField(
    ?name 'spFieldRotation
    ?prompt "Rotation"
    ?choices list("0" "90" "180" "270")
    )
    )
    nil
    )
    );end if
    ;-------------------------------------------------------------------------------- ;--------------------------------------------------------------------------------
    ;enterPoint
    if(enterPoint(
    ?prompts list( "Click to enter the first label location")
    ?doneProc "spHiCreateMultiLabelPtsDone"
    ?form spHiCreateMultiLabelOptionForm)
    then t
    else nil
    );end if
    );end procedure
    ;--------------------------------------------------------------------------------
    ;--------------------------------------------------------------------------------
    procedure(spHiCreateMultiLabelPtsDone(w done pts)
    let(( cv TextMain numstart numend loopstep direction
    Pitch FontSize FontName Justification Rotation
    LswEntryLayer loopstart loopend Joint x y
    JointLeft JointRight TextTmp xPitch yPitch
    ptsLabel Text) if(done then
    cv=deGetCellView()
    TextMain=spHiCreateMultiLabelOptionForm->spFieldTextMain->value
    numstart=spHiCreateMultiLabelOptionForm->spFieldNumStart->value
    numend=spHiCreateMultiLabelOptionForm->spFieldNumEnd->value
    loopstep=spHiCreateMultiLabelOptionForm->spFieldNumStep->value
    direction=spHiCreateMultiLabelOptionForm->spFieldDirection->value
    Mode=spHiCreateMultiLabelOptionForm->Modeselect->value
    Pitch=spHiCreateMultiLabelOptionForm->spFieldPitch->value
    FontSize=spHiCreateMultiLabelOptionForm->spFieldFontSize->value
    FontName=spHiCreateMultiLabelOptionForm->spFieldFontName->value
    Justification=spHiCreateMultiLabelOptionForm->spFieldJustification->value
    Rotation=spHiCreateMultiLabelOptionForm->spFieldRotation->value LswEntryLayer=leGetEntryLayer() loopstart= numstart
    loopend= (numend-numstart)/loopstep
    Joint=spHiCreateMultiLabelOptionForm->spFieldJoint->value
    x=car(car(pts))
    y=car(cdr(car(pts))) JointLeft=""
    JointRight=""
    if( Joint=="< >"
    then
    JointLeft="<"
    JointRight=">"
    else
    JointLeft= "["
    JointRight= "]"
    );end if if( Mode=="Auto"
    then
    if( direction=="Vertical"
    then
    xPitch=0
    yPitch=Pitch
    else
    xPitch=Pitch
    yPitch=0
    );end if for( i 0 loopend
    sprintf(TextTmp "%d" i*loopstep+loopstart)
    Text=strcat( TextMain JointLeft TextTmp JointRight )
    ptsLabel=list(x y)
    dbCreateLabel( cv LswEntryLayer ptsLabel Text Justification Rotation FontName FontSize)
    x=x+xPitch
    y=y+yPitch
    );end for
    else
    for( i 0 loopend
    sprintf(TextTmp "%d" i*loopstep+loopstart)
    Text=strcat( TextMain JointLeft TextTmp JointRight )
    ptsLabel=list(x y)
    dbCreateLabel( cv LswEntryLayer ptsLabel Text Justification Rotation FontName FontSize)
    xy=enterPoint(
    ;?doneProc "PtDone"
    )
    x=xCoord(xy)
    y=yCoord(xy)
    );end for
    );end if
    );end if
    );end let
    );end procedure
    hiSetBindKey("Layout" "Ctrl<Key>l" "spHiCreateMultiLabel()")
```   
[ spHiCreateMultiLabel.il ](https://pan.baidu.com/s/1zFpRCU8inAVihOJvET7tbg) [ 百度网盘下载(提取码：4c2f) ](https://pan.baidu.com/s/1zFpRCU8inAVihOJvET7tbg)
