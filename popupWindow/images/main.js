/*回版頭*/
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



/*開關PC黏人精*/
$(function(){
	var $fixed_Area = $('.fixed_Area');
	//預設進場
	setTimeout( function(){ $fixed_Area.toggleClass('fixed_Area_hide') } ,1500)
	//點擊切換
	$fixed_Area.find('.js-fixed_Area_hide').click(function(){
		$fixed_Area.toggleClass('fixed_Area_hide');
	})
});




/* 浮層區*/
function agree(val) {
	var blackBox = $(".blackBox");
	$(blackBox).fadeOut();
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 60 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
    swiper_main();
}
$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});
 


/* --------------------------------------
 * 進頁面馬上執行
 * -------------------------------------- */
$(function(){
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  swiper_main(); //輪播★v5.2.1★
});

/* --------------------------------------
 * 頁面讀取完畢後執行
 * -------------------------------------- */
$(window).on('load',function(){
  lazyLoadInstance.update(); //重新觸發圖片延遲,針對共用素材、無限輪播
});




/* 群新增 */
/* 浮層區帶輪播*/
function agree_swiper(val) {
      
	var blackBox = $(".blackBox");
	$(blackBox).fadeOut();
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 60/ 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
      swiper_main();
 
}
$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});

/** 頁面分頁籤01 **/
$(function(){
    //基本設定

    var advtabTitle =".tab_box .tab";
    var advContent = ".agreeArea .swiper-container";
    var now_activeIndex = 0;
    
	$(advtabTitle).eq(now_activeIndex).addClass("selected");
	$(advContent).hide().eq(now_activeIndex).show();
	$(advtabTitle).unbind("click").bind("click", function(){
        
		$(this).siblings(".tab").removeClass("selected").end().addClass("selected");
		var index = $(advtabTitle).index( $(this) );
		$(advContent).eq(index).siblings(advContent).hide().end().fadeIn("slow").find('img.lazy').show();
       swiper_main();
	});
	
});	



