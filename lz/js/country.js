$(document).ready(function(){
//tog
  $("#tog").click(function(){
 	 $("#goodsContent").toggle();
  });
// share
  $("#share").mouseenter(function(){
  	$("#share").animate({left: '0px'});
  });
  $("#share").mouseleave(function(){
  	$("#share").animate({left: '-226px'});
  });
 //creDital
  $("#cre").mouseenter(function(){
  	$("#creDital").css("display","block");
  });
  $("#cre").mouseleave(function(){
  	$("#creDital").css("display","none");
  });

});

window.onload=function(){
	var ojcarouselUl = document.getElementById('jcarouselUl');
	var ajcarouselLi = ojcarouselUl.getElementsByTagName('li');

	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');

	for (var i = 0;i < ajcarouselLi.length;i++) {
		ajcarouselLi[i].style = "display:block";
		var liWidth = ajcarouselLi[0].offsetWidth;
		//当left大于3个li宽度时隐藏。以及left小于0时隐藏
		if (ajcarouselLi[i].offsetLeft < liWidth*4 && ajcarouselLi[i].offsetLeft > 0) {
			ajcarouselLi[i].style = "display:block";
		} else {
			ajcarouselLi[i].style = "display:none";
		}

	}

	
	// 点击左右按钮换图
	oPrev.onclick = function(){
		for (var i = 0;i < ajcarouselLi.length;i++) {
			ajcarouselLi[i].style = "display:block";
			ajcarouselLi[i].style.left = -liWidth*4+'px';
		}
		
	}

	oNext.onclick = function(){
		for (var i = 0;i < ajcarouselLi.length;i++) {
			ajcarouselLi[i].style = "display:block";
			ajcarouselLi[i].style.left = 41+'px';
			if (ajcarouselLi[i].offsetLeft < liWidth*4 && ajcarouselLi[i].offsetLeft > 0) {
			ajcarouselLi[i].style = "display:block";
		} else {
			ajcarouselLi[i].style = "display:none";
		}
		}
	}


}