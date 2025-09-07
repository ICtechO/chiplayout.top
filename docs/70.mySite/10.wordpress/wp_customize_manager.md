---
date: 2021-09-05 07:49:40
title: wordpress主题自定义功能开发入门
createTime: 2021-09-04T23:49:40.000Z
permalink: /wordpress/6de22
categories:
  - wordpress
tags:
  - controls
  - panels
  - sections
  - settings
  - wordpress
  - wp_customize
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---

wordpress的主题自定义功能，在  
外观 >> 自定义  
菜单下。这个功能我们设置很多网站需要的修改选项，方便用户使用。还可以在页面中显示编辑的快捷方式，对于不懂网站的用户非常有帮助。如下图，这是wordpress自带的，现在我们需要拓展这个功能

![](/public/2021/09/090421_1457_wordpress1.png)

如何开发这个自定义功能

首页我们需要了解四个类型：

  1. **Panels** : 包含Sections，允许把多个Sections组合在一起
  2. **Sections** : 包含Controls, 每个Section可以包含多个Controls
  3. **Settings** : 将Controls于数据库中保存的设置相关联
  4. **Controls** : UI控件，通常控件包括输入框、选择框、下拉框、图片选择、日期选择等等，还可以自行扩展其他控件



1\. 注册一个自定义函数

