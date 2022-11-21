// JavaScript Document
/* --------------------------------------
 * main.js
 * -------------------------------------- */

//基本設定
var is_trigger = false; //重覆觸發
var is_forPC = document.body.clientWidth > 767; //forPC
var is_forPhone = document.body.clientWidth < 767; //forPhone
var is_Online = (location.protocol).indexOf('http') === 0; //線上
var is_EcmWriter = document.querySelectorAll('input[id^="eWriterBtn"]').length > 0; //ECM編輯模式




//Phone選單套件
var navlight_main = function navlight_main(){
  //定義區塊Class
  var $WRAPPER = $('.WRAPPER'); //最大包
  if(is_forPC){
    /* 
   * -------------------------------------------
   *PC黏人精-區塊錨點
   * -------------------------------------------
   */
  //高亮
  $WRAPPER.navLight({
    navarea: '.fixarea_tabbar',        //最大包Class。預設.NavArea
    navs: '.fix_box',                     //區塊Class。預設.Nav
    lightCls: 'cate-hover',           //高亮Class。預設cate-hover
    content: '.js-navlight_PC',		//選單對應內容區塊Class。預設.js-navlight_content
    diffTop: 500,                     //距離頂部的誤差值。預設100
    //開關
    open_light: true,                 //啟動--高亮對應區塊。
    open_getname: true,               //啟動--自動擷取選單資料
  });
  //滑鼠移置特定高度時，黏人精顯現
  $(window).scroll(function() {
    if ( $(this).scrollTop() > $('.js-navlight_PC').eq(0).offset().top - 400 ){ //設定大於300px才顯示浮層
      $(".fixarea_tabbar").addClass('fixarea_off');
    } else {
      $(".fixarea_tabbar").removeClass('fixarea_off');
    }
  });  
    /* 
     * -------------------------------------------
     * 排行榜單的選單 
     * -------------------------------------------
     */  
    //高亮
    $WRAPPER.find('.Area_rankings').navLight({
      navarea: '.Area_pcmenu',          //最大包Class。預設.NavArea
      navs: '.box',                     //區塊Class。預設.Nav
      lightCls: 'cate-hover',           //高亮Class。預設cate-hover
      content: '.js-navlight_Area_rankingsPD',     //選單對應內容區塊Class。預設.js-navlight_content
      diffTop: 500,                     //距離頂部的誤差值。預設100
      top_i: -100,                      //錨點偏移
      //開關
      open_light: true,                 //啟動--高亮對應區塊。
    });
    
    
  } else {
        
    /* 
   * -------------------------------------------
   * Phone選單套件【NavArea_pagebar活動頁主要頁籤】
   * -------------------------------------------
   */
  //置頂
  $WRAPPER.find('.NavArea_tabbar').topSuction({
  });
  //展開
  $WRAPPER.find('.NavArea_tabbar').navbtn({
  });
  //高亮
  $WRAPPER.navLight({
    navarea: '.NavArea_tabbar',        //最大包Class。預設.NavArea
    lightCls: 'cate-hover',           //高亮Class。預設cate-hover
    content: '.js-navlight_Phone',		//選單對應內容區塊Class。預設.js-navlight_content
    top_i: 15,                        //錨點偏移
    //開關
    open_light: true,                 //啟動--高亮對應區塊。
    open_getname: true,               //啟動--自動擷取選單資料
  }); 

	/* 
	 * -------------------------------------------
	 * 排行榜單的選單 
	 * -------------------------------------------
	 */  

    //置頂
    $WRAPPER.find('.Area_rankings_NavArea_tabbar').topSuction({
        //navbox: '.Area_rankings',       //置頂區塊Class。預設.Nav_box
        //fixstart: '.NavArea_tabbar',             //置頂偏移高度區塊ID或Class。預設''
    });
    //展開
    $WRAPPER.find('.Area_rankings_NavArea_tabbar').navbtn({
    });
    //高亮
    $WRAPPER.navLight({
        navarea: '.Area_rankings_NavArea_tabbar',        //最大包Class。預設.NavArea
        lightCls: 'cate-hover',           //高亮Class。預設cate-hover
        content: '.js-navlight_Area_rankingsPD',        //選單對應內容區塊Class。預設.js-navlight_content
        diffTop: 50,                     //距離頂部的誤差值。預設100
        top_i: 0,                        //錨點偏移
        //開關
        open_light: true,                 //啟動--高亮對應區塊。
    });  

    /*多選單互動啟動(勿動)*/
    fNavChange();    

  };

};  


