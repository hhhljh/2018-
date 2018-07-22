function loadFunction(){
	$(".animate-box").addClass("animation animationBefore")
	$("head").append('\
	<style>\
		#fh5co-board{position:relative;}\
		#fh5co-header{position:relative;z-index:20}\
		.animation{transition:1s;opacity:inherit;trasnform:inherit;}\
		.animation.animationBefore{transition:inherit;opacity:0;transform:translateX(100px);}\
		.item:hover{transform:scale(1.2,1.2) rotate(7deg);z-index:20;transition:.3s;}\
		.item{width:calc(25% - 20px);position:absolute;top:50px;}\
		.layer{display:flex;justify-content:center;align-items:center;position:fixed;left:0;right:0;bottom:0;top:0;background:rgba(0,0,0,.4);z-index:100;transition:.5s}\
		.layer .box{background:#fff;box-shadow:0 0 10px #666;border-radius:4px;animation:layerOpen 0.5s;padding:10px 100px;position:relative;text-align:center;max-width:calc(100% - 10px);max-height:calc(100% - 10px)}\
		.layer.close{opacity:0;}\
		.layer.close .box{animation:layerClose 0.5s;}\
		.layer .btn{background:#08f;color:#fff;font-size:11px;position:absolute;text-decoration:none;padding:10px;margin:0 !important;}\
		.layer .layer_close{right:10px;}\
		.layer .layer_close.top{top:10px;}\
		.layer .layer_close.bottom{bottom:10px;}\
		.layer .arrow{top:48%;}\
		.layer .arrow.left{left:10px;}\
		.layer .arrow.right{right:10px;}\
		.layer img{max-width:100%;max-height:90vh}\
		@keyframes layerOpen {\
			from {opacity:0;transform:translateY(-100px) scale(0.5,0.5);}\
			to {opacity:inherit;transform:inherit;}\
		}\
		@keyframes layerClose {\
			from {opacity:inherit;transform:inherit;}\
			to {opacity:0;transform:translateY(-100px) scale(0.5,0.5);}\
		}\
	</style>')
	itemSet();
}

function menuClose(){
	$("#fh5co-offcanvass").css({
		transform:''
	})
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
	loadAnimation();
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

var layerIdx = 0;
function layerOpen(){
	$(".layer").remove();
	layerIdx = $(this).index();
	var idx = layerIdx + 1;
	var total = $(".item").length;
	var desc = $(".fh5co-desc",this).html();
	var layerTemplate = '\
		<div class="layer">\
			<div class="box">\
				<a href="#" class="btn top layer_close">닫기</a>\
				<a href="#" class="btn bottom layer_close">닫기</a>\
				<a href="#" class="btn arrow left">앞으로 가기</a>\
				<a href="#" class="btn arrow right">뒤로 가기</a>\
				<img src="images/img_'+idx+'.jpg" alt="test">\
				<p>'+desc+'</p>\
				<p>현재 사진 번호 : '+idx+'번 / 전체 사진 수  '+total+'개</p>\
			</div>\
		</div>\
	';
	$("body").append(layerTemplate);
	return false;
}

function layerClose(){
	$(".layer").addClass("close")
	setTimeout(function(){
		$(".layer").remove()
	},300)
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



$(loadFunction)
.on("click","a[href='#']",function(){ return false;})
.on("click",".fh5co-menu-btn",function(){
	$("#fh5co-offcanvass").css({
		transform:'inherit'
	})
})
.on("click","#fh5co-header, #fh5co-main, #fh5co-footer, .js-fh5co-offcanvass-close, .item",menuClose)
.on("click",".item",layerOpen)
.on("click",".layer_close",layerClose)
.on("click",".layer .arrow",layerChange)

$(window)
.on("scroll",loadAnimation)
.on("resize",itemSet) 