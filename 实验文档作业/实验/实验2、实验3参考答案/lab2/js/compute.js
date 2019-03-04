//定义全局变量
var str = '';
//数据在结果框中显示函数
function showData(which){
	//将用户点击的数据存入字符串中
	str += which.value;
	//将字符串中的数据显示在结果框中
	document.getElementById("result").innerHTML = str;			
}	
//当用户点击等号时，结果框中显示运算结果
function calculate(){
	//当用户点击等号时，被运算数在结果框中清除
	document.getElementById("result").innerHTML = '';
	//计算用户点击的数据
	var resultNum = eval(str);			
	//如果计算结果有小数的话，小数点后保留两位小数
	//使用indexOf方法的数据需要是字符串型
	resultNum += '';
	//判断结果值是不是小数，如果是的话，小数点后，保存两位小数
	if (resultNum.indexOf(".")>0)
	{
		var a = resultNum.indexOf(".");				
		resultNum = resultNum.substring(0,a+3);
	}
	//将计算结果显示在结果框中
	document.getElementById("result").innerHTML = resultNum;
	//将计算结果保存在字符串中
	str = resultNum;			
}
//当用户点击C时，清除掉字符串中存储的数据和结果框中的数据
function clearData(){
	str = '';
	document.getElementById("result").innerHTML = 0;		
}
//事件响应函数
function loadEvent(){			
	var buttons = document.getElementsByTagName("button");
	for (var i=0;i<buttons.length;i++)
	{
		buttons[i].onclick = function (){
			diverseFun(this);	
		};				
	}
}
//当用户点击不同内容时，事件响应函数不同
function diverseFun(which){
			switch(which.value)
			{
				case '=':
					calculate();
					break;
				case 'C':
					clearData();
					break;
				default:
					showData(which);	
			}
		}
window.onload = function (){
	loadEvent();
};