function load(){
	$("#gallery ul li").addClass("scrollAni scrollAniBefore");
	$("head").append('\
		<style>\
			.scrollAni{opacity:inherit;transition:.5s;}\
			.scrollAniBefore{opacity:0;transform:translateY(100px);transition:.5s;}\
			.gallery ul li:hover{transform:rotate(5deg);}\
			.layer {position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.5);}\
			.layerbox {position:absolute;width:100%;height:100%;text-align:center;}\
			.modal{margin:0 auto;width:60%;height:80%;background-color:#fff;}\
			.layerbox img{max-width:60%;max-height:60%;margin-top:10%;}\
			.header-content{transition:.5s all;}\
			.btn{position:absolute;top:50%;width:130px;height:50px;background-color:#ccc;line-height:50px;}\
			.cls{margin-left:200px;}\
			.top{top:5%;}\
			.bot{bottom:0;margin-top:200px;}\
			.left{left:10%;}\
			.right{right:10%;}\
			.agro img{width:100px;height:100px;}\
			.social{position:absolute; bottom:100px;}\
			.agro .btn_submit{display:none;}\
		</style>\
		');

	var social = '\
	<p>관심 차량</p>\
		<ul class="social">\
			<li><a href="#">socialsocial</a></li>\
			<li><a href="#">socialsocial</a></li>\
			<li><a href="#">socialsocial</a></li>\
		</ul>\
	';
	$(".gnb").append(social);
	scrollAnimation();
}

function scrollAnimation(){
	wt = $(window).scrollTop();
	wh = $(window).height();
	wa = wt + wh;
	$(".gallery ul li").each(function(index){
		it = $(this).offset().top;
		ih = $(this).outerHeight();
		ia = it+ih;
		if(wt <= it && wa >= ia){
			$(this).removeClass("scrollAniBefore");
		} else {
			$(this).addClass("scrollAniBefore");
		}
	});
	menuClose();
}

var layerIndex = 0;
function layerOpen(){
	var total = $(".gallery ul li").length;
	var index = $(this).index();
	var index = index + 1;
	var src = "img/"+index+".jpg";
	var layer = '\
		<div class="layer">\
			<div class="layerbox">\
				<a href="#" class="btn cls top">닫기</a>\
				<a href="#" class="btn cls bot">닫기</a>\
				<a href="#" class="btn arrow left">뒤로 가기</a>\
				<a href="#" class="btn arrow right">앞으로 가기</a>\
				<div class="modal">\
					<img src="'+src+'" alt="'+index+'" />\
					<p>'+index+' 번째 사진 입니다.</p>\
					<p>현재 사진'+index+' 번째 사진 , 전체 사진 수 '+total+'</p>\
				</div>\
			</div>\
		</div>\
	';
	$("body").append(layer);
}

function layerChange(){
	var total = $(".gallery ul li").length;
	var index = $(this).index();
	var index = index + 1;
	var layerIndex = index;
	var src = "img/"+index+".jpg";
	if(!$(this).hasClass("left")){
		if(--layerIndex >= 0) layerIndex = 1;
	} else {
		if(++layerIndex < total) layerIndex = total;
	}
	change = '\
		<img src="'+src+'" alt="'+index+'" />\
		<p>'+index+' 번째 사진 입니다.</p>\
		<p>현재 사진'+index+' 번째 사진 , 전체 사진 수 '+total+'</p>\
	';

	$(".modal").html(change);
}

function layerClose(){
	$(".layer").fadeOut(300,function(){
		$(this).remove();
	})
}
function menuOpen(){
	$(".header-content").css({marginRight:"0px"});
}

function menuClose(){
	$(".header-content").css({marginRight:"-190px"});
}

function ag(){
	var index = $(this).index();
	var index = index + 1;
	var src = "img/"+index+".jpg";
	var price = $(this).html();
	var data = "\
		<div class='agro'>\
			<img class='agimg' src="+src+" alt="+index+" />\
			<p>"+price+"</p>\
		</div>\
	";

	$(".gnb").append(data);
}

function agimgOpen(){
	var total = $(".gallery ul li").length;
	var index = $(this).index();
	var src = "img/"+index+".jpg";
	var layer = '\
		<div class="layer">\
			<div class="layerbox">\
				<a href="#" class="btn cls top">닫기</a>\
				<a href="#" class="btn cls bot">닫기</a>\
				<a href="#" class="btn arrow left">뒤로 가기</a>\
				<a href="#" class="btn arrow right">앞으로 가기</a>\
				<div class="modal">\
					<img src="'+src+'" alt="'+index+'" />\
					<p>'+index+' 번째 사진 입니다.</p>\
					<p>현재 사진'+index+' 번째 사진 , 전체 사진 수 '+total+'</p>\
				</div>\
			</div>\
		</div>\
	';
	$("body").append(layer);
}

$(load)
.on("click",".menu", menuOpen)
.on("click",".close,.wrap", menuClose)
.on("click",".gallery ul li",layerOpen)
.on("click",".cls",layerClose)
.on("click",".arrow",layerChange)
.on("click",".gallery ul li",layerChange)
.on("click","#price ul li",ag)
.on("click",".agro > img",agimgOpen)
$(window)
.on("scroll",scrollAnimation)