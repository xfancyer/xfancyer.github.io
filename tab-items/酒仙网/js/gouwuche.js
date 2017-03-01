$(function(){
	
	var arr = getCookie("shoplist");//[{},{},...]
	for(var i=0;i<arr.length;i++){
		shopinfo = arr[i];
		str ='<div class="cart_xiangqing fix">'+
        	'<div class="c_x1 fl"><input type="checkbox" class="chec2"></div>'+
            '<div class="c_x2 fl">'+
            	'<a href="#"><img src="img/'+shopinfo.src+'"></a>'+
                '<p class="lianjie"><a href="#">'+shopinfo.name+'</a></p>'+
                '<p><span>限时购</span></p>'+
            '</div>'+
            '<div class="c_x3 fl">￥'+shopinfo.price+'</div>'+
           ' <div class="c_x4 fl">49金币</div>'+
            '<div class="c_x5 fl" '+
					'data-id="'+ shopinfo.id +'" '+
					'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'" data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'" data-mar1="'+ shopinfo.mar1 +'">'+
                '<p class="jiajie fix">'+
                    '<input type="button" value="" name="-" class="button1">'+
                    '<input type="text"  class="shuliang" value='+shopinfo.count+'>'+
                    '<input type="button" value="" name="+" class="button2">'+
                '</p>'+
                '<p class="youhuo">有货</p>'+
            '</div>'+
            '<div class="c_x6 fl">￥<span>'+shopinfo.price*shopinfo.count+'</span></div>'+
            '<div class="c_x7 fl">'+
            	'<p class="shanchu"><a href="#">删除</a></p>'+
                '<p><a href="#">收藏</a></p>'+
            '</div>'+
        '</div>';
		$(".shopt_c").append(str);
	}
	
	
	
	//arr = [45,34,56,78];
	//arr.splice(1,2);  //从下标2  开始删除 指定长度的 数据   
	//splic  删除从指定下标开始  指定长度的 数组中的数据  
	//删除   
	$(".shanchu").click(function(){
		if(confirm('确定要删除么？')){			
			//找到当前点击的  商品编号  
			var id = $(this).parent().parent().find(".c_x5").data("id");
			//取出cookie中的商品数据
			var arr = getCookie("shoplist");//[{},{},{}]
			console.log(arr);
			for(var i=0;i<arr.length;i++){
				if(id == arr[i].id){
					arr.splice(i,1);//删除cookie中指定位置处的  对象
					//删除后一定修改 cookie中的数据
					setCookie("shoplist",JSON.stringify(arr),0);
					break;
				}
			}
			$(this).parent().parent().remove();
		}
	})
	
	//删除选中
	$(".scxz").click(function(){
		//$(".chec2:checked").parent().parent().remove()		
			if(confirm('确定要删除么？')){			
				//找到当前点击的  商品编号  
				for(var i=0;i<$(".chec2:checked").length;i++){
					var id = $(".chec2:checked").eq(i).parent().parent().find(".c_x5").data("id");
					var crr = getCookie("shoplist");//[{},{},{}]
					//console.log(arr);
					for(var j=0;j<crr.length;j++){
						if(id == crr[j].id){
							crr.splice(j,1);//删除cookie中指定位置处的  对象
							//删除后一定修改 cookie中的数据
							setCookie("shoplist",JSON.stringify(crr),0);
													
						}
					}
					$(".chec2:checked").eq(i).parent().parent().remove();
				}
				//var id = $(this).parent().parent().parent().find(".c_x5").data("id");
				//取出cookie中的商品数据
			}
			
		
		
	})
	
	
	//结算   将备选中的商品 数量和 金额进行累加
	$(".chec2").click(function(){
		jiesuan();
	})
	//加操作
	$(".button2").click(function(){
		var id = $(this).parent().parent().data("id");
		var arr = getCookie("shoplist");
		for(var i=0;i<arr.length;i++){
			if(id == arr[i].id){
				//f=="+"?arr[i].count++:arr[i].count--
				arr[i].count++
				$(this).parent().find(".shuliang").val(arr[i].count);
				$(this).parent().parent().parent().find(".c_x6 span").html( arr[i].count*arr[i].price);
				//$(this).parent().parent().parent().find(".c_x4 span").html( arr[i].count*arr[i].mar1);
				setCookie("shoplist",JSON.stringify(arr),0);
				break;
			}
		}
		jiesuan();
		
	})
	
	//减操作
	$(".button1").click(function(){
		var id = $(this).parent().parent().data("id");
		var arr = getCookie("shoplist");
		var num = $(this).parent().find(".shuliang").val();
		if(num==1){
			return false;
		}	
		for(var i=0;i<arr.length;i++){
			if(id == arr[i].id){
			  arr[i].count--;
			  $(this).parent().find(".shuliang").val(arr[i].count);
			  $(this).parent().parent().parent().find(".c_x6 span").html( arr[i].count*arr[i].price );
			 // $(this).parent().parent().parent().find(".c_x4 span").html( arr[i].count*arr[i].mar1 );
			  break;
			}
		}
		setCookie("shoplist",JSON.stringify(arr),0);
		jiesuan();
		
	})
	
	jiesuan()
	function jiesuan(){
		var sumMoney = 0;
		var sumCount = 0;
		//var jinbie = 0;
		$(".chec2:checked").each(function(){
			//alert( parseInt($(this).parent().parent().find(".c_x6 span").html()) ) 
			//找到备选中的商品 及其数量和金额
			//alert(  $(this).parent().parent().find(".shop-count").html() )
			sumCount+=parseInt( $(this).parent().parent().find(".shuliang").val());
			sumMoney+=parseInt($(this).parent().parent().find(".c_x6 span").html());
			//jinbie+=parseInt($(this).parent().parent().find(".c_x4 span").html());
		})
	
		//$(".c_x4 span").html(jinbie);
		$(".count2").html(sumCount);
		$(".money2").html("￥"+sumMoney);
	}
	
	
	//全选
	$(".chec1").click(function(){
		
		$(".chec1").prop("checked",$(this).prop("checked"))
		$(".chec2").prop("checked",$(this).prop("checked"));
		jiesuan();
	})
	
	
})
