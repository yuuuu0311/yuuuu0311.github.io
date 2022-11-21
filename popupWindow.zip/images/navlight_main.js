
$(window).on('load',function(){
	//定義區塊Class
	var $WRAPPER = $('.WRAPPER'); //最大包

	/* 
	 * -------------------------------------------
	 * Phone選單套件【NavArea_tabbar公版錨點頁籤】
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
		//content: '',  //選單對應內容區塊Class。預設.js-navlight_content
		top_i: 15,                        //錨點偏移
		
		//開關
		open_light: true,                 //啟動--高亮對應區塊。
    open_getname: true,               //啟動--自動擷取選單資料
	});



	/* 
	 * -------------------------------------------
	 * PC選單套件
	 * -------------------------------------------
	 */ 
	//高亮
	$WRAPPER.navLight({
		navarea: '.fixed_Area',        //最大包Class。預設.NavArea
		navs: '.box',                     //區塊Class。預設.Nav
		//nav_wrapper: '.fixedBox_1',      //內容包Class。預設.Nav-wrapper
		content: '.js-PC',  //選單對應內容區塊Class。預設.js-navlight_content
		//top_i: 15,                        //錨點偏移
		
		//開關
		open_light: true,                 //啟動--高亮對應區塊。
    open_getname: true,               //啟動--自動擷取選單資料
	});
	




	/*多選單互動啟動(勿動)
	fNavChange()*/

});



 
 