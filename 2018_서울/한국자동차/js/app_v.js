function siteLoad(){
	$("#gallery li").addClass("animation animationBefore")
	$('head').append('\
		<style>\
			#header{z-index:50;}\
			#header>div{transition:.7s;}\
			#header>div.active{margin-right:0px}\
			.animation{transition:1s;opacity:inherit;trasnform:inherit;}\
			.animation.animationBefore{transition:inherit;opacity:0;transform:translateX(100px);}\
			.gnb>div{position:absolute;bottom:20px}\
			.gnb>div a{font-size:15px;display:block;margin:10px 0;}\
			.gnb>div i{font-size:20px;margin-right:10px;}\
			.layer{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);z-index:100;justify-content:center;align-items:center;text-align:center;}\
			.layer .btn{width:130px;height:40px;line-height:40px;color:#fff;text-align:center;background:#09f;}\
			.layer .layer_close{position:absolute;right:50px;}\
			.layer .layer_close.top{top:50px}\
			.layer .layer_close.bottom{bottom:50px}\
			.layer .arrow{position:absolute;top:calc(50% + 20px);}\
			.layer .arrow.left{left:50px;}\
			.layer .arrow.right{right:50px;}\
			.layer .desc{position:absolute;bottom:40px;color:#fff;width:400px;height:40px;background:#888;line-height:40px;}\
			#gallery li:hover{transform:scale(1.1);z-index:20;}\
			#header .cart{width:200px;height:100%;margin:20px 5px}\
			#header .cart .img_wrap{background:no-repeat center / cover;width:100%;height:auto;padding-top:50%;}\
			#header .cart a{display:none;}\
			.layer .img{max-width:80%;max-height:80%;}\
			.layer img{max-width:100%;max-height:100%;}\
			.content .img_wrap{transition:.3s}\
			.content .img_wrap:hover{transform:scale(1.1);}\
		</style>\
		');
	$(".gnb").append('\
			<div>\
				<a href="#"><i class="fab fa-facebook-square"></i>Facebook</a>\
				<a href="#"><i class="fab fa-twitter-square"></i>twitter</a>\
				<a href="#"><i class="fab fa-pinterest-square"></i>pinterest</a>\
				<a href="#"><i class="fab fa-instagram"></i>instagram</a>\
			</div>\
		')
	$(".header-content").append('\
			<ul class="cart"></ul>\
		')
}
function menuOpen(){
	$("#header>div").addClass("active")
}
function menuClose(){
	$("#header>div").removeClass("active")
}
function loadAnimation(){
	var st = $(window).scrollTop();
	var sb = st + $(window).height();
	$("#gallery li").each(function(index){
		var obj = $(this);
		var ot = obj.offset().top;
		var ob = ot + obj.outerHeight();
		if(st < ot && ob < sb){
			$(this).removeClass("animationBefore");
		} else {
			$(this).addClass("animationBefore");
		}
	})
	$("#header>div").removeClass("active");
}
var imgidx = 0;
function layerOpen(){
	$(".layer").remove();
	imgidx = $(this).index();
	var idx = imgidx+1;
	var layerTemplate ='\
		<div class="layer">\
			<a href="#" class="btn layer_close top">닫기</a>\
			<a href="#" class="btn layer_close bottom">닫기</a>\
			<a href="#" class="btn arrow left">이전</a>\
			<a href="#" class="btn arrow right">다음</a>\
			<div class="img">\
				<img src="./img/'+idx+'.jpg">\
			</div>\
			<div class="desc">\
				<p>현재 사진 번호 : '+idx+'  /  전체 사진 수 : 16</p>\
			</div>\
		</div>\
	';
	$("body").append(layerTemplate);
	$(".layer").fadeIn(300);
}
function layerOpen2(){
	$(".layer").remove();
	imgidx = $(this).index();
	var img = $(this)[0].outerHTML.replace("thumb/","");
	var idx = imgidx+1;
	var layerTemplate ='\
		<div class="layer">\
			<a href="#" class="btn layer_close top">닫기</a>\
			<a href="#" class="btn layer_close bottom">닫기</a>\
			<div class="img">\
				<img src="./img/'+idx+'.jpg">\
			</div>\
			'+img+'\
		</div>\
	';
	$("body").append(layerTemplate);
	$(".layer").fadeIn(300);
}
function layerClose(){
	$(".layer").fadeOut(300,function(){
		$(".layer_close").remove();
	})
}
function imgChange(){
	var imgLength = $("#gallery li").length;
	if($(this).hasClass("left")){
		imgidx = imgidx-1;
		if(imgidx < 0) imgidx = imgLength-1;
	} else {
		imgidx = imgidx+1;
		if(imgidx > 16) imgidx = 0;
	}
	$("#gallery li").eq(imgidx).click();
}
function cartAdd(){
	alert("등록되었습니다.");
	var clone = $(this).parent().parent().clone();
	$(".header-content .cart").append(clone);
}

$(siteLoad)
.on("click","#header .menu",menuOpen)
.on("click","#header .close, .content_wrap",menuClose)
.on("click","#gallery li",layerOpen)
.on("click",".layer_close",layerClose)
.on("click",".arrow.left, .arrow.right, .layer img",imgChange)
.on("click",".content .btn_submit",cartAdd)
.on("click",".cart .img_wrap",layerOpen2)

$(window)
.on("scroll",loadAnimation)
.on("keyup",function(event){
	if($(".layer").length){
		if(event.keyCode == 37){
			$(".arrow.left").click();
		} else if(event.keyCode == 39){
			$(".arrow.right").click();
		} else if(event.keyCode == 27){
			$(".layer_close").click();
		}
	}
})
