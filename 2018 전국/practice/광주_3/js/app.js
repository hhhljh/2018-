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
	imgOver();
	splitTxt();
	typingTxt();
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
		var thisTarget = function(){location.href = thisHref}
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

function splitTxt(){
	var allText = $(".element .sub-element").text();
	var text = allText.split("다.");
	var textReal0 = text[0]+"다.";
	var textReal1 = text[1]+"다.";
	var textReal2 = text[2]+"다.";
	console.log(textReal2);
	function typingTxt(cont1,cont2,speed){
		var Otxt = cont1.text();
		var Ocont = Otxt.split("");
		var i = 0;
		function show(){
			if(i<Ocont.length){
				cont2.append(Ocont[i]);
				i++;
			};
		};
		var Otimer = setInterval(show,speed);
	};
	typingTxt();
}


$(loadFunction)
.on('mouseenter mouseleave', '#service div.col-md-4', function () {
	$(this).toggleClass('active')
})