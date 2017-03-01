<样式:>

、模块化布局
	先构建总体布局(模块化思路)


、三角
	triangle_up{width:0;height:0;overflow:hidden;border-left:4px solid transparent;border-top:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid #f00;}
	.trangle_down_red{top:0;right:5px;}//规范命名

、border-radius{左上 右上 右下 左下}

、渐变:
	.gradient {
		background:-moz-linear-gradient(top, #FFFFFF, #f8f8f8);
		background:-webkit-linear-gradient(top, #FFFFFF, #f8f8f8);
		background:-ms-linear-gradient(top, #FFFFFF, #f8f8f8);
		background:linear-gradient(top, #FFFFFF, #f8f8f8);
		-ms-filter:"progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#FFFFFF, endColorstr=#f8f8f8)";
		+background:#f9f9f9;
	}

 、公共样式
 <common.css>
/* reset */
body,h1,h2,h3,h4,h5,p,dl,dd,ul,ol,form,input,textarea,th,td,select { margin:0; padding:0; }
em { font-style:normal; }
li { list-style:none; }
a { text-decoration:none; }
img { border:none; vertical-align:top; }
table { border-collapse:collapse; }
input,textarea { outline:none; }
textarea { resize:none; overflow:auto; }
body { font-size:12px; font-family:"微软雅黑"; }
/* end reset */

/* public */
.clear { zoom:1; }
.clear:after { content:''; display:block; clear:both; }
.fl { float:left; }
.fr { float:right; }
.gradient {
	background:-moz-linear-gradient(top, #FFFFFF, #f8f8f8);
	background:-webkit-linear-gradient(top, #FFFFFF, #f8f8f8);
	background:-ms-linear-gradient(top, #FFFFFF, #f8f8f8);
	background:linear-gradient(top, #FFFFFF, #f8f8f8);
	-ms-filter:"progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#FFFFFF, endColorstr=#f8f8f8)";
	+background:#f9f9f9;
}
.triangle_up, .triangle_down_red, .triangle_down_gray { position:absolute; width:0; height:0; overflow:hidden; border-left:4px solid transparent; border-right:4px solid transparent; }
.triangle_up { border-bottom:4px solid #ca0309; }
.triangle_down_red { border-top:4px solid #ca0309; }
.triangle_down_gray { border-top:4px solid #c4bdbd; }
/* end public */

/* layout */
#header, #nav, .content { width:960px; margin:0 auto; }
#search, .section, .login, .side_section, .ad_border, #footer, .activity, .recommend { border-radius:6px; border:1px solid #dbdbdb; }
.main_ad, .side_section, .side_ad, .ad_border { margin-bottom:10px; }

body { margin-bottom:30px; }
#header { height:30px; border-radius:0 0 6px 6px; }
#nav { height:100px; position:relative; }
#search { width:958px; height:114px; margin:0 auto 10px; position:relative; }
.main { width:710px; }
.main_wrap { padding-bottom:10px; }
......

<js>
$(function(){
	//头部搜索切换
	(function(){
		var aLi = $('#menu li');
		var oText = $('.form').find('.text');
		var arrText = [
			'this is info1',
			'this is info2',
			'this is info3',
			'this is info4'
		]
		var inow = 0;
		oText.val(arrText[inow])
		//点击切换
		aLi.each(function(index){
			$(this).click(function(){
				console.log(index)
				aLi.attr('class','gradient');
				$(this).attr('class','active');
				iNow = index;
				oText.val(arrText[iNow]);
			})
		})

		oText.focus(function(){
			//优化获得焦点清空文字$(this).val('');
			oText.focus(function(){
				//console.log(arrText[iNow]);
				if($(this).val() == arrText[iNow]){
					$(this).val('');
				}
			})
			oText.blur(function(){
				if($(this).val() == ''){
					oText.val(arrText[iNow]);
				}
			})
		})
	})()


	//文字滚动
	(function(){
		var oUl = $('.update ul')
		var iH = oUl.find('li').height();

		var arrData = [
			{'name':'aa','time':3,'title':'aaaaaaaa','url':'http://www.'},
			{'name':'bb','time':4,'title':'bbbbbbbb','url':'http://www.'},
			{'name':'cc','time':5,'title':'cccccccc','url':'http://www.'},
			{'name':'dd','time':6,'title':'dddddddd','url':'http://www.'},
			{'name':'ee','time':7,'title':'eeeeeeee','url':'http://www.'},
			{'name':'ff','time':8,'title':'ffffffff','url':'http://www.'},
		];
		var str = '';

		for(var i=0;i<arrData.length;i++){
			str+='<li><a href="'+arrData[i].url+'"><span>'+arrData.title+'</span></a></li>'
		}
		//字符串拼接放入文字滚动的ul中
		//通过控制ul位置 定义动画 每一次走一个li的高度
 		oUl.animate({'top':iH*-1})

 		//丰富 缓冲运动 引入插件
 		oUl.animate({'top':iH*-1},2000,'elasticOut');


 		oBtnUp.click(function(){
 			doMove(-1)
 		})
 		oBtnDown.click(function(){
 			doMove(1)
 		})
 		//封装一个运动函数
 		function doMove(num){//num 定义是往上走还是往下走
 			iNow +=num;
 			if(Math.abs(iNow)>arrData.length-1){
 				iNow = 0;
 			}
 			if(iNow>0){
 				iNow = -(arrData.length-1);
 			}
 			oUl.stop().animate({'top':iH*iNow},1500,'elasticOut');
 			
 		}
 		//自动播放
 		function autoPlay(){
 			timer = setInterval(function(){
 				doMove(-1);
 			},2000)  
 		}
 		autoPlay();

 		function autoPlay(){
 			timer = setInterval(function(){
 				doMove(-1);
 			},2000)
 		}
 		autoPlay();
 		oDiv.hover(function(){
 			clearInterval(timer);
 		},
 		//function(){}
 		autoPlay
 		)	
	})()

	//options选项卡切换
	(function(){
		fnTab($('.tabNav1'),$('.tabCon1'));
		fnTab($('.tabNav2',$('.tabCon2'));

		//思路：改变相应的类名
		//封装一个切换选项卡的函数
		//参一：选项卡按钮，参二：选项卡内容
		function fnTab(oNav,aCon){
			var aElem = oNav.children();

			aCon.hide().eq(0).show();
			//对点击的选项和其他选项操作
			aElem.each(function(index){
				$(this).click(function(){
					aElem.removeClass('active').addClass('gradient')
					$(this).removeClass('gradient').addClass('active');
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down_red');

					aCon.hide().eq(index).show();
				})
			})
		}
	})()

	//焦点图自动轮播
	<!-- 
	 	<div class="pic" id="fade">
			<ul>
				<li>
					<a><img /></a>
				</li>
			</ul>
		</div>
	-->
	(function(){
		var aDiv = oDiv.find('ul li');
		var aUlLi = oDiv.find('ul li');
		var aOlLi = oDiv.find('ol li');
		var oP = oDiv.find('p');
		var arr = ['','']
		var iNow = 0;

		fnFade();

		aOlLi.click(function(){
			iNow = $(this).index();
			fnFade();
		})
		aDiv.hover(function(){
			clearInterval(timer);
		},autoPlay)

		autoPlay()
		function autoPlay(){
			timer = setInterval(function(){
				iNow++;
				iNow%=arr.length;
				fnFade();
			},2000)
		}

		//思路:通过改变当前层级进行切换
		function fnFade(){
			aUl.each(function(){
				if(i!=iNow){
					aUlLi.eq(i).fadeOut().css('zIndex',1);
					aOlLi.eq(i).removeClass('active');
				}else{
					aUlLi.eq(i).fadeIn().css('zIndex',2);
					aOlLi.eq(i).removeClass('active');
				}
			})
		}
	})()

	//日历提示说明
	<!--
		<div>
			<div class="calendar">
				<h3>
					<span>MON</span>
					<span>TUE</span>
					<span></span>
					<img/>
				</h3>
				<ol>
					<li>29</li>
					<li>30</li>
					...
					<li>2<img class="img" info="aaaaa" src="" alt=""/></li>
					<li class="normal">3</li>
					...
				</ol>
				<div class="today_info">
					<img src=""/>
					<div class="text">
						<h4><stong>SAT(星期)</strong>this is title</h4>
						<p>this is info~~</p>
					</div>
				</div>
			</div>
		</div>
	-->
	(function(){
		var aSpan = $('.calendar h3 span')
		var aImg = $('.calendar .img');
		var oPrompt = $('.today_info');
		var oP = oPrompt.find('p');
		var oImg = oPrompt.find('img');
		var oStrong = oPrompt.find('p');

		aImg.hover(funtion(){
			var iTop = $(this).parent().position().top;
			var iLeft = $(this).parent().position().left;
			
			oPrompt.show().css({'left':iLeft,'top',iTop});//位置
			oP.text($(this).attr('info'))//信息
			oImg.attr('src',$(this).attr('src'))//图片
			oStrong.text(aSpan.eq(index).text());//星期
		},function(){
			oPrompt.hide();
		})
	})

	//高亮显示
	//原理：通过类名设置高亮的选项
	(function(){
		$('.bbs ol li').mouseover(function(){
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
		})
	})

	//给阴影，提示相关信息
	(function(){
		$('.hot_area li').mouseover(function(){
			if($(this).index() == 0)return;

			$('.hot_area li p').remove();

			$(this).append('<p style="width:'+$(this).width+()'px;height:'+$(this).height()+'px;"></p>')
		})		
	})()
})