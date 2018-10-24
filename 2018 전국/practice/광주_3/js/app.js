function loadFunction (){
	$("head").append('\
		<style>\
		#top>.navbar{position:sticky;top:0;}\
		ul.navbar-right li a:hover{color:#ff4e00 !important;}\
		#contact #message{resize: vertical;}\
		</style>\
		')
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
	var allText = $(".element .sub-element").text();
	var text = allText.split("다.");
	var real0 = text[0]+"다.";
	var real1 = text[1]+"다.";
	var real2 = text[2]+"다.";
	console.log(textReal2);
}

function messageBox(){
	var rows = $("textarea").val().split("\n").length
	$("textarea").attr("rows",rows)
}


$(loadFunction)
.on('mouseenter mouseleave', '#service div.col-md-4', function () {
	$(this).toggleClass('active')
})
.on('dblclick','textarea',messageBox)