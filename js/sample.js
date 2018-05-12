
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
//	var current_date = new Date();
//	var today = current_date.getFullYear();
//	alert(today)
function showpic(whichpic){
	if(!document.getElementById("imgplace"))return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("imgplace");
	placeholder.setAttribute("src",source);

	if(document.getElementById("description")){
		var getTitle = whichpic.getAttribute("title");
		var description = document.getElementById("description");
		description.firstChild.nodeValue = getTitle;
	}
	return false;
}
function prepareGallery(){
	if(!document.getElementsByTagName || !document.getElementById)return false;
	if(!document.getElementById("imggallery"))return false;
	var gallery = document.getElementById("imggallery");
	var links = gallery.getElementsByTagName("a");
	for (var i=0;i < links.length; i++) {
		links[i].onclick = function(){
			return showpic(this);
		}	
	}
	
}
function countBodyChild(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
	
}
addLoadEvent(prepareGallery);
//window.onload = countBodyChild;