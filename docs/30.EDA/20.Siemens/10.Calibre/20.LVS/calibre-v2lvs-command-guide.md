---
date: 2011-08-11 17:55:19
title: calibre自带v2lvs命令使用指南
createTime: 2011-08-11T09:55:19.000Z
permalink: /eda/reyup
categories:
  - EDA
tags:
  - calibre
  - v2lvs
coverImg: https://img.onedayxyy.cn/images/TeekCover/13.webp
---

做为现今流行的 深亚微米集成电路物理验证工具，calibre 有其强大的功能，其 v2lvs命令能够方便的把verilog格式网表转为spice格式网表，对于IC后端的工程师来说是非常有用，且有必要掌握的。
## 命令
  **v2lvs** 
## 可用参数
  [-l verilog_lib_file] 
  [-lsp spice_library_file] 
  [-lsr spice_library_file] 
  [-s spice_library_file] 
  [-s0 groundnet] 
  [-s1 powernet] 
  [-sk] 
  [-p prefix] 
  [-w warning_level] 
  [-a array_delimiters] 
  [-c char1[char2]] 
  [-u unnamed_pin_prefix] 
  [-t svdb_dir] 
  [-addpin pin_name] 
  [-b] 
  [-n] 
  [-i] 
  [-e] 
  [-h] 
  [-cb]
  [-ictrace] 
## 参数介绍：
  - -v verilog_design_file Specifies the filename of the input Verilog structural netlist.
  - -o output_spice_file Specifies where to place the output LVS SPICE netlist. Default is standard out. 
  - -l verilog_lib_file Specifies the location of the Verilog primitive library file. It is not translated. 
  - -lsp spice_library_file Specifies SPICE library file name using pin mode. The SPICE file is parsed for interface configurations. Pins with pin select ([ ]) annotation are kept as individual pins using escaped identifiers. 
  - -lsr spice_library_file Specifies SPICE library file name using range mode. The SPICE file is parsed for interface configurations. Pins with pin select ([ ]) annotation are assembled into Verilog ranges. 
  - -s spice_library_file Specifies that the -o output file have a .INCLUDE statement placed at the beginning that points to the SPICE library file. 
  - -s0 groundnet Specifies the default net name for mapping to pin connections with a value of zero (0). Outputs the specified names in place of Verilog supply0 nets and generates .GLOBAL declarations in the output netlist. 
  - -s1 powernet Specifies the default net name for mapping to pin connections with a value of one (1). Outputs the specified names in place of Verilog supply1 nets and generates .GLOBAL declarations in the output netlist. 
  - -sk Specifies that Verilog supply0 and supply1 nets are not connected to the global power and ground nets. 
  - -p prefix Adds prefix to Verilog gate level primitive cells. 
  - -w warning_level Controls the amount of warning message output. Possible level choices are: 
    - 0 Selects to output no warning messages. 
    - 1 Selects to output warning messages for skipped blocks and modules only. 
    - 2 Selects to output level 1 and calls to undeclared modules and pin arrays with widths wider than ports. This is the default. 
    - 3 Selects to output level 2 and called port array mismatches and unsupported compiler directives. 
    - 4 Selects output level 3 plus all ignored constructs. 
  - -a array_delimiters Changes the array delimiter characters. The default is [ ]. 
  - -c char1[char2] Sets the substitution characters for escaped identifier characters illegal in SPICE. char1 replaces $, comma, (, ), and =. char2 replaces /. No space is needed between the two user-supplied arguments. 
  - -u unnamed_pin_prefix Specifies a prefix to add to unnamed pin connections in module instantiations. 
  - -t svdb_dir Adds source netlist pin direction information to the SVDB. This is used in Calibre xRC. 
  - -addpin pin_name 
## 应用举例
  [《利用v2lvs和nettran将.v(verilog)网表转为spice》](http://www.chiplayout.net/v2lvs-commands-to-verilog-netlist-spice-netlist-to-use-for-example.html "《利用v2lvs和nettran将.v\(verilog\)网表转为spice》")
