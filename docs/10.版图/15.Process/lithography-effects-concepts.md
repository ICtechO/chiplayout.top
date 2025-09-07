---
date: 2010-12-15 20:53:49
title: 光刻中常见的效应和概念
createTime: 2010-12-15T12:53:49.000Z
permalink: /Layout/5oxo3
categories:
  - Process
tags:
  - 光学效应
  - 摆线效应
  - 驻波效应
coverImg: https://img.onedayxyy.cn/images/TeekCover/17.webp
---

## 波效应（Standing Wave Effect）  
-  现象：在光刻胶曝光的过程中，透射光与反射光（在基底或者表面）之间会发生干涉。这种相同频率的光波之间的干涉，在光刻胶的曝光区域内出现相长相消的条纹。光刻胶在显影后，在侧壁会产生波浪状的不平整。 
- 解决方案：
	- a、在光刻胶内加入染色剂，降低干涉现象；
	- b、在光刻胶的上下表面增加抗反射涂层（ARC，Anti-Reflective Coating）；
	- c、后烘（PEB，Post Exposure Baking）和硬烘（HB，Hard Baking）。 
## 摆线效应（Swing Curve Effect） 
- 现象：在光刻胶曝光时，以相同的曝光剂量对不同厚度的光刻胶曝光，从而引起关键尺寸（CD，Critical dimension）的误差。 
## 反射切口效应（Notching Effect） 
- 现象：在光刻胶曝光时，由于接触孔尺寸的偏移等原因使入射光线直接照射到金属或多晶硅上发生发射，使不希望曝光的光刻胶被曝光，显影后，在光刻胶的底部出现缺口。 
- 解决方案：
	- a、提高套刻精度，防止接触孔打偏；
	- b、涂覆抗反射涂层。 
## 脚状图形（Footing Profiles） 
- 现象：在光刻胶的底部，出现曝光不足。使显影后，底部有明显的光刻胶残留。 
- 解决方案：
	- a、妥善保管光刻胶，不要让其存放于碱性环境中；
	- b、在涂覆光刻胶之前，硅片表面要清洗干净，防止硅基底上有碱性物质的残余。
## T型图形（T-Top Profiles） 
- 现象：由于表面的感光剂不足而造成表层光刻胶的图形尺寸变窄。 
- 解决方案：注意腔室中保持清洁，排除腔室中的碱性气体污染。 
## 分辨率增强技术（RET，Resolution Enhanced Technology） 
包括偏轴曝光（OAI，Off Axis Illumination）、相移掩膜板技术（PSM，Phase Shift Mask）、光学近似修正（OPC，Optical Proximity Correction）以及光刻胶技术等。 
	- a、偏轴曝光（OAI，Off Axis Illumination） 改变光源入射光方向使之与掩膜板保持一定角度，可以改善光强分布的均匀性。但同时，光强有所削弱。 
	- b、相移掩膜板技术（PSM，Phase Shift Mask） 在掩膜板上，周期性地在相邻的图形中，每隔一个图形特征对掩膜板的结构（减薄或者加厚）进行改变，使相邻图形的相位相差180度，从而可以达到提升分辨率的目的。 相移掩膜板技术使掩膜板的制作难度和成本大幅增加。
	- c、光学近似修正（OPC，Optical Proximity Correction） 在曝光过程中，往往会因为光学临近效应使最后的图形质量下降：线宽的变化；转角的圆化；线长的缩短等。需要采用“智能型掩膜板工程（Clever Mask Engineering）” 来补偿这种尺寸变化。 
## 显影后检测（ADI，After Development Inspection）
主要是检查硅片表面的缺陷。通常将一个无缺陷得标准图形存于电脑中，然后用每个芯片的图形与标准相比较，出现多少不同的点，就会在硅片的defect map中显示多少个缺陷。 
## 抗反射涂层（ARC，Anti-Reflective Coating）
光刻胶照射到光刻胶上时，使光刻胶曝光。但同时，在光刻胶层的上下表面也会产生反射而产生切口效应和驻波效应。 
- a、底部抗反射涂层（BARC，Bottom Anti-Reflective Coating）。将抗反射涂层涂覆在光刻胶的底部来减少底部光的反射。有两种涂层材料：有机抗反射涂层（Organic），在硅片表面旋涂，依靠有机层直接接收掉入射光线；无机抗反射涂层（Inorganic），在硅片表面利用等离子增强化学气相沉积（PECVD，Plasma Enhanced Chemical Vapour Deposition）形成。一般材料为：TiN或SiN。通过特定波长相位相消而起作用，最重要的参数有：材料折射率、薄膜厚度等。 
- b、顶部抗反射涂层（TARC，Top Anti-Reflective Coating）。不会吸收光，而是通过光线之间相位相消来消除反射。为一层透明的薄膜。
