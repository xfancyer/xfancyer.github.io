
1- 
	移动优先 响应式布局

	1) 栅格系统：
		对自适应，响应式有一定帮助
	2) 容器
		包在一定容器中
		a) 流体容器(有一定padding) continer-fluid

		b) 固定	container

2-
	栅格系统的相关介绍：
	http://v2.bootcss.com/scaffolding.html

	1) 
	分12列 row
	col-lg-4 lg为大分辨率时方式
	col-md-* md中等范围 992>
	col-sm-* sm小范围
	col-xs-* 移动端方式

	2) 与传统浮动布局的区别
	自适应布局可以自适应水平居中
	由水平变垂直

3-
	1) thumbnail 缩略图框
	2) caption 标题框

4-
	排序
	1) pull //前
	2) push //后
	3) offset //向右偏移

5-
	响应式工具：

		针对不同设备展示或隐藏页面内容

		可见类：
			-visible-*-*
			》 lg md sm xs
			》 block inline inline-block

		打印类：
			-visible-print-*  //visible-print-block //打印时显示
			hidden-print //打印时隐藏

		pull-left/pull-right 左/右浮动

		Ex: 改变分辨率显示不同的效果：
		1) 浮动方式
		<div class="tip1 pull-right visible-lg-block"></div>
		<div class="tip2 pull-right hidden-lg"></div>

		2) 固定定位
		将pull-right(右浮动) 改为 affix

	Glyphicon字体图标
		class="glyphicon glyphicon-search"
		引入字体文件fonts

6、7- 
	预定义样式风格
		-primary(首选项)
		-success(成功)
		-info(一般信息)
		-warning(警告)
		
		class=""
			·btn btn-primary
			·btn btn-warning

			·bg-success
			
			·text-danger

			·alert alert-danger

			·panel panel-primary //面板的先关操作
			·panel-heading  panel-body 

		按钮基类：btn

		样式 
			·btn-default
			·btn-link

		大小
			·btn-*[lg,sm,xs]

		状态
			·active 
			·disabled

		转化为块 btn-block

8-
	btn
		1) btn-group-justified
		btn-group btn-group-justified
		如果是button/input,需要在外层套个div
		<div class="btn-group"><button value="btn" class="btn btn-primary"></div>

		2) btn-group-vertical
			纵向设置时，一般不配合btn-group

		3) 
		caret 下箭头
		dropup caret 上箭头 
		<div class="btn-group">
		   	<button class="btn btn-primary">按钮</button>
		    <button class="btn btn-primary"><span class="caret"></span></button> 	
		</div>
		<div class="btn-group dropup">
		   	<button class="btn btn-primary">按钮</button>
		    <button class="btn btn-primary"><span class="caret"></span></button> 	
		</div>	

		Ex:按钮组简单设置:
		<div class="btn-group btn-group-sm">
            <button class="btn btn-default active"><span class="glyphicon glyphicon-star"></span> Unstar</button>
            <button class="btn btn-default">36,296</button>
        </div>

9-
	下拉菜单
		data- //js交互的触发器有关的
		data-toggle="dropdown" //切换 相当于js中的方法
		aria-haspopup="true" //(针对特殊人群)屏幕阅读器 是否弹出选项
		aria-expanded="true" //是否是展开的状态
		aria-labelledy="dropdownMenul"//状态行为的描述
		role="menu" //状态

		open //展示的控制状态 

		dropdown-menu-right //下拉菜单靠右的实现方式
		dropup //向上显示

		li class="text-center"

		divider //分割线
		dropdown-header 
		text-center
		active 
		disabled

10-
	判断是否为移动端 (移动端有mobile标识)
	var timer = null;//延迟隐藏操作
	if( window.navigator.userAgent.toLowerCase().indexOf('mobile')==-1){
		$('.dropdown-toggle').hover(function(){
			clearInterval(timer);
			$('.dropdown').addClass('open')
		},function(){
			timer=setTimeout(function(){
				$('.dropdown').removeClss('open');
			},100)
		})
	}

	自定义属性 $('.dropdown-toggle').dropdown();

	菜单显示之前
	$('.dropdown').on('show.bs.dropdown',function(){})
	菜单显示之后
	$('.dropdown').on('shown.bs.dropdown',function(){})
	菜单隐藏 hide.bs.dropdown 

11-
	标签页

	头部
		·nav
		·nav-tabs
		·nav-justified
		·nav-tabs-justified //端点对齐
		·nav-pills
		·nav-stacked //竖状 （与 nav-pills 结合使用）
	
	<ul class="nav nav-tabs nav-tabs-justified" style="width:300px;">
		<li class="active"><a href="#">one</a></li>
		<li><a href="#">two</a></li>
		<li><a href="#">three</a></li>
	</ul>

	Ex:结合下拉菜单
	<ul class="nav nav-tabs" style="width:400px;">
		<li class="active"><a>one</a></li>
		<li><a>two</a></li>
		<li class="dropdown">
			<a href="#" class="dropdown-toggle" data-toggle="dropdown">three<span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">child1</a></li>
				<li><a href="#">child2</a></li>
			</li>
		</li>
	</ul>

12-
	·tab-tabs
	·tab-content
	·tab-pane

	<li id="a1" class="tab-pane in active">aaa</li>
	fade in //淡入 显示
	fade //隐藏

	<div style="width:400px;">
	    <ul class="nav nav-tabs">
	        <li class="active"><a href="#a4" data-toggle="tab">one</a></li>
	        <li><a href="#b4" data-toggle="tab">two</a></li>
	        <li class="dropdown">
	            <a href="#" class="dropdown-toggle" data-toggle="dropdown">three <span class="caret"></span></a>
	            <ul class="dropdown-menu">
	                <li><a href="#c4" data-toggle="tab">child1</a></li>
	                <li><a href="#d4" data-toggle="tab">child2</a></li>
	            </ul>
	        </li>
	    </ul>
	    <ul class="tab-content">
	        <li id="a4" class="tab-pane active">aaaaaaaaaa</li>
	        <li id="b4" class="tab-pane">bbbbbbbbbb</li>
	        <li id="c4" class="tab-pane">cccccccccc</li>
	        <li id="d4" class="tab-pane">dddddddddd</li>
	    </ul>
	</div>

13-
	·navbar 
	·navbar-default
	·navbar-inverse  //深色调
	·navbar-static-top //圆变直角
	·navbar-fixed-top/bottom //固定导航条

	navbar navbar-default navbar-fixed-top
	navbar-nav
	navbar-brand
	navbar-left
	navbar-btn
	navbar-form

14-
	·collapse navbar-collapse //隐藏
	·navbar-toggle
	·collapse navbar-collapse

	滚动监听:
		data-spy
		data-target
		data-offset

	导航条+监听跳转：
		body{ position:relative;}
		.pos{ margin-bottom:500px; padding-top:50px;}

		<body style="height:2000px;" data-spy="scroll" data-target="#myNavbar" data-offset

		<nav id="myNavbar" class="navbar navbar-inverse navbar-fixed-top">
		    <div class="container">
		        <div class="navbar-header">
		            <a href="#" class="navbar-brand">logo</a>
		        </div>
		        <div id="myCollapse" class="collapse navbar-collapse">
		            <ul class="nav navbar-nav">
		                <li class="active"><a href="#a">one</a></li>
		                <li><a href="#b">two</a></li>
		                <li><a href="#c">three</a></li>
		            </ul>
		        </div>
		    </div>
		</nav>
		<div id="a" class="pos">aaaaaaaaaaa</div>
		<div id="b" class="pos">bbbbbbbbbbb</div>
		<div id="c" class="pos">ccccccccccc</div>





