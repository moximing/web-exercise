$(document).ready( function() {
//	change popover 
    var ulstring1 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#'style='color:#d93600;font-size:16px'>空气治理</a></th><th><a href='#' style='color:#d93600;font-size:16px'>冰酒系列</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>除菌除臭</a></td><td><a href='#'>尊品冰酒</a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>保健食品系列</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>铁皮石斛 &nbsp黑枸杞</a></td></tr></tbody>"+"</table></div>";
  menuTab("#menu1",ulstring1);
  
   var ulstring2 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>私人定制化妆品系列</a></th><th><a href='#' style='color:#d93600;font-size:16px'>家居家纺</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>嘉贝瑞</a></td><td><a href='#'>深睡眠 &nbsp 天然真丝 <br>功能床上用品 &nbsp天然羊绒</a></td></tr></tbody>" +"</table></div>";
   menuTab("#menu2",ulstring2);
 
   var ulstring3 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>紫砂系列</a></th><th><a href='#' style='color:#d93600;font-size:16px'>富氢系列</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>吴顺华紫砂系列</a></td><td><a href='#'>富氢水杯 &nbsp 富氢空气净化器 <br>九级能量水机&nbsp  富氢生成器</a></td></tr></tbody>" +"</table></div>";
  menuTab("#menu3",ulstring3);
 
   var ulstring4 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>佛学智慧</a></th><th><a href='#' style='color:#d93600;font-size:16px'>营销智慧</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>禅修体验营</a></td><td><a href='#'>神销售</a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>国学智慧</a></th><th><a href='#' style='color:#d93600;font-size:16px'>管理智慧</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>国学 太极禅</a></td><td><a href='#'>企业基因管理学</a></td></tr></tbody>"+"</table></div>";

  menuTab("#menu4",ulstring4);
  
   var ulstring5 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>健康养生</a></th><th><a href='#' style='color:#d93600;font-size:16px'>贸易批发</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>美容院</a></td><td><a href='#'> </a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>保险</a></th><th><a href='#' style='color:#d93600;font-size:16px'>移动通讯</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'> 人保&nbsp平安 &nbsp太平洋&nbsp 永安 <br>中华联合&nbsp浙商 &nbsp华农 &nbsp华安 <br>诚泰&nbsp 富德 &nbsp国泰</a></td><td><a href='#'> </a></td></tr></tbody>"+
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>宾馆</a></th><th><a href='#' style='color:#d93600;font-size:16px'>旅游</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>星级宾馆 &nbsp连锁酒店</a></td><td><a href='#'>专线旅游 &nbsp旅游公司</a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>餐饮</a></th><th><a href='#' style='color:#d93600;font-size:16px'>商超</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>餐饮连锁 &nbsp中餐</a></td><td><a href='#'>进口商品专区&nbsp大型超市 &nbsp中型超市</a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>汽车4S店</a></th><th><a href='#' style='color:#d93600;font-size:16px'>宽带</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>奔驰</a></td><td><a href='#'>中国移动&nbsp中国联通 &nbsp中国电信</a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>积分充值</a></th><th><a href='#' style='color:#d93600;font-size:16px'>大型连锁</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>兑付宝积分</a></td><td><a href='#'>沃尔玛</a></td></tr></tbody>" +"</table></div>";

  menuTab("#menu5",ulstring5);

 var ulstring6 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>瘦身俱乐部</a></th><th><a href='#' style='color:#d93600;font-size:16px'>妙莲</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'></a></td><td><a href='#'></a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>睿泽健康管理</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'></a></td></tr></tbody>"+"</table></div>";
  menuTab("#menu6",ulstring6);
  
  var ulstring7 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>保税奶粉</a></th><th><a href='#' style='color:#d93600;font-size:16px'>营养保健</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>进口奶粉</a></td><td><a href='#'>保健品</a></td></tr></tbody>" +
    "<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>居家</a></th><th><a href='#' style='color:#d93600;font-size:16px'>美妆</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>日化商品</a></td><td><a href='#'>护肤品</a></td></tr></tbody>"+"</table></div>";
  menuTab("#menu7",ulstring7);
  
  var ulstring8 = "<div class='table-responsive' style='width:400px;top: 50px;'><table class='table'>" +"<thead><tr><th><a href='#' style='color:#d93600;font-size:16px'>蜜蜡手串</a></th><th><a href='#' style='color:#d93600;font-size:16px'>鳄鱼皮包</a></th></tr></thead>"+
    "<tbody><tr><td><a href='#'>手串</a></td><td><a href='#'>精品皮包</a></td></tr></tbody>" +"</table></div>";
  menuTab("#menu8",ulstring8);
  
  
  function menuTab(obj,ulstring){
    //popover
    $(obj).popover({
    trigger: 'manual', //manual 触发方式  
    placement: 'right',
    title: '<div></div>',
    html: 'true',
    content: ulstring, //这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；  
    animation: false
  }).on("mouseenter", function() {
    var _this = this;
    $(this).popover("show");
    $(this).siblings(".popover").on("mouseleave", function() {
      $(_this).popover('hide');
    });
  }).on("mouseleave", function() {
    var _this = this;
    setTimeout(function() {
      if(!$(".popover:hover").length) {
        $(_this).popover("hide")
      }
    }, 30);
  });

    //rightNavBar
    var timer;
    function startMove(){
        clearInterval(timer);
        timer=setInterval(function(){
            var navbarTop=$(window).scrollTop();
            if(navbarTop>1000){
                $("#myScrollspy").css("display","block");
            }else{
                $("#myScrollspy").css("display","none");
            }
        },30);
    };
    startMove();
      
    }

});  


window.onload=function(){
    //change city
    var oChangeCity=$('.location').find('a:first');
    var aDt=$('#Beijing').find('a');
    var changeArea=new Array();

    var oCity1=$('#city');
    var oCity2=$('#Beijing');

    for (var i = 0; i < aDt.length; i++) {
        aDt[i].onclick=function(){
            // oChangeCity.innerHTML=this.innerHTML;
            var areaContent=this.innerHTML;
            changeArea.push(areaContent);
            oCity2.style='display:none';//如何在点击地区之后让弹出框消失，并替换所选地区？？？
            oCity1.style='display:none';
        }
    }

    oChangeCity.innerHTML=changeArea[0];//如何让文字替换起作用？？？
   


}