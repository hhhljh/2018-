function loadOn(){
	$("head").append('\
		<style>\
			.animation{transition:.5s;transform:inherit;opacity:inherit;}\
			.animation.animationBefore{transition:.5s;transform:translateX(100px);opacity:0;}\
			.animate-box:hover{animation:pulse .7s infinite}\
			#fh5co-header{position:relative;z-index:10}\
			#fh5co-board{position:relative;}\
			.item{position:absolute;width:calc(25% - 20px)}\
			.layer{position:fixed;background:rgba(0,0,0,.5);z-index:1000;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;}\
			.layer>img{max-width:60%;max-height:50%;position:fixed;}\
			.layer>button{position:fixed;width:150px;height:40px;}\
			.layer>.close_btn{right:10%;}\
			.layer>.close1{top:10%;}\
			.layer>.close2{bottom:10%;}\
			.layer>.back{top:45%;left:15%;}\
			.layer>.go{top:45%;right:15%;}\
			.layer>.content{background:#fff;text-align:center;position:fixed;bottom:10%;}\
			.snow{background:#fff;border-radius:50%;position:fixed;}\
		</style>\
	')
	$(".item").addClass('animation animationBefore');
	itemSet();
	snow();
}

function color () {
	var color;
	var r,g;
	for (var i = 0; i <= 100; i++) {
		var Rcolor = function(){ while(1){ r = parseInt(Math.random()*10) + parseInt(Math.random()*100) + parseInt(Math.random()*1000); if(r <= 255) break;} return r}();
		var Gcolor = function(){ while(1){ g = parseInt(Math.random()*10) + parseInt(Math.random()*100) + parseInt(Math.random()*1000); if(g <= 255) break;} return g}();
		var Bcolor = function(){ while(1){ var b = parseInt((r+g)/2); if(b <= 255) break;} return b}();
		color += i+'% { background:rgb('+Bcolor+', '+Gcolor+', '+Bcolor+')}';
	}
	$("style").append('body {background:rgb('+Bcolor+', '+Gcolor+', '+Bcolor+'); animation:color 5s infinite 1s;}\
		@keyframes color{'+color+'}\
	');
}

function snow(){
	for(var j = 1; j <= 100; j++){
		var snow_first = "@keyframes snowAnimation"+j+"{"
		var snow;
		for(var i = 0; i <= 100; i+=5){
			if(i == 0) snow += i+"% {left:"+Math.random() * 100+"%;top:"+i+"%;}";
			else snow += i+"% {transform:translate("+i*5+"px);top:"+i+"%;}";
		}
		var snow_last = "}";
		snow = snow_first + snow + snow_last;
		$("style").append(snow);
		var size = parseInt(Math.random() * 20);
		$("body").append('\
			<div class="snow snow'+j+'" style="width:'+size+'px;height:'+size+'px;animation:snowAnimation'+j+' '+parseInt(Math.random() * 10)+'s linear '+parseInt(Math.random() * 10)+'s infinite ;"></div>\
		')
		var st = $(window).scrollTop();
		var sh = $(window).height();
		var sb = st + sh;
	}
}

function itemSet(){
	var before = [50,50,50,50];
	var width = $("#fh5co-board").width() / 4;
	var left = [0,width,width*2,width*3];
	$(".item").each(function(index){
		var pos = index % 4;
		$(this).css({left:left[pos]+"px",top:before[pos]+"px"});
		before[pos] = before[pos] + $(this).height() + 10;
	});
	var max = before[0];
	for (var i = 1; i < before.length; i++) {
		if(before[i] > max) max = before[i];
	}
	$("#fh5co-board").height(max);
	scrollAction();
}

function scrollAction(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var sb = st + sh;
	$(".item").each(function(index) {
		var ot = $(this).offset().top;
		var oh = $(this).outerHeight();
		var ob = ot + oh;
		if(st <= ot && ob <= sb){
			if($(this).hasClass('animationBefore')) $(this).removeClass('animationBefore');
		} else {
			if(!$(this).hasClass('animationBefore')) $(this).addClass('animationBefore');
		}
	});
}

function layerOpen(){
	$(".layer").remove();
	var idx = $(this).parents(".item").index();
	var len = $(".item").length;
	$("#fh5co-main").append('\
		<div class="layer">\
			<img src="images/img_'+(idx+1)+'.jpg" alt="img'+idx+'" />\
			<button type="button" class="back">이전</button>\
			<button type="button" class="go">다음</button>\
			<button type="button" class="close_btn close1">닫기</button>\
			<button type="button" class="close_btn close2">닫기</button>\
			<div class="content">\
				<p>전체 사진 수 : '+len+'/ 현재 사진 번호 : '+(idx+1)+'</p>\
			</div>\
		</div>\
	');
	$(".layer>.close_btn").click(function(){
		$(".layer").remove();
	})
	$(".layer>.back").click(function(){
		idx--;
		if(idx < 0) idx = len - 1;
		$(".animate-box>a>img").eq(idx).click();
	})
	$(".layer>.go,.layer>img").click(function(){
		idx++;
		if(idx == len) idx = 0;
		$(".animate-box>a>img").eq(idx).click();
	})
}

function menuOpen(){
	$("#fh5co-offcanvass").css({transform:"inherit"});
}

function menuClose(){
	$("#fh5co-offcanvass").css({transform:"translateX("+320+"px)"});
}

$(loadOn)
.on("click",".fh5co-menu-btn",menuOpen)
.on("click",".fh5co-offcanvass-close",menuClose)
.on("click","a",function(){ return false; })
.on("click",".animate-box>a>img",layerOpen)

$(window)
.on("scroll",scrollAction)