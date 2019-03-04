function ChangeToLeft () {
	var div1=document.getElementById("picScroll");
	var span1 = document.getElementById('picScroll1');//var Pscrollw = Pscroll.childNodes[1];
	div1.scrollLeft++;
	if(div1.scrollLeft>span1.offseWidth){
		div1.scrollLeft=0;
	}
}
function Fun(){
	var div1 = document.getElementById("picScroll");
	div1.scrollLeft=0;
	MyChange=setInterval("ChangeToLeft()",10);

}
// var MyChange;
// window.onload = Fun;
