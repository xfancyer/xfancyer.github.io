
1) svg
	1- svg是什么？
		可缩放的矢量图形，基于XML（Extensible Markup Language）

	2- svg的主要框架？
		<?xml version="1.0" encoding="utf-8"?>
		<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
		<svg xmlns="http://www.w3.org/2000/svg"></svg>

	3- 画一个圆：
		cx:x轴坐标 cy:y轴坐标 r:半径 fill:填充色
		<circle cx="100" cy="100" r="40" fill="red"></circle>

	4- 引入html的方式
		a- 类似引入图片的方式 EX：background:url(1svg.svg) no-repeat;
		b- <div>
				<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">//引入svg时保留命名空间
					<circle fill="red" r="40" cy="100" cx="100">
				</svg>
		   </div>

2)基本图形
	1、circle
	stroke 划线 stroke-width="5"边框为5 transparent透明

	2、rect矩形

	<rect width="200" height="200" x="200" y="200"></rect>
	rx ry 角的弧度 (只写一个值时rx=ry)

	3、line 线
	<line x1="50" y1="50" x2="200" y2="200"></line>
	x1 y1(起点端点)   x2 y2(终点端点) stroke="black" stroke-width="5"(划线的宽度) stroke-opacity="0.5"

	4、ellipse:椭圆 
	5、polyine：折线
	6、ploygon:多边形
	7、path:路径

3)标签
	1、</g> 容器分组标签// 操作整体的简洁性,可统一操作
	<g fill="transparent" transform="translate(200,200)" stroke="black" stroke-width="5">//g里面可以是任何图形，而方块、线段不具备cx、cy
		<circle r="40"></circle>
		<circle r="30"></circle>
		<circle r="20"></circle>
		<circle r="10"></circle>
	</g>

	偏移操作:transform="translate(0,0)"
 
	2、</text>
	x y text-anchor
	<text x="200" y="208" text-anchor="middle" font-size="20">aaa</text>
	文字操作 ：text-anchor="middle" //居中 start end

	3、</image>
	x y width height
	xlink:href //导入图片地址
	<image x="150" y="149" width="100" height:"103" xlink:href="img/main.png" ></image>
	<text x="200" y="208" text-anchor="middle" font-size="20">aaa</text>

4) 
		<g style="cursor:pointer">
	    	<line x1="100" y1="100" x2="390" y2="200" stroke="#ccc"></line>
	        <line x1="100" y1="100" x2="390" y2="200" stroke="transparent" stroke-width="10"></line>
	        <rect x="235" y="140" fill="#999" width="20" height="20" rx="5"></rect>
	        <text x="245" y="158" fill="white" font-size="20" text-anchor="middle">?</text>	
	    </g>
	    <g style="cursor:pointer">
	    	<circle cx="100" cy="100" r="40" fill="white" stroke="red" stroke-width="3"></circle>
	        <text x="100" y="108" font-size="20" text-anchor="middle">易车网</text>
	    </g>
	    <g style="cursor:pointer">
	    	<circle cx="390" cy="200" r="60" fill="white" stroke="red" stroke-width="3"></circle>
	        <text x="390" y="208" font-size="20" text-anchor="middle">科鲁兹</text>
	    </g>

5)创建元素
	createElementNS() //命名空间（http://www.w3.org/2000/svg）
	- 两个参数 1-命名空间 2-创建的标签

		var oParent = document.getElementById('div1')
		var svgNS = 'http://www.w3.org/2000/svg';
		var oSvg = document.createElementNS(svgNS,'svg');//创建svg 
		oSvg.setAttribute('xmlns',svgNS); //添加属性
		oSvg.setAttribute('width','100%');
		oSvg.setAttribute('width','100%');
		oParent.addChild(oSvg);

		//常用一系列封装为方法
		function createTag(tag,obj){
			var  oTag = document.createElementNS(svgNS,tag);

			for(var attr in objAttr){
				oTag.setAttribute(attr,objAttr)
			}
			return oTag;
		}

		var oSvg = createTag('svg',{'xmlns':svgNS,'width':'100%','height':'100%'});
		var oG = createTag('g',{'style':'cursor:pointer'});
		var oLine1 = createTag('line',{'x1':'100','y1':'100','x2':'390','y2':'200','stroke':'#ccc'});
		var oLine2 = createTag('line',{'x1':'100','y1':'100','x2':'390','y2':'200','stroke':'#transparent','stroke-width':'10'});
		var oRect = createTag('rect',{'x':'235','y':'140','fill':'#999','width':'20','height':'20','rx':'5'})
		var oText = createTag('text',{'x':'245','y':'158','fill':'white','font-size':'20','text-anchor':'middle'})
		oText.innerHTML = '?';

		oG.appendChild(oLine1);
		oG.appendChild(oLine2);
		oG.appendChild(oRect);
		oG.appendChild(oText);
		
		oSvg.appendChild(oG);
		oParent.appendChild(oSvg);

6) 数据分离

