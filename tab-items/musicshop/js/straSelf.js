var str = location.href;
var arr = str.split("?");
var name = arr[1].split("&")[0].split("=")[1];
var id = arr[1].split("=")[2];

dataList()
function dataList(){
	$.ajax({
		url:"http://shop.m2.yinyuetai.com/api/search/getListGoods.json?pageSize=10&pageNum=0&isArtist=true&keyWord="+name,
		success:function(list){
			$(".pic").attr("src",list.data.artist.mallImg)
			var str= "";
			var data = list.data.goodsPage.list;
			$(".num-count").html("共"+data.length+"件商品")
			$(".headtitle").find("span").html(list.data.keyword)
			for(var i in data){
				str += 	'<a href="xinagqing.html?goodsId='+data[i].id+'">'+
							'<div class="list">'+
								'<img src="'+data[i].bigHeadImg+'" alt="" />'+
								'<div class="list-detail">'+
									'<p>'+data[i].title+'</p>'+
									'<span class="nowPrice">'+
										'<span>￥</span><span>'+data[i].price+'</span>'+
									'</span>'+
									'<span class="oldPrice">'+
											'<span>￥</span><span>'+data[i].originalPrice+'</span>'+
									'</span>'+
								'</div>'+
							'</div>'
						'</a>'
			}
			$(".list-border").append(str);
			str = "";
		}
	});
}
