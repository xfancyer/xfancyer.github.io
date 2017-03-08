var strHtml = location.href;
var proId = strHtml.split("?")[1];
Data();
function Data(){
	$.ajax({
		url:"http://shop.m2.yinyuetai.com/api/activity/view.json?"+proId,
		success:function(glist){
			var data = glist.data;
			str += '<div class="themeClassify-i">'+data.activityModel.name+'</div>'
			var str = "";
			var str0 = "";
			
			$(".headtitle").find("span").html(data.activityModel.name);
			$(".p2-title").html(data.activityModel.description);
			$(".pic").attr("src",data.activityModel.headImg)
			

			for(var i in data.activityCategoryPageModels){
				str += '<div class="themeClassify-i">'+data.activityCategoryPageModels[i].activityCategoryModel.name+'</div>'
			}
			$(".themeClassify").append(str)
			
			for(var j in data.activityCategoryPageModels[0].goodsModels){
				str0 +=' <div class="listdetail">'+
						'<a href="xinagqing.html?goodsId='+ data.activityCategoryPageModels[0].goodsModels[j].id +'">'+
							'<img src="'+data.activityCategoryPageModels[0].goodsModels[j].headImg+'" alt="" />'+
							'<p>'+data.activityCategoryPageModels[0].goodsModels[j].title+'</p>'+
						'</a>'+
					'</div>'
			}
			$(".list").append(str0)
			
			
			$(".themeClassify-i").eq(0).addClass("borP");
			
			$(".themeClassify-i").click(function(){
				$(this).addClass("borP")
					   .siblings().removeClass("borP");
				$(".list").html("");
				for(var j in data.activityCategoryPageModels[$(this).index()].goodsModels){
					str0 +=' <div class="listdetail">'+
							'<a href="xinagqing.html?goodsId='+ data.activityCategoryPageModels[$(this).index()].goodsModels[j].id +'">'+
								'<img src="'+data.activityCategoryPageModels[$(this).index()].goodsModels[j].headImg+'" alt="" />'+
								'<p>'+data.activityCategoryPageModels[$(this).index()].goodsModels[j].title+'</p>'+
							'</a>'+
						'</div>'
				}
				$(".list").append(str0);
				str0 = "";
			})
		}
	});
}