var storageContact = localStorage.getItem("contact");
var contact = storageContact ? JSON.stringify(storageContact) : [];
function loadOn(){
	$(".gallery .content li").addClass("animation animationBefore")
	$("head").append('\
		<style>\
			#header, #header>div{transition:.5s}\
			.animation{transition:.5s;opacity:inherit;transform:inherit;}\
			.animation.animationBefore{transition:inherit;opacity:0;transform:translateX(-100px);}\
			.gallery .content li:hover{transform:scale(1.2) rotate(5deg);z-index:100}\
			.modal{background:rgba(0,0,0,.5);position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;z-index:1000;}\
			.modal>button{width:150px;height:50px;position:fixed;}\
			.modal>.close1{top:10%;right:10%;}\
			.modal>.close2{bottom:10%;right:10%;}\
			.modal>.back{top:45%;left:20%;}\
			.modal>.go{top:45%;right:20%;}\
			.modal>.content{max-width:70%;max-height:60%;position:relative}\
			.modal>.content>img{max-width:100%;max-height:100%;}\
			.modal>.content>p{position:absolute;bottom:-40px;width:100%;text-align:center;line-height:40px;background:#fff;}\
			.car>img{width:100px;height:50px;}\
		</style>\
	')
	$('.gnb ul').append('\
		<li><a href="#"><i class="fab fa-facebook"></i>Facebook</a></li>\
		<li><a href="#"><i class="fab fa-twitter"></i>Twitter</a></li>\
		<li><a href="#"><i class="fab fa-google-plus"></i>Google+</a></li>\
		<li><a href="#"><i class="fab fa-pinterest"></i>Pinterest</a></li>\
	')
	scrollAction();
	contactList();
}

function scrollAction(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var sb = st + sh;
	$(".gallery .content li").each(function(index){
		var ot = $(this).offset().top;
		var oh = $(this).outerHeight();
		var ob = ot + oh;
		if(st <= ot && ob <= sb){
			$(this).css({transition:".4s"})
			$(this).removeClass('animationBefore');
		} else{
			$(this).addClass('animationBefore');
		}
	})
	menuClose();
}

function menuOpen(){
	$("#header").css({zIndex:110})
	$("#header>div").css({zIndex:110,margin:0,transition:".5s"})
}

function menuClose(){
	$("#header>div").css({marginRight:"-190px"})
}

var idx = null;
function modal(){
	$(".modal").remove();
	if(this.idx == null) idx = $(this).index() + 1;
	var len = $(".gallery .content li").length;
	var modal = '\
		<div class="modal">\
			<button type="button" class="close1 close_btn">닫기</button>\
			<button type="button" class="close2 close_btn">닫기</button>\
			<button type="button" class="back">이전</button>\
			<button type="button" class="go">다음</button>\
			<div class="content">\
				<img src="img/thumb/'+idx+'.jpg" alt="'+idx+'" />\
				<p>현재 사진 번호 : '+idx+' / 전체 사진 수 : '+len+'</p>\
			</div>\
		</div>';
	$(".content_wrap").append(modal);
	$(".modal .close_btn").click(function(){
		$(".modal").remove();
	})
	$(".modal .back").click(function(){
		idx--;
		if(idx == 0) idx = len;
		$(".gallery .content li ").eq(idx-1).click();
	})
	$(".modal .go, .modal .content img").click(function(){
		idx++;
		if(idx > len) idx = 1;
		$(".gallery .content li ").eq(idx-1).click();
	})
	$(document).keydown(function(event){
		if(event.keyCode == 27) $(".modal").remove();
		if(event.keyCode == 37){
			idx--;
			if(idx == 0) idx = len;
			$(".gallery .content li").eq(idx-1).click();
		}
		if(event.keyCode == 39){
			idx++;
			if(idx > len) idx = 1;
			$(".gallery .content li").eq(idx-1).click();
		}
	});
}

function atagAction(){
	return false;
}

function carSubmit(){
	var parent = $(this).parents("li");
	idx = parent.index()+1;
	var price = $(".car_price",parent).html();
	$(".gnb ul").append('\
		<div class="car car'+idx+'">\
			<img src="img/thumb/'+idx+'.jpg" alt="'+idx+'" data-idx='+idx+'/>\
			<p>차량 '+idx+' / '+price+'</p>\
			<button class="carDelete"  data-idx='+idx+'>삭제</button>\
		</div>\
	')
	alert("등록되었습니다.");
	$(".car .carDelete").click(function(){
		idx = $(this).data("idx");
		var class_name = "car"+idx;
		$("."+class_name).remove();
	})
	$(".car img").click(function(){
		this.idx = $(this).data("idx");
		modal();
	})
}

function contactSubmit(){
	var bidx =  contact.length ? contact.length : 0;
	var _contact = [];
	var date = new Date();
	date = setDateTime(date);
	var contact_text = {
		bidx: bidx + 1,
		subject : this.subject.value,
		writer : this.writer.value,
		email : this.email.value,
		content : this.content.value,
		date : date
	}
	contact[bidx] = contact_text;
	localStorage.setItem("contact", JSON.stringify(_contact));
	alert("등록되었습니다.");
	contactList();
	$(this).reset();
	return false;
}

function setDateTime(date){
	var date = new Date(date);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	return year+"-"+month+"-"+day;
}

function contactList(){
	var text = '\
		<tr>\
			<td>{{idx}}</td>\
			<td class="subject"><a href="#" data-idx={{idx}}>{{subject}}</a></td>\
			<td>{{writer}}</td>\
			<td>{{date}}</td>\
		</tr>';
	for (var i = 0, len = contact.length; i < len; i++) {
		var obj = contact[i];
		text = text
				.replace(/{{idx}}/gi,obj.bidx)
				.replace(/{{subject}}/gi,obj.subject)
				.replace(/{{writer}}/gi,obj.writer)
				.replace(/{{date}}/gi,obj.date)
		$(".data-list tbody").append(text);
	}
}

$(loadOn)
.on("click","#header .menu",menuOpen)
.on("click","#header .close",menuClose)
.on("click",".gallery .content li",modal)
.on("click","a",atagAction)
.on("click",".btn_submit",carSubmit)
.on("submit",".contact form",contactSubmit)

$(window)
.on("scroll",scrollAction)