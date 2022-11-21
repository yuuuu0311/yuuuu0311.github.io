/*
 * Ghvzon
 * 搶紅包倒數 clockSimple_v3
 *******************************************************************
 *  --2019.07.23--v3-波段分鐘用for跑
 *  --2019.04.01--v2-
 *******************************************************************
 */

function clockSimple_CP(){
  var day = 1 ;
  var nowTime = new Date(); 
  var nowHours = nowTime.getHours();
  var nowMinutes = nowTime.getMinutes();
  var nowSecond = nowTime.getSeconds();
  var now_all_Minutes = nowHours*60 + nowMinutes; //目前分鐘數
  //console.log('目前時間: '+nowHours +'時'+ nowMinutes +'分'+ nowSecond +'秒,目前分鐘數:'+now_all_Minutes);

  var reHours = 24*day-nowHours-1;
  var reMinutes = 60-nowMinutes-1;
  var reSecond = 60-nowSecond;
  var re_all_Minutes = reHours*60 + reMinutes; //剩餘分鐘數
  //console.log('剩餘時間: '+reHours +'時'+ reMinutes +'分'+ reSecond +'秒,剩餘分鐘數:'+re_all_Minutes);
  var Time = [];

  /*搶折價券時間波段設定*/
//波段一
if ( new Date('2022/4/11 00:00:00') <= nowTime && nowTime <= new Date('2022/8/4 23:59:59') ){
  var Time = [
    //波段+1(00)
    [09,08],
    [10,08],
    [12,08],
    [13,08],
    [15,08],
    [17,08],
    [18,08],
    [19,08],
    [20,08],
    [21,08],
  ];
};

//波段二
if ( new Date('2022/8/5 00:00:00') <= nowTime && nowTime <= new Date('2022/8/8 23:59:59') ){
  var Time = [
    //波段+1(00)
    [09,08],
    [10,08],
    [12,08],
    [13,08],
    [14,08],
    [15,08],
    [17,08],
    [18,08],
    [19,08],
    [20,08],
    [21,08],
    [22,08],
  ];
};



// //正式
//  if ( new Date('2022/5/9 00:00:00') <= nowTime && nowTime <= new Date('2022/5/12 23:59:59') ){
//    var Time = [
//      //波段+1(00)
//      [00,00],
//      [09,05],
//      [10,05],
//      [12,05],
//      [13,05],
//      [15,05],
//      [17,05],
//      [18,05],
//      [19,05],
//      [20,05],
//      [21,05],
//    ];
//  };

  
  //波段分鐘數+1(00)
  var Minutes_Time = [];
  for( var i = 0; i < Time.length; i++ ){
    Minutes_Time[i] = Time[i][0]*60 + Time[i][1]
  }
  //console.log('Minutes_Time: '+ Minutes_Time);

  //動作
  if( now_all_Minutes >=  Minutes_Time[Time.length-1]){
    //最後1波
    //console.log('最後1波, 下一檔時段'+ Time[1][0] + ':' +  Time[1][1] , ', 倒數'+ (1440 - now_all_Minutes +Minutes_Time[1]) +'分');
    $('.giftReMinutes_CP').html( 1440 - now_all_Minutes +Minutes_Time[1]); //1440-目前分鐘+第一波分鐘
    if ( Time[1][0] < 10 ){ Time[1][0] = '0'+Time[1][0]}
    if ( Time[1][1] < 10 ){ Time[1][1] = '0'+Time[1][1]}
    $('.nextTime_CP').html( Time[1][0] + '<span class="timeout-play">:</span>' +  Time[1][1] + '');
  } else {
    //第1波~倒數第2波
    for (var i = 0; i < Time.length-1; i++){
      if ( Minutes_Time[i] <= now_all_Minutes && now_all_Minutes < Minutes_Time[i+1] ){
        //console.log('快到第'+ (i+1) +'波, 下一檔時段'+ Time[i+1][0] + ':' +  Time[i+1][1] , ', 倒數'+ (Minutes_Time[i+1] - now_all_Minutes)+'分');
        $('.giftReMinutes_CP').html( Minutes_Time[i+1] - now_all_Minutes );
        if ( Time[i+1][0] < 10 ){ Time[i+1][0] = '0'+Time[i+1][0]}
        if ( Time[i+1][1] < 10 ){ Time[i+1][1] = '0'+Time[i+1][1]}
        $('.nextTime_CP').html( Time[i+1][0] + '<span class="timeout-play">:</span>' +  Time[i+1][1] + '');
      }
    }
  }
  setTimeout("clockSimple_CP()",1000)
}
clockSimple_CP(); 