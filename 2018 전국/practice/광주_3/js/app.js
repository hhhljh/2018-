function loadFunction (){
	$("head").append('\
		<style>\
		#top>.navbar{position:sticky;top:0;}\
		ul.navbar-right li a:hover{color:#ff4e00 !important;}\
		\
		</style>\
		')
	backHover();
	imgMove();
	scrollAnimate();
	iconMove();
}

function backHover(){
	$(".social-icon a, #home .btn").mouseenter(function(){
		$(this).css("background","RGB(40, 167, 233)");
	})
	$(".social-icon a, #home .btn").mouseleave(function(){
		$(this).css("background","transparent");
	})
}

function imgMove(){
	var imgBlock = $("#team .team-wrapper")
	$(imgBlock).mouseenter(function(){
		$(this).css({'opacity':'.6','margin-top':'-2px'});
	})
	$(imgBlock).mouseleave(function(){
		$(this).css({'opacity':'1','margin-top':'0px'})
	})
}

function scrollAnimate(){
	$(".navbar-default .navbar-nav li a").click(function(){
		var thisHref = $(this).attr('href')
		var scrollOn = $(thisHref).offset().top;
		$('html, body').animate({scrollTop : scrollOn},600);
	})

}

function iconMove(){
	var iconBtn = $(".media .media-object.pull-left");
	$(iconBtn).mouseenter(function(){
		$(this).css({'margin-top':'20px', 'transition':'.3s'});
	})
	$(iconBtn).mouseleave(function(){
		$(this).css({'margin-top':'00px', 'transition':''});
	}) 
}

$(loadFunction)
.on('mouseenter mouseleave', '#service div.col-md-4', function () {
	$(this).toggleClass('active')
})