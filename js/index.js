//var v = 1 - $(window).scrollTop();

$(window).scroll(function(){
    $("#tops").css("opacity", 1 - $(window).scrollTop() / 200);
	if(1 - $(window).scrollTop() / 200 < .75){
		$("#tops").slideUp();
		$("#header").css("font-size", "30px");
	}else{
		$("#tops").slideDown();
		$("#header").css("font-size", "45px");
	}
	
 });