//輪播★v5.2.1★
var sw = {};
sw.init= function(){
  var _this = this;
  var _el;
  function _name(name){
    return '.'+ name +' '
  };
  
  
  /*行銷活動*/
  Area_acty([
    'Area_bank','Area_acty_10_box','Area_acty_10_box_0808','m_Area_bank_box','m_Area_acty_10_box'],_this);
  function Area_acty(e,_this){
    e.forEach(function(name,i){
      var _el = _name(name);
      var $el = $(_name(name));
      _this[name] = {
        name: name,
        sw: new Swiper(_el +'.Area_swiper_box',{
          //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
          pagination: {
            el: _el +'.swiper-pagination',
            clickable: true, //觸擊切換
          }, 
          //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
          navigation:{
            nextEl: _el +'.swiper-button-next',
            prevEl: _el +'.swiper-button-prev',
          },
          //★5.2.1★基本
          //initialSlide: Math.floor( Math.random() * $(_el +'.swiper-slide').length ) , //初始險是第幾個(亂數)
          watchOverflow: true, //只有1個slide時，不啟動swiper
          roundLengths: true, //寬高四捨五入不出現小數點    
          //speed: 1, //滑動速度(300)
          //★5.2.1★自動撥放
          autoplay: {
            delay: 2500,
            disableOnInteraction: false, //觸擊後不再自動輪播
          },
          //★5.2.1★切換特效(淡化)
          effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌) slide(一般)
          fadeEffect: {
            crossFade: true //打開自動淡出
          },
          watchOverflow: true, //只有1個slide時，不啟動swiper
        }),
      };
    });
  };

  /*熱門活動*/
  Area_hoteven2(['Area_hoteven2'],_this);
  function Area_hoteven2(e,_this){
    e.forEach(function(name,i){
      var _el = _name(name);
      var $el = $(_name(name));
      $el.find('.PD_layout ul').addClass('swiper-wrapper').find('> li').addClass('swiper-slide');
      _this[name] = {
        name: name,
        sw: new Swiper(_el +'.PD_layout .btclass',{
          //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
          pagination: {
            el: _el +'.swiper-pagination',
            clickable: true, //觸擊切換
          }, 
          //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
          navigation:{
            nextEl: _el +'.swiper-button-next',
            prevEl: _el +'.swiper-button-prev',
          }, 
          //★5.2.1★基本
          watchOverflow: true, //只有1個slide時，不啟動swiper
          roundLengths: true, //寬高四捨五入不出現小數點    
          //抵亢反彈
          //freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
          //★5.2.1★RWD(換成大於)
          breakpoints: {
            0:{
              //排版
              //slidesPerView: 2.2, //顯示幾個
              slidesPerView: 2, //顯示幾個
              spaceBetween: 8, //間距
              slidesPerColumn: 2, //一次顯示幾行
              slidesPerColumnFill: 'row',    //多行排列 column(1 3 5) row(1 2 3)
            },
            768: {
              //排版
              slidesPerView: 3, //顯示幾個
              spaceBetween: 10, //間距
              slidesPerColumn: 1, //一次顯示幾行
            },
          },              
        }),
      };
    });
  };

};


