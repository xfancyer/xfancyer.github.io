$(function(){
	///banner图的代码
     function qie(lun1,lun2,lun3){
     	var time=null;
		var i=0
		time=setInterval(qiehua,4000)
		function qiehua(){
			
			$(lun1).eq(i+1).addClass(lun3).siblings().removeClass(lun3);
			i++
			if(i==3){
				i=0;
				$(lun1).eq(0).addClass(lun3).siblings().removeClass(lun3);
			}
			$(lun2).animate({"marginLeft":-268},500,function(){
				$(lun2).css("marginLeft",0).find("li:first").appendTo(lun2)
			})	
		}
	    $(lun1).click(function(){
	      		clearInterval(time);
	      		i=$(this).index()-1
	      		qiehua();
				time=setInterval(qiehua,4000);
	     });
     }
     
   function qie1(lun1,lun2,lun3){
     	var time=null;
		var i=0
		time=setInterval(qiehua,4000)
		function qiehua(){
			$(lun1).eq(i+1).addClass(lun3).siblings().removeClass(lun3);
			i++
			if(i==4){
				i=0;
				$(lun1).eq(0).addClass(lun3).siblings().removeClass(lun3);
			}
			$(lun2).animate({"marginLeft":-268},500,function(){
				$(lun2).css("marginLeft",0).find("li:first").appendTo(lun2)
			})	
		}
	    $(lun1).click(function(){
	      		clearInterval(time);
	      		i=$(this).index()-1
	      		qiehua();
				time=setInterval(qiehua,4000);
	     });
	     
	     $(lun1).mouseenter(function(){
	      		clearInterval(time);
	      		//i=$(this).index()-1
	      						
	     });
	     $(lun1).mouseleave(function(){
	      		time=setInterval(qiehua,4000);					
	     });
     }
	 
	 function QieH(lun1,lun2,lun3){
     	var time=null;
		var i=0
		time=setInterval(qiehua,4000)
		function qiehua(){
			$(lun1).eq(i+1).addClass(lun3).siblings().removeClass(lun3);
			i++
			if(i==3){
				i=0;
				$(lun1).eq(0).addClass(lun3).siblings().removeClass(lun3);
			}
			
			//var speed=(json[attr]-current)/10;		 	
			//var speed=speed>0?Math.ceil(speed):Math.floor(speed);	
			
			$(lun2).animate({"marginLeft":-210},500,function(){
				$(lun2).css("marginLeft",0).find("li:first").appendTo(lun2)
			})	
		}
	    $(lun1).click(function(){
	      		clearInterval(time);
	      		i=$(this).index()-1
	      		qiehua();
				time=setInterval(qiehua,4000);
	     });
     }
     
     qie(".lunbo ol li",".l_ul","com")
	 
	 qie1(".lunbo2 ol li",".l_ul2","com2")
	 
	 QieH(".jiu1 ol li",".yijiu1","mcon1")
	 
	 QieH(".jiu2 ol li",".yijiu2","mcon2")
	 QieH(".jiu3 ol li",".yijiu3","mcon3")
	 QieH(".jiu4 ol li",".yijiu4","mcon4")
	 QieH(".jiu5 ol li",".yijiu5","mcon5")
	 
})





