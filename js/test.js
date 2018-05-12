//window.onload = function(){
//	var para = document.createElement("p");
//	var txt = document.createTextNode("hello ");
//	var txt2 = document.createElement("em");
//	var txt1 = document.createTextNode("world");
//	para.appendChild(txt);
//	para.appendChild(txt2);
//	txt2.appendChild(txt1)
//
//	var div = document.getElementById("textpla");
//	div.appendChild(para);
//}

var imgplace = document.createElement("img");
imgplace.setAttribute("id","imgplace");
imgplace.setAttribute("alt","相册");
imgplace.setAttribute("src","");
var description = document.createElement("p");
description.setAttribute("id","description");
var destxt = document.createTextNode("请选择一张图片");
description.appendChild(destxt);
document.body.appendChild(imgplace);
document.body.appendChild(description);
