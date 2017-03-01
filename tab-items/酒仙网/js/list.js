$(function(){
		$.ajax({
			type:"get",
			url:"js/data.json",
			async:true,
			success:function(glist){
				for (var i in glist){
					
					//alert(glist[i].name);
					//获取商品类型名称
					//$(".nav").append("<span>"+glist[i].name+"</span>");					
					//获取商品信息
					for(var j=0;j<glist[i].list.length;j++){
						//console.log(list.id)
						info = glist[i].list[j];//提取信息
						str = 
						'<ul>'+
							'<li>'+
            		'<div class="lie_xtu"><a href="xiangqing.html?id='+info.id+'&cname='+i+'"><img src="img/'+info.src+'"></a></div>'+
            		'<div class="lie_wenxi">'+
                '<p class="gaoduan"><a href="xiangqing.html?id='+info.id+'&cname='+i+'">'+info.name+'</a></p>'+
                '<p class="mt10" style="color:#c00;"><b>'+info.price+'</b></p>'+
                '<p class="pingjia pt2"><a href="#">'+info.yiyou+'</a></p>'+
                '<p class="ziying"><span><img src="images/jiu_03.png">自营</span></p>'+
           		  '</div>'+
            	  '<div class="jiarug fix">'+
            	 '<div class="jie_jia fl" data-id="'+info.id+'" data-src="'+info.src+'" data-name="'+info.name+'" data-price="'+info.price+'" data-count="'+info.count+'">'+
            	 	'<input type="text" value="1" class="tel4 fl shop_shul">'+
            	 	'<input type="button" value="" class="btn1 fl">'+
            	 	'<input type="button" value="" class="btn2 fl">'+
            	 '</div>'+
               '<div class="gwc fl"><a href="javascript:;"><i></i>加入购物车</a></div>'+
               '</div>'+
               "<span style='display:none' data-id="+info.id+" data-name="+info.name+" data-price="+info.price+" data-src='img/"+info.src+"'></span>"+
              '</li>'+
						'</ul>';
						$(".shop_lie").append(str);
					}
				}
				
				var i=1;
				//加减操作
				$(".btn1").click(function(){
					
					i++
					if(i>99){
						alert("该商品只能买99件")
						$(this).css("background","url(images/srp_03.png) top left")
						
					}else{
						$(this).css("background","url(images/sr_31.png) top left")
						$(this).parent().find($(".shop_shul")).val(i)
						$(this).next().css("background","url(images/sr_31.png) bottom left")
					}
					

				})
				
				$(".btn2").click(function(){
					
					i--
					if(i<1){
						alert("至少有一件商品")
						$(this).css("background","url(images/srp_05.png) bottom left")
					}else{
						
						$(this).parent().find($(".shop_shul")).val(i)
						$(this).prev().css("background","url(images/sr_31.png) top left")
					}
					

				})
				
				//加入购物车
				$(".gwc").click(function(){
					//1 将单击的某个商品的多个信息 存入到 cookie  定义一个 json对象，将这些信息 通过json对象存入到cookie
					//$(this).parent().find(".tel4").html();
					var d = {
						"id":$(this).prev().data("id"),
						"name":$(this).prev().data("name"),
						"price":$(this).prev().data("price"),
						"src":$(this).prev().data("src"),
						"count":parseInt( $(".shop_shul").val())
					};
					//2  将多个商品存入到cookie中，需要一个数组
					var arr = [];
					var flag = true;//开关变量的值为 true  表示 当前点击的商品在cookie中 不存在
					//3 再次点击按钮 时，数组和cookie中的信息都被清空   我们要解决的问题：  将之前存到cookie中的数据 先取出来  
					var oldInfo = getCookie("shoplist");
					if(oldInfo.length!=0){
						//如果cookie中 有数据   先将这些数据存入数组中  
						arr = oldInfo;						
						//遍历arr数组  判断当前点击的商品id  是否在cookie中存在
						for(var i=0;i<arr.length;i++){
							if(d.id == arr[i].id){
								//说明cookie中已存在该商品   直接将商品的count++
								arr[i].count++;
								flag = false;//说明当前点击的商品 在cookie中已存在
								break;
							}
						}
					}							
					if(flag){	
						arr.push(d);//如果 执行  说明当前点击的商品在cookie中 不存在  
					}
					//将商品信息存入cookie中
					setCookie("shoplist",JSON.stringify(arr),0);
					alert("该商品已成功放入购物车");
					//console.log(document.cookie)
				})
			}
		});
	}) 
