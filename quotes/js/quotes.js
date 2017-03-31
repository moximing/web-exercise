window.onload = function() {
  function ele(eleId) {
    return document.getElementById(eleId);
  }
     
  function changeColor(color) {
    document.body.style.backgroundColor = color;
    ele("txt").style.color = color;
    ele("au").style.color = color;
    ele("btn2").style.background = color;
  }
  function changeFont(font){
  	ele("txt").style.fontFamily=font;
  	ele("au").style.fontFamily=font;
  }
  
  function changeMove(obj,attr){
  	ele(obj).style.opacity=0;
  	startMove(ele(obj),{opacity:attr});
  }
  
  ele("btn2").onclick = function() {
  	
    changeMove("txt",100);
    changeMove("au",100);  
  
  	//change color for text
    var myColor=["FireBrick","yellow","Peru","black","Lime",
  	,"DarkOrchid","DeepPink","ForestGreen","Fuchsia","HotPink","Indigo"
  	,"Olive"];
    var myColLen=myColor.length;
    var colIndex=Math.floor(Math.random()*myColLen);
    
    changeColor(myColor[colIndex]);
    
    //change font-family
    var myFont=["BickhamScriptPro","Tahoma","BlessedDay","Helvetica","STHeiti",
    "Times New Roman","ParkAvenueBT","Pharmount"];
    var myFonLen=myFont.length;
    var fonIndex=Math.floor(Math.random()*myFonLen);
    
    changeFont(myFont[fonIndex]);
    
    //change color for icon
    var tCol=myColor[colIndex];
    var a="drop-shadow(430px 0 0 "+tCol+")";
    ele("twi").style.webkitFilter=a;
    
    //change text
    ajax("quotes.txt?t="+new Date().getTime(),function(str){
    	var arr=eval(str);
    	var i;
    	var arrLen=arr.length;
    	var index=Math.floor(Math.random()*arrLen);
    	
    	ele("txt").innerHTML='"'+arr[index].txt+'"';
    	ele("au").innerHTML="– "+arr[index].au;
    	
    },function(){
    	return false;
    });
    
  }
}

