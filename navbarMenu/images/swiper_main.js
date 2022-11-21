
	/*PC_版頭*/
	var topbn_PC1 = new Swiper('.topbn_PC1', {
		
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.topbn_PC1 .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
    nextButton: '.swiper-button-next', 
    prevButton: '.swiper-button-prev',
    autoplay: {
      delay: 4500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },    	
		loop: true, //無限循環
    watchSlidesProgress: true, //進度參數啟動(過程3 2 1 0 -1 -2 -3)

		
		

		
		
		
		
		
		
		
		
		
		
		
    //★5.2.1★↓動作↓
    on: {
      //輪播開始時觸發
      transitionStart: function() {
        var prev_video = $(this.slides).eq(this.activeIndex).siblings('.swiper-slide').find('video');
        var video = $(this.slides).eq(this.activeIndex).find('video');
        if(video.length > 0){
          video[0].play();
        }
        if(prev_video.length > 0){
          for(var i=0;i<prev_video.length;i++){
            prev_video[i].pause();
            prev_video[i].currentTime = 0;
          }
        }
      },
    }, //↑動作↑    
    
    
    
    
		/*
		effect: 'fade',
		fade: {
            crossFade: true //打開自動淡出
        },
		*/		
	});

	
	
  var bank = new Swiper('.bank', {
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.bank .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
    nextButton: '.swiper-button-next', 
    prevButton: '.swiper-button-prev',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },    
	
	
	//★5.2.1★自動撥放
	autoplay: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false, //觸擊後不再自動輪播
		//stopOnLastSlide: true, //切換到最後時停止自動切換
	},
	
    
  });	
















  var swiper_btn = new Swiper('.swiper_btn', {
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.swiper_btn .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
    nextButton: '.swiper-button-next', 
    prevButton: '.swiper-button-prev',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },    
	
	
	//★5.2.1★自動撥放
	autoplay: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false, //觸擊後不再自動輪播
		//stopOnLastSlide: true, //切換到最後時停止自動切換
	},
	
    
//★5.2.1★↓動作↓
    on: {
      //初始化
      init: function() {
        this.update();
      },
      //輪播開始時觸發
      transitionStart: function() {
        //更新延遲讀圖
        lazyLoadInstance.update();
      },
      //輪播停止時觸發
      transitionEnd: function() {
	     this.update();
      },
      //Resize
      resize: function() {
        this.update();
      },

    }, //↑動作↑



    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
        slidesPerView: 2,
        spaceBetween: 0
      },
      768: {
        //電腦版
        slidesPerView: 3,
        spaceBetween: 0
      },
    },
	
	
  });	  



$(function () { 


  var chartbox = new Swiper('.chartbox', {
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.chartbox .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
    nextButton: '.swiper-button-next', 
    prevButton: '.swiper-button-prev',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },    
	
	
	//★5.2.1★自動撥放
	autoplay: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false, //觸擊後不再自動輪播
		//stopOnLastSlide: true, //切換到最後時停止自動切換
	},
		      
	  
	  //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
        slidesPerView: 2,
        spaceBetween: 0
      },
      768: {
        //電腦版
        slidesPerView: 2,
        spaceBetween: 0
      },
    },
	  
	  
    
  });	

  
})		