//輪播★v5.2.1★
var swiper_main = function swiper_main(){

  /*時間加減*/
  function DateAdd(interval, number, date) {
    switch (interval) {
    case "day": {
        date.setDate(date.getDate() + number);
        return date;
        break;
    }
    case "hour": {
        date.setHours(date.getHours() + number);
        return date;
        break;
    }
    case "min": {
        date.setMinutes(date.getMinutes() + number);
        return date;
        break;
    }
    case "sec": {
        date.setSeconds(date.getSeconds() + number);
        return date;
        break;
    }
    default: {
        date.setDate(d.getDate() + number);
        return date;
        break;
    }
    }
  };  

  

  /*副標-*/
  var box_bank = new Swiper('.Area_top .box_bank .Area_swiper_box', {
    //★5.2.1★基本
//    initialSlide: Math.floor( Math.random() * $('.Area_top .box_bank .Area_swiper_box .swiper-slide').length ) , //初始險是第幾個(亂數)
    watchOverflow: true, //只有1個slide時，不啟動swiper
    direction: 'vertical', //滑動方向-垂直(預設水平horizontal),最大包的Class要搭配設定swiper-container-vertical
    //speed: 1, //滑動速度(300)
    //★5.2.1★自動撥放
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },
    //★5.2.1★切換特效(淡化)
    effect: 'fade', //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    fadeEffect: {
      crossFade: true //打開自動淡出
    },
    centeredSlides: true, //目前區塊居中
    slidesPerView: 'auto', //顯示改回自動
    flipEffect: {
      slideShadows : false, //slides的陰影。默認true。
      //limitRotation : false, //限制最大旋轉角度為180度，默認true。
    },
  }); 
  
  /*AD廣告區1*/
  $('.Area_AD1 .PD_layout ul').addClass('swiper-wrapper');
  $('.Area_AD1 .PD_layout ul > li').addClass('swiper-slide');
  var Area_AD1 = new Swiper('.Area_AD1 .PD_layout .btclass', {
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_AD1 .swiper-pagination',
      clickable: true, //觸擊切換
    }, 
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_AD1 .swiper-button-next',
      prevEl: '.Area_AD1 .swiper-button-prev',
    },
    //★5.2.1★基本
    initialSlide: Math.floor( Math.random() * $('.Area_AD1 .swiper-slide').length ) , //初始險是第幾個(亂數)
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點    
    //★5.2.1★自動撥放
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },
    //★5.2.1★切換特效(淡化)
    effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    fadeEffect: {
      crossFade: true //打開自動淡出
    },
  }); 
  
  


  

  /*強運品牌*/
  $('.Area_limited2 .PD_layout ul').addClass('swiper-wrapper');
  $('.Area_limited2 .PD_layout ul > li').addClass('swiper-slide');
  var Area_limited1 = new Swiper('.Area_limited2 .PD_layout .btclass', {
    initialSlide: Math.floor( Math.random() * $('.Area_limited2 .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)

    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_limited2 .swiper-pagination',
      clickable: true, //觸擊切換
    }, 
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_limited2 .swiper-button-next',
      prevEl: '.Area_limited2 .swiper-button-prev',
    },
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點    
    //★5.2.1★切換特效(3D)
    effect: 'coverflow', //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    centeredSlides: true, //目前區塊居中
    slidesPerView: 'auto', //顯示改回自動
    coverflowEffect: {
      rotate: 60,  //slide旋轉時Y軸的旋轉角度
      stretch: -20,  //slide之間的拉伸值，越大slide靠得越緊
      depth:120,    //slide的位置深度
      modifier: 0.8, //depth和rotate和stretch的倍率
      slideShadows : false,  //slide陰影
    },
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      768: {
        coverflowEffect: {
          rotate: 50,  //slide旋轉時Y軸的旋轉角度
          stretch: -50,  //slide之間的拉伸值，越大slide靠得越緊
          depth: 180,    //slide的位置深度
          modifier: 0.7, //depth和rotate和stretch的倍率
          slideShadows : false,  //slide陰影
        },
      },
    },    
    //循環
    loop: true, //無限循環
    loopAdditionalSlides: 4, //前後多複製幾個
    //loopedSlides: 8, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
		//特殊
		mousewheelControl: true,	//滑鼠滾輪功能
		watchSlidesProgress: true,	//啟動過程3 2 1 0 -1 -2 -3	
    //★5.2.1★↓動作↓
    on: {
      
      //滑動時Progress回調函數
      progress: function(progress) {
        for (var i = 0; i < this.slides.length; i++) {
  				var slide = this.slides[i];
  				var slide_p = slide.progress;
          //透明度
  				var opacity = 2.5 - Math.abs(slide_p) * 1; //透明度 0 0 0 (1) 1 1 1		
  				es = slide.style;
  				es.opacity = opacity;
          //只能碰3個品
          var pointerEvents
          if( 1-Math.abs(slide_p) < 0){
            pointerEvents = 'none';
          } else {
            pointerEvents = 'all';
          }
          es.pointerEvents = pointerEvents;
        }
      },

      //延遲
      setTransition: function(speed) {
        for (var i = 0; i < this.slides.length; i++) {
          es = this.slides[i].style; 
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        } 
      },  
    }, //↑動作↑    
  });    
  $(window).on('load',function(){
    //Area_limited2.slideTo('0');
    setTimeout(function(){
      Area_limited1.update();
    },300)
  });


  /*夏殺品類*/
  $('.Area_limited3 .PD_layout ul').addClass('swiper-wrapper');
  $('.Area_limited3 .PD_layout ul > li').addClass('swiper-slide');
  var Area_limited2 = new Swiper('.Area_limited3 .PD_layout .btclass', {
    initialSlide: Math.floor( Math.random() * $('.Area_limited3 .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)

    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_limited3 .swiper-pagination',
      clickable: true, //觸擊切換
    }, 
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_limited3 .swiper-button-next',
      prevEl: '.Area_limited3 .swiper-button-prev',
    },
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點    
    //★5.2.1★切換特效(3D)
    effect: 'coverflow', //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    centeredSlides: true, //目前區塊居中
    slidesPerView: 'auto', //顯示改回自動
    coverflowEffect: {
      rotate: 60,  //slide旋轉時Y軸的旋轉角度
      stretch: -20,  //slide之間的拉伸值，越大slide靠得越緊
      depth:120,    //slide的位置深度
      modifier: 0.8, //depth和rotate和stretch的倍率
      slideShadows : false,  //slide陰影
    },
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      768: {
        coverflowEffect: {
          rotate: 50,  //slide旋轉時Y軸的旋轉角度
          stretch: -50,  //slide之間的拉伸值，越大slide靠得越緊
          depth: 180,    //slide的位置深度
          modifier: 0.7, //depth和rotate和stretch的倍率
          slideShadows : false,  //slide陰影
        },
      },
    },    
    //循環
    loop: true, //無限循環
    loopAdditionalSlides: 4, //前後多複製幾個
    //loopedSlides: 8, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
		//特殊
		mousewheelControl: true,	//滑鼠滾輪功能
		watchSlidesProgress: true,	//啟動過程3 2 1 0 -1 -2 -3	
    //★5.2.1★↓動作↓
    on: {
      
      //滑動時Progress回調函數
      progress: function(progress) {
        for (var i = 0; i < this.slides.length; i++) {
  				var slide = this.slides[i];
  				var slide_p = slide.progress;
          //透明度
  				var opacity = 2.5 - Math.abs(slide_p) * 1; //透明度 0 0 0 (1) 1 1 1		
  				es = slide.style;
  				es.opacity = opacity;
          //只能碰3個品
          var pointerEvents
          if( 1-Math.abs(slide_p) < 0){
            pointerEvents = 'none';
          } else {
            pointerEvents = 'all';
          }
          es.pointerEvents = pointerEvents;
        }
      },

      //延遲
      setTransition: function(speed) {
        for (var i = 0; i < this.slides.length; i++) {
          es = this.slides[i].style; 
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        } 
      },  
    }, //↑動作↑    
  });    
  $(window).on('load',function(){
    //Area_limited2.slideTo('0');
    setTimeout(function(){
      Area_limited2.update();
    },300)
  });

  

