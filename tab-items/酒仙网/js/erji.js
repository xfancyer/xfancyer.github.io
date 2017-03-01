
  window.onload=function(){
  	function $(id){
		return document.getElementById(id)
	}

  
  var sy=document.getElementsByClassName("shijian1");
  var sy1=document.getElementsByClassName("fenzhong");
  var sy2=document.getElementsByClassName("sfm");
  
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
 		sy[j].innerHTML="剩余："+s+"小时"+f+"分钟"+m+"秒";
 	}
	
	for(var h=0;h<sy1.length;h++){
 		sy1[h].innerHTML=s+"时"+f+"分"+m+"秒";
 	}
	
	for(var h=0;h<sy2.length;h++){
 		sy2[h].innerHTML=s+"时"+f+"分"+m+"秒";
 	}
 	
  },1000)
  
}

$(function(){
	
	function Tab1(obj1,div1,c2){
		$(obj1).hover(function(){             
		    var $t =  $(this).index();
		    $(obj1).removeClass();
		    $(this).addClass(c2);
		    $(div1).css('display','none');
		    $(div1).eq($t).css('display','block');
		});
	}

	Tab1("#tab10 dd",".zhoupin10","current10");
	
	
	$(".liebaio ul li").hover(function(){
		$(this).find($(".shijian1")).stop().animate({"bottom":45},500)	
	},function(){
		$(this).find($(".shijian1")).stop().animate({"bottom":20},500)	
	})
	
	
	$(".liebiao1 li").hover(function(){
		$(this).find($(".qingchang")).stop().animate({"bottom":0},500)	
	},function(){
		$(this).find($(".qingchang")).stop().animate({"bottom":-70},500)	
	})
	
	
	$(".lieb_tu1 li").mouseenter(function(){
		$(".huaguo").css("display","none");
		$(".huaguo").eq($(this).index()).css("display","block");
		$(".wenzi").eq($(this).index()).css("display","none");
		$(this).siblings().find(".wenzi").css("display","block");
	})
	
	
	$(".shouqi").click(function(){
		$(".jiulei").slideToggle();
	})
	
	
	
	$(".jiuji").hover(function(){
		$(this).find($(".dushu")).toggle()
	})
	
	
	$(".a_L").mouseenter(function(){
      $(this).find("a").css("background-position","0px 0px");	
  }).mouseleave(function(){
      $(this).find("a").css("background-position","0px 0px");	
  })
  $(".a_R").mouseenter(function(){
      $(this).find("a").css("background-position","0px 0px");	
  }).mouseleave(function(){
      $(this).find("a").css("background-position","0px 0px");	
  })
  k=1;
  $(function(){
      function chageUL(k){
          $(".nav_1 li:eq("+k+")").css("opacity","0.7");
          $(".nav_1 li:eq("+k+")").stop(true,false).animate({"opacity":"1"},1000)
          $(".nav_1 li").removeClass("sid");
          $(".nav_1 li:eq("+k+")").addClass("sid");
          //按钮
          $(".but span").removeClass("sp_1");
          $(".but span:eq("+k+")").addClass("sp_1");		
      }
      function zd(){
          var k=$(".nav_1 .sid").index();
          if(k == $(".nav_1 li").length-1 ){
              var k=0;
              chageUL(k)
          }else{
              var k=k+1;
              chageUL(k)
          }	
      }//end
      var times=setInterval(zd,3000)
      $(".but span").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).click(function(){
          var k=$(this).index();
          chageUL(k);	
      })
      $(".a_L").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).click(function(){
          var k=$(".nav_1 .sid").index();
          if(k == 0 ){
              var k=$(".nav_1 li").length-1;
              chageUL(k)		
          }else{
              k=k-1
              chageUL(k)
          }
      })
      $(".a_R").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).click(function(){
          var k=$(".nav_1 .sid").index();
          if(k == $(".nav_1 li").length-1 ){
              var k=0;
              chageUL(k)
          }else{
              var k=k+1;
              chageUL(k)
          }
      })
  })
  
  
  
  $(".a_L1").mouseenter(function(){
      $(this).find("a").css("background-position","0px 0px");	
  }).mouseleave(function(){
      $(this).find("a").css("background-position","0px 0px");	
  })
  $(".a_R1").mouseenter(function(){
      $(this).find("a").css("background-position","0px 0px");	
  }).mouseleave(function(){
      $(this).find("a").css("background-position","0px 0px");	
  })
  k=1;
  $(function(){
      function chageUL(k){
          $(".nav_2 li:eq("+k+")").css("opacity","0.7");
          $(".nav_2 li:eq("+k+")").stop(true,false).animate({"opacity":"1"},1000)
          $(".nav_2 li").removeClass("sid1");
          $(".nav_2 li:eq("+k+")").addClass("sid1");
          //按钮
          $(".but1 span").removeClass("sp_2");
          $(".but1 span:eq("+k+")").addClass("sp_2");		
      }
      function zd(){
          var k=$(".nav_2 .sid1").index();
          if(k == $(".nav_2 li").length-1 ){
              var k=0;
              chageUL(k)
          }else{
              var k=k+1;
              chageUL(k)
          }	
      }//end
      var times=setInterval(zd,3000)
      $(".but1 span").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).click(function(){
          var k=$(this).index();
          chageUL(k);	
      })
      $(".a_L1").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).click(function(){
          var k=$(".nav_2 .sid1").index();
          if(k == 0 ){
              var k=$(".nav_2 li").length-1;
              chageUL(k)		
          }else{
              k=k-1
              chageUL(k)
          }
      })
      $(".a_R1").mouseenter(function(){
          clearInterval(times);	
      }).mouseleave(function(){
          times=setInterval(zd,3000);
      }).click(function(){
          var k=$(".nav_2 .sid1").index();
          if(k == $(".nav_2 li").length-1 ){
              var k=0;
              chageUL(k)
          }else{
              var k=k+1;
              chageUL(k)
          }
      })
  })
  	
	
})
  


  
  

