window.addEventListener("resize",function(){
                document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/10+"px"
})
document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/10+"px"

$(document).scroll(function(){
	if($(document).scrollTop()==0){
		
		$('#top').css({'backgroundColor':''});
	}else{
		//f5f4f9
		$('#top').css({'background-color':'#000','opaicity':'0'})
		$('#top').animate({"opacity":'0.8'})
	}
})

//轮播图：
$.ajax({
	type:"get",
	url:"http://shop.m2.yinyuetai.com/api/carousel/indexList.json?equipmentName=WAP&num=5",//http://127.0.0.1/musucshop/json/index_2.json
	async:true,
	success:function(data){
		var str='';
		for(var i in data.data){
			str+='<div class="swiper-slide"><img src="'+data.data[i].img+'"></div>'
		}
		$("#banner .swiper-wrapper").html(str)
		new Swiper("#banner .swiper-container",{
			direction: 'horizontal',
			loop:true,
			// 如果需要分页器
			pagination: '#banner .swiper-pagination',
			autoplay:2000,
			autoplayDisableOnInteraction : false,
		})
	}
});
//新品首发：
$.ajax({
	type:"get",
	url:"http://shop.m2.yinyuetai.com/api/goods/findNewGoods.json?num=4",
	async:true,
	success:function(data){
		var num = 0;
		var str = '';
		for(var i in data.data.goodsMap){
			str+='<dl style="width:94*@r;">';
			str+='<dt style="background:url('+data.data.goodsMap.album[num].headImg+') no-repeat;background-size:100%;"></dt><dd>'+data.data.goodsMap.album[num].title+'</dd></dl>';
			num++;
			
		}
		$('.prod1 .new_prod').html(str);

	}
})


//获取商品列表信息保存待整理：
$.ajax({
	type:"get",
	url:"http://shop.m2.yinyuetai.com/api/artist/indexList.json?equipmentName=WAP&num=10",//http://127.0.0.1/musucshop/json/index_4.json
	async:true,
	success:function(data){
		var str = '';
		
		for(var i in data.data){
			if(data.data[i].position){
				
				str+='<div class="swiper-slide" data-id="'+data.data[i].position+'"><img src="'+data.data[i].img+'" style=""></div>'
				
				
			}
			
		}
		$(".artist .nav .swiper-wrapper").html(str)
		new Swiper(".artist .nav .swiper-container",{
			direction: 'horizontal',
			loop:true,
			
			centeredSlides : true,
			slidesPerView : 5,
			
		})
		
		var cont_tit = '';
		var str2 = '';
		for(var i in data.data[0].goodsModelList){
			str2+='<dl style=""><dt style="background:url('+data.data[0].goodsModelList[i].headImg+') no-repeat center center; background-size:100%;"></dt><dd>'+data.data[0].goodsModelList[i].title+'</dd></dl>'
			
			
		}
		$('.artist .list').html(str2)
	}
})
$('.artist .nav .swiper-container').on('touchend',function(){
	var num = $('.artist .nav .swiper-container .swiper-slide-active').attr('data-id');//pos2
	switch(num){
		case '1':getartic(1,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=36176&artistName=%E9%B9%BF%E6%99%97');break;
		case '2':getartic(2,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=29570&artistName=%E9%98%B2%E5%BC%B9%E5%B0%91%E5%B9%B4%E5%9B%A2');break;
		case '3':getartic(3,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=12&artistName=BigBang');break;
		case '4':getartic(4,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=30&artistName=%E5%91%A8%E7%AC%94%E7%95%85');break;
		case '5':getartic(5,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=33018&artistName=GOT7');break;
		case '6':getartic(6,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=38959&artistName=TWICE');break;
		case '7':getartic(7,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=14484&artistName=A+Pink');break;
		case '8':getartic(8,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=24334&artistName=VIXX');break;
		case '9':getartic(9,'http://shop.m2.yinyuetai.com/api/goods/indexList.json?num=6&artistId=38169&artistName=%E9%BB%84%E5%AD%90%E9%9F%AC');break;
	}
})
function getartic(dat,d_url){
	if(dat){
				$.ajax({
					type:"get",
					url:d_url,
					async:true,
					success:function(data){
						$('.artist .cont_tit').html(data.data[0].artistName);
						
						var str2 = '';
						for(var i in data.data){
							str2+='<dl style=""><dt style="background:url('+data.data[i].headImg+') no-repeat center center; width:94px;height:94px;background-size:100%;display:block;"></dt><dd>'+data.data[i].title+'</dd></dl>'
							
						}
						$('.artist .list').html(str2)
						}
				});
		
	}
	
}

//获取主题活动信息
$.ajax({
	type:"get",
	url:"http://shop.m2.yinyuetai.com/api/activity/indexList.json",
	async:true,
	success:function(data){
		var str = '';
		for(var i in data.data){
			str+='<div class="theme">'
			str+='<div style="width:100%;height:164px;background:url('+data.data[i].headImg+') no-repeat;background-size:100%;"></div>'
			str+='<div class="theme_decript"><p class="active_name">'+data.data[i].name+'</p><p>'+data.data[i].description+'</p></div>'
			str+='</div>'
		}
		//str = eval(str)
		$('.theme_acti .active_cont').append(str)
	}
})
