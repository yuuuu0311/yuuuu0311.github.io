/*
 * Autumn
 * 你可能會喜歡機制edmBgw.js-v1.4
 *******************************************************************
 *  --2021.03.05--lckao-調整推薦商品url邏輯。推薦商品品數從60改30。改API寫法為ajaxTool。(v1.4)
 *  --2021.02.17--lckao-推薦商品url 新增mdiv跟ctype。(v1.3)
 *  --2020.09.29--lckao-for雲(v1.2)
 *  --2020.03.27--延遲讀圖調整設定,輪播改v5.2.1版本(v1.1)
 *  --2019.01.06--將edmBgw.js incude在您可能會喜歡區塊語法的後面即可，不一定要緊接著(v1.0)
 *  --2019.01.06--簡易模組化公版#bt_0_layout_b268_ (PD_layout-v1.0)(v1.0)
 *******************************************************************
 */

var _bgwPoc = new Object;
_bgwPoc.pagePara=momoj().HashTables();
_bgwPoc.pagePara.add('/main/Main.jsp','fM("pid")');
_bgwPoc.pagePara.add('/edm/cmmedm.jsp','fM("pid")');
_bgwPoc.pagePara.add('/category/LgrpCategory.jsp','fL("pid,ch")');
_bgwPoc.pagePara.add('/category/DgrpCategory.jsp','fD("pid,ch")');
_bgwPoc.pagePara.add('/goods/GoodsDetail.jsp','fG("iid,ch")');
_bgwPoc.pagePara.add('/servlet/NewCampaignServlet','fT("carts")');
_bgwPoc.pagePara.add('/order/OrderEnd.jsp','fO("carts,bitem,order")');
_bgwPoc.pagePara.add('/search/SearchEngine.jsp','fS("pid,kw,sitem")');
_bgwPoc.pagePara.add('/ajax/SmartService.jsp','xiaoi("pid")'); //小i

_bgwPoc.mode="1"; // 1:bgw, 2:self
_bgwPoc.func="";
_bgwPoc.topk = 18; //您可能會喜歡商品數
_bgwPoc.displayGoodsOfWhoBuy = 12; //別人也買過
_bgwPoc.displayGoodsOfHistory = 12; //歷程推薦商品及您專屬推薦商品
_bgwPoc.ulPos={fM:["34","-531","-1095"],fD:["0","-765","-1530"],fG:["0","-765","-1530"]};
_bgwPoc.moveCnt=0;
_bgwPoc.backupGoods = new Array();
_bgwPoc.backupCnt = 0;

momoj('body')
  .delegate('#bt_0_268_01 a,#recGoods a,#ShoppingCar #recList a,#buy_yes a,#inCar a','click',function(e){_bgwPoc.recLog(this,e);})
  ;
momoj('body')
  .delegate('#bt_0_268_02 a,#recGoods2 a,#ShoppingCar #recList a,#buy_yes a,#inCar a','click',function(e){_bgwPoc.recLog(this,e);})
  ;
  
_bgwPoc.fM=function(p){
  _bgwPoc.postData.pid="home";
  _bgwPoc.go();
};
_bgwPoc.doPost=function(){
  /*marked by mhho 20131007, only do itri*/
  // var _mode=momoj().cookie("bgwMode"); 
  var _mode=3;
  /* marked by mhho 20131007, only do itri
  if(_mode =='null' || _mode ==null){
    _mode=Math.floor(Math.random()*3)+1;
    if(_mode==2){
      var _chg=Math.floor(Math.random()*2)+1;
      if(_chg==1){
        _mode=1;
      }else{
        _mode=3;
      }
    }
    momoj().cookie('bgwMode',_mode,{path:'/'});
  }
  */
  _bgwPoc.mode=_mode;
  _bgwPoc.postData={"mid":57,"uid":"",mode:_bgwPoc.mode};

  //_bgwPoc.postData={"mid":57,"uid":""};
  var _user=momoj().cookie("ccmedia");

  if(!(_user =='null' || _user ==null)){
    _user=_user.split('_/')[0];
    _user=_user.replace('"','');
    _bgwPoc.postData.uid=_user;
  }
  //取出頁面的網址
  _bgwPoc.url=window.location.href;
  try{
    _bgwPoc.script=_bgwPoc.url.split('?')[0];
    _bgwPoc.script="/"+_bgwPoc.script.split('/')[3]+"/"+_bgwPoc.script.split('/')[4];
  }catch(err){
	  
  }
  if(typeof _bgwPoc.script=='string' 
     && _bgwPoc.pagePara.get(_bgwPoc.script) !='undefined'){
    try{
      _bgwPoc.func=_bgwPoc.pagePara.get(_bgwPoc.script).split('(')[0];
      eval('_bgwPoc.'+_bgwPoc.pagePara.get(_bgwPoc.script));
    }catch(err){

    }
  }
  
  if(_bgwPoc.mode==3){
    _bgwPoc.postData.layout="none";
    _bgwPoc.postData.success="";
  }else if(_bgwPoc.mode==1){
    if(_bgwPoc.func=='fM' || _bgwPoc.func=='fD' || _bgwPoc.func=='fG'){
      _bgwPoc.postData.layout="js";
      _bgwPoc.postData.success=_bgwPoc.showBgw;
    } else {
      _bgwPoc.postData.layout="none";
      _bgwPoc.postData.success="";    
    }
  }else if(_bgwPoc.mode==2){
    _bgwPoc.postData.layout="none";
    _bgwPoc.postData.success="";
  }
};

