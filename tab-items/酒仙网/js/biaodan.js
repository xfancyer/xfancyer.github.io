	//---------------------验证手机号------------------
	$(".zhengze").focus(function(){
		$(".zhengze").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".zhengze").nextAll(".z_shou").show().html("请输入11位手机号").css("background","#ccc")
		$(".zhengze").nextAll(".z_dui").hide();
		$(".zhengze").nextAll(".z_cuo").hide();
	})
	
	function dd(){
		var reg = /^(13|15|18|17)\d{9}$/;
		//var reg=/^[\u4e00-\u9fa5]{4,6}$/;
		var str = $(".zhengze").val();
		//alert(str);
		if( !reg.test(str) ){
			if(str==""){
				$(".zhengze").nextAll(".z_shou").show().html("请输入手机号").css("background","#ed787f")
				$(".zhengze").css("border","1px solid #f66")
				$(".zhengze").nextAll(".z_cuo").show();
			}else{
				$(".zhengze").nextAll(".z_shou").show().html("请输入正确的手机号码").css("background","#ed787f")
				$(".zhengze").css({"border":"1px solid #f66","color":"#333"})
				$(".zhengze").nextAll(".z_cuo").show();
			}
			return false;
		}else{
			$(".zhengze").nextAll(".z_dui").show();
			$(".zhengze").css("border","1px solid #dcdcdc")
			$(".zhengze").nextAll(".z_shou").hide()
			return true;
		}
	}
	
	//---------------------验证验证码------------------
	$(".yzm").focus(function(){
		$(".t_text5").css("border","1px solid #6eb9e0")
		$(".yzm").css("color","#333")
		$(".yzm").nextAll(".z_shou").hide()
	})
	
	function dd1(){
		var str = $(".yzm").val();
		var str1 = $(".yzm").nextAll(".yanz").html();
		if( str.toLowerCase()!= str1.toLowerCase()){
			if(str==""){
				$(".yzm").nextAll(".z_shou").show().html("请输入验证码").css("background","#ed787f")
				$(".t_text5").css("border","1px solid #dcdcdc")
				$(".yzm").css("border","0px solid #fff")
			}else{
				$(".yzm").nextAll(".z_shou").show().html("验证有误").css("background","#ed787f")
				$(".yzm").css({"border":"1px solid #f66","height":32+"px","width":138+"px"})
				$(".t_text5").css("border","1px solid #dcdcdc")
			}
			return false;
		}else{
			$(".yzm").nextAll(".z_shou").hide()
			$(".yzm").css("border","0px solid #fff")
			$(".t_text5").css("border","1px solid #dcdcdc")
			return true;
		}
	}
	
	//-------------------给验证码设置内容------------------------
	$(function(){
		yanzhenma();
	})
	$(".shuan").click(function(){
		//alert(11);
		yanzhenma();
	});	
	//获取四个随机数 作为验证码
	function yanzhenma(){
		var arr = [];//存放随机字符
		for(var i=0;i<4;i++){
			//随机产生一个 48--122之间的unicode值
			var asc = Math.floor( Math.random()*(122-48+1) +48 );
			while( asc>57&&asc<65 || asc>90&&asc<97 ){
				asc = Math.floor( Math.random()*(122-48+1) +48 );//如果取出来不满足条件 字母、数字，重新随机取值
			}
			arr[i] = String.fromCharCode( asc );	
		}
		$(".yanz").html( arr.join('') );
	}
	
	
	//------------校验码---------------
	$(".jym").focus(function(){
		$(".jym").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".jym").nextAll(".z_cuo1").hide();
		$(".jym").nextAll(".z_shou1").hide();
	})
	function dd2(){
		var reg=/^\d{6}$/;
		var str=$(".jym").val();
		if(str==''){
			$(".jym").nextAll(".z_shou1").show().html("请输入校验码").css("background","#ed787f")
			$(".jym").css("border","1px solid #f66")
			$(".jym").nextAll(".z_cuo1").show();
			return false;
		}else{
			if(!reg.test(str)){
				$(".jym").nextAll(".z_shou1").show().html("验证码输入有误").css("background","#ed787f")
				$(".jym").css("border","1px solid #f66")
			}else{
				$(".jym").css("border","1px solid #dcdcdc")
			}
			return false;
		}
	}
	
	//------------点击获取验证码---------------
	$(".huoqu").click(function(){
		var str = $(".yzm").val();
		var str1 = $(".yzm").nextAll(".yanz").html();
		if(str.toLowerCase()!= str1.toLowerCase()){
			if(str==""){
				$(".yzm").nextAll(".z_shou").show().html("验证码为空").css("background","#ed787f")
				$(".t_text5").css("border","1px solid #dcdcdc")
				$(".yzm").css("border","0px solid #fff")
			}else{
				$(".yzm").nextAll(".z_shou").show().html("验证有误").css("background","#ed787f")
				$(".yzm").css({"border":"1px solid #f66","height":32+"px","width":138+"px"})
				$(".t_text5").css("border","1px solid #dcdcdc")
			}
			return false;
		}else{
			var reg = /^(13|15|18|17)\d{9}$/;
		    var str = $(".zhengze").val();
			if( !reg.test(str) ){
				if(str==""){
					$(".zhengze").nextAll(".z_shou").show().html("请输入手机号").css("background","#ed787f")
					$(".zhengze").css("border","1px solid #f66")
					$(".zhengze").nextAll(".z_cuo").show();
				}else{
					$(".zhengze").nextAll(".z_shou").show().html("请输入正确的手机号码").css("background","#ed787f")
					$(".zhengze").css("border","1px solid #f66")
					$(".zhengze").nextAll(".z_cuo").show();
				}
				return false;
			}else{
				var i=60;
				var timer=setInterval(function(){
						$(".huoqu").val(i+"秒后重新获取").css("color","#ccc");
						i--;
						if(i==0){
							clearInterval(timer);
							$(".huoqu").removeAttr('disabled');
							$(".huoqu").val("获取短信校验码").css("color","#666");
						}					
					},1000);
				$(this).attr('disabled','disabled');
				return true;
			}	
		}

	})
	

	//------------设置密码---------------
	
	$(".pwd").focus(function(){
		$(".pwd").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".pwd").nextAll(".z_shou").show().html("8-20位字符，数字、字母、符号至少包含两种").css("background","#ccc")
		$(".pwd").nextAll(".z_dui").hide();
		$(".pwd").nextAll(".z_cuo").hide();
	})
	
	function dd3(){
		//var reg = /$/;
		var shu =/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}/;
		var str = $(".pwd").val();
		//alert(str);
		if(!shu.test(str)){
			$(".pwd").nextAll(".z_shou").show().html("数字、字母、符号至少包含两种").css("background","#ed787f")
			if(str.length<8){
				$(".pwd").nextAll(".z_shou").show().html("密码长度为8-20位").css("background","#ed787f")
				$(".pwd").css({"border":"1px solid #f66","color":"#333"})
				$(".pwd").nextAll(".z_cuo").show();
				if(str==""){
					$(".pwd").nextAll(".z_shou").show().html("请输入密码").css("background","#ed787f")
					$(".pwd").css("border","1px solid #f66")
					$(".pwd").nextAll(".z_cuo").show();
				}
			}
			return false;
		}else{
			$(".pwd").nextAll(".z_dui").show();
			$(".pwd").css("border","1px solid #dcdcdc")
			$(".pwd").nextAll(".z_shou").hide()
			return true;
		}
	}
	
	$(".pwd1").focus(function(){
		$(".pwd1").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".pwd1").nextAll(".z_shou").hide()
		$(".pwd1").nextAll(".z_dui").hide();
		$(".pwd1").nextAll(".z_cuo").hide();
	})
	function dd4(){
		var str = $(".pwd").val();
		var str1 = $(".pwd1").val();
		if(str1==""){
			$(".pwd1").nextAll(".z_shou").show().html("请再次输入密码").css("background","#ed787f")
			$(".pwd1").css("border","1px solid #f66")
			$(".pwd1").nextAll(".z_cuo").show();
			return false;
		}else{
			if(str1!=str){
				$(".pwd1").nextAll(".z_shou").show().html("两次输入密码不一致").css("background","#ed787f")
				$(".pwd1").css("border","1px solid #f66")
				$(".pwd1").nextAll(".z_cuo").show();
				return false;
			}else{
				$(".pwd1").nextAll(".z_dui").show();
				$(".pwd1").css("border","1px solid #dcdcdc")
				$(".pwd1").nextAll(".z_shou").hide()
				return true;
			}
			
		}
	}
	
    function dd5(){
	    if(!$(".dxu").prop("checked")){
	    	$(".dxu").parent().parent().find("p").show()
	    	return false;
	    }else{
	    	$(".dxu").parent().parent().find("p").hide()
	    	return true;
	    }
    }
    
    $(".a_deng").click(function(){
    	if($(".zhengze").val()==""){
    		$(".zhengze").nextAll(".z_shou").show().html("请输入手机号").css("background","#ed787f")
			$(".zhengze").css("border","1px solid #f66")
			$(".zhengze").nextAll(".z_cuo").show();
    	}else if($(".yzm").val()==""){
    		$(".yzm").nextAll(".z_shou").show().html("请输入验证码").css("background","#ed787f")
			$(".t_text5").css("border","1px solid #dcdcdc")
			$(".yzm").css("border","0px solid #fff")
    	}else if($(".jym").val()==""){
    		$(".jym").nextAll(".z_shou1").show().html("请输入校验码").css("background","#ed787f")
			$(".jym").css("border","1px solid #f66")
			$(".jym").nextAll(".z_cuo1").show();
    	}else if($(".pwd").val()==""){
    		$(".pwd").nextAll(".z_shou").show().html("请输入密码").css("background","#ed787f")
			$(".pwd").css("border","1px solid #f66")
			$(".pwd").nextAll(".z_cuo").show();
    	}else if($(".pwd1").val()==""){
    		$(".pwd1").nextAll(".z_shou").show().html("请再次输入密码").css("background","#ed787f")
			$(".pwd1").css("border","1px solid #f66")
			$(".pwd1").nextAll(".z_cuo").show();
    	}else if(!$(".dxu").prop("checked")){
			$(".dxu").parent().parent().find("p").show()
    	}else{
    		var name=$(".zhengze").val();    		
    		var pwd=$(".pwd").val();
    		 d={
    			"uname":name,
    			"upwd":pwd
    			}
    		var flag=true;
    		var arr=[]
    		var oldarr1=getCookie("sname")
			if(oldarr1.length!=0){
				arr=oldarr1
				for(var i=0;i<arr.length;i++){
					if(d.uname==arr[i].uname){
						alert("该手机号已被注册")
						flag=false;
						return;
						//直接return 返回
					}
				}
			}
    	
   			if(flag){
				arr.push(d)
			}
    		setCookie("sname",JSON.stringify(arr),5)
    		alert("注册成功")
    	}
    	
    	
    })


