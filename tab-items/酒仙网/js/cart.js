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
	
})


window.onload=function(){
  	function $(id){
		return document.getElementById(id)
	}
    var num=0;
	var left=$("tui_left1");
	var right=$("tui_right1");
	
	left.onclick=function(){
  		
  		if(num==0){
  			num=0;	
  		}else{
  			clearInterval(time);
  			num--
  			dong(num*-1000);	
  		}
  		
  		
  	}
  	
  	right.onclick=function(){
  		
  		if(num==1){
  			num=1;	
  		}else{
  			clearInterval(time);
  			num++
  			dong(num*-1000);
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

  