_bgwPoc.showBgw=function(){

  if( !(_bgwPoc.func=='fM' || _bgwPoc.func=='fD' || _bgwPoc.func=='fG' || _bgwPoc.func=='xiaoi' || _bgwPoc.func=='fL')) {
    return;
  }
  var _htmlCss = new Array();
  var _pl = new Array();
  var _p2 = new Array();  //add by Jinni 2014.12.16
  var _block = 'bgw';
  
  if(_bgwPoc.mode == 3) {
    _block='itri';

    try {
      var _pageTypeO = {
        fM:1,
		    xiaoi:1,
        fL:2,
        fD:2,
        fG:3 
      };
      
      eval('var _pageType=_pageTypeO.' + _bgwPoc.func + ';');
      
      var _gid = (typeof _bgwPoc.postData.iid =='undefined') ? '' : _bgwPoc.postData.iid;
      var _categ_code = (typeof _bgwPoc.postData.ch =='undefined') ? '' : _bgwPoc.postData.ch;
      var _web = momoj().cookie('JSESSIONID');
      
      if(!(_web == 'null' || _web == null)) {
        _web=_web.substring(_web.length-2);
      }    
      
      if(_pageType == 3) {
      	_pageType = '3cs';
      }
      
      var _itriData = {
    	  gid: _gid,
    	  uid: _bgwPoc.postData.uid,
    	  page_type: _pageType,  //{1:portal, 2:category page, 3:goods page}
				/*--hermes版新增參數start  20170314 mzhli--*/
    	  rec_pos: '',
      	device: 'pc',	
      	rec_type: '',//clickStream,AlsoView,Group  	
				b_categ_info: [ { "code":"bgoods_r18" }], //18禁黑名單
				token: 'NVHlz4elol',
				/*--hermes版新增參數end  --*/
    	  categ_code: _categ_code,
    	  web: _web, //MoMo web server ID
    	  cc_session: getMwaSessionInfo('_mwa_uniSessionInfo'), //您可能會喜歡改吃momowa cookie
    	  cc_guid: getMwaSessionInfo('_mwa_uniVisitorInfo'), //您可能會喜歡改吃momowa cookie
    	  topk: 0 //number of response goods code    
      };
      
      _itriData.page_type="";
	  
      //跟itri要求資料放到_pl
      if(_bgwPoc.func == 'fM') {
        _bgwPoc.topk = 30;
        _itriData.topk = _bgwPoc.topk;
        
        _itriData.rec_pos= 'edm'; //20200929-lckao 原'p'
        _itriData.rec_type= 'ClickStream';
        //_itriData.cc_session = mwaUniSessionInfo; //您可能會喜歡改吃momowa cookie
        //_itriData.cc_guid = mwaUniVisitorInfo;    //您可能會喜歡改吃momowa cookie
        set_itriData_w_categ_info(_itriData);
        _pl = getRankFromHermes(_itriData);
      }
    } catch(err) {
    }
    
  }
  
  if(_pl.length>0){ //send rtn data to moapi
    //_bgwPoc.postRec(_block,_pl);
  }
 
  var _bObj = null;
  
  if(_bgwPoc.func == 'fM') {
	  //首頁您可能會喜歡
	  _bObj=momoj('#bt_0_268_01 ul');
	  
	  if (_pl.length < _bgwPoc.topk) {
		  _block = 'momo';
		  if (typeof _buyData == 'undefined') {
			  momoj.ajax({
	          url: '/ecm/js/whoBuyData.js?_=' + getTimeStampMinutesRange(2),
	          type: 'GET',
	          dataType: 'script',
	          async: false,
	          timeout: 3
			  });
		  }
	      _pl=_bgwPoc.getBuyData(); 
	      _bgwPoc.topk=5;
      
	  }
  }
	
	//首頁您可能會喜歡 
	if(_bgwPoc.func == 'fM') {
		
		if(_pl.length >= _bgwPoc.topk && _bObj.length == 1) {  
			if(_bgwPoc.script == '/main/Main.jsp'||_bgwPoc.script == '/edm/cmmedm.jsp') {
        var _data = {
          flag: 2002,
          promo_yn: 'Y',
          goodsCode: []
        };
			  for (var i = 0; i < _bgwPoc.topk; i++) {
          if(i<18){
            _data.goodsCode.push(_pl[i].itemid);
          }
        }
        var _goodsPrice = new Object();
        var _html = new Array();
        _bObj.empty();
        insertGoodsToHtmlForMainPage(_pl, _goodsPrice, _html, _block);
        _bObj.append(_html.join(''));
        var numberOfGoodsInSingleTab = 6; 
        if(_bgwPoc.topk > numberOfGoodsInSingleTab) {
          _bObj.parent().find("h3").css({"z-index":"2"});
          var _liWidth = 120;
          if (_bgwPoc.topk > 12) {
            //_bObj.css({width:_liWidth*_data.goodsCode.length + "px"});
            /*
              _bgwPoc.moveInit({
                moveObj: "#bt_0_268_01 ul",
                movePx: _liWidth*numberOfGoodsInSingleTab,
                minLeft: 0,
                minLeftPos: -_liWidth*numberOfGoodsInSingleTab*3 + "px",
                maxLeft: -_liWidth*numberOfGoodsInSingleTab*2,
                maxLeftPos: _liWidth*numberOfGoodsInSingleTab + "px"
            });  
            */
            //setSliderMoveDirEvent('bt_0_268_01', 'mlr', _bgwPoc.slider);
          } else if (_bgwPoc.topk > 6 && _bgwPoc.topk < 13) {
           // _bObj.css({width:_liWidth*13 + "px"});
           /* _bgwPoc.moveInit({
                moveObj: "#bt_0_268_01 ul",
                movePx: _liWidth*numberOfGoodsInSingleTab,
                minLeft: 0,
                minLeftPos: -_liWidth*numberOfGoodsInSingleTab*2 + "px",
                maxLeft: -_liWidth*numberOfGoodsInSingleTab,
                maxLeftPos: _liWidth*numberOfGoodsInSingleTab + "px"
            });  
            */
            //setSliderMoveDirEvent('bt_0_268_01', 'mlr', _bgwPoc.slider);
          } 
        }else{
          momoj('#bt_0_268_01').undelegate('.mlr', 'click');
        }
        getPromoPrice(_data);
      }
		}		 
	}
};

_bgwPoc.recLog=function(_self,e){
  var _a=momoj(_self);
  var _block='';
  var _action='';
  var _clickUrl='';
  var _item='';
  var _cid=get_form(window.location.href,'cid');
  var _recomd_id=get_form(window.location.href,'recomd_id');
  if(_a.hasClass('buynow')){
    if(_cid.indexOf('rec')!=0){
      return;
    }
    _action='buynow';
    _item=_bgwPoc.postData.iid;
  }else if(_a.parent().attr('id') =='inCar'){
    if(_cid.indexOf('rec')!=0){
      return;
    }
    _action='inCar';
    _item=_bgwPoc.postData.iid;
  }else if(_a.hasClass('REC')){
    _block=_a.attr('block');
    _clickUrl=_a.attr('href');
    _item=_a.attr('item');
    _action='rec';
    _recomd_id=get_form(_clickUrl,'recomd_id');
  }
  if(_action==''){
    return;
  }
  var _data={
    block_id:_block,
    item:_item,
    action:_action,
    URL:window.location.href,
    click_URL:_clickUrl,
    cc_session:getMwaSessionInfo('_mwa_uniSessionInfo'),
    cc_guid:getMwaSessionInfo('_mwa_uniVisitorInfo'),
    recomd_id:_recomd_id,
    ver:"1.0"
  };
  
  try{
    momoj.ajax({
      url:'//www.momoshop.com.tw/moapi/dispatcher/message/actionSent',
      type:'POST',
      data:_data,
      dataType:'json',
      async:false,
      timeout:3
    });
  }catch(err){
    //nothing
  }  
};

