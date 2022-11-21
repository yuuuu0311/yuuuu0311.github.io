// JavaScript Document
/* --------------------------------------
 * main.js
 * -------------------------------------- */
$(function(){
  var $gotop = $('#gotop');
  $gotop.click(function(){
    $("html,body").stop(true,false).animate({scrollTop:0}); //設定回頁面頂端
    return false;
  });
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300){ //設定大於300px才顯示浮層
      $gotop.addClass('cate-open');
    } else {
      $gotop.removeClass('cate-open');
    }
  });
}); 



/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 150;
	} else {
		var gotop_i = 100;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}




/** 頁面分頁籤01**/
$(function(){
    //基本設定

    var advtabTitle =".Area04 li";
    var advContent = ".Area04 .moviebox";
    var now = new Date();
	  var now_h = now.getHours(); //時
	  if( now_h >= 8 ){ now_activeIndex = 0;};
	  if( now_h >= 12 ){ now_activeIndex = 1;};
	  if( now_h >= 19 ){ now_activeIndex = 2;};
	  if( now_h >= 20 ){ now_activeIndex = 3;};

	  
	  
        $(advtabTitle).eq(now_activeIndex).addClass("selected");
        $(advContent).hide().eq(now_activeIndex).show();
        $(advtabTitle).unbind("click").bind("click", function(){
          $(this).siblings("li").removeClass("selected").end().addClass("selected");
          var index = $(advtabTitle).index( $(this) );
          $(advContent).eq(index).siblings(advContent).hide().end().fadeIn("slow");

	});
	
});	



/** 頁面分頁籤02**/
$(function(){
    //基本設定

    var advtabTitle =".Area05 li";
    var advContent = ".Area05 .collectionsbox";
    var now = new Date();
	  var now_h = now.getHours(); //時
	  if( now_h >= 8 ){ now_activeIndex = 0;};
	  if( now_h >= 12 ){ now_activeIndex = 1;};
	  if( now_h >= 19 ){ now_activeIndex = 2;};
	  if( now_h >= 20 ){ now_activeIndex = 3;};

	  
	  
        $(advtabTitle).eq(now_activeIndex).addClass("selected");
        $(advContent).hide().eq(now_activeIndex).show();
        $(advtabTitle).unbind("click").bind("click", function(){
          $(this).siblings("li").removeClass("selected").end().addClass("selected");
          var index = $(advtabTitle).index( $(this) );
          $(advContent).eq(index).siblings(advContent).hide().end().fadeIn("slow");

	});
	
});	


