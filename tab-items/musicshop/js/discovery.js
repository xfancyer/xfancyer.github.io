themeData();
function themeData(){
	$.ajax({
		url:"http://shop.m2.yinyuetai.com/api/activity/list.json",
		success:function(glist){
			var data = glist.data.list;
			var str = "";
			var str1 = "";
			for(var i in data){
				str += '<section class="theme'+i+'">'+
							'<div class="picShow">'+
								'<img class="pic" src="'+data[i].activityModel.headImg+'" alt="" />'+
							'</div>'+
							'<div class="picTit'+i+'">'+
								'<p class="p1">'+data[i].activityModel.name+'</p>'+
								'<p class="p2">'+
									'<span class="p2-title">'+data[i].activityModel.description+'?'+data[i].activityModel.id+'</span>'+
									'<span class="p2-con">查看>></span>'+
								'</p>'+
							'</div>'+
							'<div class="innerBox">'+
								'<div class="shop-list'+i+'">'+
								
								'</div>'+
							'</div>'
						'</section>';
				for(var j=0;j<data[i].goodsModels.length;j++){
					str1 += '<a href="xinagqing.html?goodsId='+data[i].goodsModels[j].id+'">'+
								'<div class="good">'+
									'<div class="list-pic">'+
										'<img src="'+data[i].goodsModels[j].headImg+'"/>'+
									'</div>'+
									'<div class="list-des">'+
										data[i].goodsModels[j].title+
									'</div>'+
								'</div>'+
							'</a>';
				}
				str1 += '<div class="good-more">查看更多></dl>'
				$("#box").append(str);
				$(".shop-list"+i).append(str1);
				str1 = "";
				str = "";
				//点击图片跳转
				$(".picShow").click(function(){
					var strId = $(this).parent().find(".p2-title").html();
					var id = strId.split("?")[1];
					location.href = "classify.html?id="+id;
				})
			}
			
		}
	});
}

function starData(url_json){
	$.ajax({
		url:url_json,
		success:function(shoplist){
			var data = shoplist.data;
			var str = "";
			for(var i in data){
				str +=  '<a href="starSelf.html?name='+data[i].name+'&goodsId='+data[i].id+'">'+
							'<div class="artistitem">'+
								'<img src="'+data[i].img+'" alt="" />'+
								'<div class="artist-pro">'+
									'<p>'+data[i].name+'</p>'+
									'<p class="artist-num" >'+
										'<span>商品数量:</span>'+
										'<span>'+data[i].productNum+'</span>'+
									'</p>'+
								'</div>'+
							'</div>'
						'</a>'
			}
			$(".artist").append(str);
		}
	});
}	


function starData0(url_json){
	$.ajax({
		url:url_json,
		success:function(shoplist){
			var data = shoplist.data;
		var str = "";
		for(var i in data){
			str +=  '<div>'+
						'<div class="list-title">'+
							'<div class="tit1">'+
								'<div class="tit2">'+
									'<div class="tit3">'+i+'<div>'+
								'</div>'+
							'<div>'+
						'</div>'+
					'</div>'
			$(".artist").append(str);
			str="";
			for(var k in data[i]){
				str +=  '<a href="starSelf.html?name='+data[i][k].title+'&goodsId='+data[i][k].artistId+'">'+
							'<div class="artistitem">'+
								'<img src="'+data[i][k].artistHeadImg+'" alt="" />'+
								'<div class="artist-pro">'+
									'<p>'+data[i][k].title+'</p>'+
									'<p class="artist-num" >'+
										'<span>商品数量:</span>'+
										'<span>'+data[i][k].productNum+'</span>'+
									'</p>'+
								'</div>'+
							'</div>'+
						'</a>'
			}
			$(".artist").append(str);
			str=""
			}
		}
	});
}
		
function starData1(url_json){
	$.ajax({
		url:url_json,
		success:function(shoplist){
			var data = shoplist.data;
			var str = "";
			for(var i in data){
				for(var k in data[i]){
					str =  '<a href="starSelf.html?name='+data[i][k].title+'&id='+data[i][k].artistId+'">'+
							'<div class="artistitem">'+
								'<img src="'+data[i][k].artistHeadImg+'" alt="" />'+
								'<div class="artist-pro">'+
									'<p>'+data[i][k].title+'</p>'+
									'<p class="artist-num" >'+
										'<span>商品数量:</span>'+
										'<span>'+data[i][k].productNum+'</span>'+
									'</p>'+
								'</div>'+
							'</div>'+
						'</a>'
						
				}
				
			}$(".artist1").append(str);
				str=""
		}
	});
}
		
		
$(".headtitle").on("click","span",function(){
	$(this).addClass("bgP")
		   .siblings().removeClass("bgP");
	if($(this).index()==0){
		$("#box").html("");
		themeData();
		$(".theme-page").show();
		$(".star-page").hide();
	}else{
		$(".artist").html("");
		starData("http://shop.m2.yinyuetai.com/api/artist/hot.json?number=20");
		$(".theme-page").hide();
		$(".star-page").show();
		$(".artistbanner").on("click","span",function(){
			$(".artist").html("");
			$(this).addClass("colP")
				   .siblings().removeClass("colP");
			if( $(this).index() == 0 ){
				starData("http://shop.m2.yinyuetai.com/api/artist/hot.json?number=20");
			}else if( $(this).index() == 1 ){
				starData0("http://shop.m2.yinyuetai.com/api/search/artist.json");
			}else{
				starData0("http://shop.m2.yinyuetai.com/api/search/artist.json?countryId="+$(this).data("id"));
			}
		})
	}
})


$("#btn").focus(function(){
	$(".show-info").hide();
	$(".nothing").hide();
	$("#cancel").show();
	$("#search").show();
	$("#cancel").click(function(){
		$("#btn").val("");
		$(".show-info").show();
		$(".searchResult").hide();
		$("#cancel").hide();
		$("#search").hide();
	})
	$("#search").click(function(){
		if($("#btn").val() == ""){
			$(".nothing").show();
		}else{
			var name = $("#btn").val();
			starData1("http://shop.m2.yinyuetai.com/api/search/artist.json?name="+name)
			$(".nothing").hide();
			$(".artist1").html("")  
			$(".searchResult").show();
		}
	})
})



$('#more').on('click',function(ev){
	ev.stopPropagation()
	$('.top-nav').show();
})

$(document).on("click",function(ev){
	ev.stopPropagation()
	$("header .top-nav").css("display","none")	
})