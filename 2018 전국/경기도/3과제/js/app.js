
var Init = new Init();
var Make = new Make();
var Tool = new Tool();
var Canvas = new Canvas();

Init.Init();

var Making = false;
var Create_height;

function Init(){
	this.Init = function(){
		Init.add();
		Init.Style();
		Init.Event();
		
	}
	this.add = function(){
		$("body").append(`<img id="colorStripImg" src="../image/img2.png"/><canvas id="colorStrip" width="178px" height="10px"/>`);
		$("#colorOption").attr({"min":0,"max":178});
		$("#colorOption2").attr({"min":0,"max":178});
	}
	// all style
	this.Style = function(){
		$("head").append(`
		<style>
			#colorStripImg{display:none;width:178px;height:10px}
			#colorStrip{}
			.makeViewon{display:block !important}
			.startoff{display:none}
			.leftMenuon{left:0 !important;z-index:999}
			.btnOpacity{opacity:0.5}

			.layer{width:100%;height:100%;position:relative}
			.rect{position:absolute;background:white;border:1px solid black;}
			.text{position:absolute;}
			.preview{position:absolute;z-index:998;border:1px solid black}
			div[contenteditable=true] {display:inline-block}

			.rightClickOption1on{display:block !important}
		</style>`);
	}
	// all event
	this.Event = function(){
		$(document).bind("selectstart",function(){return false});
		$(document).on("contextmenu",function(){return false});
		$(document).on("click","#makeWebBtn",function(){Make.Create()});
		$(document).on("keydown",function(e){Make.Tab(e)})
		$(document).on("click",".btnBlock",function(){Tool.Pointer(this)});
		$(document).on("change","#colorOption",function(e){Canvas.range(this)})
		$(document).on("change","#colorOption2",function(e){Canvas.alpha(this)})
		$(document).on("click","#colorSelectView",function(e){Canvas.click(e)})
		$("div[contenteditable=trul]").keydown(function(e){if(e.keyCode == 13){document.execcommand('insertHTML',false,'<br><br>');return false;}})

	}
}
function Make(){
	// canvas start
	this.Create = function(){
		Create_height = prompt("높이입력");
		if(/^[0-9]*$/.test(Create_height) && Create_height > 0){
			$("#makeView").addClass("makeViewon");
			$("#makeView").css({"height":Create_height});
			$("#start").addClass("startoff");
			$("#makeView").append(`<div class="layer"></div>`)
			Making = true;
		}else{
			Making = false;
		}
	}
	// tab event
	this.Tab = function(e){
		if(e.which == 9 && Making ){
		e.preventDefault();
			$("#leftMenu").toggleClass("leftMenuon");
		}
	}
	this.Option = function(target,before,after){
		if(before.x == after.x && before.y == after.y){
			if($(target).attr("class") == "rect"){
				$("#rightClickOption1").addClass("rightClickOption1on");
				$(".rightClickOption1on").css({"top":after.y,"left":after.x});

				var background = $(target).css("background-color");
				var stroke = $(target).css("border-color");
				$(".currentColor").eq(0).css({"background":background});
				$(".currentColor").eq(1).css({"background":stroke});


				Canvas.rect();
			}
			// else if($(target).attr("class") == "text"){
				
			// }
		}
		return;
	}
	this.Optionremove = function(target){
		console.log(target);
		if(!target){

			$("#rightClickOption1").removeClass("rightClickOption1on");
			$("#textOption").removeClass("textOptionon");
		}else{
			console.log(1);
			$(target).removeClass(target+"on");
		}
	}
}
function Tool(){
	this.Pointer = function(th){
		var eq = $(th).index();
		$(".btnBlock").removeClass("btnOpacity");
		$(th).addClass("btnOpacity");
		$(document).unbind("mouseueup mousemove");
		$(".layer").unbind("mousedown");
		switch(eq){
			case 0:
				Tool.Mouse("move");
			 break;
			case 1:
				Tool.Mouse("text");
			 break;
			case 2:
				Tool.Mouse("rect");
			 break;
			case 3:

			 break;
			case 4:

			 break;
		}
	}
	this.Mouse = function(what){
		var before = {x:null,y:null};
		var after = {x:null,y:null};
		var target;
		var rightmouse = false;

		var target_left;
		var target_top;
		what == "text" ? $(document).unbind("selectstart") : $(document).bind("selectstart",function(){return false});
		$(".layer").on("mousedown",function(e){
			rightmouse = e.buttons == 2 ? true : false; 
			target = $(e.toElement).attr("class") == "text" || $(e.toElement).attr("class") == "rect"  ? e.toElement : ""; 
			target =  e.toElement.offsetParent.className == "text" ? e.toElement.offsetParent : target;
			before.x = e.pageX;
			before.y = e.pageY;

			target_left = before.x - parseInt($(target).css("left"));
			target_top = before.y - parseInt($(target).css("top"));
		})
		$(document).on("mousemove",function(e){
			if(before.x == null || before.y == null || rightmouse == true)return;
			
			//preview rect , move
			if(what == "rect"){
				var width = Math.abs(e.pageX - before.x);
				var height = Math.abs(e.pageY - before.y);
				var top = before.y < e.pageY ? before.y : e.pageY;
				var left = before.x < e.pageX ? before.x : e.pageX;

				$(".preview").remove();
				$(".layer").prepend(`<div class="preview" style="width:${width}px;height:${height}px;top:${top}px;left:${left}px;"></div>`);
			}else if(what == "move"){

				var top = e.pageY - target_top;
				var left = e.pageX - target_left;


				var temp_height = parseInt($(target).css("height"));
				var temp_width = parseInt($(target).css("width"));
				var Create_width = parseInt($("#makeView").css("width"));
				//target over Create_height and Create_width
				top = top + temp_height > Create_height ? Create_height - temp_height : top < 0 ? 0 : top;
				left = left + temp_width > Create_width ? Create_width -  temp_width : left < 0 ? 0 : left;
				$(target).css({"top":top,"left":left});
			}

		})
		$(document).on("mouseup",function(e){
			if(before.x == null || before.y == null)return;

			//mouse over Create_height
			if(e.pageY > Create_height){
				after.x = e.pageX;
				after.y = Create_height;
			}else{
				after.x = e.pageX;
				after.y = e.pageY;
			}

			//right mouse click
			if(e.button == 2 && rightmouse == true){ 
				Make.Option(e.toElement,before,after);before = {x:null,y:null};after = {x:null,y:null};return; 
			}else{Make.Optionremove()}

			switch(what){
				case"move":
					Tool.move(before,after);
				break;
				case"text":
					Tool.text(e.toElement,before,after);					
				break;
				case"rect":
					Tool.rect(before,after);
				break;
			}
			before = {x:null,y:null};
			after = {x:null,y:null};
			rightmouse = false;
			$(".preview").remove();
		})
	}
	this.move = function(){

	}
	this.text = function(target,before,after){
		if(before.x != after.x || before.y != after.y)return;

		if($(target).attr("class") == "text" ||  target.offsetParent.className == "text" ){
			$(target).focus();
			return;
		}
		var temp = `<div contenteditable="true" class="text" style="top:${after.y}px;left:${after.x}px"></div>`;
		$(".layer").append(temp);
		$(".text:last-child").focus();
	}
	this.rect = function(before,after){
		var width = Math.abs(after.x - before.x);
		var height = Math.abs(after.y - before.y);
		var left = before.x < after.x ? before.x : after.x;
		var top = before.y < after.y ? before.y : after.y;
		temp = `<div class="rect" style="width:${width}px;height:${height}px;top:${top}px;left:${left}px"></div>`;
		$(".layer").append(temp);
	}
}
function Canvas(){
	var colorBlock;
	var colorStrip;

	var ctx1;
	var ctx2;
	var rgbColor = 'rgba(255,0,0,1)';

	this.Init = function(){
		colorBlock = document.getElementById("colorSelectView");
	 	ctx1 = colorBlock.getContext("2d");

		Canvas.setImgStrip();
	 	Canvas.fillGradient();

	 }
	this.setImgStrip = function(){
		var imgStrip = document.getElementById("colorStripImg");
		colorStrip = document.getElementById("colorStrip");
	 	ctx2 = colorStrip.getContext("2d");

	 	ctx2.drawImage(imgStrip,0,0,178,18);
	} 
	this.fillGradient = function(){
		ctx1.fillStyle = rgbColor;
		ctx1.fillRect(0,0,200,120);


		var grdWhite = ctx2.createLinearGradient(0,0,200,0);
		grdWhite.addColorStop(0,'rgba(255,255,255,1)');
		grdWhite.addColorStop(1,'rgba(255,255,255,0)');
		ctx1.fillStyle = grdWhite;
		ctx1.fillRect(0,0,200,120);

		var grdBlack = ctx2.createLinearGradient(0,0,0,120);
		grdBlack.addColorStop(0,"rgba(0,0,0,0)");
		grdBlack.addColorStop(1,"rgba(0,0,0,1)");
		ctx1.fillStyle = grdBlack;
		ctx1.fillRect(0,0,200,120);

	}
	this.click = function(e){
		console.log(e);
		var lo = {x:e.offsetX,y:e.offsetY};
		var temp = ctx1.getImageData(lo.x,lo.y,1,1).data;
		console.log(temp);

	}
	this.range = function(th){
		var persent = $(th).val();
	
		var temp = ctx2.getImageData(persent,0,1,1).data;

		rgbColor = `rgba(${temp[0]},${temp[1]},${temp[2]},${temp[3]})`;
		Canvas.fillGradient();
	}
	this.alpha = function(th){
		var persent = $(th).val();

	}
	this.rect = function(){
		Canvas.Init();
	}
}