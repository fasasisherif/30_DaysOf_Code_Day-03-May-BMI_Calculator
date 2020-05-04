var answer = document.getElementsByClassName("scroll2");
var myresult = document.getElementsByClassName("result");
var close = document.getElementsByClassName("close");
var myreset = document.getElementsByClassName("myreset");

answer[0].addEventListener("click", myfunc1)
answer[0].addEventListener("click", myfunc2) 
myreset[0].addEventListener("click", myfunc3) 


function myfunc1(){	
var a = parseInt(document.getElementById("height").value);	

var b = parseInt(document.getElementById("weight").value);			
		
var bmi_read = (b)/((a/100)**2)	
myresult[0].innerHTML = bmi_read;	
	}
myfunc1()


function myfunc2(){
close[0].style.height="1220px";		
 }

function myfunc3(){
close[0].style.height="390px";		
 }