_bgwPoc.go=function(){
  // post go
  
  // post log to bgw
  /* don't send log to bgw by mhho at 20131007
  momoj.getScript('//rec.scupio.com/recweb/js/rec.js',function(){
    if(typeof window.scupioec != 'undefined'){
      try{
        window.scupioec.call(_bgwPoc.postData);
      }catch(err){
        //nothing
      }
    }
  });
  */
  if(_bgwPoc.mode==3){
    if(_bgwPoc.func=='fT' || _bgwPoc.func=='fO'){
      var _web=momoj().cookie('JSESSIONID');
      if(!(_web =='null' || _web ==null)){
        _web=_web.substring(_web.length-2);
      }
      var _itriData={
        web:_web,
        cc_session:getMwaSessionInfo('_mwa_uniSessionInfo'),
        cc_guid:getMwaSessionInfo('_mwa_uniVisitorInfo'),
        gd:_bgwPoc.postData.gd,
        uid:_bgwPoc.postData.uid
      };
      var _url='';
      if(_bgwPoc.func=='fT'){
        _itriData.carts=_bgwPoc.postData.carts;
        _url='LogShoppingCar';
      }else if(_bgwPoc.func=='fO'){
        _itriData.bitem=_bgwPoc.postData.bitem;
        _itriData.order=_bgwPoc.postData.order;
        _url='LogOrder';
      }
      try{
        momoj.ajax({
          url:'/itri/api/log/'+_url,
          type:'GET',
          data:{object:JSON.stringify(_itriData)},
          dataType:'json'
        });
      }catch(err){
        //nothing
      }
    }
  }

  if(_bgwPoc.mode==2 || _bgwPoc.mode==3){
    _bgwPoc.showBgw();
  }
};

_bgwPoc.getBuyData=function(){
  var _rtnData=new Array();
  if(_buyData && _buyData.length>5){
    for(var i=0;i<5;i++){
      var _goodsCode=_bgwPoc.uni2stc(_buyData[i].goodsCode);
      var _goodsName=_bgwPoc.uni2stc(_buyData[i].prdNme);
      if(_goodsCode==''){
        continue;
      }
      var _suffix=_goodsCode;
      for(var j=0;j<10-_goodsCode.length;j++){
        _suffix='0'+_suffix;
      }
      _rtnData[i]={
        itemid:_goodsCode,
        goodsName:_goodsName,
        clickurl:'/goods/GoodsDetail.jsp?i_code='+_goodsCode,
        imgurl:'/goodsimg/'+_suffix.substring(0,4)+'/'+_suffix.substring(4,7)+'/'+_suffix.substring(7,10)+'/'+_goodsCode+'_L.jpg',
        title:_goodsName
      
      };
      
    }
  }

  return _rtnData;
};

