function loadFunction(){
	$("body").append("<div class='menu-modal'></div>");
	$("body").append("<div class='modal'></div>");
	$("head").append("\
			<style>\
				.menu-modal,.modal{position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.6);left:0;top:0;display:none;z-index:99;}\
				.modal{display:none;text-align:center;}\
				.parallax{transition:.6s;transform:translateX(-100px);opacity:0;}\
				.parallaxBefore{transition:.6s;transform:translateX(0px);opacity:1;}\
				.parallaxBefore:hover{transform:scale(1.1,1.1);}\
				.popup{max-width:60%;max-height:60%;display:flex;justify-content:center;align-items:center;margin:0 auto;margin-top:8%;}\
				.popup > img{width:100%;height:100%;cursor:pointer;}\
				.popup > p{text-align:center;position:absolute;left:calc(50% - 130px);bottom:10%;color:#fff;font-size:16px;}\
				.btn{position:absolute;display:inline-block;padding:10px 20px;cursor:pointer;background:#000;color:#fff;}\
				.prev{left:15%;}\
				.next{right:15%;}\
				.close1{right:20%;top:10%;}\
				.close2{right:20%;bottom:15%;}\
				.somnail{max-width:100%;height:100px;margin-bottom:20px;}\
				.somnail > img{width:100%;height:100%;cursor:pointer;}\
				.ct{display:none;}\
			</style>\
		");
	$(".gnb").append("\
			<ul class='uu'>\
				<li><a href='#!'><i class='fab fa-facebook'></i></a></li>\
				<li><a href='#!'><i class='fab fa-twitter'></i></a></li>\
				<li><a href='#!'><i class='fab fa-google-plus'></i></a></li>\
			</ul>\
		");
	$(".gallery > div > div > ul > li").addClass("parallax");
	$(".uu").css({position:"relative",top:"400px"})
	parallax();
}

function asd(){
	$("button[type=submit]").click(function(){
		return false;
	})
}

function parallax(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var stt = st+sh;
	$(".gallery > div > div > ul > li").each(function(){
		var ot = $(this).offset().top;
		var oh = $(this).outerHeight();
		var tt = ot+oh;

		if (stt > tt && st < ot) {
			$(this).addClass("parallaxBefore");
		} else{
			$(this).removeClass("parallaxBefore");
		}

	})
}

function menuOpen(){
	$(".menu-modal").fadeIn(300);
	$(".header-content").css({marginRight:"0px",transition:".6s",zIndex:"100"})
	$("header").css({zIndex:"100"})
}

function close(){
	$(".menu-modal").fadeOut(300);
	$(".header-content").css({marginRight:"-190px",transition:".6s"})
	$("header").css({zIndex:"0"})
}

function btnClick(){
	$(".popup").remove();
	$(".modal").hide();
	if ($(this).hasClass("next")) {
		var idx = $(this).attr("data") - 2;
		}
	if ($(this).hasClass("prev")){
		var idx = $(this).attr("data") - 1;
	} else{
		var idx = $(this).attr("data");
	}
	$(".gallery > div > div > ul > li").eq(idx).click();
}

function next(){
	$(".next").click()
}

function popupClose(){
	$(".popup").remove();
	$(".modal").fadeOut(300);
}

function popup(){
	$(".modal").fadeIn(300);
	var idx = $(this).index() + 1;
	var midx = idx;
	var prev = --midx;
	var next = ++midx;
	var total = $(".gallery > div > div > ul > li").length;
	if (prev <= 0) prev = 16;
	if (next > 15) next = 1;
	console.log(prev);
	console.log(next);

	var popup =
	'<div class="popup">'+
		'<a href="#!" class="btn prev move" data="'+prev+'">이전</a>'+
		'<a href="#!" class="btn next move" data="'+next+'">다음</a>'+
		'<a href="#!" class="btn close close1">닫기</a>'+
		'<a href="#!" class="btn close close2">닫기</a>'+
		'<img src="./img/'+idx+'.jpg" alt="'+idx+'">'+
		'<p>이미지 설명 : '+idx+'.jpg 입니다.<br>현재 사진 번호 : '+idx+'번 / 전체 사진 수 : '+total+'</p>'+
	'</div>';

	$(".modal").append(popup);

}

function somRemove(){
	$(this).parent().parent().remove();
	alert("삭제되었습니다.");
}

function somnail(){
	var idx = $(this).parent().parent().index();
	var midx = idx;
	midx++;
	var price = $(this).prev().text();

	var som =
	'<div class="somnail">'+
		'<img src="./img/'+midx+'.jpg" alt="'+midx+'" data="'+idx+'">'+
		'<p><a href="#!" class="som-d">삭제</a> 가격 : '+price+'</p>'+
	'</div>';

	$(".header-content").append(som);
	alert("추가되었습니다.");

}

function board(){
	var subject = $("input[name='subject']").val();
	var writer = $("input[name='writer']").val();
	var email = $("input[name='email']").val();
	var content = $("textarea[name='content']").val();
	var idx = $("table > tbody > tr").length + 1;
	if (subject == "" || writer == "" || email == "" || content == "") {
		alert("빈 값이 있습니다.");
		return false;
	}
	var form = 
		'<tr>'+
			'<td>'+idx+'</td>'+
			'<td class="subject"><a href="#" class="show">'+subject+'</a><div class="ct">'+content+'</div></td>'+
			'<td>'+writer+'</td>'+
			'<td>2018.04.01</td>'+
		'</tr>';

	$("table > tbody").append(form);
	$("input,textarea").val("");
	alert("글이 등록되었습니다.");
}

function ff(){
	return false;
}

function show(){
	$(this).next().slideToggle(400);
}

$(loadFunction)
.on("click",".menu",menuOpen)
.on("click",".close,.menu-modal",close)
.on("click",".gallery > div > div > ul > li",popup)
.on("click",".move",btnClick)
.on("click",".popup > img",next)
.on("click",".close",popupClose)
.on("click",".info > a",somnail)
.on("click",".som-d",somRemove)
.on("click",".somnail > img",btnClick)
.on("click","fieldset > div > .btn_submit",board)
.on("click","button[type=submit]",ff)
.on("click",".show",show)

$(window)
.on("scroll",parallax)
.on("scroll",close)
.on("keydown",function(e){
	var a = e.keyCode;
	switch(a){
		case 27:
			$(".close").click();
		break;
		case 37:
			$(".prev").click();
		break;
		case 39:
			$(".next").click();
		break;
	}
})