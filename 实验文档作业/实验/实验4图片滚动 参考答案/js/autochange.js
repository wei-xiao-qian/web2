window.onload=function(){

	var speed = 50; //设置图片滑动速度为10毫秒
	picScroll = document.getElementById("picScroll");//获取最外面的容器
	picScroll1 = document.getElementById("picScroll1");//获取存放内容的容器
	picscroll2 = document.getElementById("picScroll2");//获取临时存放内容的容器

	picscroll2.innerHTML = picScroll1.innerHTML;//将容器的内容填到容器2

	var ID=setInterval(changeToLeft,speed);//每speed毫秒，向左挪动一下

	//2、鼠标经过时暂停图片滚动
	picScroll.onmouseover=function() {
		clearInterval(ID);
	}
	//3、鼠标离开后图片继续滚动
	picScroll.onmouseout=function() {
		ID=setInterval(changeToLeft,speed);
	}


};
//1、图片向左滚动函数实现
function changeToLeft(){
	
	if(picScroll.scrollLeft >= (picScroll1.offsetWidth)){
		picScroll.scrollLeft = 0;
	}
	else{
		picScroll.scrollLeft += 1;
	}
}