增加任何功能到自定义功能，需要用到的[customize_register，这个钩子访问一个WP_Customize_Manager的实例$wp_customize，增加的Panels、Sections、Settings、Controls都需要在这个函数钩子内  
](https://codex.wordpress.org/Plugin_API/Action_Reference/customize_register)

例子
    
    
    /**
     * Add our Customizer content
     */
    function mytheme_customize_register( $wp_customize ) {
       // Add all your Customizer content (i.e. Panels, Sections, Settings & Controls) here...
    );
    add_action( 'customize_register', 'mytheme_customize_register' );

2.增加一个Panels

Panels允许你包含多个Sections,但是Sections不必在Panels下。一个Panels必须包含一个Sections,一个Sections必须包含一个Controls，才能显示。如果你增加Panels，在页面没有显示，那得检查一下是否有Sections,Sections里是否Controls.

用法

  * add_panel( $id, $args );



参数

  * $id （字符串）（必须）一个唯一的id,默认：None
  * $args （数组）（必须）



$args 的参数

  * title 显示的名称
  * description （可选）描述
  * priority（可选）排序
  * capability （可选）根据用户的权限控制是否显示，默认：edit_theme_options
  * theme_supports （可选）根据主题的设置是否显示，用到方法add_theme_support
  * active_callback （可选）根据当前页面是否显示，例如'active_callback' => 'is_front_page'


    
    
    /**
     * Add our Header & Navigation Panel
     */
     $wp_customize->add_panel( 'header_naviation_panel',
       array(
          'title' => __( 'Header & Navigation' ),
          'description' => esc_html__( 'Adjust your Header and Navigation sections.' ), // Include html tags such as 
          'priority' => 160, // Not typically needed. Default is 160
          'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
          'theme_supports' => '', // Rarely needed
          'active_callback' => '', // Rarely needed
       )
    );
    

如果你想改变默认Panels或Sections的排序，可以参考下表

Title| ID| Priority (Order)  
---|---|---  
Site Title & Tagline| title_tagline| 20  
Colors| colors| 40  
Header Image| header_image| 60  
Background Image| background_image| 80  
Menus (Panel)| nav_menus| 100  
Widgets (Panel)| widgets| 110  
Static Front Page| static_front_page| 120  
default| | 160  
Additional CSS| custom_css| 200  
  
3\. 增加一个Sections

Sections是存放多个Controls的，Sections可以放在Panels下，但不是必须的，多数时候都不用。

用法

  * add_section( $id, $args );



参数

  * $id （字符串）（必须）一个唯一的id,默认：None
  * $args （数组）（必须）



$args 的参数

  * title 显示的名称
  * description （可选）描述
  * panel （可选）在哪个Panel下
  * priority（可选）排序
  * capability （可选）根据用户的权限控制是否显示，默认：edit_theme_options
  * theme_supports （可选）根据主题的设置是否显示，用到方法add_theme_support
  * active_callback （可选）根据当前页面是否显示，例如'active_callback' => 'is_front_page'
  * description_hidden （可选）是否隐藏在帮助图标后面，默认：false



例子
    
    
    /**
     * Add our Sample Section
     */
    $wp_customize->add_section( 'sample_custom_controls_section',
       array(
          'title' => __( 'Sample Custom Controls' ),
          'description' => esc_html__( 'These are an example of Customizer Custom Controls.' ),
          'panel' => '', // Only needed if adding your Section to a Panel
          'priority' => 160, // Not typically needed. Default is 160
          'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
          'theme_supports' => '', // Rarely needed
          'active_callback' => '', // Rarely needed
          'description_hidden' => 'false', // Rarely needed. Default is False
       )
    );
    

4\. 增加Setting

Setting和Control是搭配在一起的，每一个Control都需要一个Setting.Setting处理自定义程序对象的预览、保存和清理。

用法

  * add_setting( $id, $args );



参数

  * $id （字符串）（必须）一个唯一的id,默认：None
  * $args （数组）（必须）



$args 的参数

  * default (可选) 相关联Controller的默认值
  * transport (可选) 更新预览的方式，默认：refresh
  * type (可选)保存的方式，默认：theme_mod
  * capability （可选）根据用户的权限控制是否显示，默认：edit_theme_options
  * theme_supports （可选）根据主题的设置是否显示，用到方法add_theme_support
  * validate_callback （可选）验证设置的方法名称
  * sanitize_callback （可选）保存到数据库前调用清理方法名称
  * sanitize_js_callback（可选）在输出js代码前调用的方法名称
  * dirty（可选）很少用，创建时不管是否有脏数据，默认：false



例子
    
    
    $wp_customize->add_setting( 'sample_default_text',
       array(
          'default' => '', // Optional.
          'transport' => 'refresh', // Optional. 'refresh' or 'postMessage'. Default: 'refresh'
          'type' => 'theme_mod', // Optional. 'theme_mod' or 'option'. Default: 'theme_mod'
          'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
          'theme_supports' => '', // Optional. Rarely needed
          'validate_callback' => '', // Optional. The name of the function that will be called to validate Customizer settings
          'sanitize_callback' => '', // Optional. The name of the function that will be called to sanitize the input data before saving it to the database
          'sanitize_js_callback' => '', // Optional. The name of the function that will be called to sanitize the data before outputting to javascript code. Basically to_json.
          'dirty' => false, // Optional. Rarely needed. Whether or not the setting is initially dirty when created. Default: False
       )
    );
    

[type有两种设置方式，一种是option,另外一种是theme_mod。option指的是站点设置，无论是哪个主题都有影响；theme_mod指的是特定主题的特定设置，大多数主题用这个。  
尽管 sanitize_callback 参数是可选的，如果你提交到wordpress主题目录，官方插件](https://codex.wordpress.org/Plugin_API/Action_Reference/customize_register)[Theme Check plugin会发出警告，add_setting必须指定一个sanitize_callback 函数。](https://wordpress.org/plugins/theme-check/)

5\. 增加Control

Control是显示UI组件，在默认的wordpress核心代码中，已经提供了一些默认组件（输入框，选择框，单选按钮等等）。其他Conrol需要继承WP_Customize_Control创建自己Controls的。  
下面介绍几个常用的control:

  * Input Control
  * Checkbox Control
  * Select Control
  * Radio Button Control
  * Dropdown Pages Control
  * Textarea Control
  * Color Control
  * Media Control
  * Image Control
  * Cropped Image Control
  * Date Time Control



5.1 Input Control

![](/public/2021/09/090421_1457_wordpress2.png)

用法
    
    
    add_control( $id, $args );

参数
    
    
    $id （字符串）（必须）一个唯一的id,默认：None
    $args （数组）（必须）

$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **type** （必须）显示的控件类型，可以选择text, email, url, number, hidden, or date. 默认：text
  * **capability** （可选）根据用户的权限控制是否显示，默认：edit_theme_options
  * **input_attrs** （可选）输出一组控件属性，只能用于textarea和input类型



例子
    
    
    $wp_customize->add_setting( 'sample_default_text',
       array(
          'default' => '',
          'transport' => 'refresh',
          'sanitize_callback' => 'skyrocket_text_sanitization'
       )
    );
    $wp_customize->add_control( 'sample_default_text',
       array(
          'label' => __( 'Default Text Control' ),
          'description' => esc_html__( 'Text controls Type can be either text, email, url, number, hidden, or date' ),
          'section' => 'default_controls_section',
          'priority' => 10, // Optional. Order priority to load the control. Default: 10
          'type' => 'text', // Can be either text, email, url, number, hidden, or date
          'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
          'input_attrs' => array( // Optional.
             'class' => 'my-custom-class',
             'style' => 'border: 1px solid rebeccapurple',
             'placeholder' => __( 'Enter name...' ),
          ),
       )
    );
    

5.2 Checkbox Control  


![](/public/2021/09/090421_1457_wordpress3.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **type** （必须）checkbox
  * **capability** （可选）根据用户的权限控制是否显示，默认：edit_theme_options



例子
    
    
    $wp_customize->add_setting( 'sample_default_checkbox',
       array(
          'default' => 0,
          'transport' => 'refresh',
          'sanitize_callback' => 'skyrocket_switch_sanitization'
       )
    );
    $wp_customize->add_control( 'sample_default_checkbox',
       array(
          'label' => __( 'Default Checkbox Control', 'ephemeris' ),
          'description' => esc_html__( 'Sample description' ),
          'section'  => 'default_controls_section',
          'priority' => 10, // Optional. Order priority to load the control. Default: 10
          'type'=> 'checkbox',
          'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
       )
    );
    

5.3 Select Control  


![](/public/2021/09/090421_1457_wordpress4.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **type** （必须）
  * **capability** （可选）根据用户的权限控制是否显示，默认：edit_theme_options
  * **choices** （可选）一组选项



例子
    
    
    $wp_customize->add_setting( 'sample_default_select',
       array(
          'default' => 'jet-fuel',
          'transport' => 'refresh',
          'sanitize_callback' => 'skyrocket_radio_sanitization'
       )
    );
    $wp_customize->add_control( 'sample_default_select',
       array(
          'label' => __( 'Standard Select Control' ),
          'description' => esc_html__( 'Sample description' ),
          'section' => 'default_controls_section',
          'priority' => 10, // Optional. Order priority to load the control. Default: 10
          'type' => 'select',
          'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
          'choices' => array( // Optional.
             'wordpress' => __( 'WordPress' ),
             'hamsters' => __( 'Hamsters' ),
             'jet-fuel' => __( 'Jet Fuel' ),
             'nuclear-energy' => __( 'Nuclear Energy' )
          )
       )
    );
    

5.4 Radio Button Control

![](/public/2021/09/090421_1457_wordpress5.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **type** （必须）
  * **capability** （可选）根据用户的权限控制是否显示，默认：edit_theme_options
  * **choices** （可选）一组选项，只用于radio和select类型



例子
    
    
    $wp_customize->add_setting( 'sample_default_radio',
       array(
          'default' => 'spider-man',
          'transport' => 'refresh',
          'sanitize_callback' => 'skyrocket_radio_sanitization'
       )
    );
    $wp_customize->add_control( 'sample_default_radio',
       array(
          'label' => __( 'Standard Radio Control' ),
          'description' => esc_html__( 'Sample description' ),
          'section' => 'default_controls_section',
          'priority' => 10, // Optional. Order priority to load the control. Default: 10
          'type' => 'radio',
          'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
          'choices' => array( // Optional.
             'captain-america' => __( 'Captain America' ),
             'iron-man' => __( 'Iron Man' ),
             'spider-man' => __( 'Spider-Man' ),
             'thor' => __( 'Thor' )
          )
       )
    );
    

5.5 Dropdown Pages Control

![](/public/2021/09/090421_1457_wordpress6.png)

  
用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **type** （必须）
  * **capability** （可选）根据用户的权限控制是否显示，默认：edit_theme_options



例子
    
    
    $wp_customize->add_setting( 'sample_default_dropdownpages',
       array(
          'default' => '1548',
          'transport' => 'refresh',
          'sanitize_callback' => 'absint'
       )
    );
    $wp_customize->add_control( 'sample_default_dropdownpages',
       array(
          'label' => __( 'Default Dropdown Pages Control' ),
          'description' => esc_html__( 'Sample description' ),
          'section' => 'default_controls_section',
          'priority' => 10, // Optional. Order priority to load the control. Default: 10
          'type' => 'dropdown-pages',
          'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
       )
    );

5.6 Textarea Control

![](/public/2021/09/090421_1457_wordpress7.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **type** （必须）显示的控件类型，可以选择text, email, url, number, hidden, or date. 默认：text
  * **capability** （可选）根据用户的权限控制是否显示，默认：edit_theme_options
  * **input_attrs** （可选）输出一组控件属性，只能用于textarea和input类型



例子
    
    
    $wp_customize->add_setting( 'sample_default_textarea',
       array(
          'default' => '',
          'transport' => 'refresh',
          'sanitize_callback' => 'wp_filter_nohtml_kses'
       )
    );
    $wp_customize->add_control( 'sample_default_textarea',
       array(
          'label' => __( 'Default Textarea Control' ),
          'description' => esc_html__( 'Sample description' ),
          'section' => 'default_controls_section',
          'priority' => 10, // Optional. Order priority to load the control. Default: 10
          'type' => 'textarea',
          'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
          'input_attrs' => array( // Optional.
             'class' => 'my-custom-class',
             'style' => 'border: 1px solid #999',
             'placeholder' => __( 'Enter message...' ),
          ),
       )
    );

5.7 Color Control

![](/public/2021/09/090421_1457_wordpress8.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **type** （必须）显示的控件类型，可以选择text, email, url, number, hidden, or date. 默认：text
  * **capability** （可选）根据用户的权限控制是否显示，默认：edit_theme_options



例子
    
    
    $wp_customize->add_setting( 'sample_default_color',
       array(
          'default' => '',
          'transport' => 'refresh',
       )
    );
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'sample_default_color',
       array(
          'label' => __( 'Default Media Control' ),
          'description' => esc_html__( 'This is the description for the Media Control' ),
          'section' => 'default_controls_section',
       )
    ) );

5.8 Media Control

![](/public/2021/09/090421_1457_wordpress9.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **mime_type** （必须）文件类型，可以选择image, audio, video, application, text
  * **button_labels** （可选）控件的属性


  * 例子


    
    
    $wp_customize->add_setting( 'sample_default_media',
       array(
          'default' => '',
          'transport' => 'refresh',
          'sanitize_callback' => 'absint'
       )
    );
    $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'sample_default_media',
       array(
          'label' => __( 'Default Media Control' ),
          'description' => esc_html__( 'This is the description for the Media Control' ),
          'section' => 'default_controls_section',
          'mime_type' => 'image',  // Required. Can be image, audio, video, application, text
          'button_labels' => array( // Optional
             'select' => __( 'Select File' ),
             'change' => __( 'Change File' ),
             'default' => __( 'Default' ),
             'remove' => __( 'Remove' ),
             'placeholder' => __( 'No file selected' ),
             'frame_title' => __( 'Select File' ),
             'frame_button' => __( 'Choose File' ),
          )
       )
    ) );

5.9 Image Control

![](/public/2021/09/090421_1457_wordpress10.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **priority** （可选）排序，默认：10
  * **button_labels** （可选）控件的属性



例子
    
    
    $wp_customize->add_setting( 'sample_default_image',
       array(
          'default' => '',
          'transport' => 'refresh',
       )
    );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'sample_default_image',
       array(
          'label' => __( 'Default Image Control' ),
          'description' => esc_html__( 'This is the description for the Image Control' ),
          'section' => 'default_controls_section',
          'button_labels' => array( // Optional.
             'select' => __( 'Select Image' ),
             'change' => __( 'Change Image' ),
             'remove' => __( 'Remove' ),
             'default' => __( 'Default' ),
             'placeholder' => __( 'No image selected' ),
             'frame_title' => __( 'Select Image' ),
             'frame_button' => __( 'Choose Image' ),
          )
       )
    ) );

5.10 Cropped Image Control

![](/public/2021/09/090421_1457_wordpress11.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **flex_width** （可选）宽度是否自适应，默认：false
  * **flex_height** （可选）高度是否自适应，默认：false
  * **width** （可选）建议裁剪的宽度，默认：150
  * **height** 可选）建议裁剪的高度，默认：150
  * **button_labels** （可选）控件的属性



例子
    
    
    $wp_customize->add_setting( 'sample_default_cropped_image',
       array(
          'default' => '',
          'transport' => 'refresh',
       )
    );
    $wp_customize->add_control( new WP_Customize_Cropped_Image_Control( $wp_customize, 'sample_default_cropped_image',
       array(
          'label' => __( 'Default Cropped Image Control' ),
          'description' => esc_html__( 'This is the description for the Cropped Image Control' ),
          'section' => 'default_controls_section',
          'flex_width' => false, // Optional. Default: false
          'flex_height' => true, // Optional. Default: false
          'width' => 800, // Optional. Default: 150
          'height' => 400, // Optional. Default: 150
          'button_labels' => array( // Optional.
             'select' => __( 'Select Image' ),
             'change' => __( 'Change Image' ),
             'remove' => __( 'Remove' ),
             'default' => __( 'Default' ),
             'placeholder' => __( 'No image selected' ),
             'frame_title' => __( 'Select Image' ),
             'frame_button' => __( 'Choose Image' ),
          )
       )
    ) );

5.11 Date Time Control

![](/public/2021/09/090421_1457_wordpress12.png)

用法

  * add_control( $id, $args );



参数

  * **$id** （字符串）（必须）一个唯一的id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **label** （可选）显示的名称
  * **description** （可选）描述
  * **section** （必须）属于哪个Section
  * **include_time** （可选)是否显示时间字段，默认：true
  * **allow_past_date** （可选)是否显示时间字段，默认：true
  * **twelve_hour_format** （可选)12小时制还是24小时制，默认：true(12小时制)
  * **min_year** （可选)允许的最小年份，默认：1000
  * **max_year** （可选)允许的最大年份，默认：9999