//------------------------------------邮箱注册-------------------------------


//-----------邮箱密码验证-----------
$(".pwd2").focus(function(){
		$(".pwd2").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".pwd2").nextAll(".z_shou").show().html("8-20位字符，数字、字母、符号至少包含两种").css("background","#ccc")
		$(".pwd2").nextAll(".z_dui").hide();
		$(".pwd2").nextAll(".z_cuo").hide();
	})
	
	function dd6(){
		//var reg = /$/;
		var shu =/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}/;
		var str = $(".pwd2").val();
		//alert(str);
		if(!shu.test(str)){
			$(".pwd2").nextAll(".z_shou").show().html("数字、字母、符号至少包含两种").css("background","#ed787f")
			if(str.length<8){
				$(".pwd2").nextAll(".z_shou").show().html("密码长度为8-20位").css("background","#ed787f")
				$(".pwd2").css({"border":"1px solid #f66","color":"#333"})
				$(".pwd2").nextAll(".z_cuo").show();
				if(str==""){
					$(".pwd2").nextAll(".z_shou").show().html("请输入密码").css("background","#ed787f")
					$(".pwd2").css("border","1px solid #f66")
					$(".pwd2").nextAll(".z_cuo").show();
				}
			}
			return false;
		}else{
			$(".pwd2").nextAll(".z_dui").show();
			$(".pwd2").css("border","1px solid #dcdcdc")
			$(".pwd2").nextAll(".z_shou").hide()
			return true;
		}
	}
	
	$(".pwd3").focus(function(){
		$(".pwd3").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".pwd3").nextAll(".z_shou").hide()
		$(".pwd3").nextAll(".z_dui").hide();
		$(".pwd3").nextAll(".z_cuo").hide();
	})
	function dd7(){
		var str = $(".pwd2").val();
		var str1 = $(".pwd3").val();
		if(str1==""){
			$(".pwd3").nextAll(".z_shou").show().html("请再次输入密码").css("background","#ed787f")
			$(".pwd3").css("border","1px solid #f66")
			$(".pwd3").nextAll(".z_cuo").show();
			return false;
		}else{
			if(str1!=str){
				$(".pwd3").nextAll(".z_shou").show().html("两次输入密码不一致").css("background","#ed787f")
				$(".pwd3").css("border","1px solid #f66")
				$(".pwd3").nextAll(".z_cuo").show();
				return false;
			}else{
				$(".pwd3").nextAll(".z_dui").show();
				$(".pwd3").css("border","1px solid #dcdcdc")
				$(".pwd3").nextAll(".z_shou").hide()
				return true;
			}
			
		}
	}



