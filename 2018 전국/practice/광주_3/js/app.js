function loadFunction ( ){
	$("head").append('\
		<style>\
			.social-icon a:hover{background:#28a7e9}\
			.navbar{position:sticky;top:0;}\
		</style>\
		')
	typingAnimation();
}

//function loadAnimation  () {
//	$.ajax({
//		type: "POST",
//		url: "index.html",
//		data: "",
//		success: function(){
//
//		}
//	})
//}
//
//function loadBlock (){
//		var load = '\
//		<div class="loading">\
//			<div class="block"></div>\
//			<div class="block"></div>\
//			<div class="block"></div>\
//			<div class="block"></div>\
//		<div>\
//	'
//}

function typingAnimation (){
	var str = new Array();
	var str1 = $('.sub-element:nth-child(1)').text();
	var str2 = $('.sub-element:nth-child(2)').text();
	var str3 = $('.sub-element:nth-child(3)').text();
	str[0]= str1;
	str[1]= str2;
	str[2]= str3;
	console.log(str[1])

	$('.sub-element').text("");
	var strLength = new Array();
	var str1Length = str[0].length;
	var str2Length = str[1].length;
	var str3Length = str[2].length;
	strLength[0] = str1Length;
	strLength[1] = str2Length;
	strLength[2] = str3Length;
	console.log(str1Length + "length")
	console.log(str2Length + "length")
	console.log(str3Length + "length")
	var i = 0;
	var j = 0;
	setInterval(function(){
		if(j < strLength){
			$('.sub-element').append(str[i][j]);
			j++;
			console.log(str[i][j]);
		} else if(j > strLength){
			i++;
			j = 0;
			break;
		}
	},200)

}

$(loadFunction)
