function loadFunction (){
	/*로딩애니메이션:각 div의 크기 조절 애니메이션*/
	// $('body').prepend(`
	// 	<div id="loading">
	// 		<div></div><div></div><div></div><div></div><div></div>
	// 	</div>
	// `)
	$("head").append(`
		<style>
			#top>.navbar{position:sticky;top:0;}
			ul.navbar-right li a:hover{color:#ff4e00 !important;}
			#contact #message{resize: vertical;}
			#service div.col-md-4:nth-child(3){background:#505050;}
			/*로딩애니메이션*/
			#loading {animation:loading 0.6s both;animation-delay:0.3s;background:#fff;position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;}
			#loading div {width:5px;height:20px;background:#000;margin:0 1px;}
			#loading div:nth-child(1){animation:loadingChild 0.35s both linear;}
			#loading div:nth-child(2){animation:loadingChild 0.35s both linear;animation-delay:0.05s}
			#loading div:nth-child(3){animation:loadingChild 0.35s both linear;animation-delay:0.1s}
			#loading div:nth-child(4){animation:loadingChild 0.35s both linear;animation-delay:0.15s}
			#loading div:nth-child(5){animation:loadingChild 0.35s both linear;animation-delay:0.2s}

			@keyframes loading {
				0% {opacity:1;z-index:100;}
				99% {opacity:0;z-index:100;}
				100% {opacity:0;z-index:-100;display:none;}
			}

			@keyframes loadingChild {
				14.29% {height:20px;}
				28.58% {height:30px;}
				42.87% {height:40px;}
				57.16% {height:50px;}
				71.45% {height:40px;}
				85.74% {height:30px;}
				100% {height:20px;}
			}
		</style>
	`)

	memberChk()
	backHover();
	imgMove();
	scrollAnimate();
	iconMove();
	imgOver();
	splitTxt();
	messageBox();
}

/*모든 버튼의 효과*/
function backHover(){
	$(".social-icon a, #home .btn").mouseenter(function(){
		$(this).css("background","RGB(40, 167, 233)");
	})
	$(".social-icon a, #home .btn").mouseleave(function(){
		$(this).css("background","transparent");
	})
}

/*여수 카페 불투명도 효과*/
function imgMove(){
	var imgBlock = $("#team .team-wrapper")
	$(imgBlock).mouseenter(function(){
		$(this).css({'opacity':'.6','margin-top':'-2px'});
	})
	$(imgBlock).mouseleave(function(){
		$(this).css({'opacity':'1','margin-top':'0px'})
	})
}

/*스크롤 애니메이션*/ 
function scrollAnimate(){
	$(".navbar-default .navbar-nav li a").click(function(){
		var thisHref = $(this).attr('href')
		var scrollOn = $(thisHref).offset().top;
		$('html, body').animate({scrollTop : scrollOn},600);
		var thisTarget = function(){location.href = thisHref}
	})

}

/*여수 티스토리 바운드 효과*/
function iconMove(){
	var iconBtn = $(".media .media-object.pull-left");
	$(iconBtn).mouseenter(function(){
		$(this).css({'margin-top':'20px', 'transition':'.3s'});
	})
	$(iconBtn).mouseleave(function(){
		$(this).css({'margin-top':'00px', 'transition':''});
	}) 
}

/*여수 시티투어 효과*/
function imgOver(){
	var back = $(".col-md-3.col-sm-6.col-xs-12.wow.fadeIn .portfolio-thumb");
	var colorBack = $(".col-md-3.col-sm-6.col-xs-12.wow.fadeIn .portfolio-thumb .portfolio-overlay");
	$(colorBack).mouseenter(function(){
		$(this).css("opacity","1");
	})
	$(colorBack).mouseleave(function(){
		$(this).css("opacity","0");
	})
}

/*타이핑 효과_문장 나누기*/
function splitTxt(){
	var txts = $('.sub-element')
	var saved = []
	txts.each(function () {
		saved.push(this.innerHTML)
	})
	$('.element').empty()
	var delay = 0
	var text = ""
	function textSet (ele, i) {
		var text = ele.substring(0, i)
		setTimeout(function () {
			$('.element').html(text)
		}, delay += 100)
	}
	/*문장을 타이핑 효과로 차례로 가져오기*/
	function play () {
		delay = 0
		saved.forEach(function (ele) {
			for (var i = 0; i < ele.length; i++) {
				textSet(ele, i)
			}
			for (var i = ele.length - 1; i >= 0; i--) {
				textSet(ele, i)
			}
		})
		setTimeout(function () {
			play()
		}, delay)
	}
	play()
}

/*textarea 길이 조절*/
function messageBox(){
	var rows = $("textarea").val().split("\n").length
	$("textarea").attr("rows",rows)
}

/*로그인 기능*/
function login () {
	var id = $('#userid').val()
	var pw = $('#pw').val()
	if( id == 'admin' && pw == '1234'){
		alert('로그인 되었습니다.')
		sessionStorage.setItem('member', 'true')
		location.reload()
	} else {
		alert('아이디 또는 비밀번호가 일치하지 않습니다.')
		location.reload()
	}
}

/*로그아웃 기능*/
function logout () {
	sessionStorage.removeItem('member')
	alert('로그아웃 되었습니다.')
	location.reload()
}

/*멤버 확인*/
function memberChk () {
	var isMember = sessionStorage.getItem('member')
	if (isMember === 'true') {
		$('.mb-btn .login-btn, .mb-btn .join-btn').hide()
	} else {
		$('.mb-btn .logout-btn').hide()
	}
}

/*function galleryUse(){

}*/

$(loadFunction)
.on('click','a[href="#"]',  function (e) {
	e.preventDefault()
})
.on('mouseenter mouseleave', '#service div.col-md-4', function () {
	$(this).toggleClass('active')
})
.on('dblclick keyup','textarea',messageBox)
.on('click', '.modal-content  .login-btn', login)
.on('click', '.mb-btn  .logout-btn', logout)
.on('click','#portfolio .portfolio-thumb .portfolio-overlay', function () {
	$('.gallery-area').css('display','block');
})
.on('dragover mouseover','.gallery-area',  function (e) {
	e.preventDefault()
})
.on('drop','.gallery-area',  function (e) {
	e.preventDefault()

	let files = e.originalEvent.dataTransfer.files
	console.log(files)

	for (let i = 0, f; f = files[i]; i++) {
		const reader = new FileReader()

		reader.onload = (theFile => {
			console.log(theFile.name)
			console.log(theFile.size)
			return evt => {
				$('.gallery-area .now-img').prepend(`
                    <img src="${evt.target.result}" alt="pt1">
				`)
				$('.gallery-area .img-list ul').prepend(`
                    <li>
                        <img src="${evt.target.result}" alt="pt1">
                        <span class="gallery-remove">x</span>
                    </li>
				`)
			}
		})(f)

		reader.readAsDataURL(f)
	}

})
