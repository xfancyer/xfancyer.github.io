window.addEventListener("resize",function(){
                document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/10+"px"
})
document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/10+"px"

//
var info_url = location.href;
//console.log(info_url);
var url_id = info_url.split('?')
url_id = url_id[1];
//console.log(url_id)
$.ajax({
	dataType:"jsonp",
	url:"http://shop.m.yinyuetai.com/details?"+url_id+"&refUrl=",
	success:function(data){
		console.log(1)
		
		console.log(data.goodsDetail.bigHeadImg)//顶部图片
		console.log(data.goodsDetail.description)//描述
		
		//var str = '<div class="headimg" src="'+data.goodsDetail.bigHeadImg+'"></div>'
		console.log(data.goodsDetail.descImages)
		var nav_l = data.goodsDetail.descImages.length;//轮播图数量
		var str='';
		for(var i =0;i<nav_l;i++){
			//console.log(data.data[i].img)
			//console.log(data.goodsDetail.descImages[i].thumbUrl)
			str+='<div class="swiper-slide"><img src="'+data.goodsDetail.descImages[i].thumbUrl+'"></div>'
		}
		$(".newgoodscont .top_nav .swiper-wrapper").html(str)
		new Swiper(".newgoodscont .top_nav .swiper-container",{
			direction: 'horizontal',
			loop:true,
			// 如果需要分页器
			pagination:'.newgoodscont .top_nav .swiper-pagination',
			//autoplay:2000,
			autoplayDisableOnInteraction : false,
		})
		$('.shop_info1 .price').html('￥'+data.goodsDetail.price)
		$('.shop_info1 .title').html(data.goodsDetail.title)
		
		//console.log($('.swiper-slide').find('img').attr('src'))
		gw_img = data.goodsDetail.bigHeadImg
		gw_tit = data.goodsDetail.description
		gw_pri = data.goodsDetail.price
	}
})

$('.top_nav .icon-sangedian').on('click',function(ev){
	
	ev.stopPropagation()
	$('header .top-nav').show();
})

$(document).on("click",function(ev){
	ev.stopPropagation()
	$("header .top-nav").css("display","none")
	
	
})
$.ajax({
	type:"get",
	url:"http://shop.m.yinyuetai.com/goods-desc?"+url_id,
	async:true,
	dataType:"jsonp",
	success:function(data){
		
		//console.log(data.info)
		var str = data.info;
		$('.goods_page .page0').html(str)
	}
});
$('.goods_detai').on('click','li',function(){
//	console.log($(this).index())
	var page_id = $(this).index()
	$(this).attr('class','active').siblings().attr('class','')
	
	$('.goods_page').find('.page'+page_id).show().siblings().hide();
	//console.log($('.goods_page').children(page_id))
	//$('.goods_page').children(page_id).show().siblings().hide();
})

//分享 
$('.share_shade .close').click(function(){
	$('.share_shade').hide();
})
$('.icon-iconfontlianjie').click(function(){
	$('.share_shade').show();
})


//购物车阴影显示
$('.shop_selc .more_gw').on('click',function(){
	$('#shade-box').show();
	$('#gwc-box').show();
	
})
$('#gwc-box .gw_info .close').on('click',function(){
	$('#shade-box').hide();
	//console.log($('#gwc-box').css('height'))
	
	$('#gwc-box').hide();
})

//购物车
$.ajax({
	type:"get",
	url:"http://shop.m.yinyuetai.com/details?"+url_id,
	async:true,
	dataType:"jsonp",
	success:function(data){
		console.log(data.goodsDetail)
		
		var img = data.goodsDetail.bigHeadImg;
		
		
		$('#gwc-box .gwc_t .img').html('<img src="'+data.goodsDetail.bigHeadImg+'">')
		$('#gwc-box .gwc_t .price').html('￥'+data.goodsDetail.price)
		
		console.log(data.goodsDetail.propFieldModels)
		
		var fields_num = data.goodsDetail.propFieldModels.length;
		var str1 = '';
		//通过遍历json数据，添加相应的产品信息
		//em为不同商品可能的差异型号问题
		//<em style="visible=hidden;height:0;"data-'+data.goodsDetail.propFieldModels[i].name+'='+data.goodsDetail.propFieldModels[i].propPriceModels[j].name+';></em>
		
		for(var i=0;i<fields_num;i++){
			var fields_info = data.goodsDetail.propFieldModels[i].name
			
			var models_num = data.goodsDetail.propFieldModels[i].propPriceModels.length;
			for(var j =0;j<models_num;j++){
					
				str1+='<a data-id='+data.goodsDetail.propFieldModels[i].propPriceModels[j].id+';  data-name='+data.goodsDetail.propFieldModels[i].propPriceModels[j].name+';>'+data.goodsDetail.propFieldModels[i].propPriceModels[j].name+'</a>'
			}
			$('<div class="gw_prop"><p class="tit">'+fields_info+'</p>'+str1+'</div>').appendTo('#gwc-box .gw_info .xinghao');
			//console.log(eval(data.goodsDetail.propFieldModels[i].propPriceModels[0]));
		}
		
		
	}
});


