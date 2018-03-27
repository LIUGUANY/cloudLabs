/**
 * Created by Acer on 2017/6/26.
 */
$(function(){
	//login-banner
	//获取最外层div,轮播图片，切换按钮，初始化
	var oBox = document.getElementById("banner-box"),
		oUl = oBox.getElementsByTagName("ul"),
		aImg = oUl[0].getElementsByTagName("li"),
		aNum = oUl[1].getElementsByTagName("li"),
		hTimer = timer = play = null,
		index = i = 0;
	//切换按钮
	for(i=0;i<aNum.length;i++){
		aNum[i].index = i;
		aNum[i].onmouseover = function(){
			show(this.index);
		}
	}
	//鼠标经过，停止播放
	oBox.onmouseover = function(){
		clearInterval(play);
	}
	//鼠标离开，继续播放
	oBox.onmouseout = function(){
		autoPlay();
	}
	//轮播
	function autoPlay(){
		play = setInterval(function(){
			index++;
			index>=aImg.length&&(index=0);
			show(index);
		},5000);
	}
	autoPlay();
	//播放当前图片，淡入淡出
	function show(index){
		var alpha = 0;
		//初始化图片
		for(i=0;i<aImg.length;i++){
			aImg[i].style.opacity = 0;
		}
		//初始化按钮
		for(i=0;i<aNum.length;i++){
			aNum[i].className = "";
		}
		aNum[index].className="current";
		clearInterval(timer);
		//淡入淡出
		timer = setInterval(function(){
			alpha+=4;
			alpha>100&&(alpha=100);
			aImg[index].style.opacity = alpha/100;
			alpha==100&&(clearInterval(timer));
		},15)
	}
	//内容区域自适应
	function h(){
		var $main = $(".login-bg"),
			$h = $(document).height()-210;
		$main.height($h);
		$main.css("padding-top",($h-381)/2);
		return false;
	}
	h();
})