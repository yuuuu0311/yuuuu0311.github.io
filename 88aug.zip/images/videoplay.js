/*
* Ghvzon
* 影片播放套件 videoplay.js-v1.2
*******************************************************************
* 20210820(v1.2) 修正IE問題,主程式與啟動器拆分
* 20210818(v1.1) 針對所有<video>觸發省電模式判斷、可設定多部影片依序切換
*******************************************************************
*/ 

//機制設定
Object.defineProperty(HTMLMediaElement.prototype, 'playing', { get: function () { return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2); }}); //判斷是否播放中
Object.defineProperty(HTMLMediaElement.prototype, 'loaded',  { get: function () { return !!(this.className.indexOf('lazy-loaded') > 0); }}); //判斷是否延遲讀取完成
if (typeof NodeList.prototype.forEach !== 'function')  { NodeList.prototype.forEach = Array.prototype.forEach;} //解決IE11看不懂forEach
function videoPlay(option){
  option = option || {};
  this.name = option.name || false;
  this.toggleVideolists = option.toggleVideolists || false;
  this.debug = {
    videoPlay           : false,
    videoToggle         : false,
    lowPowerModeCheckFu : false,
    toggleVideoCheckFu  : false,
  };
  if(option.debug){
    this.debug.videoPlay           = option.debug.videoPlay || false;
    this.debug.videoToggle         = option.debug.videoToggle || false;
    this.debug.lowPowerModeCheckFu = option.debug.lowPowerModeCheckFu || false;
    this.debug.toggleVideoCheckFu  = option.debug.toggleVideoCheckFu || false;
  };
  this.init();
};
videoPlay.prototype.toggleVideoCallbackFu = function toggleVideoCallbackFu(from,self){ //影片切換-執行
  var myfrom = ' -> toggleVideoCallbackFu()'; from = from + myfrom;
  var set   = self.toggleSet;
  var _this = this;
  var index = '('+ self.index +')';
  var now_id        = set.now_id;
  var now_el        = set.now_el;
  var now_duration  = set.now_el.duration;
  var now_endDelay  = set.now_endDelay;
  var now_index     = self.index;
  var next_id       = set.next_id;
  var next_el       = set.next_el;
  var next_duration = set.next_el.duration;
  var next_endDelay = set.next_endDelay;
  var next_index    = set.next_index = _this.getVideoIndex(from,next_el);
  var next_self     = set.next_self  = _this.lists[next_index];
  if(_this.debug.videoToggle){console.log(index,from,'★ ID: from('+ now_index +':'+ now_id +') to('+ next_index +':'+ next_id +')')};
  if(next_index >= 0){
    var myfrom = ' ->【next_index >= 0】-> from('+ now_index +':'+ now_id +') to('+ next_index +':'+ next_id +') ★'; from = from + myfrom;
    now_el.style.opacity = 0;
    _this.showVidoeFu(from,next_self);
    next_el.currentTime = 0;
    _this.vidoeFu(from,next_self,'play');
    if(_this.debug.videoToggle){console.log(index,from,'-> now_el: hied, next_el: show + currentTime=0 + play')};
  }
};
videoPlay.prototype.toggleVideoCheckFu = function toggleVideoCheckFu(from,self,callback){ //影片切換-檢查
  var myfrom = ' -> toggleVideoCheckFu()'; from = from + myfrom;
  var _this = this;
  var timer, i = 0, setIntervalTime = 1000;
  var index        = '('+ self.index +')';
  var set          = self.toggleSet;
  var checking     = set.togglechecking;
  var now_id       = set.now_id;
  var now_el       = set.now_el;
  var now_duration = (now_el.duration)? now_el.duration : 0;
  var now_endDelay = set.now_endDelay;
  checking = true;
  timer = window.setInterval(function(){
    var currentTime = now_el.currentTime;
    var time = now_duration - now_endDelay - currentTime;
    if(_this.debug.toggleVideoCheckFu){console.log(index,from,'★ ID:',now_id,'time:',time,'(',now_duration,now_endDelay,currentTime,') checking:',checking,i)};
    i++;
    if( time <= 0 ){
      returnFu();
      if(_this.debug.videoToggle){console.log(index,from,'★ -> 【time <= 0】 -> ID:',now_id,'time:',time,'checking:',checking)}
      return (callback)? callback() : checking
    } else {
      if(i > now_duration){
        returnFu();
        if(_this.debug.videoToggle){console.log(index,from,'★ -> 【i > now_duration】 -> ID:',now_id,'time:',time,'checking:',checking)}
        return (callback)? callback() : checking
      }
    };
  },setIntervalTime);
  function returnFu(){
    window.clearInterval(timer);
    checking = false;
  };
};
videoPlay.prototype.toggleVideoFu = function toggleVideoFu(from,self){ //影片切換
  var myfrom = ' -> toggleVideoFu()'; from = from + myfrom; from = from.substr(0,0)+' ... '+from.substring(from.length-18,from.length);
  var _this = this;
  var index = self.index;
  if(_this.debug.videoToggle){console.log('('+index+')',from, '★',self.id)};
  _this.checkToggleVideo(from,self);
  _this.toggleVideoCheckFu(from,self,function(){
    _this.toggleVideoCallbackFu(from,self);
  });
};
videoPlay.prototype.vidoeFu = function vidoeFu(from,self,type){ //影片播放模式-play播放/pause暫停
  var myfrom = ' -> vidoeFu()'; from = from + myfrom;
  var _this = this;
  var index = '('+self.index+')';
  var el = self.el;
  if(_this.debug.videoPlay){console.log(index,from,'★->(',type,') -> ID:',el.id)};
  self.vidoeFu = type;
  el.currentTime = 0;
  el[type]();
  if(self.toggle && type === 'play'){
    _this.toggleVideoFu(from,self);
  }
};
videoPlay.prototype.showVidoeFu = function showVidoeFu(from,self){ //影片顯示
  var myfrom = ' -> showVidoeFu()'; from = from + myfrom;
  var _this = this;
  var index = '('+self.index+')';
  var el = self.el;
  if(_this.debug.videoPlay){console.log(index,from,'★ ID:',el.id)};
  el.style.opacity = 1;
};
videoPlay.prototype.lowPowerModeCallbackFu = function lowPowerModeCallbackFu(from,self){ //判斷iOS省電模式-執行
  var myfrom = ' -> lowPowerModeCallbackFu()'; from = from + myfrom;
  var _this = this;
  var index     = '('+ self.index +')' ;
  var el        = self.el;
  var autoplay  = self.autoplay;
  var loaded    = self.loaded;
  var playing   = self.playing;
  _this.checkVideo(from,self);
  _this.checkToggleVideo(from,self);
  if(_this.debug.videoPlay){console.log(index,from,'★ ID:',el.id,' autoplay:',autoplay ,'loaded:',loaded,'playing:',playing)};
  if(_this.is_forPC){
    if(autoplay){
      if(_this.debug.videoPlay){console.log(index,from,'★-> 【is_forPC】->【autoplay】-> playFu()')};
      playFu();
    } else {
      if(_this.debug.videoPlay){console.log(index,from,'★-> 【is_forPC】->【!autoplay】-> pauseFu()')};
      pauseFu();
    }
  } else{
    if(autoplay){
      if(playing){
        if(_this.debug.videoPlay){console.log(index,from,'★-> 【!is_forPC】->【autoplay】->【playing】-> playFu()')};
        playFu();
      } else {
        if(_this.debug.videoPlay){console.log(index,from,'★-> 【!is_forPC】->【autoplay】->【!playing】-> clickFu()')};
        clickFu();
      }
    } else {
      if(playing){
        if(_this.debug.videoPlay){console.log(index,from,'★-> 【!is_forPC】->【!autoplay】->【playing】-> playFu()')};
        playFu();
      } else {
        if(_this.debug.videoPlay){console.log(index,from,'★-> 【!is_forPC】->【!autoplay】->【!playing】-> clickFu();')};
        clickFu();
      }
    }
  }
  function playFu(){
    _this.showVidoeFu(from,self);
    _this.vidoeFu(from,self,'play');
  };
  function pauseFu(){
    _this.showVidoeFu(from,self);
    _this.vidoeFu(from,self,'pause');
  };
  function bodyClick(){
    if(_this.debug.videoPlay){console.log(index,from,'★ ->',el.currentTime===el.duration ,el.playing ,_this.is_forPC)};
    if(el.currentTime === el.duration || el.playing || _this.is_forPC){ 
      if(_this.debug.videoPlay){console.log(index,from,'★ ->【el.currentTime === el.duration || el.playing || _this.is_forPC】-> return')};
      document.body.removeEventListener('click',bodyClick);
      document.body.removeEventListener('touchstart',bodyClick);
      return 
    }
    _this.showVidoeFu(from,self);
    _this.vidoeFu(from,self,'play');
    document.body.removeEventListener('click',bodyClick);
    document.body.removeEventListener('touchstart',bodyClick);
    return 
  };
  function clickFu(){
    var myfrom = ' -> clickFu()'; from = from + myfrom;
    if(_this.debug.videoPlay){console.log(index,from,'★')};
    _this.vidoeFu(from,self,'pause');
    document.body.addEventListener('click',bodyClick);
    document.body.addEventListener('touchstart',bodyClick);
  };
};
videoPlay.prototype.lowPowerModeCheckFu = function lowPowerModeCheckFu(from,self,type,timeLength,callback){ //判斷iOS省電模式-檢查: 物件,判斷類別,檢查多久時間,
  var myfrom = ' -> lowPowerModeCheckFu()'; from = from + myfrom;
  var _this = this;
  var timer, i = 0, setIntervalTime = 10;
  var checking = self.checking;
  var el       = self.el;
  var index    = '('+ self.index +')' ;
  var id       = el.id;
  checking = true;
  timer = window.setInterval(function(){
    self[type] = el[type];
    if(_this.debug.lowPowerModeCheckFu){console.log(index,from,'★ ID:',id,type+':',el[type],'checking:',checking,i)};
    i++;
    if( el[type] ){
      returnFu();
      if(_this.debug.videoPlay){console.log(index,from,'★-> 【'+ type +'】 -> ID:',id,type+':',el[type],'checking:',checking)}
      return (callback)? callback(el[type]) : el[type]
    } else {
      if(i > timeLength){
        returnFu();
        if(_this.debug.videoPlay){console.log(index,from,'★-> 【i('+ i +') > timeLength('+ timeLength +')】 -> ID:',id,type+':',el[type],'checking:',checking)}
        return (callback)? callback(el[type]) : el[type]
      }
    };
  },setIntervalTime);
  function returnFu(){
    window.clearInterval(timer);
    checking = false;
  };
};
videoPlay.prototype.lowPowerMode = function lowPowerMode(from,self){ //判斷iOS省電模式
  var myfrom = ' -> lowPowerMode()'; from = from + myfrom;
  var _this = this;
  var loadedTime  = 100, playingTime = 50;
  var index       = self.index;
  var checking    = self.checking;
  var el          = self.el;
  var id          = el.id;
  var autoplay    = el.autoplay;
  var loaded      = self.loaded  = el.loaded;
  var playing     = self.playing = el.playing;
  if(_this.debug.videoPlay){console.log('('+index+')',from,'★ ID:',id,'autoplay:',autoplay,'loaded:',loaded,'playing:',playing,'checking:',checking)};
  _this.lowPowerModeCheckFu(from,self,'loaded',loadedTime,function(){
    self.loaded = el.loaded;
    if(autoplay){
      _this.lowPowerModeCheckFu(from,self,'playing',playingTime,function(){
        self.playing = el.playing;
        _this.lowPowerModeCallbackFu(from,self);
      });
    } else {
      _this.lowPowerModeCallbackFu(from,self);
    };
  });
};
videoPlay.prototype.checkToggleVideo = function checkToggleVideo(from,self){ //查詢切換影片狀態
  var myfrom = ' -> checkToggleVideo()'; from = from + myfrom;
  var _this = this;
  var index = '('+self.index+')';
  var id    = 'ID:'+self.el.id;
  if(_this.toggleVideolists.length>0){
    _this.toggleVideolists.forEach(function(item,i){
      var toggleID       = item.toggleID;
      var toggleEndDelay = item.toggleEndDelay;
      var order          = toggleID.indexOf(self.id);
      var set;
      if(order >= 0 && toggleID[order+1] !== undefined){ //有值＋有銜接
        self.toggle       = true;
        self.el.loop      = false; //取消無限循環
        set               = self.toggleSet = {};
        set.item          = item;
        //這個
        set.now_order     = order;
        set.now_id        = toggleID[order];
        set.now_el        = self.el;
        set.now_endDelay  = (toggleEndDelay[order] !== undefined)? toggleEndDelay[order] : 0;
        //下一個
        set.next_order    = order+1;
        set.next_id       = toggleID[order+1];
        set.next_el       = document.getElementById(set.next_id);
        set.next_endDelay = (toggleEndDelay[order+1] !== undefined)? toggleEndDelay[order+1] : 0;
        ////上一個
        //if( (order-1) >= 0){
        //  set.prev_order    = order-1;
        //  set.prev_id       = toggleID[order-1];
        //  set.prev_el       = document.getElementById(set.prev_id);
        //  set.prev_endDelay = (toggleEndDelay[order-1] !== undefined)? toggleEndDelay[order-1] : 0;
        //}
      }
    });
  };
  if(_this.debug.videoToggle){console.log(index,from,'★',id,self)};
};
videoPlay.prototype.checkVideo = function checkVideo(from,self){ //查詢影片狀態
  var myfrom = ' -> checkVideo()'; from = from + myfrom;
  var _this = this;
  var index     = '('+self.index+')';
  var id        = 'ID:'+self.el.id;
  self.id       = self.el.id;
  self.autoplay = self.el.autoplay;
  self.loaded   = self.el.loaded;
  self.playing  = self.el.playing;
  self.duration = self.el.duration;
  if(_this.debug.videoPlay){console.log(index,from,'★',id)};
};
videoPlay.prototype.getVideo = function getVideo(from){ //找出所有Video
  var myfrom = ' -> getVideo()'; from = from + myfrom;
  var _this = this;
  var video = document.querySelectorAll('video');
  var lists = [];
  video.forEach(function(el,index){
    lists.push({ 
      index     : index, 
      el        : el,
      id        : el.id,
      autoplay  : el.autoplay,
      loaded    : el.loaded,
      playing   : el.playing,
      checking  : false,
      toggle    : false,
    });
  })
  if(_this.debug.videoPlay){console.log(from,'★',lists)};
  return lists
};
videoPlay.prototype.getVideoIndex = function getVideoIndex(from,el){ //找出影片序列
  var myfrom = ' -> getVideoIndex()'; from = from + myfrom;
  var _this = this, index;
  if(el){
    index = _this.lists.map(function(item){
      return item.el
    }).indexOf(el);
    if(_this.debug.videoPlay){console.log('('+index+')',from,' ID:',el.id)};
  } else {
    if(_this.debug.videoPlay){console.log('('+index+')',from,' ID:',el.id,el)};
  }
  return index
};
videoPlay.prototype.update = function update(from,el){ //更新
  var myfrom = ' -> ★★update()'; from = from + myfrom;
  var _this = this;
  var index = _this.getVideoIndex(from,el);
  var id    = el.id
  if(_this.debug.videoPlay){console.log('('+index+')',from,' ID:',id)};
  if(index >= 0){
    var self = _this.lists[index];
    _this.lowPowerMode(from,self);
  }
};
videoPlay.prototype.init = function init(){ //初始化
  var _this = this;
  var from = _this.name;
  var myfrom = ' in-> init()'; from = from + myfrom;
  if(_this.debug.videoPlay){console.log(from,'★')};
  _this.lists = _this.getVideo(from);
  _this.lists.forEach(function(self){
    _this.lowPowerMode(from,self);
  });
  _this.video_lazyLoadInstance = new LazyLoad({ //延遲載圖
    elements_selector: '.articleList video.lazy', //物件
    threshold: window.outerHeight*0.5, //預載量
    callback_enter: function(el){
      var myfrom = from + ' -> LazyLoad() -> ★2★ callback_enter()';
      if(_this.debug.videoPlay){console.log('('+ _this.getVideoIndex(from,el) +')',myfrom,el.id)};
      _this.update(from,el);
    },
  });
  _this.is_forPC = document.body.clientWidth > 767;
  window.addEventListener('resize',function(_this){
    _this.is_forPC = document.body.clientWidth > 767;
  });  
};