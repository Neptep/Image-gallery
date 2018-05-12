function prepareImgPlace (){
	if(!document.createElement)return false;
	if(!document.createTextNode)return false;
	if(!document.appendChild)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imggallery"))return false;
	var imgplace = document.createElement("img");
	imgplace.setAttribute("id","imgplace");
	imgplace.setAttribute("alt","相册");
	imgplace.setAttribute("src","");
	imgplace.setAttribute("width","800");
	imgplace.setAttribute("height","480");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var destxt = document.createTextNode("请选择一张图片");
	description.appendChild(destxt);
	var gallery = document.getElementById("imggallery");

	insertAfter(imgplace,gallery);
	insertAfter(description,imgplace);
}
addLoadEvent(prepareImgPlace);

