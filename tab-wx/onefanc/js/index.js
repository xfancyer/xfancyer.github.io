window.addEventListener("resize",function(){
                document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/16+"px"
})
document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/16+"px"

var mySwiper = new Swiper('.swiper-container', {
	//autoplay: 2000,
	loop:true,
	//autoplayDisableOnInteraction:false,
	direction : 'vertical',
	
	//动画效果
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
	
})


//控制音乐的播放
var mus = document.getElementById('music')
var aud = document.getElementById("aud");
mus.onclick =function(){
	console.log(aud.paused)
	if(aud.paused){
		aud.play()		
		mus.style.animationPlayState = 'running'
	}else{
		aud.pause();
		mus.style.animationPlayState = 'paused'
	}
}


var timer;//第二页定时器
var timer_p3;//第三页定时器
$('.swiper-container').on('touchend','.swiper-slide',function(e){
	$('.swiper-slide').each(function(){
		//console.log($(this).attr('class'))
		if($(this).hasClass('swiper-slide page2 swiper-slide-active')){
			if(timer){
				clearInterval(timer)
			}
			getwords('cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。');
			
			return;
		}else if($(this).hasClass('swiper-slide page4 swiper-slide-active')){
			
		
		}
	})
	
})

function getwords(data){


	var str = data;
	
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

/*var lu = 1;
$('.qb .bg').on('webkitAnimationEnd',function(){
	if(lu){
		$('.icon-lu').css({"display":"block"});
		//$('').appendTo('.page1 .qb');
		lu = 0;
	}
	
})*/


new IScroll("#wrapper",{hScrollbar:false, vScrollbar:true})
