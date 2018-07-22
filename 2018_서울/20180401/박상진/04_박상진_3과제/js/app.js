function loading(){
	$(".gallery ul li").addClass("scrollani scrollaniBefore");
	$("head").append('\
		<style>\
			.gallery ul li:hover{transform:rotate(5deg); transition:.5s;}\
			.scrollani{transform:translateY(100px);transition:.5s;}\
			.scrollaniBefore{opacity:0;transform:translateY(200px);transition:.5s;}\
			.layer {position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5);}\
			.layer .imgbox {position:absolute;width:100%;height:100%;text-align:center;}\
			.box{color:#fff;width:100%;height:100%;text-align:center;margin-top:100px;}\
			.box img {max-width:60%;max-height:60%;}\
			.btn {width:130px;height:50px;background-color:#ccc;position:absolute;top:50%;line-height:50px;}\
			.cls {margin-left:200px;}\
			.left {left:10%}\
			.right {right:10%}\
			.top{top:10px;}\
			.bot{margin-top:200px;}\
			.social{position:absolute;bottom:10px;}\
			.header-content .btn_submit{display:none;}\
			.header-content .img_wrap{width:150px;height:150px;margin-left:-30px;background:center/cover}\
		</style>\
		');

	$(".gnb ul").append("\
		<ul class='social'>\
			<li><a href='#'>socialsocial</a></li>\
			<li><a href='#'>socialsocial</a></li>\
			<li><a href='#'>socialsocial</a></li>\
		</ul>\
		")

	scrollAni();
}

function scrollAni(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var wa = wt + wh;
	$(".gallery ul li").each(function(index){
		var ih = $(this).offset().top;
		var it = $(this).outerHeight();
		var ia = ih + it;
		if(wt <= ih && wa >=ia){
			$(this).removeClass("scrollaniBefore");
		} else {
			$(this).addClass("scrollaniBefore");
		}
	});

	menuClose();
}

var layerIndex = 0;
function layerOpen(){
	var total = $(".gallery ul li").length;
	layerIndex = $(this).index();
	var index = layerIndex + 1;
	var src = "img/"+index+".jpg";

	$("body").append("\
		<div class='layer'>\
			<div class='imgbox'>\
				<a href='#' class='btn cls top'>닫기</a>\
				<a href='#' class='btn cls bot'>닫기</a>\
				<a href='#' class='btn arrow left'>뒤로가기</a>\
				<a href='#' class='btn arrow right'>앞으로가기</a>\
				<div class='box'>\
					<img src="+src+" alt="+index+" />\
					<p>"+index+" 번쨰 사진 입니다</p>\
					<p>현재 사진 번호 "+index+" / 전체 사진 수 "+total+"</p>\
				</div>\
			</div>\
		</div>\
		");
}

function layerClose(){
	$(".layer").fadeOut(300,function(){
		$(this).remove();
	})
}

function layerChange(){
	var total = $(".gallery ul li").length;
	if($(this).hasClass("left")){
		if(--layerIndex < 0) layerIndex = total - 1;
	} else {
		if(++layerIndex >= total) layerIndex = 0;
	}

	var index = layerIndex + 1;
	var src = "img/"+index+".jpg";

	change = "\
		<img src="+src+" alt="+index+" />\
		<p>"+index+" 번쨰 사진 입니다</p>\
		<p>현재 사진 번호 "+index+" / 전체 사진 수 "+total+"</p>\
	";
	$(".box").html(change);
}
// menu
function menuOpen(){
	$(".header-content").css({marginRight:0,transition:".5s"})
}
function menuClose(){
	$(".header-content").css({marginRight:"-190px",transition:".5s"})
}

function carAdd(){
	car = $(this).parent().parent().clone();
	alert("등록되었습니다");
	$(".gnb").append(car);
}

function layerOpen2(){
	index = $(this).index();
	index = index + 1;
	var src = "img/"+index+".jpg";
	$("body").append("\
		<div class='layer'>\
			<div class='imgbox'>\
				<div class='box'>\
					<a href='#' class='btn cls top'>닫기</a>\
					<img src="+src+" alt="+index+" />\
				</div>\
			</div>\
		</div>\
		");
}

$(loading)
.on("click",".menu",menuOpen)
.on("click",".close, .wrap",menuClose)
.on("click",".gallery ul li",layerOpen)
.on("click",".arrow",layerChange)
.on("click",".cls",layerClose)
.on("click","#price .btn_submit",carAdd)
.on("click",".gnb .img_wrap",layerOpen2)

$(window)
.on("scroll",scrollAni)
.on("keydown",function(e){
	if($(".layer").length){
		if(event.keyCode == 27){
			layerClose();
		} else if(e.keyCode == 37){
			layerChange();
		} else if(e.keyCode == 39){
			layerChange();
		}
	}
});