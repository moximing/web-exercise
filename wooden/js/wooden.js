window.onload=function(){
	var oUl=document.getElementsByTagName('ul')[0];
	var aA=oUl.getElementsByTagName('a');

	var oDiv=document.getElementById('social');
	var aDiv=oDiv.getElementsByTagName('div');
	
	var oDiv2=document.getElementById('content');
	var aDiv2=oDiv2.getElementsByTagName('div');
	
	for (var i = 0; i < aA.length; i++) {
		aA[i].onmouseover=function(){
			startMove(this, {opacity: 100, fontSize: 26, 
				color:(135,59,17)});
		}
		aA[i].onmouseout=function(){
			startMove(this, {opacity: 70, fontSize: 24, 
			color:(90,33,4)});
		}
	};

	for (var i = 0; i < aDiv.length; i++) {
		aDiv[i].onmouseover=function(){
			startMove(this, {backgroundPositionX: -5});
		}
		aDiv[i].onmouseout=function(){
			startMove(this, {backgroundPositionX: -15});
		}
	};


		aDiv2[0].onmouseover=function(){
			this.style.webkitTransform=
				"matrix(1,0.2,0,1,70,-15)";
//			this.style.transform=
//				"matrix(1,0.2,0,1,70,-15)";
			this.style.zIndex=2;
			this.style.opacity=1;
		}
		aDiv2[0].onmouseout=function(){
			this.style.webkitTransform=
				"matrix(0.9,0.2,0,0.9,70,-15)";
//			this.style.transform=
//				"matrix(0.9,0.2,0,0.9,70,-15)";
			this.style.zIndex=0;
			this.style.opacity=0.7;
		}
		aDiv2[1].onmouseover=function(){
			this.style.webkitTransform=
				"matrix(1.1,0,0,1.1,0,5)";
//			this.style.transform=
//				"matrix(1.1,0,0,1.1,0,5)";
			this.style.zIndex=2;
			this.style.opacity=1;
		}
		aDiv2[1].onmouseout=function(){
			this.style.webkitTransform=
				"matrix(1,0,0,1,0,5)";
//			this.style.transform=
//				"matrix(1,0,0,1,0,5)";
			this.style.zIndex=1;
			this.style.opacity=0.9;
		}
		aDiv2[2].onmouseover=function(){
			this.style.webkitTransform=
				"matrix(1,-0.2,0,1,-70,-15)";
//			this.style.transform=
//				"matrix(1,-0.2,0,1,-70,-15)";
			this.style.zIndex=2;
			this.style.opacity=1;
		}
		aDiv2[2].onmouseout=function(){
			this.style.webkitTransform=
				"matrix(0.9,-0.2,0,0.9,-70,-15)";
//			this.style.transform=
//				"matrix(0.9,-0.2,0,0.9,-70,-15)";
			this.style.zIndex=0;
			this.style.opacity=0.7;
		}
	


}