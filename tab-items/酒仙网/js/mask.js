$(function(){
	
	$("#bottom li").mouseenter(function(){	
		$(".bigImage").eq($(this).index()).show().siblings().hide()
		$(".small img").eq($(this).index()).show().siblings().hide()
		$(this).css("border","2px solid #c33").siblings().css("border","2px solid #fff")
	})
	
	$("#small").hover(function(){
		$("#mask").toggle()
		$("#big").toggle()		
	})

	var w = $("#big").width()*440/800;
	//$("#mask").css({"width":w+"px","height":w+"px"});
	$("#mask").width(w);
	$("#mask").height(w);

		
		$("#small").mousemove(function(e){
		//alert(111)
		var evt= e|| window.event
		x=evt.pageX-$("#box").offset().left-$("#mask").width()/2;
		y=evt.pageY-$("#box").offset().top-$("#mask").height()/2;
		
		if(x<0){
			x=0
		}else if(x>$("#box").width()-$("#mask").width()){
			x=$("#box").width()-$("#mask").width()
		}
		
		if(y<0){
			y=0
		}else if(y>$("#box").height()-$("#mask").height()){
			y=$("#box").height()-$("#mask").height()
		}
		
		$("#mask").css({"left":x+"px","top":y+"px"})
		
		var bx = -x * $("#big").width()/$("#mask").width();
		var by = -y * $("#big").height()/$("#mask").height();
		$(".bigImage").css({"left":bx+"px","top":by+"px"})
		
	})
	
	$(".xq_jia1 a").click(function(){
		$(this).find("em").toggleClass("onbei").end().siblings().find().removeClass()
	})
	
})