例子
    
    
    $wp_customize->add_setting( 'sample_date_time',
       array(
          'default' => '2020-08-28 16:30:00',
          'transport' => 'refresh',
          'sanitize_callback' => 'skyrocket_date_time_sanitization'
       )
    );
    $wp_customize->add_control( new WP_Customize_Date_Time_Control( $wp_customize, 'sample_date_time',
       array(
          'label' => __( 'Default Date Control' ),
          'description' => esc_html__( 'This is the Date Time Control. It also has Max and Min years set.' ),
          'section' => 'default_controls_section',
          'include_time' => true, // Optional. Default: true
          'allow_past_date' => true, // Optional. Default: true
          'twelve_hour_format' => true, // Optional. Default: true
          'min_year' => '2010', // Optional. Default: 1000
          'max_year' => '2025' // Optional. Default: 9999
       )
    ) );

6\. 数据处理

[永远不要相信用户输入的数据，对于用户的输入需要处理才存入数据库，wordpress提供一些处理函数](https://wordpress.org/plugins/theme-check/)[built-in WordPress functions。  
在Setting中有 validate_callback 和 sanitize_callback回调方法过滤和处理用户输入，可以用wordpress自带的函数，也可以自定义函数。](https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/)

例子  
处理html标签，用wordpress自带的函数wp_filter_nohtml_kses()
    
    
    $wp_customize->add_setting( 'sample_date_time',
       array(
          'default' => '2020-08-28 16:30:00',
          'transport' => 'refresh',
          'sanitize_callback' => 'skyrocket_date_time_sanitization'
       )
    );
    $wp_customize->add_control( new WP_Customize_Date_Time_Control( $wp_customize, 'sample_date_time',
       array(
          'label' => __( 'Default Date Control' ),
          'description' => esc_html__( 'This is the Date Time Control. It also has Max and Min years set.' ),
          'section' => 'default_controls_section',
          'include_time' => true, // Optional. Default: true
          'allow_past_date' => true, // Optional. Default: true
          'twelve_hour_format' => true, // Optional. Default: true
          'min_year' => '2010', // Optional. Default: 1000
          'max_year' => '2025' // Optional. Default: 9999
       )
    ) );