//---------------------邮箱验证------------------
	$(".yx").focus(function(){
		$(".yx").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".yx").nextAll(".z_shou").show().html("请输入邮箱").css("background","#ccc")
		$(".yx").nextAll(".z_dui").hide();
		$(".yx").nextAll(".z_cuo").hide();
	})
	
	function dd10(){
		var reg = /^\d{5,10}(@qq\.com)|(@163\.com)$/;
		var str = $(".yx").val();
		//alert(str);
		if( !reg.test(str) ){
			if(str==""){
				$(".yx").nextAll(".z_shou").show().html("请输入邮箱").css("background","#ed787f")
				$(".yx").css("border","1px solid #f66")
				$(".yx").nextAll(".z_cuo").show();
			}else{
				$(".yx").nextAll(".z_shou").show().html("请输入正确的邮箱").css("background","#ed787f")
				$(".yx").css("border","1px solid #f66")
				$(".yx").nextAll(".z_cuo").show();
			}
			return false;
		}else{
			$(".yx").nextAll(".z_dui").show();
			$(".yx").css("border","1px solid #dcdcdc")
			$(".yx").nextAll(".z_shou").hide()
			return true;
		}
	}

//---------------------用户名------------------
	$(".yhm").focus(function(){
		$(".yhm").css({"border":"1px solid #6eb9e0","color":"#333"})
		$(".yhm").nextAll(".z_shou").show().html("请输入用户名").css("background","#ccc")
		$(".yhm").nextAll(".z_dui").hide();
		$(".yhm").nextAll(".z_cuo").hide();
	})
	
	function dd13(){
		var reg = /^\D.{4,20}/;
		var str = $(".yhm").val();
		//alert(str);
		if( !reg.test(str) ){
			if(str==""){
				$(".yhm").nextAll(".z_shou").show().html("请输入用户名").css("background","#ed787f")
				$(".yhm").css("border","1px solid #f66")
				$(".yhm").nextAll(".z_cuo").show();
			}else{
				$(".yhm").nextAll(".z_shou").show().html("用户名4-20位，字母、数字、-、_组成，非数字开头").css("background","#ed787f")
				$(".yhm").css("border","1px solid #f66")
				$(".yhm").nextAll(".z_cuo").show();
			}
			return false;
		}else{
			$(".yhm").nextAll(".z_dui").show();
			$(".yhm").css("border","1px solid #dcdcdc")
			$(".yhm").nextAll(".z_shou").hide()
			return true;
		}
	}

	
	//---------------------验证验证码------------------
	$(".yzm1").focus(function(){
		$(".t_text5").css("border","1px solid #6eb9e0")
		$(".yzm1").css("color","#333")
		$(".yzm1").nextAll(".z_shou").hide()
	})
	
	function dd9(){
		var str = $(".yzm1").val();
		var str1 = $(".yzm1").nextAll(".yanz1").html();
		if( str.toLowerCase()!= str1.toLowerCase()){
			if(str==""){
				$(".yzm1").nextAll(".z_shou").show().html("请输入验证码").css("background","#ed787f")
				$(".t_text5").css("border","1px solid #dcdcdc")
				$(".yzm1").css("border","0px solid #fff")
			}else{
				$(".yzm1").nextAll(".z_shou").show().html("验证有误").css("background","#ed787f")
				$(".yzm1").css({"border":"1px solid #f66","height":32+"px","width":138+"px"})
				$(".t_text5").css("border","1px solid #dcdcdc")
			}
			return false;
		}else{
			$(".yzm1").nextAll(".z_shou").hide()
			$(".yzm1").css("border","0px solid #fff")
			$(".t_text5").css("border","1px solid #dcdcdc")
			return true;
		}
	}
	
	//-------------------给验证码设置内容------------------------
	$(function(){
		yanzhenma1();
	})
	$(".shuan1").click(function(){
		//alert(11);
		yanzhenma1();
	});	
	//获取四个随机数 作为验证码
	function yanzhenma1(){
		var arr = [];//存放随机字符
		for(var i=0;i<4;i++){
			//随机产生一个 48--122之间的unicode值
			var asc = Math.floor( Math.random()*(122-48+1) +48 );
			while( asc>57&&asc<65 || asc>90&&asc<97 ){
				asc = Math.floor( Math.random()*(122-48+1) +48 );//如果取出来不满足条件 字母、数字，重新随机取值
			}
			arr[i] = String.fromCharCode( asc );	
		}
		$(".yanz1").html( arr.join('') );
	}
	
	
	//-------------------我已阅读并同意------------------------
	function dd12(){
	    if(!$(".dxu1").prop("checked")){
	    	$(".dxu1").parent().parent().find("p").show()
	    	return false;
	    }else{
	    	$(".dxu1").parent().parent().find("p").hide()
	    	return true;
	    }
    }

	
	
    //var d1={};
    $(".a_deng1").click(function(){
    	if($(".yx").val()==""){
    		$(".yx").nextAll(".z_shou").show().html("请输入邮箱").css("background","#ed787f")
			$(".yx").css("border","1px solid #f66")
			$(".yx").nextAll(".z_cuo").show();
    	}else if($(".yhm").val()==""){
    		$(".yhm").nextAll(".z_shou").show().html("请输入用户名").css("background","#ed787f")
			$(".yhm").css("border","1px solid #f66")
			$(".yhm").nextAll(".z_cuo").show();
    	}else if($(".pwd2").val()==""){
    		$(".pwd2").nextAll(".z_shou").show().html("请输入密码").css("background","#ed787f")
			$(".pwd2").css("border","1px solid #f66")
			$(".pwd2").nextAll(".z_cuo").show();
    	}else if($(".pwd3").val()==""){
    		$(".pwd3").nextAll(".z_shou").show().html("请再次输入密码").css("background","#ed787f")
			$(".pwd3").css("border","1px solid #f66")
			$(".pwd3").nextAll(".z_cuo").show();
    	}else if($(".yzm1").val()==""){
    		$(".yzm1").nextAll(".z_shou").show().html("请输入验证码").css("background","#ed787f")
			$(".t_text5").css("border","1px solid #dcdcdc")
			$(".yzm1").css("border","0px solid #fff")
    	}else if(!$(".dxu1").prop("checked")){
			$(".dxu1").parent().parent().find("p").show()
    	}else{
    		var yyx=$(".yx").val();
    		var yname=$(".yhm").val();  
    		var ypwd=$(".pwd2").val();
    		 d1={
    			"yuyx":yyx,
    			"yuname":yname,
    			"yupwd":ypwd
    			}
    		var flag=true;
    		var arr1=[]
    		var oldarr=getCookie("ynames")
			if(oldarr.length!=0){
				arr1=oldarr
				for(var i=0;i<arr1.length;i++){
					if(d1.yuname==arr1[i].yuname||d1.yuyx==arr1[i].yuyx){
						alert("该用户已被注册")
						flag=false;
						return;
						//直接return 返回
					}
				}
			}
    	
   			if(flag){
				arr1.push(d1)
			}
    		setCookie("ynames",JSON.stringify(arr1),5)
    		alert("注册成功")
    	}
    	
    	
    })
    
    
    
    $(".zh").focus(function(){
		$(".zh").css("border","1px solid #6eb9e0")
		$(".zh").css("color","#333")
		$(".zh").nextAll(".z_shou").hide()
		$(".zh").nextAll(".z_cuo").hide();
	})
    
    function dd8(){
    	var str=$(".zh").val();
    	if(str==""){
    		$(".zh").nextAll(".z_shou").show().html("请输入用户名/邮箱/手机号").css("background","#ed787f")
			$(".zh").css("border","1px solid #f66")
			$(".zh").nextAll(".z_cuo").show();
    	}else{
    		$(".zh").css("border","1px solid #dcdcdc")
    		$(".zh").nextAll(".z_cuo").hide();
    	}
    	
    }
    
    $(".mima").focus(function(){
		$(".mima").css("border","1px solid #6eb9e0")
		$(".mima").css("color","#333")
		$(".mima").nextAll(".z_shou").hide()
		$(".mima").nextAll(".z_cuo").hide();
	})
    
    function dd11(){
    	var str=$(".mima").val();
    	if(str==""){
    		$(".mima").nextAll(".z_shou").show().html("请输入密码").css("background","#ed787f")
			$(".mima").css("border","1px solid #f66")
			$(".mima").nextAll(".z_cuo").show();
    	}else{
    		$(".mima").css("border","1px solid #dcdcdc")
    		$(".mima").nextAll(".z_cuo").hide();
    	}
    }
    
    
    //---------------------验证验证码------------------
	$(".dyzm").focus(function(){
		$(".t_text5").css("border","1px solid #6eb9e0")
		$(".dyzm").css("color","#333")
		$(".dyzm").nextAll(".z_shou").hide()
	})
	
	function dd14(){
		var str = $(".dyzm").val();
		var str1 = $(".dyzm").nextAll(".dyanz").html();
		if( str.toLowerCase()!= str1.toLowerCase()){
			if(str==""){
				$(".dyzm").nextAll(".z_shou").show().html("请输入验证码").css("background","#ed787f")
				$(".t_text5").css("border","1px solid #f66")
				$(".dyzm").css("border","0px solid #fff")
			}else{
				$(".dyzm").nextAll(".z_shou").show().html("验证有误").css("background","#ed787f")
				//$(".dyzm").css({"border":"1px solid #f66","height":32+"px","width":138+"px"})
				$(".t_text5").css("border","1px solid #f66")
			}
			return false;
		}else{
			$(".dyzm").nextAll(".z_shou").hide()
			$(".dyzm").css("border","0px solid #fff")
			$(".t_text5").css("border","1px solid #dcdcdc")
			return true;
		}
	}
	
	//-------------------给验证码设置内容------------------------
	$(function(){
		yanzhenma2();
	})
	$(".dshuan").click(function(){
		//alert(11);
		yanzhenma2();
	});	
	//获取四个随机数 作为验证码
	function yanzhenma2(){
		var arr = [];//存放随机字符
		for(var i=0;i<4;i++){
			//随机产生一个 48--122之间的unicode值
			var asc = Math.floor( Math.random()*(122-48+1) +48 );
			while( asc>57&&asc<65 || asc>90&&asc<97 ){
				asc = Math.floor( Math.random()*(122-48+1) +48 );//如果取出来不满足条件 字母、数字，重新随机取值
			}
			arr[i] = String.fromCharCode( asc );	
		}
		$(".dyanz").html( arr.join('') );
	}
	
	
	//if(tc.name){
		//$(".huang").find("span").html("hi，"+tc.name)
		//$(".tuichu").click(function(){
		//	removeCookie("Intuichu")
		//})
		//location.reload()
	//}
	
	$(".d_coo").click(function(){
		if($(".zh").val()==""){
			$(".zh").nextAll(".z_shou").show().html("请输入用户名/邮箱/手机号").css("background","#ed787f")
			$(".zh").css("border","1px solid #f66")
			$(".zh").nextAll(".z_cuo").show();
		}else if($(".mima").val()==""){
			$(".mima").nextAll(".z_shou").show().html("请输入密码").css("background","#ed787f")
			$(".mima").css("border","1px solid #f66")
			$(".mima").nextAll(".z_cuo").show();
		}else if($(".dyzm").val()==""){
			$(".dyzm").nextAll(".z_shou").show().html("验证码为空").css("background","#ed787f")
			$(".t_text5").css("border","1px solid #f66")
			$(".dyzm").css("border","0px solid #fff")
		}else{
			var cookieInfo = getCookie("ynames");//youx
			var cookieInfo1 = getCookie("sname");
			//var cookieInfo1 = getCookie("sname");//shouji
			var name = $(".zh").val();
			var pwd = $(".mima").val();
			var flag1=true;
			
			for(var i=0;i<cookieInfo.length;i++){
				if(name==cookieInfo[i].yuname&&pwd==cookieInfo[i].yupwd&&$(".dyzm").val().toLowerCase()==$(".dyanz").html().toLowerCase()){
					flag1=false;
					//$(".huang").find("span").html("hi，"+name)
					$(".tc1,.zhezhao").css("display","none");
					var j = {"name":cookieInfo[i].yuname}
					//$(".xiaoxi,.tuichu").show();
				
					location.reload()
					setCookie("yonghuming",JSON.stringify(j),0)
					//setCookie("yonghuming",cookieInfo[i].yuname,0)
					//重新设置一个cookie  方便下次免登陆
					//setCookie("Intuichu",JSON.stringify(cookieInfo[i]),5)
					
				}
				
			}
			
			/*for(var k=0;k<cookieInfo1.length;k++){
				if(name==cookieInfo1[k].yuname&&pwd==cookieInfo1[i].yupwd&&$(".dyzm").val().toLowerCase()==$(".dyanz").html().toLowerCase()){
					flag1=false;
					//$(".huang").find("span").html("hi，"+name)
					$(".tc1,.zhezhao").css("display","none");
					var j = {"name":cookieInfo1[k].yuname}
					//$(".xiaoxi,.tuichu").show();
				
					//location.reload()
					setCookie("yonghuming",JSON.stringify(j),0)
					//setCookie("yonghuming",cookieInfo[i].yuname,0)
					//重新设置一个cookie  方便下次免登陆
					//setCookie("Intuichu",JSON.stringify(cookieInfo[i]),5)
					
				}
				
			}*/
			
			if(flag1){
				alert("账户名或密码错误，请重新输入")
			}
			
		}
	})
	
	$(".tuichu").click(function(){
		location.reload()
		removeCookie("yonghuming");
		$(".huang span").html("欢迎来酒仙网！");
		$(".xiaoxi,.tuichu").css("display","none");
		//$(".xiaoxi,.tuichu").show();
	})



	