_bgwPoc.uni2stc=function(_unicode){
  if(typeof _unicode!='string') return '';
  var _str='';
  var _strA=_unicode.split(';');
  for(var i=0;i<_strA.length;i++){
    if(_strA[i].match(/^&#/)){
      var _uni=_strA[i].replace('&#','');
      try{
        _uni=String.fromCharCode(_uni);
      }catch(err){
        _uni='';
      }
      _str=_str+_uni;
    }
  }
  return _str;
};
_bgwPoc.commafy=function(num){ 
  num = num+""; 
  try{
    var re=/(-?\d+)(\d{3})/; 
    while(re.test(num)){ 
      num=num.replace(re,"$1,$2"); 
    } 
  }catch(err){
  }
  return num; 
};

_bgwPoc.moveInit=function(settings){
  var _defaultSettings={
    moveObj:"",
    movePx:0,
    minLeft:0,
    minLeftPos:"0px",
    maxLeft:0,
    maxLeftPost:"0px"
    
  };
  
  _bgwPoc.moveSettings=momoj.extend(_defaultSettings, settings);
  var _obj=momoj(_bgwPoc.moveSettings.moveObj).clone();
  momoj(_bgwPoc.moveSettings.moveObj).before(_obj);
  //momoj(_bgwPoc.moveSettings.moveObj).eq(0).css({left:_bgwPoc.moveSettings.minLeftPos});
};
_bgwPoc.slider=function(settings){
  if(_bgwPoc.moveCnt>0){
	  return false;
  }
  _bgwPoc.moveCnt++; 
  var _defaultSettings={
    moveWay:"L",// L or R
    movePx:_bgwPoc.moveSettings.movePx,
    moveObj:momoj(_bgwPoc.moveSettings.moveObj),
    minL:_bgwPoc.moveSettings.minLeft,
    minLP:_bgwPoc.moveSettings.minLeftPos,
    maxL:_bgwPoc.moveSettings.maxLeft,
    maxLP:_bgwPoc.moveSettings.maxLeftPos
  };
  var _settings=momoj.extend(_defaultSettings, settings);

  if(_settings.moveWay=='L'){
    _settings.changePx='-='+_settings.movePx; 
  }else{
    _settings.changePx='+='+_settings.movePx;
  }
  
  var _moveObj=_settings.moveObj;
  _moveObj.animate({left:_settings.changePx},_settings.movePx,function(){
	  _bgwPoc.moveCnt++;
	  if(_bgwPoc.moveCnt==3){
		  
		  _bgwPoc.moveCnt=0;
		  if (_moveObj.eq(0).position().left==_settings.minL) {
			  _moveObj.eq(1).css({left:_settings.minLP});
		  } else if (_moveObj.eq(1).position().left==_settings.minL) {  
			  _moveObj.eq(0).css({left:_settings.minLP});
		  } else if (_moveObj.eq(0).position().left==_settings.maxL) {  
			  _moveObj.eq(1).css({left:_settings.maxLP});
		  } else if (_moveObj.eq(1).position().left == _settings.maxL) {  
			  _moveObj.eq(0).css({left:_settings.maxLP});
		  }
	  }
  });
};


/**從工研院取得資料
 * itriDataObject 工研院api需要的資料物件
 * return itriData工研院給予的資料
 */
var getGoodsRankFromItri = function (itriDataObject) {
	var itriData = new Array();
	
	momoj.ajax({
		url: '/itri/api/recomd/GetGoodsRanks?_=' + new Date().getTime(),
        type: 'GET',
        data: itriDataObject,
        async: false,
        timeout: 3,
        success: function(_data) {
         
          if(typeof _data.recomd_list=='undefined' || _data.recomd_list.length < 1) {
            return false;
          }
          
          _bgwPoc.recomd_id = _data.recomd_id;
          var recomdLength = _data.recomd_list.length;
          
          for(var i = 0 ; i < recomdLength; i++) {
            var _goodsCode = _data.recomd_list[i].id + '';
            var _goodsName = _data.recomd_list[i].name;
            var _why = '';
            
            if(typeof _data.recomd_list[i].why != 'undefined' || 
                _data.recomd_list[i].why != null || _data.recomd_list[i].why != 'null') {
                _why=_data.recomd_list[i].why;
            }
            
            if(_goodsCode == '') {
              continue;
            }
            
            //如果_goodsCode為空不執行以下程式碼
            var _suffix = _goodsCode;
            
            //若goods code不滿10碼，則在前面補0
            for(var j = 0; j < (10 - _goodsCode.length); j++){
              _suffix = '0' + _suffix;
            }
            
            var array = [];
            array.push(_data.recomd_list[i]);
            
            itriData.push({
              itemid: _goodsCode,
              goodsName: _goodsName,
              clickurl: '/goods/GoodsDetail.jsp?i_code=' + _goodsCode,
              imgurl: '/goodsimg/' + _suffix.substring(0,4) + '/' + _suffix.substring(4,7) + '/' + _suffix.substring(7,10) + '/' + _goodsCode + '_L.jpg',
              title: _goodsName,
              recomd_id: _bgwPoc.recomd_id,
              recomd_list: array,
              why: _why,
              rec_pos: itriDataObject.rec_pos
            });
          }
        }
      });
	
	
	return itriData;
};

/**從工研院取得資料
 * Hermes版 itriDataObject 工研院api需要的資料物件
 * return itriData工研院給予的資料
 * 2017.0314 
 */
var getRankFromHermes = function (itriDataObject) {
  var itriData = new Array();
  var rec_pos = itriDataObject.rec_pos;
  
  itriDataObject["flag"] = 2037;

  momoj.ajaxTool({
    async:false,
    timeout:3000 ,
    data:itriDataObject ,
    ajaxSuccess:function(rData){
      var _data = JSON.parse(rData.rtnData.data);
      _data = _data ? _data : [];
        
      if(typeof _data.recomd_list=='undefined' || _data.recomd_list.length < 1) {
        return false;
      }
      
      _bgwPoc.recomd_id = _data.recomd_id;
      var recomdLength = _data.recomd_list.length;
      
      for(var i = 0 ; i < recomdLength; i++) {
        var _goodsCode = _data.recomd_list[i].id + '';
        var _goodsName = _data.recomd_list[i].name;
        var _why = '';
        
        if(typeof _data.recomd_list[i].why != 'undefined' || 
            _data.recomd_list[i].why != null || _data.recomd_list[i].why != 'null') {
            _why=_data.recomd_list[i].why;
        }
        
        if(_goodsCode == '') {
          continue;
        }
        
        //如果_goodsCode為空不執行以下程式碼
        var _suffix = _goodsCode;
        
        //若goods code不滿10碼，則在前面補0
        for(var j = 0; j < (10 - _goodsCode.length); j++){
          _suffix = '0' + _suffix;
        }

        var array = [];
        array.push(_data.recomd_list[i]);
        
        itriData.push({
          itemid: _goodsCode,
          goodsName: _goodsName,
          clickurl: '/goods/GoodsDetail.jsp?i_code=' + _goodsCode,
          imgurl: '/goodsimg/' + _suffix.substring(0,4) + '/' + _suffix.substring(4,7) + '/' + _suffix.substring(7,10) + '/' + _goodsCode + '_L.jpg',
          title: _goodsName,
          recomd_id: _bgwPoc.recomd_id,
          recomd_list: array,
          why: _why,
          rec_pos: rec_pos
        });
      }
    }
  });
  
  return itriData;
};

/**將資料轉換成html的樣式，再放入html array
 * itriData 工研院提供的資料
 * momoData momo的資料
 * html 目前要插入資料的html array
 * block  itri 工研院資料
 */
var insertGoodsToHtml = function (itriData, momoData, html, block, settings) {
  var defaultSettings = {
    target: '_top'
  };
  momoj.extend(defaultSettings, settings);
  var numberOfGoods = itriData.length;
  //將資料插入到html裡
  for (var i = 0; i < numberOfGoods; i++) {

    try {
      var _urlPara = '&cid=rec' + block + '&oid=B' + _bgwPoc.func;

      _urlPara += _bgwPoc.getMdivUrl(itriData[i]);
      
      if(typeof itriData[i].recomd_id != 'undefined') {
        _urlPara = _urlPara + '&recomd_id=' + itriData[i].recomd_id;
      }
      
      if(_bgwPoc.mode == 1) {
        _urlPara = encodeURIComponent(_urlPara);
      }
      
      var goods = composeOfItriGoodsAndMomoGoods(itriData[i], momoData);
      goods.url += _urlPara;
      tag = ((i == 0) ? 'dt' : 'dd'); 
      goods.price = _bgwPoc.commafy(goods.price);
      
      html.push('<li><a href="' + goods.url + '"  target="' + defaultSettings.target + '" title="' + goods.title+'" block="' + block + 
          '" class="REC" item="' + itriData[i].itemid + '">');
      html.push('<img src="' + momoj.getImgSrc({org:goods.img}) + getGoodsTimeStamp(goods) + '"><span>' + goods.title + '</span>' + goods.promoF + 
          '<b ' + goods.style + '>' + goods.price + '</b></a></li>');

    } catch (err) {
      console.log(err);
    }
  }
};

/**將資料轉換成html的樣式，再放入html array，要54品顯示18品、其他備用
 * 首頁你可能會喜歡用
 * itriData 工研院提供的資料
 * momoData momo的資料
 * html 目前要插入資料的html array
 * block  itri 工研院資料
 * @mdli 2017.06.20 
 */
var insertGoodsToHtmlForMainPage = function (itriData, momoData, html, block, settings) {
  var defaultSettings = {
    target: '_top'
  };
  momoj.extend(defaultSettings, settings);
  var numberOfGoods = itriData.length;
    
  //上傳圖片路徑
  var src = $('#artjs2').attr('src');
  var imgEcm  = src.substring(0,src.indexOf("images\/"));

  //將資料插入到html裡
  for (var i = 0; i < numberOfGoods; i++) {

    try {
      var _urlPara = '&cid=rec' + block + '&oid=B' + _bgwPoc.func;

      _urlPara += _bgwPoc.getMdivUrl(itriData[i]);
      
      if(typeof itriData[i].recomd_id != 'undefined') {
        _urlPara = _urlPara + '&recomd_id=' + itriData[i].recomd_id;
      }
      
      if(_bgwPoc.mode == 1) {
        _urlPara = encodeURIComponent(_urlPara);
      }
      
      var goods = composeOfItriGoodsAndMomoGoodsForMainPage(itriData[i], momoData);
      goods.url += _urlPara;
      tag = ((i == 0) ? 'dt' : 'dd'); 
      goods.price = _bgwPoc.commafy(goods.price);
      if(i < 18){
        html.push('<li class= "PD_slide b268_swiper-slide ' + goods.itemid + '">');
        html.push('<div class="PD">');
        html.push('<a class="youLikePic" href="' + goods.url + '"  target="_blank" title="' + goods.title+'" block="' + block + '" class="REC" item="' + itriData[i].itemid + '">');
        html.push('<img class="lazy" data-original="' + momoj.getImgSrc({org:goods.img}) + '">'); //20200327延遲讀圖調整設定(熊)
        html.push('<p>');
        html.push('<span class="prdName">'+goods.title+'</span>');
        html.push('<span class="prdPrice"><b></b></span>');
        html.push('</p>');
        html.push('</a>');
        /*html.push('<span class="hoverTxt">');
        html.push('<a class="likeSave" onclick="mayLike_follow('+itriData[i].itemid+',true,momoj(this));" title="喜歡">'
                  +'<img src="//image.momoshop.com.tw/ecm/img/de/0/bt_0_268/star.png?t=20170815001"/></a>'
                  +'<a class="likeRemove" onclick="mayLike_follow('+itriData[i].itemid+',false,momoj(this));" title="移除">'
                  +'<img src="//image.momoshop.com.tw/ecm/img/de/0/bt_0_268/trash.png?t=20170815001"/></a>');
        html.push('</span>');
        */
        html.push('</div>');
        html.push('</li>');
      }else{
        var _tmpHtml = '';
        _tmpHtml+='<li class= "PD_slide b268_swiper-slide '+ goods.itemid + '">';
        _tmpHtml+='<div class="PD">';
        _tmpHtml+='<a class="youLikePic" href="' + goods.url + '"  target="_blank" title="' + goods.title+'" block="' + block + '" class="REC" item="' + itriData[i].itemid + '">';
        _tmpHtml+='<img class="lazy" data-original="' + momoj.getImgSrc({org:goods.img}) + '">'; //20200327延遲讀圖調整設定(熊)
        _tmpHtml+='<p>';
        _tmpHtml+='<span class="prdName">'+goods.title+'</span>';
        _tmpHtml+='<span class="prdPrice"><b></b></span>';
        _tmpHtml+='</p>';
        _tmpHtml+='</a>';
       /* _tmpHtml+='<span class="hoverTxt">';
        _tmpHtml+='<a class="likeSave" onclick="mayLike_follow('+itriData[i].itemid+',true,momoj(this));" title="喜歡">'
                  +'<img src="//image.momoshop.com.tw/ecm/img/de/0/bt_0_268/star.png?t=20170815001"/></a>'
                  +'<a class="likeRemove" onclick="mayLike_follow('+itriData[i].itemid+',false,momoj(this));" title="移除">'
                  +'<img src="//image.momoshop.com.tw/ecm/img/de/0/bt_0_268/trash.png?t=20170815001"/></a>';
        _tmpHtml+='</span>';
        */
        _tmpHtml+='</div>';
        _tmpHtml+='</li>';
        _bgwPoc.backupGoods.push(_tmpHtml);
      }
     

    } catch (err) {
      console.log(err);
    }
  }
};

/** 將工研院和momo的資料進行合併
 * itriData 工研院提供的資料
 * momoData momo的資料
 * return goods為合併後的資料
 */
var composeOfItriGoodsAndMomoGoodsForMainPage = function (itriData, momoData) {
	var goods = {url: itriData.clickurl,
		     img: itriData.imgurl.replace('_M.jpg','_L.jpg'), 
		     title: itriData.title, 
		     promoF: '', 
		     price: '',
             timestamp: '',
             itemid: 'YOU_LIKE-' + itriData.itemid,
		     style: ''};//只有fM會使用此參數
  return goods;
};
/** 將工研院和momo的資料進行合併
 * itriData 工研院提供的資料
 * momoData momo的資料
 * return goods為合併後的資料
 */
var composeOfItriGoodsAndMomoGoods = function (itriData, momoData) {
	var goods = {url: itriData.clickurl,
		     img: itriData.imgurl.replace('_M.jpg','_L.jpg'), 
		     title: itriData.title, 
		     promoF: '', 
		     price: '',
			   timestamp: '',
		     style: ''};//只有fM會使用此參數

	if (_bgwPoc.func == 'fM' || _bgwPoc.func == 'xiaoi') {
		goods.price = '熱銷一空';
	} else {
		goods.img = itriData.imgurl.replace('_M.jpg','_L.jpg');
		goods.price = '&nbsp;';
	}
	
    var gc = 'GDS-' + itriData.itemid;
    
    momoj.each(momoData.rtnData, function(key, value) {
    	
      if(key == gc) {
    	  
        if (value.GOODS_NAME != "") {
        	goods.title = value.GOODS_NAME;
        }              
        
        if (typeof goods.why != 'undefined' && goods.why == 'NewSale') {
        	goods.promoF = '<img style="margin:0px;" alt="本週新降價" title="本週新降價" src="//img1.momoshop.com.tw/ecm/img/cmm/main/toKill.png">';
        } else if(typeof goods.why != 'undefined' && goods.why == 'Promo') {
        	
          if (value.DISCOUNT_YN) {
        	goods.promoF = '<img src="//img1.momoshop.com.tw/ecm/img/cmm/category/discountIcon.png" alt="現金折扣" title="現金折扣">';
          }
        } else if(value.CP_YN == "1") {
        	goods.promoF = '<img alt="可使用折價券" title="可使用折價券" src="//img1.momoshop.com.tw/ecm/img/cmm/category/couponsIcon.png">';
        }
        var finalPrice = value.LAST_PRICE;//先直接給最終價格
        if(value.AFTER_PROMO_DATA!=''){//折後價處理
          if(value.AFTER_PROMO_DATA.showPromoPriceYn == '1' && value.AFTER_PROMO_DATA.promoPrice != value.AFTER_PROMO_DATA.salePrice){
            finalPrice = value.AFTER_PROMO_DATA.promoPrice;
          }
        }
        if (finalPrice <= 0) {
          goods.style = 'style="font:13px/16px Helvetica"';
        } else {
          if(_bgwPoc.func == 'fM' || _bgwPoc.func == 'xiaoi') {
            goods.price = '$' + finalPrice;        		
          } else {
            goods.price = finalPrice;
          }
        }
        if(!!value.OPERATOR) {
          goods.timestamp = value.OPERATOR;
        }
      }
    });
    return goods;
};

//設定左右箭頭的click事件，使用捲動方式 (首頁的您可能會喜歡)
var setSliderMoveDirEvent = function (id, delegateClass, sliderFunc) {
	momoj('#' + id).undelegate('click').delegate('.' + delegateClass, 'click', function(e) {
        var _self = momoj(this);
        
        if(_self.attr('go') == 'right') {
        	sliderFunc({moveWay:'L'});
        } else {
        	sliderFunc({moveWay:'R'});
        }
	});  
};

/**將資料轉換成html的樣式，再放入html array (新的板型)
 * itriData 工研院提供的資料
 * momoData momo的資料
 * html 目前要插入資料的html array
 * block  itri 工研院資料
 */
var insertGoodsToHtmlNew = function (itriData, momoData, html, block, numberOfGoodsInSingleTab, recommd) {
	
	var numberOfGoods = itriData.length;
	 
    //將資料插入到html裡
    for (var i = 0; i < numberOfGoods; i++) {
      
      if(i % numberOfGoodsInSingleTab == 0) {
    	  html.push('<div class="TabContentD">');
    	  html.push('<ul>');
      }
      
      try {
        var _urlPara = '&cid=rec' + block + '&oid=B' + _bgwPoc.func;

        _urlPara += _bgwPoc.getMdivUrl(itriData[i]);
        
        var recomd_list = itriData[i].recomd_list || [];
        var recomd_html = [];
        if(typeof itriData[i].recomd_id != 'undefined') {
          _urlPara = _urlPara + '&recomd_id=' + itriData[i].recomd_id;
          recomd_html.push('推薦理由');
          if (recomd_list.length > 0 && typeof recommd != 'undefined'){
            for (var j = 0; j < recomd_list.length; j++) {

              if (recomd_list[j].msg_type == 'bsim') {
                recomd_html.push('看此商品的人也看了&#13');
                recomd_html.push(recomd_list[j].name+'&#13');
                recomd_html.push('關聯度：'+Math.floor(recomd_list[j].msg_score*100)+'%&#13');
              }
              else if (recomd_list[j].msg_type == 'csim') {
                recomd_html.push('相似商品&#13');
                recomd_html.push(recomd_list[j].name+'&#13');
                recomd_html.push('相似度：'+Math.floor(recomd_list[j].msg_score*100)+'%&#13');
              }
              else if (recomd_list[j].msg_type == 'ctp') {
                recomd_html.push('分類熱門&#13');
                //recomd_html.push(recomd_list[j].name);
                recomd_html.push('熱門度：'+Math.floor(recomd_list[j].msg_score*100)+'%&#13');
                if (parseInt(recomd_list[j].sales) >= 50) {
                  recomd_html.push('近30日銷量：'+recomd_list[j].sales+'件&#13');
                }
              }
              else if (recomd_list[j].msg_type == 'gtp') {
                recomd_html.push('全站熱門&#13');
                //recomd_html.push(recomd_list[j].name);
                recomd_html.push('熱門度：'+Math.floor(recomd_list[j].msg_score*100)+'%&#13');
                if (parseInt(recomd_list[j].sales) >= 50) {
                  recomd_html.push('近30日銷量：'+recomd_list[j].sales+'件&#13');
                }
              }
              else if (recomd_list[j].msg_type == 'cs') {
                recomd_html.push('您最近看過&#13');
                recomd_html.push(recomd_list[j].name+'&#13');
              }
              else if (recomd_list[j].msg_type == 'etc') {
                recomd_html.push('專屬您的推薦商品&#13');
                //recomd_html.push(recomd_list[j].name);
                recomd_html.push('推薦度：'+Math.floor(recomd_list[j].msg_score*100)+'%&#13');
              }
            } // for loop
          }// if
        }
        
        if(_bgwPoc.mode == 1) {
          _urlPara = encodeURIComponent(_urlPara);
        }
        
        var goods = composeOfItriGoodsAndMomoGoods(itriData[i], momoData);
        goods.url += _urlPara;
        tag = 'li';
        goods.price = _bgwPoc.commafy(goods.price);

  	    html.push('<' + tag + '><a href="' + goods.url + '" target="_top" title="' + goods.title);
  	    html.push('" block="' + block + '" class="REC" item="' + itriData[i].itemid + '">');
        if (recomd_list.length > 0 && typeof recommd != 'undefined'){
          html.push('<img class="info" alt="'+recomd_html.join(' ')+'" title="'+recomd_html.join(' ')+'" src="//image.momoshop.com.tw/ecm/img/cmm/category/info.png">');
        }
  	    html.push('<img width="200" height="200" src="' + momoj.getImgSrc({org:goods.img}) + getGoodsTimeStamp(goods) + '">');
  	    html.push('<p><span class="prdName">' + goods.title + '</span><span class="prdPrice">' +  goods.promoF + '$<b>' + goods.price + '</b></span></p></a></' + tag + '>');
  	    
      } catch (err) {
    	  console.log(err);
      }
      
      if((i + 1) % numberOfGoodsInSingleTab == 0) {
    	  
    	  html.push('</ul></div>');
      }
    }
};

function getGoodsTimeStamp(goods) {
  if(!!goods.timestamp) {
    return '?t=' + goods.timestamp;
  }
  return '';
}
//取得momoWa的cookie值
function getMwaSessionInfo(key) {
  var _info = momoj().cookie(key);
  if(_info){
    return _info.slice(0, _info.indexOf("."));
  }else {
    return '';
  }
}
//設定左右箭頭的切換事件
var setClickEvent = function (id) {
	
	momoj('#' + id).delegate('.leftBtn' , 'click', function(e) {
	
		var length = momoj('#' + id + ' .TabMenu .tabMenu_number li').size();
		var selectedIndex = momoj('#' + id + ' .TabMenu .tabMenu_number .selected').index();
		
		if((selectedIndex - 1) < 0) {
			selectedIndex = length - 1;
		} else {
			selectedIndex--;
		}
		
		changeTabAndContent(id, selectedIndex);	
		
	});
	
	momoj('#' + id).delegate('.rightBtn' , 'click', function(e) {
		
		var length = momoj('#' + id + ' .TabMenu .tabMenu_number li').size();
		var selectedIndex = momoj('#' + id + ' .TabMenu .tabMenu_number .selected').index();
		
		if((selectedIndex + 1) >= length) {
			selectedIndex = 0;
		} else {
			selectedIndex++;
		}
		
		changeTabAndContent(id, selectedIndex);		
	});

};

//切換頁籤及資料內容
var changeTabAndContent = function (id, currentSelectedIndex) {
	
	var tabMenu = momoj('#' + id + ' .TabMenu .tabMenu_number li');
	var tabContent = momoj('#' + id + ' .TabContentD');
	
	tabMenu.each(function (i) {
		
		if(i != currentSelectedIndex) {
	  
	    momoj(this).removeClass('selected');
	    momoj('a', this).removeClass('selected');
	    
	  } else {
		  
	    momoj(this).addClass('selected');
	    momoj('a', this).addClass('selected');
	    
	  }
	});
	
	tabContent.each(function (i) {

	  if(i != currentSelectedIndex) {
	    momoj(this).removeClass('selected');
	  } else {
		  
	    momoj(this).addClass('selected');
	  }
	});
};
//取268的浮層資料
var open268Layer = function (){
  var _container = momoj('#bt_0_268_sub');
  if(_container.length == 0){
   return;
  }
  //取268的浮層資料 第一次進來的時候 #bt_0_268_sub 裡面沒資料 透過getpage去要資料  有資料直接印出浮層
  if(_container.html().trim() == ''){
    _container.load('/ajax/GetPage.jsp?url=/10/000/00/000/bt_0_268_sub.html',function(){
      var _innerHtml = _container.html();
      openfloatingLayerBox3('您可以自訂想要推薦的商品分類：(最多可編輯20個分類)',760,_innerHtml,'bt_0_268_Layer');
      mayLike_getCategoryCookie();
      momoj('#bt_0_268_Layer #mayLike_Tooth').find('li').eq(0).click();
    });
  }else{
    var _innerHtml = _container.html();
    openfloatingLayerBox3('您可以自訂想要推薦的商品分類：(最多可編輯20個分類)',760,_innerHtml,'bt_0_268_Layer');
    mayLike_getCategoryCookie();
    momoj('#bt_0_268_Layer #mayLike_Tooth').find('li').eq(0).click();
  }
};

//268浮層區塊點牙齒開大分類功能
var mayLike_openLcategoryList = function (thisObj){
  thisObj.parent().find('li').removeClass('selected');
  thisObj.addClass('selected');
  var thisId = thisObj.attr('id');
  momoj('#bt_0_268_Layer #mayLike_Lcode').find('ul').removeClass('selected');
  momoj('#bt_0_268_Layer #mayLike_Lcode').find('.' + thisId).addClass('selected');
};
//268浮層區塊點全選或取消
var mayLike_selectAll = function (checked){
  momoj('#bt_0_268_Layer #mayLike_Lcode').find('ul.selected input').attr('checked',checked);
};
var mayLike_checkboxClick = function (clickObj){
  var selectCnt = momoj('#bt_0_268_Layer #mayLike_Lcode').find('input[checked=true]').parents('li').length;
  if(selectCnt > 20){
    clickObj.attr('checked',false);
    alert('最多可編輯20個喜好分類');
  }
};
//268浮層選管區塊異動時使用
var mayLike_inputChange = function(){
  var selected_id = momoj('#bt_0_268_Layer #mayLike_Tooth .selected').eq(0).attr('id');
  mayLike_cntSelectNum(selected_id);
  mayLike_showCheckboxLiSelect();
};
//268浮層統計選了幾個館
var mayLike_cntSelectNum = function (toothId){
  var _selectCnt = momoj('#bt_0_268_Layer #mayLike_Lcode .' + toothId).find('input[checked]').length;
  var _html = _selectCnt == 0 ? '':'('+_selectCnt+')';
  momoj('#bt_0_268_Layer #mayLike_Tooth #' + toothId).find('b').html(_html);
};
var mayLike_showCheckboxLiSelect = function(){
  momoj('#bt_0_268_Layer #mayLike_Lcode').find('input[checked=true]').parents('li').addClass('selected');
  momoj('#bt_0_268_Layer #mayLike_Lcode').find('input[checked=false]').parents('li').removeClass('selected');
};
//268浮層選完館架後確定事件
var mayLike_categoryConfirm = function (){
  var lCodeArr = new Array();
  momoj('#bt_0_268_Layer #mayLike_Lcode').find('input[checked]').each(function(){
    var thisName = momoj(this).attr('name');
    if(typeof thisName !='undefined'){
      var lCode = thisName.split('_').length == 2 ? thisName.split('_')[1]:'';
      lCodeArr.push(lCode);
    }
  });
  momoj().cookie('mayLike_category',lCodeArr.toString(), {expires:365});
  //momoj(".floatingLayerBox .closeBtn").click();
  //reset268Div();
  _bgwPoc.doPost();
};
//當針對區塊頁面重新整理的時候先將舊資料清空
var reset268Div = function(){
  var _html = '<a class="rightBtn mlr" go="right"></a><a class="leftBtn mlr" go="left"></a>'
    +'<div class="slide"><ul></ul></div>';
  momoj('#bt_0_268_01 .view').html(_html);//
};
//268浮層取的記錄的管代號cookie
var mayLike_getCategoryCookie = function (){
  var categoryCookie = momoj().cookie('mayLike_category');
  if(typeof categoryCookie =='undefined' || categoryCookie == null){
    return;
  }
  var categoryCode = categoryCookie.split(',');
  for(var i=0,j = categoryCode.length; i<j;i++){
    momoj('#bt_0_268_Layer #mayLike_Lcode').find('input[name=lCode_'+categoryCode[i]+']').attr('checked',true);
  }
  mayLike_cntAllToothSelectNum();
};
//268浮層計算所有牙齒下選擇大分類的數量
var mayLike_cntAllToothSelectNum = function (){
  momoj('#bt_0_268_Layer #mayLike_Tooth').find('li').each(function(){
    var selected_id = momoj(this).attr('id');
    mayLike_cntSelectNum(selected_id);
  });
  mayLike_showCheckboxLiSelect();
};
//268區塊你可能會喜歡-追蹤
var mayLike_follow = function(goodsCode,follow,thisObj){
  itrilog.setGid(goodsCode);
  if(follow){
  	thisObj.find("img").attr("src","/ecm/img/de/0/bt_0_268/star_on.png?t=20170815001");
    itrilog.setAction(itrilog.itri_conf.ACTION.Follow);
  }else{
    itrilog.setAction(itrilog.itri_conf.ACTION.UnFavAdd);
  }
  itrilog.senditri();
  if(!follow){
    appendBackupData(thisObj);
  }
};
var appendBackupData = function(thisObj){
  if(_bgwPoc.backupCnt >= 36 ){
    _bgwPoc.backupCnt=0;
    _bgwPoc.backupGoods = new Array();
    reset268Div();
    _bgwPoc.doPost();
  }
  var _index = thisObj.parents('li').index();
  momoj('#bt_0_268_01 .slide ul').each(function(){
    momoj(this).find('li').eq(_index).remove();
    momoj(this).append(_bgwPoc.backupGoods[_bgwPoc.backupCnt]);
  });
  _bgwPoc.backupCnt++;
  var goodsCode = momoj("#bt_0_268_01").find('ul').find('li:last').attr("class");
  goodsCode = goodsCode.replace("YOU_LIKE-","");
  var _data = {
    flag: 2002,
    promo_yn: 'Y',
    goodsCode: [goodsCode]
  };
  getPromoPrice(_data);
};
var set_itriData_w_categ_info = function (_itriData){
  var categoryCookie = momoj().cookie('mayLike_category');
  if(typeof categoryCookie =='undefined' || categoryCookie == null || categoryCookie == ''){
    return;
  }
  var categoryCode = categoryCookie.split(',');
  var categoryArr = new Array();
  for(var i=0,j = categoryCode.length; i<j;i++){
    var categoryObj = {};
    categoryObj.code = categoryCode[i] + '00000';
    categoryArr.push(categoryObj);
  }
  _itriData['f_categ_info']=categoryArr;
};
//首頁取折後價的後續動作
var getPromoPrice = function (_data){
  momoj.ajaxTool({data: _data,async:true,ajaxSuccess:function(_rtnObj) {
      var momoData = _rtnObj;
      momoj.each(momoData.rtnData, function(key, value) {
    	  var key = key.replace("GDS-","YOU_LIKE-");
        //處理品名
        if (value.GOODS_NAME != "") {
          momoj("." + key).find("a").attr("title",value.GOODS_NAME);
          momoj("." + key).find(".prdName").text(value.GOODS_NAME);
        }
        //處理圖片
        if(!!value.OPERATOR) {
          //var imgSrc = momoj("." + key).find(".youLikePic img").attr("src") + "?t=" + value.OPERATOR;
          //momoj("." + key).find(".youLikePic img").attr("src" , imgSrc);
          //20200327延遲讀圖調整設定(熊)
          var imgSrc = momoj("." + key).find(".youLikePic img").attr("data-original") + "?t=" + value.OPERATOR;
          momoj("." + key).find(".youLikePic img").attr("data-original" , imgSrc);
        }
        //處理折後價
        var promoF = "";
        if(value.CP_YN == "1") {
          promoF = '<img alt="可使用折價券" title="可使用折價券" src="//img1.momoshop.com.tw/ecm/img/cmm/category/couponsIcon.png">';
        }
        var finalPrice = value.LAST_PRICE;//先直接給最終價格
        if(value.AFTER_PROMO_DATA){//折後價處理
          if(value.AFTER_PROMO_DATA.showPromoPriceYn == '1' && value.AFTER_PROMO_DATA.promoPrice != value.AFTER_PROMO_DATA.salePrice){
            finalPrice = value.AFTER_PROMO_DATA.promoPrice;
          }
        }
        finalPrice = '$' + finalPrice;
        momoj("." + key).find(".prdPrice").html(promoF + "<b>"+_bgwPoc.commafy(finalPrice)+"</b>");
      });
    }
  });
};

//mdiv url字串
_bgwPoc.getMdivUrl = function(itriData){
  if(typeof itriData == 'undefined' || typeof itriData.rec_pos == 'undefined'){
    return '';
  }

  var mdiv = '';
  var ctype = 'B';
  var rec_pos = itriData.rec_pos;
  switch(rec_pos){
    case 'edm'://edm 你可能會喜歡
      mdiv = '1000700000-webxsunder-hermes';
      break;
    case 'p'://你可能會喜歡
      mdiv = '1000700000-webxsunder-p';
      break;
    case 'p2'://大家都在買
      mdiv = '1000700000-webxsunder-p2';
      break;
    case 'gop_cs'://您可能也需要
      mdiv = '1000700000-webxsunder-gop_cs';
      break;
    case 'gop_av'://別人也逛過
      mdiv = '1000700000-webxsunder-gop_av';
      break;
    case 'mocs'://xioai
      mdiv = '1000700000-webxsunder-mocs';
      break;
    case 'cap_p0'://小分類
      mdiv = '1000700000-webxsunder-cap_p0';
      break;
    case 'cap_p2'://大分類
      mdiv = '1000700000-webxsunder-cap_p2';
      break;
    case 'cap_p3'://管架
      mdiv = '1000700000-webxsunder-cap_p3';
      break;
    default:
      mdiv = '1000700000-webxsunder-hermesDefault';
  }
  return '&mdiv=' + mdiv + '&ctype=' + ctype;
}

_bgwPoc.doPost();

//@ sourceURL=bgw.js