function loadFunction() {
	$(".gallery .content li").addClass("animation animationBefore")
	$("head").append('\
		<style>\
		.gnb .social{ bottom:100px;position:absolute; }\
		.gnb .social li{ width:160%; }\
		.animation { opacity: inherit; transition: .3s; transform: inherit; }\
		.animation.animationBefore { opacity: 0; transform: translateX(100px); transition: inherit; }\
		.gallery .content li:hover { transform: scale(1.2, 1.2) rotate(5deg); transition: .3s; z-index: 10; }\
		.layer { position: fixed; left: 0; right: 0; bottom: 0; top: 0; background: rgba(0, 0, 0, 0.5); z-index: 120; text-align: center; display: none; }\
		.layer .box { display: inline-block; vertical-align: middle; position: relative; text-align: left; max-width: 70%; max-height: 70%; top:10%; }\
		.layer .layerContent { background: #fff; text-align: center; max-width: 100%; max-height: 100%; }\
		.layer .layerContent img { max-width: 100%; max-height: 100%; }\
		.layer .box .button { width: 100px; font-size: 13px; background: #aef; color: #000; border-radius: 3px; border-bottom: 1px solid #058; text-decoration: none; height: 40px; line-height: 40px; display: inline-block; text-align: center; }\
		.layer .box .arrow { position: absolute; top: calc(50% - 20px); }\
		.layer .box .arrow.left { left: -150px; }\
		.layer .box .arrow.right { right: -150px; }\
		.layer .box .close { position: absolute; left: calc(100% - 100px); }\
		.layer .box .close.top { top: -60px; }\
		.layer .box .close.bottom { top: calc(100% + 20px); }\
		.header-content { transition: .3s; }\
		#header .menubg { position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 100; background: rgba(0, 0, 0, 0.5); cursor: pointer; width: 100%; }\
		.att div { padding-left:30px; }\
		.att img{ width:75%; height:75%; }\
		</style>\
		')
	$('\
		<div class="att">\
		</div>\
		<div class="gnb">\
			<ul class="social">\
				<li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>\
				<li><a href="#"><i class="fab fa-google-plus-g"></i> Google+</a></li>\
				<li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>\
			</ul>\
		</div>\
		').insertAfter('.gnb')
	scrollAnimation()
}

function scrollAnimation() {
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var sb = st + sh;
	$(".gallery .content li").each(function(index) {
		var ot = $(this).offset().top;
		var h = $(this).outerHeight();
		var ob = ot + h;
		if (st <= ot && sb >= ob) {
			$(this).removeClass("animationBefore")
		} else {
			$(this).addClass("animationBefore")
		}
	})
	closeMenu();
}

var layerIndex = 0;

function openLayer() {
	layerIndex = 0;
	layerIndex = $(this).hasClass("thumb") ? ($(".thumb p").text().substring(3,4)*1)-1 : $(this).index();
	var index = layerIndex + 1;
	var src = "img/" + index + ".jpg";
	var total = $(".gallery .content li").length;
	var layerTag = '\
	<div class="layer">\
		<div class="box">\
			<a href="#" class="arrow button left">뒤로 가기</a>\
			<a href="#" class="arrow button right">앞으로 가기</a>\
			<a href="#" class="close button bottom">닫기</a>\
			<a href="#" class="close button top">닫기</a>\
			<div class="layerContent">\
			<img src="' + src + '" alt="' + index + '" />\
			<p>' + index + '번째 사진입니다</p>\
			<p>현재 사진 번호 : ' + index + '/전체 사진 수: ' + total + '</p>\
			</div>\
		</div>\
	</div>';
	$('body').append(layerTag);
	$(".layer").fadeIn(300)
	setTimeout(layerImageSet, 100);
}

function closeLayer() {
	$(".layer").fadeOut(300, function() {
		$(this).remove();
	})
}
function changeLayer() {
	var total = $(".gallery .content li").length;
	if ($(this).hasClass("left")) {
		if (--layerIndex < 0) layerIndex = total - 1;
	} else {
		if (++layerIndex >= total) layerIndex = 0;
	}
	var index = layerIndex + 1;
	var src = "img/" + index + ".jpg";
	var template = '\
		<img src="' + src + '" alt="' + index + '" />\
		<p>' + index + '번째 사진입니다</p>\
		<p>현재 사진 번호 : ' + index + '/전체 사진 수: ' + total + '</p>\
	';
	$(".layerContent").html(template);
	layerImageSet();
}

function layerImageSet() {
	var layerH = $(".layer").height();
	var imgH = $(".layer img").height();
	if (layerH * 0.7 < imgH) {
		$(".layer img").height(((layerH * 0.7) - 50) + "px");
	}
}

function showMenu() {
	if (!$("#header .menubg").length) $("#header").append('<div class="menubg"></div>')
	$(".menubg").stop().fadeIn(500)
	$(".header-content").css({
		marginRight: 0,
		zIndex: 110,
		position: 'relative'
	})
	$("#header").css({
		zIndex: 110
	})
}

function closeMenu() {
	$(".menubg").remove();
	$(".header-content").css({
		marginRight: "-190px",
		zIndex: "",
		position: ""
	})
	$("#header").css({
		zIndex: 'inherit'
	})
}

function attCar() {
	if (!$(".att").length) $('<div class="att"></div>').insertAfter(".gnb")
	var idx = $(this).closest("li").index() + 1;
	var src = "img/thumb/"+ idx +".jpg"
	var price = idx + ",000,000";
	var template = '\
	<div class="thumb">\
	<img src="' + src + '" alt="' + idx + '" />\
	<p>가격:' + price + '</p>\
	</div>\
	';
	$(".att").prepend(template);
	alert('관심차량 등록되었습니다.');
}

$(document)
	.keyup(function(e) {
		if (e.keyCode == 27) closeLayer();
		else if (e.keyCode == 37) $(".arrow.left").click()
		else if (e.keyCode == 39) $(".arrow.right").click()
	})

$(window)
	.on("scroll", scrollAnimation)
	.on("resize", layerImageSet)

$(loadFunction)
	.on("click", ".gallery .content li, .att div", openLayer)
	.on("click", ".layer .close", closeLayer)
	.on("click", ".layer .arrow", changeLayer)
	.on("click", ".menu", showMenu)
	.on("click", "#header .close, #header .menubg", closeMenu)
	.on("click", ".layer img", changeLayer)
	.on("click", ".btn_submit", attCar)