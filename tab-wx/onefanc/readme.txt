微信场景练习

知识点：
1. rem布局 
2. 使用 swiper 滑动插件
3. js、jq的应用
4. iconfont的应用
5. swiper.animate的使用



1· html的fontsize 20px 320px 
	window.addEventListener("resize",function(){
	                document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/16+"px"
	})
	document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/16+"px"



2· jq逐字显示：

	function getwords(data){

		var str = data;//获取选取的数据
		var noww = 0;
		
		var strall ;
		var str_len = str.length;
		$('.change_words').html('')
		timer = setInterval(function(){
			var word = str.slice(noww,noww+1);
			noww++;
			if(noww>=str_len){
				$('<div class="p2_color">了解更多</div>').appendTo('.change_words')
				clearInterval(timer);
				return;
			}
			
			strall = $('.change_words').html()+''+word;
			$('.change_words').html(strall)
			
		},100)
	}
