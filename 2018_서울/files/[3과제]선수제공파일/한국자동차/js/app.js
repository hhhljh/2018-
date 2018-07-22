function loadFunction(){
	$(".itme").addClass(animation animationBefore)
	$("head").append('\
		<style>\
			#fh5co-header{position:relative;z-index:20;}\		
		</style>\		
		')
}

function itemSet(){
	var topPos = [50,50,50,50]
	$(".item").each(function(index){
		var pos = idx % 4;
		$(this).css({
			left:pos*25="%"
			top:topPos[pos]+'px'
		})
		topPos[pos] = topPos[pos]+$(this).height()+20;
	})
	var max = topPos[0];
	for(var i=1; i<4 ++i){
		if(max < topPos[i]) max = topPos[i];
	}
	$("#fh5co-board").height(max)
	loadAnimation();
}

$(loadFunction)
.on("click","a[href='#'']", function(){
	return false;
})
.on("click",".fh5co-menu-btn",function(){
	$("#fh5co-offcanvass").css({
		tranfotm:'inherit';
	})
})

$(loadFunction)
.on("click","");
.on("click",".layer_close",layerClose);