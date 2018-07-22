$("body,html").css({transform:"translateY(-50px)",opacity:"0"})
function loadFunction(){
	$("body,html").css({transition:".5s",transform:"translateY(0px)",opacity:"1"});
	$("body").append("<div class='menuModal'></div>");
	$("body").append("<div class='modal'></div>");
	$(".info > a").removeClass(".btn_submit").addClass("som");
	$("head").append("\
		<style>\
			.parallax{transform:translateX(100px);opacity:0;transition:.6s;}\
			.parallaxBefore{transform:translateX(0px);opacity:1;transition:.6s;}\
			.parallaxBefore:hover{transform:scale(1.1,1.1);}\
			.menuModal{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.6);cursor:pointer;display:none;z-index:99;}\
			.modal{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.6);display:none;z-index:99;display:none;}\
			.popup{position:fixed;left:20%;top:10%;z-index:100;}\
			.box{position:relative;width:100%;height:100%;max-width:900px;margin:0 auto;}\
			.layer{width:100%;height:100%;position:relative;}\
			.layer > img{width:100%;height:100%;}\
			.btn{z-index:9999;position:absolute;display:inline-block;padding:10px 20px;background:#fff;color:#000;}\
			.prev{top:45%;left:-50px;}\
			.next{top:45%;right:-50px;}\
			.close1{top:-30px;right:0px;}\
			.close2{bottom:-30px;right:0px;}\
			.pinfo{text-align:center;color:#fff;font-size:16px;}\
			.nail{width:150px;height:150px;margin-bottom:20px;}\
			.nail > img{width:100%;height:100%;}\
			.nail-popup{position:fixed;left:0;top:0;width:100%;height:100%;text-align:center;z-index:100;}\
			.nail-img{cursor:pointer;}\
			.nail-remove{cursor:pointer;}\
			.scrollDown{text-decoration: underline;curosr:pointer;}\
		</style>\
		");
	$
	$(".content > ul > li").addClass("parallax");
	$(".gnb").append("\
		<ul class='ss'>\
			<li><i class='fab fa-google-plus'></i></li>\
			<li><i class='fab fa-facebook'></i></li>\
			<li><i class='fab fa-twitter'></i></li>\
		</ul>");
	$(".ss").css({position:"relative",top:"400px"})
	scrollAnimation();
}

function scrollAnimation(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	$(".box").css({top:"calc("+st+"px - 300px)"});
	var stt = st + sh;
	$(".content > ul > li").each(function(){
		var ot = $(this).offset().top;
		var oh = $(this).outerHeight();
		var tt = ot + oh;

		if (stt > tt && st < ot) {
			$(this).addClass("parallaxBefore");
		} else{
			$(this).removeClass("parallaxBefore");
		}

	})
}

function menuOpen(){
	$(".menuModal").fadeIn(300);
	$(".header-content").css({marginRight:"0px",transition:".6s"})
	$("header").css({zIndex:"100"})
}

function menuClose(){
	$(".menuModal").fadeOut(300);
	$(".header-content").css({marginRight:"-190px",transition:".6s"});
	$("header").css({zIndex:"0"});
	$(".nail-popup").remove();
}

function popupClose(){
	$(".popup").remove();
	$(".modal").fadeOut(300);
}

function next(){
	$(".next").click();
}

function galleryPopup(){
	if($(".popup").length > 0) $(".popup").remove();
	$(".modal").fadeIn(300);
	if ($(this).hasClass("move")) {
		var idx = $(this).attr("data");
		var midx = idx;
		var prev = midx - 2;
		var next = ++midx;
	} else{
		var idx = $(this).index() + 1;
		var midx = idx;
		var prev = --midx;
		var next = midx + 2;
	}
	var total = $("#gallery > .wrap > .content > ul > li").length;
	if (prev < 1) prev = 16;
	if (next > 16) next = 1;
	var popup = 
		"<div class='popup'>"+
			"<div class='box'>"+
				"<a href='#!' class='btn prev move' data='"+prev+"'>이전</a>"+
				"<a href='#!' class='btn next move' data='"+next+"'>다음</a>"+
				"<a href='#!' class='btn close close1'>닫기</a>"+
				"<a href='#!' class='btn close close2'>닫기</a>"+
				"<div class='layer'>"+
					"<img src='./img/"+idx+".jpg' alt='"+idx+"'>"+
				"</div>"+
				"<p class='pinfo'>이미지 설명 : "+idx+".jpg <br> 현재 사진 번호 : "+idx+" / 전체 사진 수 : "+total+"</p>"
			"</div>"+
		"</div>";
	var st = $(window).scrollTop();
	$("body").append(popup);
	$(".box").css({top:"calc("+st+"px - 300px)"});

}

function event(){
	return false;
}

function formInsert(){
	var subject = $("input[name=subject]").val();
	var writer = $("input[name=writer]").val();
	var email = $("input[name=email]").val();
	var content = $("textarea[name=content]").val();
	var idx = $(".data-list > table > tbody > tr").length + 1;
	if (subject == "" || writer == "" ||  email == "" ||  content == "") {
		alert("빈 값이 있습니다.");
		return false;
	}
	var add = 
		'<tr>'+
			'<td>'+idx+'</td>'+
			'<td class="subject">'+
				'<a href="#" class="scrollDown">'+subject+'</a>'+
				'<div class="form_content">내용 : '+content+'</div>'+
			'</td>'+
			'<td>'+writer+'</td>'+
			'<td>2018-03-31</td>'+
		'</tr>';
	$(".data-list > table > tbody").append(add);
	$("input[name=subject]").val("");
	$("input[name=writer]").val("");
	$("input[name=email]").val("");
	$("textarea[name=content]").val("");
	$(".form_content").hide();
}

function slideDown(){
	$(this).next().slideToggle(100);
}

function nailAdd(){
	var idx = $(this).parent().parent().index() + 1;
	var info = $(this).prev().text();
	var add =
		'<div class="nail">'+
			'<img src="./img/'+idx+'.jpg" alt="'+idx+'" data="'+idx+'" class="nail-img">'+
			'<div style="display:flex;">'+
				'<p class="nail-remove">삭제</p>'+
				'<p>'+info+'</p>'+
			'</div>'+
		'</div>';
	$(".header-content").append(add);
	alert("추가되었습니다.");
}

function nailPopup(){
	var idx = $(this).attr("data");
	$("body").append("\
			<div class='nail-popup'>\
				<a href='#!' class='nail-close btn'>닫기</a>\
				<img src='./img/"+idx+".jpg' alt='"+idx+"'>\
			</div>\
		");
}

function nailClose(){
	$(".nail-popup").remove();
}

function nailRemove(){
	$(this).parent().parent().remove();
	alert("삭제되었습니다.");
}

$(loadFunction)
.on("click",".menu",menuOpen)
.on("click",".close",menuClose)
.on("click",".menuModal",menuClose)
.on("click","#gallery > .wrap > .content > ul > li,.move",galleryPopup)
.on("click",".close",popupClose)
.on("click",".layer > img",next)
.on("click",".btn_group > button",formInsert)
.on("click",".btn_submit,a",event)
.on("click",".scrollDown",slideDown)
.on("click",".info > a",nailAdd)
.on("click",".nail-img",nailPopup)
.on("click",".nail-close",nailClose)
.on("click",".nail-remove",nailRemove)

$(window)
.on("scroll",scrollAnimation)
.on("scroll",menuClose)