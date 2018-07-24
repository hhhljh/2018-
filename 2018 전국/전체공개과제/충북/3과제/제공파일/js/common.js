// common.js


$(function(){

	// login
	$(".login_btn").click(function(e){
		$(".bg").css({'z-index':'1','opacity':'1'});
		$(".login").show();

		$(".bg span").click(function(e){
			$(".bg").css({'z-index':'-1','opacity':'0'});
			$(".login").hide();
		});
	});

	// join
	$(".join_btn").click(function(e){
		$(".bg").css({'z-index':'1','opacity':'1'});
		$(".join").show();

		$(".bg span").click(function(e){
			$(".bg").css({'z-index':'-1','opacity':'0'});
			$(".join").hide();
		});
	});

	// upload
	$(".upload_btn").click(function(e){
		$(".bg").css({'z-index':'1','opacity':'1'});
		$(".upload").show();

		$(".bg span").click(function(e){
			$(".bg").css({'z-index':'-1','opacity':'0'});
			$(".upload").hide();
		});
	});

});