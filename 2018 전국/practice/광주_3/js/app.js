function loadFunction(){
	$("head").append('\
		<style>\
		*{margin:0;padding:0;}\
		.full .box{width:30px;background:#000;margin:20px;margin-top:calc(50vh - 150px);transition:.3s;}\
		.full .box.load1{height:300px;}\
		.full .box.load2{height:150px;}\
		@keyframes load1{\
			0%{height:300px;}\
			25%{height:600px;}\
			50%{height:300px;}\
			75%{height:600px;}\
			100%{height:300px;}\
			}\
		@keyframes load2{\
			0%{height:300px;}\
			25%{height:100px;}\
			50%{height:300px;}\
			75%{height:100px;}\
			100%{height:300px;}\
			}\
		</style>\
		')
}
function loadAnimation(){
	$("body").append('\
		<div class="full">\
			<div class="box load1"></div>\
			<div class="box load2"></div>\
			<div class="box load1"></div>\
			<div class="box load2"></div>\
			<div class="box load1"></div>\
		</div>\
		')
}
$(window)
.load(loadFucntion);