/*你可能會喜歡公版*/
   var b268_swiper = new Swiper('#bt_0_layout_b268 .b268_swiper', {
     //命名
           wrapperClass: 'b268_swiper-wrapper', //修改輪播的Class,以防跟其他輪播撞到
           slideClass: 'b268_swiper-slide', //修改輪播的Class,以防跟其他輪播撞到
           slideActiveClass: 'b268_swiper-slide-active', //修改輪播的Class,以防跟其他輪播撞到
           //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
           pagination: {
             el: '#bt_0_layout_b268 .swiper-pagination',
             clickable: true, //觸擊切換
           }, 
           //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
           navigation:{
             nextEl: '#bt_0_layout_b268 .swiper-button-next',
             prevEl: '#bt_0_layout_b268 .swiper-button-prev',
           },
           //★5.2.1★基本
           watchOverflow: true, //只有1個slide時，不啟動swiper
           roundLengths: true, //寬高四捨五入不出現小數點    
           //抵亢反彈
           freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
           freeModeSticky: true, //取消只滑動1格時也可貼齊
           freeModeMomentumVelocityRatio: 0.1, //移動慣性-滑行速度
           //排版
           centeredSlides: true, //當前區塊居中
           centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
           slidesPerView: 3.2, //顯示幾個
           spaceBetween: 8, //間距  
           //★5.2.1★RWD(換成大於)
           breakpoints: {
             768: {
               slidesPerView: 5.1, //顯示幾個
             },
     }, 
   });  
  
  /*熱銷補貨/必敗推薦*/
  $('.Area_hoteven1 .PD_layout ul').addClass('swiper-wrapper');
  $('.Area_hoteven1 .PD_layout ul > li').addClass('swiper-slide');
  var Area_hoteven1 = new Swiper('.Area_hoteven1 .PD_layout .btclass', {
    initialSlide: Math.floor( Math.random() * $('.Area_hoteven1 .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_hoteven1 .swiper-pagination',
      clickable: true, //觸擊切換
    }, 
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_hoteven1 .swiper-button-next',
      prevEl: '.Area_hoteven1 .swiper-button-prev',
    },
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點    
    //★5.2.1★切換特效(3D)
    effect: 'coverflow', //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    centeredSlides: true, //目前區塊居中
    slidesPerView: 'auto', //顯示改回自動
    coverflowEffect: {
      rotate: 60,  //slide旋轉時Y軸的旋轉角度
      stretch: -20,  //slide之間的拉伸值，越大slide靠得越緊
      depth:120,    //slide的位置深度
      modifier: 0.8, //depth和rotate和stretch的倍率
      slideShadows : false,  //slide陰影
    },
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      768: {
        coverflowEffect: {
          rotate: 50,  //slide旋轉時Y軸的旋轉角度
          stretch: -50,  //slide之間的拉伸值，越大slide靠得越緊
          depth: 180,    //slide的位置深度
          modifier: 0.7, //depth和rotate和stretch的倍率
          slideShadows : false,  //slide陰影
        },
      },
    },    
    //循環
    //loop: true, //無限循環
    //loopAdditionalSlides: 4, //前後多複製幾個
    //loopedSlides: 8, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
		//特殊
		mousewheelControl: true,	//滑鼠滾輪功能
		watchSlidesProgress: true,	//啟動過程3 2 1 0 -1 -2 -3	
    //★5.2.1★↓動作↓
    on: {
      
      //滑動時Progress回調函數
      progress: function(progress) {
        for (var i = 0; i < this.slides.length; i++) {
  				var slide = this.slides[i];
  				var slide_p = slide.progress;
          //透明度
  				var opacity = 2.5 - Math.abs(slide_p) * 1; //透明度 0 0 0 (1) 1 1 1		
  				es = slide.style;
  				es.opacity = opacity;
          //只能碰3個品
          var pointerEvents
          if( 1-Math.abs(slide_p) < 0){
            pointerEvents = 'none';
          } else {
            pointerEvents = 'all';
          }
          es.pointerEvents = pointerEvents;
        }
      },
      //延遲
      setTransition: function(speed) {
        for (var i = 0; i < this.slides.length; i++) {
          es = this.slides[i].style; 
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        } 
      },  
    }, //↑動作↑    
  });    
  $(window).on('load',function(){
    //Area_hoteven1.slideTo('0');
    setTimeout(function(){
      Area_hoteven1.update();
    },300)
  });
  
  
  /*momo卡品牌*/
  $('.Area_momocard .box_PD .PD_layout ul').addClass('swiper-wrapper');
  $('.Area_momocard .box_PD .PD_layout ul > li').addClass('swiper-slide');
  var Area_momocard = new Swiper('.Area_momocard .box_PD .PD_layout .btclass', {
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_momocard .swiper-pagination',
      clickable: true, //觸擊切換
    }, 
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_momocard .swiper-button-next',
      prevEl: '.Area_momocard .swiper-button-prev',
    },
    //★5.2.1★滾動bar <div class="scrollbar swiper-scrollbar"></div>
    scrollbar: {
      el: '.Area_momocard .swiper-scrollbar',
      //hide: true, //自動隱藏
      draggable: true, //允許拖移
      snapOnRelease: false, //拖移不貼齊
    },    
    //★5.2.1★基本
    initialSlide: Math.floor( Math.random() * $('.Area_momocard .swiper-slide').length ) , //初始險是第幾個(亂數)
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點    
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
    freeModeSticky: true, //取消只滑動1格時也可貼齊
    freeModeMomentumVelocityRatio: 0.1, //移動慣性-滑行速度
    //排版
    centeredSlides: true, //當前區塊居中
    centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
    slidesPerView: 3.5, //顯示幾個
    spaceBetween: 10, //間距
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      768: {
        slidesPerView: 5.1, //顯示幾個
         spaceBetween: 30, //間距
      },
    },    
  });  



};




	//指定日倒數兩位數拆開_Ghvzon_v20191015
	var Tday = new Date();
	function clock(){
	  var nowTime = new Date; var nowHours = nowTime.getHours(); var nowMinutes = nowTime.getMinutes(); var nowSecond = nowTime.getSeconds(); var nowmsec = nowTime.getMilliseconds(); 
	  var reDay = Math.floor( (Tday.getTime() - nowTime.getTime()) / (24 * 60 * 60 * 1000) );
	  var reHours = 24-nowHours-1; reHours = ( reHours < 10 ) ? "0"+ reHours : reHours; 
	  var reMinutes = 60-nowMinutes-1; reMinutes = ( reMinutes < 10 ) ? "0"+ reMinutes : reMinutes; 
	  var reSecond = 60-nowSecond; reSecond = ( reSecond < 10 ) ? "0"+ reSecond : reSecond;
	  var reMsec = Math.floor( nowmsec / 10 % 100); reMsec = ( reMsec < 10 ) ? "0"+ reMsec : reMsec;
	  document.getElementById("HH1").innerHTML = Math.floor(reHours / 10 % 100); if( Math.floor(reHours / 10 % 100) == 0){ document.getElementById("HH1").innerHTML = '0';} 
	  document.getElementById("HH2").innerHTML = Math.floor(reHours / 1 % 10); 
	  document.getElementById("MM1").innerHTML = Math.floor(reMinutes / 10 % 100); if( Math.floor(reMinutes / 10 % 100) == 0){ document.getElementById("MM1").innerHTML = '0';} 
	  document.getElementById("MM2").innerHTML = Math.floor(reMinutes / 1 % 10); 
	  document.getElementById("SS1").innerHTML = Math.floor(reSecond / 10 % 100); if( Math.floor(reSecond / 10 % 100) == 0){ document.getElementById("SS1").innerHTML = '0';} 
	  document.getElementById("SS2").innerHTML = Math.floor(reSecond / 1 % 10); 
	  //document.getElementById("MS1").innerHTML = 9 - Math.floor(reMsec / 10 % 100); 
	setTimeout("clock()",100); };clock();

