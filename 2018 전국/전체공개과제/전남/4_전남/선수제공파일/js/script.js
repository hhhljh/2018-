$(function(){

	score_icon();
	flexAlign();
	textOverFlow();

});

function score_icon(){
	var obj = ".js-score i";
	$(obj).click(function(e){
		var max = $(obj).index(this);
		$(obj).removeClass('on');
		for(var i = 0; i <= max; i++){
			$(obj).eq(i).addClass('on');
		}
		get_score(i);
	});
}

function get_score($score){
	var obj = "input.js-getScore";
	$(obj).val($score);
}

function flexAlign(){
	var obj = ".js-flexAlign";
	for(var i = 0; i < 3; i++){
		$(obj).append('<div class="empty"></div>');
	}
}

function textOverFlow(){
	var obj = ".js-overFlow";
	$(obj).each(function(i, e) {
		var string = $(e).text();
		var stringLength = string.length;
		var max = 55;

		if ( $(e).data('length') ) max = $(e).data('length');

		if ( stringLength > max) {
			$(e).text(string.substr(0,max) + "...");
		}
	});
}