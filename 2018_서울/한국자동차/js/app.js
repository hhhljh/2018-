function loadFunction(){
	$("animate-box").addClass("animation animationBefore")
	$("head").append('\
		<style>\
			#fh5co-header{position:relative;z-index:20}\
			#fh5co-board{position:relative;}\
			.item{position:absolute;width:calc(25% - 20px);top:50px;}\
		</style>\
		')
	itemSet();
}

function itemSet(){
	var topPos = [50,50,50,50];
	$(".item").each(function(idx){
		var pos = idx  % 4;
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

$(loadFunction)
.on("click","a[href='#']",function(){return false;})
.on("click","")

$(window)
.on("resize",itemSet)