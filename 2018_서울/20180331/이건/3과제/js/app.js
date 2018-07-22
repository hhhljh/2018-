var contactStorage = localStorage.getItem("contact");
var contact = contactStorage ? JSON.parse(contactStorage) : [];

function loadOn(){
	$(".gallery .content li").addClass("animation animationBefore");
	$("head").append('\
		<style>\
			#header,#header>div{transition:.4s;}\
			.animation{transition:.4s;transform:inherit;opacity:inherit;}\
			.animation.animationBefore{transform:translateY(100px);opacity:0;transition:inherit;}\
			.gallery .content li:hover {transform:scale(1.2) rotate(5deg); transition:.4s;z-index:100}\
			.modal{background:rgba(0,0,0,.5);z-index:1000;position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;}\
			.modal>button{width:150px; height:50px;position:fixed;}\
			.modal>.back{top:40%;left:20%;}\
			.modal>.go{top:40%;right:20%;}\
			.modal>.close1{top:10%;right:20%;}\
			.modal>.close2{bottom:10%;right:20%;}\
			.modal>.content{position:relative}\
			.modal>.content>p{position:absolute;bottom:0;width:100%;background:#fff;text-align:center;}\
		</style>\
	');
	$(".gnb ul").append('\
		<li><a href="#"><i class="fab fa-facebook">Facebook</i></a></li>\
		<li><a href="#"><i class="fab fa-twitter">Twitter</i></a></li>\
		<li><a href="#"><i class="fab fa-google-plus">Google+</i></a></li>\
	');

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
			$(this).removeClass("animationBefore");
		} else {
			$(this).addClass("animationBefore");
		}
	});
	menuClose();
}

function menuOpen(){
	$("#header").css({zIndex:110});
	$("#header>div").css({zIndex:110,margin:0,transition:".4s"});
}

function menuClose(){
	$("#header>div").css({marginRight:"-190px"});
}

function modal(){
	$(".modal").remove();
	var idx = $(this).index() + 1;
	var len = $(".gallery .content li").length;
	$(".content_wrap").append('\
		<div class="modal">\
			<button type="button" class="close_btn close1">닫기</button>\
			<button type="button" class="close_btn close2">닫기</button>\
			<button type="button" class="back">이전</button>\
			<button type="button" class="go">다음</button>\
			<div class="content">\
				<img src="img/thumb/'+idx+'.jpg" alt="'+idx+'" />\
				<p>현재 사진 번호 : '+idx+' / 전체 사진 수 : '+len+'</p>\
			</div>\
		</div>\
	');
	$(".modal .close_btn").click(function(){
		$(".modal").remove();
	});
	$(".modal .back").click(function(){
		idx--;
		if(idx == 0) idx = len;
		$(".gallery .content li").eq(idx-1).click();
	});
	$(".modal .go , .modal .content img").click(function(){
		idx++;
		if(idx > len) idx = 1;
		$(".gallery .content li").eq(idx-1).click();
	});
	$(document).keydown(function(event){
		if(event.keyCode == 27){
			$(".modal").remove();
		}
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
	})
}

function favCar(){
	var idx = $(this).parents("li").index() + 1;
	var price = $(this).parent("div>.car_price").html();
	$(".gnb ul").append('\
		<li>\
			<img src="img/thumb/'+idx+'.jpg" alt="'+idx+'" style="width:100px;height:40px;" />\
			<p>차량 '+idx+' / '+price+'</p>\
		</li>\
	')
}

function contactInsert(){
	alert("전송되었습니다.");
	var len = contact.length ? contact.length : 0;
	var date = new Date();
	var contact_text = {
		idx : len + 1,
		subject : this.subject.value,
		writer : this.writer.value,
		email : this.email.value,
		content : this.content.value,
		date : date
	}
	contact[len+1] = contact_text;
	localStorage.setItem("contact",JSON.stringify(contact));
	$(this).reset();
	return false;
}

function contactList(){
	if(contact.length){
		var template = '\
			<tr>\
				<td>{{idx}}</td>\
				<td class="subject"><a href="#">{{subject}}</a></td>\
				<td>{{writer}}</td>\
				<td>{{date}}</td>\
			</tr>';
		for (var i = contact.length - 1; i >= 0; i--) {
			var obj = contact[i];
			var text = template
					.replace(/{{idx}}/gi,obj.idx)
					.replace(/{{subject}}/gi,obj.subject)
					.replace(/{{writer}}/gi,obj.writer)
					.replace(/{{date}}/gi,obj.date)
			$(".data-list table tbody").append(text);
		}
	}
}

$(loadOn)
.on("click","#header .menu",menuOpen)
.on("click","#header .close",menuClose)
.on("click",".gallery .content li",modal)
.on("click",".btn_submit",favCar)
.on("submit",".contact form",contactInsert)

$(window)
.on("scroll",scrollAction)