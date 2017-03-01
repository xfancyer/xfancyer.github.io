$(function(){
	  
  $(".a_L3").mouseenter(function(){
      $(this).find("a").css("background-position","0px 0px");	
  }).mouseleave(function(){
      $(this).find("a").css("background-position","0px 0px");	
  })
  $(".a_R3").mouseenter(function(){
      $(this).find("a").css("background-position","0px 0px");	
  }).mouseleave(function(){
      $(this).find("a").css("background-position","0px 0px");	
  })
  k=1;
  $(function(){
      function chageUL(k){
          $(".nav_3 li:eq("+k+")").css("opacity","0.7");
          $(".nav_3 li:eq("+k+")").stop(true,false).animate({"opacity":"1"},1000)
          $(".nav_3 li").removeClass("sid3");
          $(".nav_3 li:eq("+k+")").addClass("sid3");
          //按钮
          $(".but4 span").removeClass("sp_3");
          $(".but4 span:eq("+k+")").addClass("sp_3");		
      }
      function zd(){
          var k=$(".nav_3 .sid3").index();
          if(k == $(".nav_3 li").length-1 ){
              var k=0;
              chageUL(k)
          }else{
              var k=k+1;
              chageUL(k)
          }	
      }//end
      var times=setInterval(zd,3000)
	  
	  
      $(".but4 span").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).mouseenter(function(){
          var k=$(this).index();
          chageUL(k);	
      })
	  
	  $(".nav_3 li").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      })
	  
	  
      $(".a_L3").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).mouseenter(function(){
          var k=$(".nav_3 .sid3").index();
          if(k == 0 ){
              var k=$(".nav_3 li").length-1;
              chageUL(k)		
          }else{
              k=k-1
              chageUL(k)
          }
      })
      $(".a_R3").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).mouseenter(function(){
          var k=$(".nav_3 .sid3").index();
          if(k == $(".nav_3 li").length-1 ){
              var k=0;
              chageUL(k)
          }else{
              var k=k+1;
              chageUL(k)
          }
      })
  })
  
  $(".right p").hover(function(){
	$(this).find("em").stop(true,false).fadeToggle();  
  })
  
	
	  //tab代码开始
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
	
	function Tab1(obj1,div1,c2){
		$(obj1).hover(function(){             
		    var $t =  $(this).index();
		    $(obj1).removeClass();
		    $(this).addClass(c2);
		    $(div1).css('display','none');
		    $(div1).eq($t).css('display','block');
		});
	}
	
	function Tab2(obj1,div1,c2){
		$(obj1).click(function(){             
		    var $t =  $(this).index();
		    $(obj1).removeClass();
		    $(this).addClass(c2);
		    $(div1).css('display','none');
		    $(div1).eq($t).css('display','block');
		});
	}
								
	Tab("#tab dd",".zhoupin","current");
	Tab("#tab_1 dd",".zhoupin_1","current_1");
	
	Tab1("#tab1 dd",".zhoupin1","current1");
	Tab1("#tab2 dd",".zhoupin2","current2");
	
	Tab1("#tab3 dd",".zhoupin3","current3");
	Tab1("#tab4 dd",".zhoupin4","current4");
	Tab1("#tab5 dd",".zhoupin5","current5");
	
	Tab2("#tab6 dd",".zhoupin6","current6");
	Tab2("#tab7 dd",".zhoupin7","current7");
	
	Tab2("#tab8 dd",".zhoupin8","current8");
	Tab2("#tab9 dd",".zhoupin9","current9");
            


	$(".dongtu ul li").hover(function(){
		$(this).find("img").stop().animate({"left":-100},600)		
	},function(){
		$(this).find("img").stop().animate({"left":0},600)
	})
	
})


  window.onload=function(){
  	function $(id){
		return document.getElementById(id)
	}

	//官方推荐
	var num=0;
  	var lis=$("tab5").children;
  
  	for(var i=0;i<lis.length;i++){
  		lis[i].index=i
  		lis[i].onmouseover=function(){
  			yuncai(this.offsetLeft)
  		}
  		lis[i].onmouseout=function(){
  			num=this.offsetLeft
  		}
  	}
  	
  	var time=null;
  function yuncai(target){
  	clearInterval(time);
  	time=setInterval(function(){
  		var speed=(target-$("cloud").offsetLeft)/10;
  		var speed=speed>0?Math.ceil(speed):Math.floor(speed);
  		if(target==$("cloud").offsetLeft){
  			clearInterval(time);
  		}else{
  			$("cloud").style.left=$("cloud").offsetLeft+speed+"px"
  		}
  	},20)
  }
  //官方推荐
  
  var sy=document.getElementsByClassName("shijian");
 
  var s=57;
  var f=57;
  var m=60;
  
  var timer=setInterval(function(){
  	m--;
  	if(m==0){ 		
  		if(f==0){			
  			if(s==0){
  				clearInterval(timer)
  			}else{
  				s=s-1;
  				f=59;
  				m=60;
  			}
  		}else{
  			f=f-1;
  			m=60;
  		}
 	}
 		
 		//sy.innerHTML="剩余：0小时0分钟0秒"
 	for(var j=0;j<sy.length;j++){
 		sy[j].innerHTML="剩余：<em>"+s+"</em>小时<em>"+f+"</em>分钟<em>"+m+"</em>秒";
 
 	}
 	
  },1000)
  
	
	var left=$("tui_left");
	var right=$("tui_right");
	
	left.onclick=function(){
  		
  		if(num==0){
  			num=0;	
  		}else{
  			clearInterval(time);
  			num--
  			dong(num*-1200);	
  		}
  		
  		
  	}
  	
  	right.onclick=function(){
  		
  		if(num==2){
  			num=2;	
  		}else{
  			clearInterval(time);
  			num++
  			dong(num*-1200);
  		}
  		
  		
  	}
  var time=null;
  function dong(target){	
  	time=setInterval(function(){
  		
  		var speed=(target-$("imgs").offsetLeft)/10;
  		var speed=speed>0?Math.ceil(speed):Math.floor(speed);
  		if($("imgs")==target){
	  		clearInterval(time);
	  	}else{
	  		$("imgs").style.left=$("imgs").offsetLeft+speed+"px"
	  	}
  		
  	},30)
  	
  }
  
  
  
}
  
  
  

