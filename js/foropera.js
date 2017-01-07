var timebgein = (new Date()).getTime();
function $(obj) {
	return document.getElementById(obj);
}
function canvas(id) {//专用动态专立canvas的函数
	var _canvas = document.createElement('canvas');
	_canvas.id = id;
	_canvas.width = window.innerWidth;
	_canvas.height = window.innerHeight;
	return _canvas;
}
function canvas_rect(id) {
	var _canvas = document.createElement('canvas');
	_canvas.id = id;
	if (window.innerWidth > window.innerHeight) {
		_canvas.width = window.innerHeight;
		_canvas.height = window.innerHeight;
		_canvas.style.top = "0px";
		_canvas.style.position = "absolute";
		_canvas.style.left = ((window.innerWidth - window.innerHeight) / 2) + "px";
	}
	else {
		_canvas.width = window.innerWidth;
		_canvas.height = window.innerWidth;
		_canvas.style.top = ((window.innerHeight - window.innerWidth) / 2) + "px";
		_canvas.style.position = "absolute";
		_canvas.style.left = "0px";
	}
	return _canvas;
}
var ww=window.innerWidth,wh=window.innerHeight;

