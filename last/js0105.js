window.onload = function(){
	var liNodes = document.getElementsByTagName("li");
	for (var i=0; i<liNodes.length; i++)
	{
		liNodes[i].onmouseover = function(){
			this.className = "subMenuShow";
		}
		liNodes[i].onmouseout = function(){
			this.className = "";
		}
	}

	setInterval('init()');

	var pic=document.getElementById("pic601");
	var divTip1=document.getElementById("divTip1");
	pic.onmousemove=function(e){
		divTip1.style.display="block";
		divTip1.style.left=e.clientX+5+"px";
		divTip1.style.top=e.clientY+5+"px";
	}
	pic.onmouseout=function(){
		divTip1.style.display="none";
	}
	



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


function init() {      
	var date = new Date();      
	var year = date.getFullYear();     
	var month = date.getMonth()+1;     
	if(month<10)
	    month="0"+month;     
	var day = date.getDate();     
	if(day<10)
	    day="0"+day;      
	var hour = date.getHours();     
	if(hour<10)
	    hour="0"+hour;      
	var minute = date.getMinutes();     
	if(minute<10)
	   minute="0"+minute;     
	var second = date.getSeconds();     
	    if(second<10)
	      	second="0"+second;     
	var dateTime = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;     
	document.getElementById("dateTimes").value= dateTime;
}