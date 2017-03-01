//console.log(location.href)
//http://127.0.0.1:8020/liaoyazhi/xiangqing.html?id=shop01&cname=classify001
	var url = location.href;
	var arr = url.split('?');
	var arr = arr[1].split('&');
	var id = arr[0].split('=')[1];
	var cname =arr[1].split('=')[1]; 
	
	$.ajax({
		type:"get",
		url:"js/data.json",
		async:true,
		success:function(glist){
			//alert(glist[cname].list)
			for(var i=0;i<glist[cname].list.length;i++){
				info = glist[cname].list[i];
				//用已知的id（地址栏传过来的id）  和 json文件中的 某一个商品id做比较，如果满足条件，说明 找到了对应的商品
				if( id == info.id ){
					var str3='<span class="nullspan" style="display:none;" data-id="'+id+'" data-name="'+info.name+'" data-src="'+info.src+'" data-mar="'+info.mar+'" data-price="'+info.price+'"></span>';
					//console.log(info.mar1);
					$(".xuanzhe").append(str3);
					$(".biaoti5").html(info.name);
					$(".miaoshu").html(info.jie);
					$(".yuanjia").html(info.mar);
					$(".chou b").html(info.price);
					for(var j=0;j<info.srcq.length;j++){
						str = '<img src="img/'+info.srcq[j]+'" alt=""/>';
						str1 = '<img src="img/'+info.srcq[j]+'" alt=""  class="bigImage"/>';
						str2='<li><a href="javascript:;"><img src="img/'+info.srcq[j]+'" alt=""/></a></li>'
						str4='<img src="img/'+info.srcq[j]+'" alt=""/>'
						$(".small").append(str);
						$("#big").append(str1);
						$("#bottom").append(str2);
						$(".x_img").append(str4)
						//break;
					}
				}
			}
			
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
				$(this).find("em").toggleClass("onbei").end().siblings().find().removeClass();
			})
			
			$(".small").find("img:first").css("z-index",1);
			$("#big").find("img:first").css("z-index",1);
			$("#bottom").find("li:first").css("border","2px solid #c33");
			
			var i=1;
				//加减操作
				$(".btn4").click(function(){
					
					i++
					if(i>99){
						alert("该商品只能买99件")
					}else{
						$(this).parent().find($(".shop_shul")).val(i)
					}
					

				})
				
				$(".btn5").click(function(){
					
					i--
					if(i<1){
						alert("至少有一件商品")
					}else{
						$(this).parent().find($(".shop_shul")).val(i)		
					}
					

				})
			
			//加入购物车
				$(".jiaru1").click(function(){
					//1 将单击的某个商品的多个信息 存入到 cookie  定义一个 json对象，将这些信息 通过json对象存入到cookie
					//$(this).parent().find(".tel4").html();
					var d = {
						"id":$(this).nextAll(".nullspan").data("id"),
						"name":$(this).nextAll(".nullspan").data("name"),
						"price":$(this).nextAll(".nullspan").data("price"),
						"src":$(this).nextAll(".nullspan").data("src"),
						//"mar1":$(this).nextAll(".nullspan").data("mar1"),
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
					
					if(confirm('如果去购物车结算请按确定，继续购物请按取消')){
						location.href="cart.html"
					}else{
						location.href="list.html"
					}
					
					//alert("该商品已成功放入购物车");
					console.log(document.cookie)
				})
			
						
		}
		
		
		
	});
	
	



