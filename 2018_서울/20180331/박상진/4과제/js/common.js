$(document)
.on("click","a[href='#']",function(){
	return false;
})
.on("change",".allCheck",function(){
	var _this = this;
	$("input[type=checkbox]").each(function(){
		this.checked = _this.checked;
	})
})