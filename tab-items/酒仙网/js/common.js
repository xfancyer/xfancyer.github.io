$(function(){

	//头部代码开始
	$(".s_1").hover(function(){
		$(".dingdang").stop(true,false).slideDown(500)
		$(this).addClass("bei")
	},function(){
		$(".dingdang").stop(true,false).slideUp(500)
		$(this).removeClass("bei")
	})
	
	$(".s_5").hover(function(){
		$(".erwei").stop(true,false).slideToggle(500)
	})
	
	$(".wangzhang .sp_1:odd").css("background","#f9f9f9")
	
	
	$(".s_6").hover(function(){
		$(".wangzhang").stop(true,false).slideDown(500)
		$(this).addClass("bei")
	},function(){
		$(".wangzhang").stop().slideUp(500)
		$(this).removeClass("bei")
	})
	
	$(".s_7").hover(function(){
		$(".dingdang1").stop(true,false).slideDown(500)
		$(this).addClass("bei")
	},function(){
		$(".dingdang1").stop(true,false).slideUp(500)
		$(this).removeClass("bei")
	})
	//头部代码结束
	

	 //二级页面的侧导航代码开始
     function Tab(obj,div,cl){
		$(obj).hover(function(){             
		    var $t =  $(this).index();
		    $(obj).removeClass();
		    $(this).addClass(cl);
		    $(div).css('display','none');
		    $(div).eq($t).css('display','block');
		},function(){
			$(obj).removeClass();
		    $(div).css('display','none');
		});
	}
	Tab("#tab_1 dd",".zhoupin_1","current_1");
	
	$(".quan").hover(function(){
		$(".left1").toggle();
	})
	
	//二级页面的侧导航代码结束
	
     
	//底部微信代码开始       
	$(".weixin").hover(function(){
		$(this).find("b").stop(true,false).fadeToggle(500)
	})
	
	
	//登录注册代码开始
	
	function Tab2(obj1,div1,c2){
		$(obj1).click(function(){             
		    var $t =  $(this).index();
		    $(obj1).removeClass();
		    $(this).addClass(c2);
		    $(div1).css('display','none');
		    $(div1).eq($t).css('display','block');
		});
	}
	
	Tab2("#tab6 dd",".zhoupin6","current6");
	Tab2("#tab7 dd",".zhoupin7","current7");
	
	Tab2("#tab8 dd",".zhoupin8","current8");
	Tab2("#tab9 dd",".zhoupin9","current9");
	
	//登录注册代码结束
	
	
	//首页右侧代码开始
	$(".r_sp").hover(function(){
		$(this).find(".wodexin").stop(true,false).fadeToggle(500)
	})
	
	$(".r_sp1").hover(function(){
		$(this).find(".nihao1").stop(true,false).fadeToggle(500)
	})
	
	
	$(".r_sp4").hover(function(){
		$(this).find("span").stop(true,false).fadeToggle(500)
	})
	
	$(".r_sp5").hover(function(){
		$(this).find("span").stop(true,false).fadeToggle(500)
	})
	
	$(".r_sp6").click(function(){
		$("html,body").animate({"scrollTop":0},600)
	})
	
})


 

  
  
  

