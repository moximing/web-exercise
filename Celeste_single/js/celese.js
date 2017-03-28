$(document).ready(function(){
	$(".article_nav").find("dt:first").addClass("active");	
	$(".article_nav").find("dt").mouseenter(function(e){
		e.preventDefault();
		$(".article_nav").find("dt").removeClass("active");
		$(this).addClass("active");
	});
});
	