//  /*//指定日倒數兩位數拆開_Ghvzon_v20191015*/
//  var Tday = new Date("2022/06/18 00:00:00");
//  function clock(){
//    var nowTime = new Date; var nowHours = nowTime.getHours(); var nowMinutes = nowTime.getMinutes(); var nowSecond = nowTime.getSeconds(); var nowmsec = nowTime.getMilliseconds(); 
//    var reDay = Math.floor( (Tday.getTime() - nowTime.getTime()) / (24 * 60 * 60 * 1000) );
//    var reHours = 24-nowHours-1; reHours = ( reHours < 10 ) ? "0"+ reHours : reHours; 
//    var reMinutes = 60-nowMinutes-1; reMinutes = ( reMinutes < 10 ) ? "0"+ reMinutes : reMinutes; 
//    var reSecond = 60-nowSecond; reSecond = ( reSecond < 10 ) ? "0"+ reSecond : reSecond;
//    var reMsec = Math.floor( nowmsec / 10 % 100); reMsec = ( reMsec < 10 ) ? "0"+ reMsec : reMsec;
//    document.getElementById("DD1").innerHTML = Math.floor(reDay / 10 % 100); if( Math.floor(reDay / 10 % 100) == 0){ document.getElementById("DD1").innerHTML = '';} 
//    document.getElementById("DD2").innerHTML = Math.floor(reDay / 1 % 10); 
//    document.getElementById("HH1").innerHTML = Math.floor(reHours / 10 % 100); if( Math.floor(reHours / 10 % 100) == 0){ document.getElementById("HH1").innerHTML = '';} 
//    document.getElementById("HH2").innerHTML = Math.floor(reHours / 1 % 10); 
//    document.getElementById("MM1").innerHTML = Math.floor(reMinutes / 10 % 100); if( Math.floor(reMinutes / 10 % 100) == 0){ document.getElementById("MM1").innerHTML = '';} 
//    document.getElementById("MM2").innerHTML = Math.floor(reMinutes / 1 % 10); 
//    document.getElementById("SS1").innerHTML = Math.floor(reSecond / 10 % 100); if( Math.floor(reSecond / 10 % 100) == 0){ document.getElementById("SS1").innerHTML = '';} 
//    document.getElementById("SS2").innerHTML = Math.floor(reSecond / 1 % 10); 
//    //document.getElementById("MS1").innerHTML = 9 - Math.floor(reMsec / 10 % 100); 
//  setTimeout("clock()",1000); };clock();

