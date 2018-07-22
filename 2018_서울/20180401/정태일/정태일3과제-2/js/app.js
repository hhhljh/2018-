function siteLoad(){
	$("#gallery li").addClass("animation animationBefore");
	$("head").append("\
		<style>\
		#header>div{transition:.3s}\
		#header>div.active{margin-right:0}\
		#gallery li:hover{transform:rotate(10deg) scale(1.2);z-index:20}\
		.animation{opacity:inherit;transform:inherit;transition:.3s;}\
		.animation.animationBefore{opacity:0;transform:translateY(100px);transition:inherit;}\
		.gnb div.style{display:flex;flex-flow:column;margin:20px 0px;position:absolute;bottom:0px;height:100px;justify-content:space-between}\
		</style>\
		");
	$(".gnb").append('<div class="style">\
		<i class="fab fa-facebook-square">Facebook</i>\
		<i class="fab fa-facebook-square">Facebook</i>\
		<i class="fab fa-facebook-square">Facebook</i>\
		<i class="fab fa-facebook-square">Facebook</i>\
		</div>\
		')
	loadAnimation();
}

function menuOpen(){
	$("#header>div").addClass("active");
}
function menuClose(){
	$("#header>div").removeClass("active");
}


function loadAnimation(){
	var st = $(window).scrollTop();
	var sb = st+$(window).height();
	$("#gallery li").each(function(index){
		var obj = $(this);
		var ot = obj.offset().top;
		var ob = ot+obj.outerHeight();
		if (st < ot && ob < sb) {
			$(this).removeClass("animationBefore");
		} else{
			$(this).addClass("animationBefore");
		}
	})
}

$(siteLoad)
.on("click","#header .menu",menuOpen)
.on("click","#gallery li",modal)
.on("click","#header .close",menuClose)
.on("click",".content_wrap",menuClose)
$(window).on("scroll",menuClose)
$(window).on("scroll",loadAnimation)