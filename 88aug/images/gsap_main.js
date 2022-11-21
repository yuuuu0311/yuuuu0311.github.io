
/* --------------------------------------
 * 版頭背景動畫
 * -------------------------------------- */
  
gsap.registerPlugin(ScrollTrigger);
var is_forPC = document.body.clientWidth > 767; //forPC 




if(is_forPC){

  function gsap_bgtop(){
    //時間軸
    var tl = new TimelineLite({
      duration:1, //時間
    });

    //主標
    tl.set('.box_title',{
      scale: 0.9,
    });
    tl.to('.box_title',{
      keyframes: [
        { scale: 0.9,},
        { scale: 1.1,},
        { scale: 1,},
      ],
      ease: Elastic.easeOut.config(0.3,0.4),
    },1)

    gsap.set('.box_title', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.1,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        filter: 'brightness(100%)',
    }) 

    gsap.to('.box_title', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.1,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:-1.57, //原數值-80
        filter: 'brightness(115%)',
    })

    gsap.set('.box_title img', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.1,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        scale: 1,
        // filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',
    }) 

    gsap.to('.box_bank img', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent: 0.57, //原數值-80
        scale: 1.1,
        // filter: 'drop-shadow(-1px -2.3px 5px rgba(0,0,0,.8))',
    })


    //時間軸
    var starMove = new TimelineLite({
      defaults: {
          duration: 120,
        },
      repeat:-1,
    });
    var starShine = new TimelineLite({
      defaults: {
          duration: 2.2,
        },
      repeat:-1,  
    });
    var hang = new TimelineLite({
      defaults: {
          duration: 1.75,
        },
      repeat:-1,  
    });

    var starLight = new TimelineLite({
      defaults: {
          duration: 3.8,
        },
      repeat:-1,  
    });

    var starLight2 = new TimelineLite({
      defaults: {
          duration: 4.3,
        },
      repeat:-1,  
    });


    // 區塊星球背景
    gsap.set('.bgtop_2_2',{
      filter: 'brightness(100%)',
      yPercent: 0, //原數值-80
      ease: Sine.Linear,
    },0);

    starLight.to('.bgtop_2_2',{
      keyframes: [
        { filter: 'brightness(100%)', yPercent: 0, },
        { filter: 'brightness(155%)', yPercent: -1,},
        { filter: 'brightness(100%)', yPercent: 0, },
      ],
      ease: Sine.Linear,
    },0) 


    gsap.set('.bgtop_2_3',{
      filter: 'brightness(95%)',
      yPercent: 0, //原數值-80
      xPercent: -1, //原數值-80
      ease: Sine.Linear,
    },0);

    starLight2.to('.bgtop_2_3',{
      keyframes: [
        { filter: 'brightness(95%)', yPercent: 0, xPercent: 0,},
        { filter: 'brightness(145%)', yPercent: -2, xPercent: 1,},
        { yPercent: 1, xPercent: -2,},
        { filter: 'brightness(95%)', yPercent: 0, xPercent: -1,},
      ],
      ease: Sine.Linear,
    },0)    

    gsap.set('.Area_bgtop_2',{
      opacity: 0,
      ease: Sine.easeInOut,
    },0);  

    gsap.to('.Area_bgtop_2', {
      scrollTrigger: {
        trigger: '.Area_PDcoupon',
        scrub: 2.7,
        // markers: true, //標示
        pin: false,
        start: 'top center',
        end: 'bottom top',
      }, 
        opacity: 1, //原數值-80
    })    



    //燈條
    gsap.set('.box_light',{
      filter: 'brightness(100%)',
      ease: Sine.easeInOut,
    },0);

    starShine.to('.box_light',{
      keyframes: [
        { filter: 'brightness(100%)'},
        { filter: 'brightness(155%)',},
        { filter: 'brightness(100%)'},
      ],
      ease: Sine.easeInOut,
    },0)   

    gsap.to('.box_light img', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 2.7,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:-8, //原數值-80
    })  
    
    starShine.to('.btn_guide.for_pc',{
      keyframes: [
        { filter: 'brightness(100%)',},
        { filter: 'brightness(125%)',},
        { filter: 'brightness(100%)'},
      ],
      ease: Sine.easeInOut,
    },0) 

    hang.to('.btn_guide.for_pc',{
      keyframes: [
        { rotation: 0,},
        { rotation: -3,},
        { rotation: 3,},
        { rotation: -1,},
        { rotation: 1,},
        { rotation: 0,},
      ],
      ease: Sine.Linear,
    },-1) 

    gsap.set('.btn_guide.for_pc',{
      filter: 'brightness(100%)',
      ease: Sine.easeInOut,
    },0);  

    gsap.to('.btn_guide.for_pc', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.7,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:-10, //原數值-80
    })  


    //主標背景
    gsap.set('.box_bg', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        scale: 1,
        filter: 'blur(0px)'+'brightness(100%)',
    }) 

    gsap.to('.box_bg', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:1, //原數值-80
        scale: 1.05,
        filter: 'blur(3px)'+'brightness(70%)',
    })  

    gsap.set('.box_bg2', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.24,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        scale: 1,
        // filter: 'brightness(100%)',
    }) 

    gsap.to('.box_bg2', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.24,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:1, //原數值-80
        scale: 1.1,
        // filter: 'brightness(80%)',
    })    

    starShine.set('.bgtop_1_0',{
      opacity: 0.75,
      ease: Sine.easeInOut,
    },0);

    starShine.to('.bgtop_1_0',{
      keyframes: [
        { opacity: 0.75,},
        { opacity: 1,},
        { opacity: 0.75,},
      ],
      ease: Sine.easeInOut,
    },0)

    starMove.set('.bgtop_1_0 span',{
      keyframes: [
        { backgroundPosition: 'top center',},
      ],
      ease: Linear.easeNone,
    },0)   

    starMove.to('.bgtop_1_0 span',{
      keyframes: [
        { backgroundPosition: '-3000px',},
      ],
      ease: Linear.easeNone,
    },0)
 
    //滑動觸發-背景視差
    gsap.set('.bgtop_1_0', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.2,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
    }) 

    gsap.to('.bgtop_1_0', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.2,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
      // scale:0.9,
      opacity: 0.5,
    })  


    //滑動觸發-背景視差
    gsap.to('.bgtop_1_2', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.2,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
      yPercent:-3, //原數值-80
      scale: 1.05,
      filter: 'blur(2px)'
    })  
     
    gsap.set('.bgtop_1_3',{
      filter: 'brightness(100%)',
      ease: Sine.easeInOut,
    },0);

    starShine.to('.bgtop_1_3',{
      keyframes: [
        { filter: 'brightness(100%)'},
        { filter: 'brightness(132%)',},
        { filter: 'brightness(100%)'},
      ],
      ease: Sine.easeInOut,
    },0)    

    //滑動觸發-背景視差
    gsap.to('.bgtop_1_3', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 2.1,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
      yPercent:-8, //原數值-80
      scale: 1.1,
      opacity: 0.7
    })   
      
    //滑動觸發-背景視差
    gsap.set('.bgtop_2_0', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top',
        end: 'top+=10%',
      },
        yPercent: 0, //原數值-80
        scale: 1,
        filter:'brightness(100%)', 
      })

    //滑動觸發-背景視差
    gsap.to('.bgtop_2_0', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.2,
      //markers: true, //標示
      pin: false,
      start: 'top',
      end: 'top+=10%',
    },
      yPercent:-3, //原數值-80
      scale: 1.05,
      filter:'brightness(138%)', 
    }) 

    //滑動觸發-背景視差
    gsap.set('.bgtop_3_1 span', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.6,
      // markers: true, //標示
      // pin: false,
      start: 'top top',
      end: 'top top',
    },
      opacity: 0,
    }) 

    gsap.to('.bgtop_3_1 span', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.6,
      // markers: true, //標示
      // pin: false,
      start: 'top+=60%',
      end: 'top+=80%',
    },
      opacity: 0.8,
      backgroundPosition: 'center 0px', //背景位置
    }) 

  }gsap_bgtop(); 
  

}else {
  
  function m_gsap_bgtop(){
    //時間軸
    var tl = new TimelineLite({
      duration:1, //時間
    });

    //主標
    tl.set('.box_title',{
      scale: 0.9,
    });
    tl.to('.box_title',{
      keyframes: [
        { scale: 0.9,},
        { scale: 1.1,},
        { scale: 1,},
      ],
      ease: Elastic.easeOut.config(0.3,0.4),
    },1)

    gsap.set('.box_title', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.1,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        filter: 'brightness(100%)',
    }) 

    gsap.to('.box_title', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.1,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:-1.57, //原數值-80
        filter: 'brightness(115%)',
    })

    gsap.set('.box_title img', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.1,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        // filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',
    }) 

    gsap.to('.box_bank img', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent: 0.57, //原數值-80
        // filter: 'drop-shadow(-1px -2.3px 5px rgba(0,0,0,.8))',
    })


    //時間軸
    var starMove = new TimelineLite({
      defaults: {
          duration: 120,
        },
      repeat:-1,
    });
    var starShine = new TimelineLite({
      defaults: {
          duration: 1.2,
        },
      repeat:-1,  
    });

    //燈條
    gsap.set('.box_light',{
      filter: 'brightness(100%)',
      ease: Sine.easeInOut,
    },0);

    starShine.to('.box_light',{
      keyframes: [
        { filter: 'brightness(100%)'},
        { filter: 'brightness(155%)',},
        { filter: 'brightness(100%)'},
      ],
      ease: Sine.easeInOut,
    },0)   

    gsap.to('.box_light img', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 2.7,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:-12, //原數值-80
    })  
    
    //主標背景
    gsap.set('.box_bg', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        scale: 1,
        filter: 'blur(0px)'+'brightness(100%)',
    }) 

    gsap.to('.box_bg', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:1, //原數值-80
        scale: 1.05,
        filter: 'blur(1px)'+'brightness(70%)',
    })  

    gsap.set('.box_bg2', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.24,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0, //原數值-80
        // filter: 'brightness(100%)',
    }) 

    gsap.to('.box_bg2', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.24,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:0.7, //原數值-80
        // filter: 'brightness(80%)',
    })    

    starShine.set('.m_bgtop_1_0',{
      opacity: 0.95,
      filter: 'brightness(100%)'+'blur(0px)',
      ease: Sine.easeInOut,
    },0);

    starShine.to('.m_bgtop_1_0',{
      keyframes: [
        { opacity: 0.95, filter: 'brightness(100%)'},
        { opacity: 1, filter: 'brightness(118%)',},
        { opacity: 0.95, filter: 'brightness(100%)'},
      ],
      ease: Sine.easeInOut,
    },0)

    starMove.set('.m_bgtop_1_0 span',{
      keyframes: [
        { backgroundPosition: '0',},
      ],
      ease: Linear.easeNone,
    },0)   

    starMove.to('.m_bgtop_1_0 span',{
      keyframes: [
        { backgroundPosition: '-1000px',},
      ],
      ease: Linear.easeNone,
    },0)
 
    //滑動觸發-背景視差
    gsap.set('.m_bgtop_1_0', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.2,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
    }) 

    gsap.to('.m_bgtop_1_0', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.2,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
      // scale:0.9,
      opacity: 0.5,
    })  

      
    //滑動觸發-背景視差
    gsap.to('.box_wall', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 1.2,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
      yPercent:-3, //原數值-80
      scale: 1.05,
      filter: 'blur(2px)'
    })  
     
    gsap.set('.box_whiteLight',{
      filter: 'brightness(100%)',
      ease: Sine.easeInOut,
    },0);

    starShine.to('.box_whiteLight',{
      keyframes: [
        { filter: 'brightness(100%)'},
        { filter: 'brightness(132%)',},
        { filter: 'brightness(100%)'},
      ],
      ease: Sine.easeInOut,
    },0)    

    //滑動觸發-背景視差
    gsap.to('.box_whiteLight', {
    scrollTrigger: {
      trigger: '.WRAPPER',
      scrub: 2.1,
      //markers: true, //標示
      pin: false,
      start: 'top top',
      end: 'top+=10%',
    }, 
      yPercent:-8, //原數值-80
      scale: 1.1,
      opacity: 0.7
    })   
      
    //滑動觸發-背景視差
    gsap.to('.box_shoes', {
      scrollTrigger: {
        trigger: '.WRAPPER',
        scrub: 1.2,
        //markers: true, //標示
        pin: false,
        start: 'top top',
        end: 'top+=10%',
      }, 
        yPercent:2, //原數值-80
        scale: 1.08,
      })     

  } m_gsap_bgtop();

}





//載入完成後執行
$(window).on('resize',function(){
  if(is_forPC){
    gsap_bgtop();
  }else{
    m_gsap_bgtop();  
  }
});