// //偵測行動端
// function View_Browser(){
// 	//只有chorme看的到
// 	if( /Chrome/i.test(navigator.userAgent) ) {
// 		if (jQuery) {
// 		  $(".for_ie").hide();
// 		  $(".for_firefox").hide();
// 		};
// 	}
	
// 	//只有ie看的到
// 	if( /rv:11.0|MSIE/i.test(navigator.userAgent) ) {
// 		if (jQuery) {
// 		  $(".for_chorme").hide();
// 		  $(".for_firefox").hide();
// 		};
// 	}
// };


/* --------------------------------------
 * 剁手搶
 * 2020.9.4 新增最後一檔時間後不再隱藏，加已售完
 * -------------------------------------- */
var Area_PDrush = function Area_PDrush(){

  //產出入稿區塊編號
  $('#js-Area_PDrush .PD_layout_style_slide_rush2').each(function(i, e) {
    var nawClass = 'PD_layout_style_slide_rush2_' + (i+1)
    $(this).addClass(nawClass)
  });

  //固定時間更換圖片
  var self = '#js-Area_PDrush';

  //開搶中手動加【已售完】(第幾品)
  function timeEnd(n){
    $(function(){
      var _this = $(self).find('.PD_layout_style_slide_rush2').eq(0).find('li').eq(n)
      _this.find('.regicon').remove();
      _this.removeClass('Time_on').addClass('Time_end');
    })
  };
  //timeEnd(0);
  
  //目前年月日
  var now = new Date();
//   //開啟網址欄時間測試
//  var domainQur = window.location.search.substring(1); // domainQur = npn=1vEK1psAv1Uo&n=1&code=3
//  if(domainQur !== '' && (location.protocol).indexOf('http') !== 0){
//    var params = JSON.parse('{"'+ decodeURI(domainQur).replace(/"/g, '\\"').replace(/=/g, '":"').replace(/&/g, '","') +'"}');// {npn: 1vEK1psAv1Uo , n : 1, code : 3}
//    var tstest = params.tstest;
//    if(tstest !== undefined) {
//      if(tstest){ now = new Date(tstest) };
//    }
//  };
  var endTime = new Date('2022/8/8 22:00:00'); //設定最後一檔時間後不再隱藏，加已售完
  
  function exclBuyGetToday(){   
    y = now.getFullYear();
    m = now.getMonth() + 1;
    d = now.getDate();
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;
    return y + "/" + m + "/" + d;
  }
  //目前年
  function exclBuyGetYear(){   
    y = 2022 //now.getFullYear();
    return y;
  }
  //目前時分秒
  function exclBuyGetNowTime(){
      return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  }
  var _now_time =exclBuyGetToday() + ' ' + exclBuyGetNowTime(); //目前時間
  
  //時間控制
  function timeFunction(){
    if( now > endTime ){ //最後一檔後不再隱藏
      var _this = $(self).find('.PD_layout_style_slide_rush2').find('li')
      _this.find('.regicon').remove();
      _this.removeClass('Time_on').addClass('Time_end');
      return 
    }; 
    //品時間控制
    $(self).find('li').each( function(){ 
      var _time_md = $(this).find('.time .a b:eq(0)').text(); //開始時間-月日
      var _time_hm = $(this).find('.time .a b:eq(1)').text(); //開始時間-時分
      var _time_h  = parseInt( _time_hm.split(':')[0] ); //開始時間-時
      var _time_m  = parseInt( _time_hm.split(':')[1] ); //開始時間-分
      var _time_end_h = _time_h + 1; //設定結束時區間(1小時後)
      _time_h = (_time_h >= 10 )? _time_h : '0'+ _time_h;
      _time_m = (_time_m >= 10 )? _time_m : '0'+ _time_m;
      _time_end_h = (_time_end_h >= 10 )? _time_end_h : '0'+ _time_end_h;
      //console.log( _time_md, _time_h , _time_m, _time_end_h );
      var _time_start = exclBuyGetYear() + '/' + _time_md + ' ' + _time_h + ':00:00'  ; //開始時間組成--年月日時分秒
      var _time_end   = exclBuyGetYear() + '/' + _time_md + ' ' + _time_h + ':59:59'  ; //結束時間組成--年月日時分秒
      //開搶前
      if(Date.parse(_now_time) < Date.parse(_time_start)){
        //$(this).find('.Price_on').remove();
        //$(this).find('.PD a').attr('href','javascript:void(0);')
      }
      //開搶後
      if(Date.parse(_now_time) > Date.parse(_time_end)){
        $(this).addClass('Time_end');
        $(this).remove();
      }
      //開搶中
      if( Date.parse(_now_time) >= Date.parse(_time_start) && Date.parse(_now_time) <= Date.parse(_time_end)){
        //console.log(this);
        $(this).addClass('Time_on');
        //$(this).find('.Price_off').hide();
        //$(this).find('.Price_on').show();
      }
      //console.log( _time_start );
      //console.log( _time_end );    
    });
    //日期區塊時間控制
    $(self).find('.PD_layout_style_slide_rush2 ').each( function(i){
      //沒有品直接刪掉
      var li_length = $(this).find('li').length;
      var time = $(this).attr('data-time');
      if ( li_length == 0 ){
        $(this).remove();
        $('.Area_PDrush_tab li[data-time="'+  time  +'"]').remove();
        return
      };
      var _time_md = $(this).attr('data-time'); //開始時間-月日
      var _time_start = exclBuyGetYear() + '/' +_time_md + ' 00:00:00'; //開始時間組成--年月日時分秒
      var _time_end   = exclBuyGetYear() + '/' +_time_md + ' 23:59:59'; //結束時間組成--年月日時分秒
      //開搶後
      if(Date.parse(_now_time) > Date.parse(_time_end)){
        $(this).remove();
      }
    });    
  };
  timeFunction();
  //目前選單剩幾個
  var Area_PDrush_tab_length = $(self).find('.PD_layout_style_slide_rush2').length
  
/* --------------------------------------
 * 剁手搶--輪播
 * -------------------------------------- */

  /*剁手搶--選單*/
  var Area_PDrush_tab_li = $('.Area_PDrush .Area_PDrush_tab li');
    //Area_PDrush_tab_li.addClass('swiper-no-swiping');
  var Area_PDrush_tab = new Swiper('.Area_PDrush .Area_PDrush_tab', {
  //排版
    //slidesPerView: Area_PDrush_tab_length, //顯示幾個
    centerInsufficientSlides: true, //不足總寬度卡片居中(  12  )
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
        slidesPerView: 5, //顯示幾個
        spaceBetween: 10, //間距
      },
      768: {
        //電腦版
        slidesPerView: 7, //顯示幾個
        spaceBetween: 10, //間距
      },
    },
  });
  /*剁手搶--大包*/
  $('.Area_PDrush .Area_PDrush_layout_box .PD_layout_style_slide_rush2').addClass('PDrush_layout_box-no-swiping');
  var Area_PDrush_layout_box = new Swiper('.Area_PDrush .Area_PDrush_layout_box', {
    //基本
    autoHeight: true, //自動高度
    //排版
    spaceBetween: 50, //間距
    //禁止輪播
    noSwiping: true, //啟動禁止輪播
    noSwipingClass: 'PDrush_layout_box-no-swiping', //禁止輪播Class 預設swiper-no-swiping  
    //★5.2.1★↓動作↓
    on: {
      //初始化
      init: function() {
         Area_PDrush_tab_li.eq(this.activeIndex).addClass('cate-hover');
        //公版輪播按鈕
        var button_time = $('.Area_PDrush .Area_PDrush_tab li.cate-hover').attr('data-time');
        $('.Area_PDrush .button[data-time="'+ button_time +'"]').show().addClass('d-flex'); 
      },
      //輪播開始時觸發
      transitionStart: function() {
        //高亮
        Area_PDrush_tab_li.removeClass('cate-hover').eq(this.activeIndex).addClass('cate-hover');
        //公版輪播按鈕
        var button_time = $('.Area_PDrush .Area_PDrush_tab li.cate-hover').attr('data-time');
        $('.Area_PDrush .button').hide().removeClass('d-flex');
        $('.Area_PDrush .button[data-time="'+ button_time +'"]').show().addClass('d-flex');
      },
    }, //↑動作↑
  });	
  
  $(window).on('load',function(){ Area_PDrush_layout_box.update() });
  
  setTimeout(function(){ 
    Area_PDrush_layout_box.slideTo(0, 0);
  },300);
  
  //剁手搶--點選單時
  Area_PDrush_tab_li.click(function(){
    var i = $(this).index();
    Area_PDrush_layout_box.slideTo(i , 0); //移動到點擊卡
    //公版輪播按鈕
    var button_time = $('.Area_PDrush .Area_PDrush_tab li.cate-hover').attr('data-time');
    $('.Area_PDrush .button').hide().removeClass('d-flex');
    $('.Area_PDrush .button[data-time="'+ button_time +'"]').show().addClass('d-flex');
  });

  //剁手搶--公版 swiper-no-swiping
  $('.Area_PDrush .PD_layout_style_slide_rush2').append('<div class="pagination swiper-pagination Area_boxstyle_pagination"></div>');
  $('.Area_PDrush .PD_layout_style_slide_rush2 ul').addClass('swiper-wrapper');
  $('.Area_PDrush .PD_layout_style_slide_rush2 ul > li').addClass('swiper-slide');
  /*(用迴圈一次產出所有輪播)*/
  for(let i=0; i<8 ; i++){
    var val = 'PD_layout_style_slide_rush2_'+ (i+1);
    var val = new Swiper('.Area_PDrush .' + val, {
      //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
      pagination: {
        el: '.Area_PDrush .'+ val +' .swiper-pagination',
        clickable: true, //觸擊切換
      }, 
      //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
      navigation:{
        nextEl: '.Area_PDrush .button'+ (i+1) +'-next', 
        prevEl: '.Area_PDrush .button'+ (i+1) +'-prev',
      },
      //排版
      spaceBetween: 5, //間距  
      slidesPerView: 1, //顯示幾個
      slidesPerColumn: 1, //一次顯示幾行
      slidesPerColumnFill: 'row',    //多行排列 column(1 3 5) row(1 2 3)
      watchOverflow: true, //只有1個slide時，不啟動swiper
      //★5.2.1★RWD(換成大於)
      breakpoints: {

        768: {
          spaceBetween: 10, //間距  
          slidesPerView: 2, //顯示幾個
          slidesPerColumn: 1, //一次顯示幾行
          slidesPerColumnFill: 'row',    //多行排列 column(1 3 5) row(1 2 3)
          watchOverflow: true, //只有1個slide時，不啟動swiper
        },
      },
    });	
  }

}; //Area_PDrush()
/* --------------------------------------*/