验证email，用wordpress自带的函数sanitize_email()
    
    
    $wp_customize->add_setting( 'sample_default_text',
       array(
          'default' => __( 'This is some default text' ),
          'sanitize_callback' => 'sanitize_email',
       )
    );

验证多选框，用自定义函数
    
    
    function mytheme_chkbox_sanitization( $input ) {
       if ( true === $input ) {
          return 1;
       } else {
          return 0;
       }
    }
    
    $wp_customize->add_setting( 'sample_default_checkbox',
       array(
          'default' => 0,
          'sanitize_callback' => 'mytheme_chkbox_sanitization',
       )
    );

7\. 增加Control到已存在Section

wordpress默认存在几个Section，如果我们想要在默认的Section中新增Control.只要把section设置为已存在的Section的id即可

例子

增加一个select Control 到 Head Image Section
    
    
    $wp_customize->add_setting( 'my_new_header_image_select',
       array(
          'default' => __( 'center' ),
          'sanitize_callback' => 'sanitize_text_field',
       )
    );
    $wp_customize->add_control( 'my_new_header_image_select',
       array(
          'label' => __( 'Header Image Alignment' ),
          'section' => 'header_image', // 添加到Section
          'type' => 'select',
          'choices' => array(
             'left' => 'Left',
             'center' => 'Center',
             'right' => 'Right',
          )
       )
    );

