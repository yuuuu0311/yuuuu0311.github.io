/*
 * 活動提醒按鈕JS-v2.0
 *******************************************************************
 *  --2021.06.02--wuchang-加入行事曆(v2.0)
 *  --2021.09.17--Ghvzon-移除過期通知(v1.1)
 *  --2019.10.14--4j-(v1.0)
 *******************************************************************
 */

//Ready 
momoj(document).ready(function() {
  momoj.each(remindPromo, function(index){
    remindButtonClick(index);
  });
});

//活動提醒按鈕
function remindButtonClick(index){
  //提醒 #promo0_0Remined
  var alarm_remindType = 0;
  var alarm_remindButton_id = '#promo' + alarm_remindType + '_' + index + 'Remined';
  momoj(alarm_remindButton_id).attr('href', 'javascript:remind(\'' + index + '\',\'' + alarm_remindType + '\');');
  edmShare.isApp() ? momoj(alarm_remindButton_id).show():momoj(alarm_remindButton_id).hide(); //一般用法
  edmShare.isApp() ? momoj('#promo0_all_Remined').show():momoj('#promo0_all_Remined').hide(); //進階用法---1顆按鈕提醒多時段(隱藏按鈕)
  
  //行事曆 #promo1_0Remined
  var calender_remindType = 1;
  var calender_remindButton_id = '#promo' + calender_remindType + '_' + index + 'Remined';
  momoj(calender_remindButton_id).attr('href', 'javascript:remind(\'' + index + '\',\'' + calender_remindType + '\');');
  edmShare.isApp() ? momoj(calender_remindButton_id).show():momoj(calender_remindButton_id).hide(); //一般用法
  edmShare.isApp() ? momoj('#promo1_all_Remined').show():momoj('#promo1_all_Remined').hide(); //進階用法---1顆按鈕行事曆提醒多時段(隱藏按鈕)
}

//活動提醒
function remind(index,remindType){
  if(edmShare.isApp()){
    var now = new Date();
    var Time      = remindPromo[index].promoTime;
    var alarmTime = new Date(remindPromo[index].promoTime).getTime();
    var show      = new momoAppBridge("shop");
    var isExpired = (alarmTime - Date.now())>0; //>0 還沒過期
    var startDate = new Date(remindPromo[index].startDate).getTime();
    var endDate   = new Date(remindPromo[index].endDate).getTime();
    var obj = {
      "notificationId":index, // unique id
      "alarmTime" : alarmTime - 300000, // 提前5分鐘提醒(5m*60s*1000)
      "alert" : {
        "title" : remindPromo[index].promoTitle, // alert title
        "content" : '您設提醒的'+Time+'【'+remindPromo[index].promoContent+'】要開始囉！還不手刀前往！'
      }, // alert message
      "action" : {
        "actionType" :1, // actionType, open Web Page, Goods Page, Category Page…
        "actionValue" : remindPromo[index].url
      }
    };
    var calenderObj = {
      "title"       : remindPromo[index].promoTitle,
      "startDate"   : startDate,
      "endDate"     : endDate,
      "notifyTime"  : remindPromo[index].notifyTime,
      "content"     : remindPromo[index].promoContent + '\n' + remindPromo[index].edmUrl
    };
    if (isExpired){
      remindType = (!remindType)? '0' : remindType; //0=alarm 1=calender
      if(remindType === '0'){
        show.notifyApp("setNotification",JSON.stringify(obj)); // URL, GoodsCode, CategoryCode…
      }else if(remindType === '1'){
        show.notifyApp("calenderNotification",JSON.stringify(calenderObj));
      }
    }else{
    //  alert("此提醒已經過期");
    }
  }else{
    alert("此功能限APP使用");
  }
}