
var swiper_main = function swiper_main(){


  var area_swiper_1 = new Swiper('.area_swiper_1', {
        //★5.2.1★自動撥放
		autoplay: false,
		
        //★5.2.1★小圓點【基本】-白點swiper-pagination-white, 黑點swiper-pagination-black
        pagination: {
          el: '.swiper-pagination1',
          clickable: true, //觸擊切換
        },
    
		//★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
		navigation:{
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
		},
      
        //★5.2.1★切換特效(淡化)
        effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌) slide(一般)
        fadeEffect: {
          crossFade: true //打開自動淡出
            
        },	
      
	//★5.2.1★RWD(換成大於)
		//排版
		breakpoints: {
			
		//這是手機
		0: {
		slidesPerView:1, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 0, //間距
		slidesPerColumn: 1, //一次顯示幾行
        centeredSlides: true, //當前區塊居中
		},
		
		//這是PC
		768: {
		slidesPerView: 1, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 0, //間距
		slidesPerColumn: 1, //一次顯示幾行
		},
		},
			
		//★5.2.1★↓動作↓
		on: {
			//初始化
			init: function() {
			lazyLoadInstance.update();
			},
		}, //↑動作↑
	 });
    
  var area_swiper_2 = new Swiper('.area_swiper_2', {
        //★5.2.1★自動撥放
		autoplay: false,
		
        //★5.2.1★小圓點【基本】-白點swiper-pagination-white, 黑點swiper-pagination-black
        pagination: {
          el: '.swiper-pagination2',
          clickable: true, //觸擊切換
        },
    
		//★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
		navigation:{
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
		},
		
        //★5.2.1★切換特效(淡化)
        effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌) slide(一般)
        fadeEffect: {
          crossFade: true //打開自動淡出
            
        },	     
      
	//★5.2.1★RWD(換成大於)
		//排版
		breakpoints: {
			
		//這是手機
		0: {
		slidesPerView:1, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 0, //間距
		slidesPerColumn: 1, //一次顯示幾行
        centeredSlides: true, //當前區塊居中
		},
		
		//這是PC
		768: {
		slidesPerView: 1, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 0, //間距
		slidesPerColumn: 1, //一次顯示幾行
		},
		},
			
		//★5.2.1★↓動作↓
		on: {
			//初始化
			init: function() {
			lazyLoadInstance.update();
			},
		}, //↑動作↑
	 });
    
  var area_swiper_3 = new Swiper('.area_swiper_3', {
        //★5.2.1★自動撥放
		autoplay: false,
		
        //★5.2.1★小圓點【基本】-白點swiper-pagination-white, 黑點swiper-pagination-black
        pagination: {
          el: '.swiper-pagination3',
          clickable: true, //觸擊切換
        },
    
		//★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
		navigation:{
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
		},
		
        //★5.2.1★切換特效(淡化)
        effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌) slide(一般)
        fadeEffect: {
          crossFade: true //打開自動淡出
            
        },	     
		
	//★5.2.1★RWD(換成大於)
		//排版
		breakpoints: {
			
		//這是手機
		0: {
		slidesPerView:1, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 0, //間距
		slidesPerColumn: 1, //一次顯示幾行
        centeredSlides: true, //當前區塊居中
		},
		
		//這是PC
		768: {
		slidesPerView: 1, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 0, //間距
		slidesPerColumn: 1, //一次顯示幾行
		},
		},
			
		//★5.2.1★↓動作↓
		on: {
			//初始化
			init: function() {
			lazyLoadInstance.update();
			},
		}, //↑動作↑
	 });
  
	 
  };