8\. 刷新预览

在用户输入更新数据，有两种预览方式，一种是刷新整个页面，另一种事局部刷新。控制的参数事transport，默认的事全局刷新refresh，局部刷新postMessage。

例子
    
    
    $wp_customize->add_setting( 'sample_default_text',
       array(
          'default' => '',
          'transport' => 'refresh' // 全局刷新，postMessage局部刷新
       )
    );

8.1 用php实现局部刷新

用php实现局部刷新，需要注册一个Partial

用法

  * add_partial( $id, $args );



参数

  * **$id** （字符串）（必须）跟Setting关联的一个唯一id,默认：None
  * **$args** （数组）（必须）



$args 的参数

  * **selector** （必须）ui关联的选择器，编辑的快捷方式也是基于此
  * **container_inclusive** （可选）如果true，将刷新整个容器；如果false,则刷新容器的子容器。默认：false
  * **render_callback** （必须）生成要在刷新时呈现的标记
  * **fallback_refresh** （可选）如果在文档中找不到部分，是否应该进行整页刷新。默认：true
  * **capability** （可选）根据用户的权限控制是否显示，通常时来自Setting的功能



例子
    
    
    $wp_customize->selective_refresh->add_partial( 'social_urls',
       array(
          'selector' => '.social-header',
          'container_inclusive' => false,
          'render_callback' => function() {
             echo mytheme_get_social_media_icons();
          },
          'fallback_refresh' => true
       )
    );

当注册一个add_partial()，选择的容器将得到一个编辑的快捷方式，点击即可定位可编辑的地方。可以通过js的方式实现局部刷新，这里不细说。

9\. 获取自定义的值

[设置之后，需要把值用到模板中，需要用到函数 ](https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/)[get_theme_mod()](https://codex.wordpress.org/Function_Reference/get_theme_mod)

用法

  * get_theme_mod( $id, $default );



参数

  * **$id** (string)(必须) Setting设置的id
  * **$default** (string|boolean)(可选) 如果没有值的时候，默认显示



例子
    
    
    <?php echo get_theme_mod( 'background_color', '#fff' ); ?>

这个例子将得到background_color的值并输出，如果没有值，将会输出#fff

10.总结

这就是wordpress自定义主题功能的使用方法，但这只是通常用到的，更多功能可以查看wordpress的源码，在/wp-includes/customizer文件夹下。

> reference: https://junyiseo.com/wordpress/799.html
