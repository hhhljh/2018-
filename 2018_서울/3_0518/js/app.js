function loadFunction(){
	$(".animate-box").addClass("animation animationBefore")
	$("head").append('\
	<style>\
		#fh5co-board{position:relative;}\
		#fh5co-header{position:relative;z-index:20;}\
		.item{width:calc(25% - 20px);position:absolute;top:50px;}\
		.item:hover{transform:translateX(15px);z-index:20;transition:.3s;}\
		.item:hover img{transform:translatex(0px);z-index:50;}\
		.animation{transition:1s;opacity:inherit;transform:inherit;}\
		.animation.animationBefore{transition:inherit;opacity:0;transform:translatex(70px);}\
		.layer{display:flex;position:fixed;z-index:100;justify-content:center;align-items:center;background:rgba(0,0,0,.5);left:0;right:0;bottom:0;top:0;}\
		.layer .box{background:#fff;max-widht:calc(100% - 10px);max-height:calc(100% - 10px);padding:15px 100px;border-radius:10px;text-align:center;position:relative;}\
		.layer .btn{background:#08f;color:#fff;font-size:12px;position:absolute;padding:10px;}\
		.layer .layer_close{right:10px;}\
		.layer .layer_close.top{top:10px;}\
		.layer .layer_close.bottom{bottom:10px;}\
		.layer .arrow{top:48%;}\
		.layer .arrow.left{left:10px;}\
		.layer .arrow.right{right:10px;}\
		.layer img{max-width:90%;max-height:90%;}\
		.layer.close{opacity:0;}\
		.snow{background:#fff;border-radius:50%;position:fixed;width:20px;height:20px;left:inherit;}\
		.fall{animation: fall 2s infinite linear;}\
		@keyframes fall {\
			0% {top:0%;}\
			100% {top:100%;}\
		}\
	</style>')
	itemSet();
	snowFall();
	$(".item").addClass('shake')
}
function itemSet(){
	var topPos = [50,50,50,50];
	$(".item").each(function(idx){
		var pos = idx % 4;
		$(this).css({
			left:pos*25+"%",
			top:topPos[pos]+"px"
		})
		topPos[pos] = topPos[pos]+$(this).height()+20;
	})
	var max = topPos[0];
	for(var i=1; i<4; i++){
		if(max < topPos[i]) max = topPos[i];
	}
	$("#fh5co-board").height(max)
}
function loadAnimation(){
	var st = $(window).scrollTop();
	var sb = st + $(window).height();
	$(".animate-box").each(function(index){
		var obj = $(this);
		var ot = obj.offset().top;
		var ob = ot + obj.outerHeight();
		if(st < ot && ob < sb){
			$(this).removeClass("animationBefore");
		} else {
			$(this).addClass("animationBefore");
		}
	})
	menuClose();
}
function menuClose(){
	$("#fh5co-offcanvass").css({
		transform:''
	})
}
var layerIdx = 0;
function layerOpen(){
	$(".layer").remove();
	layerIdx = $(this).index();
	var idx = layerIdx + 1;
	var total = $(".item").length;
	var desc = $("#fh5co-desc",this).html();
	var layerTemplate = '\
		<div class="layer">\
			<div class="box">\
				<a href="#" class="btn top layer_close top">닫기</a>\
				<a href="#" class="btn bottom layer_close bottom">닫기</a>\
				<a href="#" class="btn arrow left">앞으로 가기</a>\
				<a href="#" class="btn arrow right">뒤로 가기</a>\
				<img src="images/img_'+idx+'.jpg" alt="img_'+idx+'">\
				<p>'+desc+'</p>\
				<p>현재 사진 번호 : '+idx+'번 / 전체 사진 수 : '+total+'개</p>\
			</div>\
		</div>\
	';
	$("body").append(layerTemplate);
	return false;
}
function layerChange(){
	var total = $(".item").length;
	if($(this).hasClass("left")){
		if(--layerIdx < 0) layerIdx = total-1;
	} else {
		if(++layerIdx >= total) layerIdx = 0;
	}
	$(".item").eq(layerIdx).click();
}
function layerClose(){
	$(".layer").addClass("close")
	setTimeout(function(){
		$(".layer").remove()
	},300)
}
function snowFall (){
			for(var j = 1; j <= 50; j++){
				var template = '<div class="snow fall snow'+(j)+'"></div>'
				var randX = parseInt((Math.random()*1600));
				if(j<=25){
					var randY = parseInt((Math.random()*1000));
				} else if(j>25){
					var randY = parseInt((Math.random()*1000))*-1;
				}
				$("style").append('.snow'+j+'{left:'+randX+'px;transform:translateY('+randY+'px);}')	 
				$("body").append(template);
			}
		}
$(loadFunction)
.on("click","a[herf='#']",function(){return false;})
.on("click",".fh5co-menu-btn",function(){
	$("#fh5co-offcanvass").css({
		transform:'inherit'
	});
})
.on("click","#main, .fh5co-offcanvass-close, .item",menuClose)
.on("click",".item",layerOpen)
.on("click",".layer_close",layerClose)
.on("click",".layer .arrow",layerChange)

$(window)
.on("scroll",loadAnimation)
.on("size",layerOpen)