var gw_img;//图片
var buy_num=1;//购物数量
var gw_pri;//价格
var gw_tit;//标题
var gw_id;//id

var gw_xinghao;//型号
var gw_json;
var gw_name='';


//加入购物车
$('#gwc-box .gw_info .xinghao').on('click','a',function(){
	console.log($(this).text())
	$(this).attr({"class":"active"}).siblings('a').attr({"class":''})
	//gw_xinghao = $(this).text()
})
$('#gwc-box .gw_info .gw_num1').on('click','i',function(){
	buy_num = $('#gwc-box .gw_info .gw_num1 .buy_num').html();
	if($(this).is('.gw_bt1')){
		if(buy_num==1){
			alert('购买数量不能小于1~')
			return;
		}else{
			buy_num--;
			$('#gwc-box .gw_info .gw_num1 .buy_num').html(buy_num)
		}
	}else{
		buy_num++;
		$('#gwc-box .gw_info .gw_num1 .buy_num').html(buy_num)
	}
})

var carts;
//购物车提交
$('footer .gw_div .gwc').click(function(){
	
	
	if($('#gwc-box .gw_info .xinghao a').length==0){
		setgwc();
		alert('已加入购物车~')
	}else{
		
		if($('#gwc-box .gw_info .xinghao a').hasClass('active')){
			
			
			setgwc();
		}else{
			$('#shade-box').show();
			$('#gwc-box').show();
		}
	}
})
$('footer .buy').click(function(){
	if($('#gwc-box .gw_info .xinghao a').length==0||$('#gwc-box .gw_info .xinghao a').hasClass('active')){
		alert('正在跳转支付页面')
	}else{
		$('#shade-box').show();
		$('#gwc-box').show();
	}
})

$('.gw_tagbox').click(function(){
	location.href = 'gwc.html'
})
var oldcarts=[];
var arr = [];
var bb = [];

//对购物车设置的封装函数
function setgwc(){
	//对可能出现的型号差异特殊处理：
	gw_name = '';
	gw_num = 1;
	for(var i=0;i<$('.xinghao .gw_prop').size();i++){
		gw_name+=$('.xinghao .gw_prop').eq(i).find('.tit').html()+'--'+$('.xinghao .gw_prop').eq(i).find('.active').html()+'&';
		
	}
	//alert(gw_name)
	gw_xinghao = $('#gwc-box .gw_info .xinghao .active').attr('data-name');
	gw_id = $('#gwc-box .gw_info .xinghao .active').attr('data-id');
		
		gw_json=  
		{
			"gw_id":gw_id,
			"gw_tit":gw_tit,
			"gw_img":gw_img,
			"gw_pri":gw_pri,
			"gw_num":buy_num,
			"gw_xinghao":'',
			"gw_name":gw_name			
		}
		console.log(gw_json)
		var flag = true;
		
		oldcarts = localStorage.getItem('carts');
		if(!oldcarts){
			localStorage.setItem('carts','')
		}

		alert(oldcarts)
		//if(oldcarts.length!=0){//如果有元素
		if(oldcarts){
			bb=oldcarts;
			arr = eval(bb); 
			
			for(var i=0;i<arr.length;i++){
				
				if(gw_json.gw_id == arr[i].gw_id){
					arr[i].num++;
					arr[i].gw_num=arr[i].gw_num+1;
					alert(arr[i].gw_num)
					flag = false;
					break;
					
				}
			}
		}
		
		if(flag){
			
			arr.push(gw_json)

		}
		localStorage.setItem('carts',JSON.stringify(arr));
		alert('已加入购物车')
}