//觸發--置底背景顯示
var fu_scroll_Area_bgtop_00 = function fu_scroll_Area_bgtop_00(st) { 
  var _self = $("#Area_rankings_bg");
  var _target = $('.Area_rankings').offset();   //固定位置
  var _target_top = _target.top;

  if ( st > _target_top ){
    _self.addClass('cate-hover');
  } 
  else {
    _self.removeClass('cate-hover');
  }

};

/* --------------------------------------
 * 進頁面馬上執行
 * -------------------------------------- */
$(function(){
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  //針對ECM入稿區(輪播開始前先處理)
  // View_Browser(); //偵測行動端
  ecmWriter_removeArea('.fixarea'); //針對ECM入稿區 (0)編輯模式時刪除
  // PdLayout_removeLi('.Area_AD, .Area_momocard .box_PD, .Area_hoteven1, .Area_hoteven2, .Area_PDcoupon1, .Area_limited2, .Area_limited3 '); //針對ECM入稿區 (1)沒入品隱藏
  PdLayout_removeArea('.Area_AD'); //針對ECM入稿區 (2)全部品都沒有時整區隱藏
  swiper_main(); //輪播★v5.2.1★
  sw.init(); //輪播★v5.2.1★
  //捲動時觸發
  $(window).bind('scroll', function(){
    var st = $(this).scrollTop();
    fu_scroll_Area_bgtop_00(st); //PC置底背景顯示
  });
});


/* --------------------------------------
 * 頁面讀取完畢後執行
 * -------------------------------------- */
$(window).on('load',function(){
  navlight_main(); //Phone選單套件
  lazyLoadInstance.update(); //重新觸發圖片延遲,針對共用素材、無限輪播
  //Area_acty.sw.update();
  Area_PDrush(); //剁手搶更新高度&品
});




/* --------------------------------------
 * (Vue)Vue出來頁面讀取完畢後執行main.js
 * -------------------------------------- */
function mountedloadFu(){
};



