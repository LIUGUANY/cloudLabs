/**
 * Created by Acer on 2017/6/8.
 */
window.onload = function(){
	/*index-left-nav*/
	var nav_value = $(".nav-item").find(".nav-hf");//获取所有的nav
	nav_value.on("click",function(){
		$(this).addClass("active").parent(".nav-item").siblings().find("a").removeClass("active");//点击效果
	});
	/*index高度自适应*/
	/*var left=document.getElementById('leftSide');
	var right=document.getElementById('rightSide');
	if(left.offsetHeight<=right.offsetHeight){
		$(left).css("min-height",right.offsetHeight+20);//左侧最小高度等于右侧内容区域高度
	}*/
};