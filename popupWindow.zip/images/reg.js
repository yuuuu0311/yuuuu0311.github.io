var serviceUrl = '/ajax/promoMech.jsp';
// 圖檔路徑
var src = momoj('#itjs').attr('src');
var imgEcm  = src.substring(0,src.indexOf("images\/"));
var alertMsg = '';
var m_promo_no = 'M20190801005';
var dt_promo_no = 'D20190801001';
var gift_code = 'task';
var promoAjaxKey = false;
var today = new Date();
var hour = today.getHours();

//Ready 
momoj(document).ready(function() {
  if(location.href.indexOf('&s1xb7e5w') >= 0 && parseInt(hour)>=12){
  
    addHtml();
    var getCntStatus = cntDay();
    if(getCntStatus == 'FULL'){
      momoj('#html3').show();
      
      setTimeout(function(){
        closeButton();
      }, 3000);
      
    }else{
      momoj('#html1').show();
      clockForReg();
    }
  
  
  }

});

var regTime = 11;
function clockForReg(){
  regTime = --regTime;
  if ( regTime < 0){
    regDay();
    return;
  }
  
  momoj('#sec').html(regTime);
  setTimeout("clockForReg()",1000)
};


function closeButton() {
  momoj('#html1').fadeOut();
  momoj('#html2').fadeOut();
  momoj('#html3').fadeOut();
  momoj('#html4').fadeOut();
}
  
function promoAjax(data) {
	if(promoAjaxKey == false) {
		promoAjaxKey = true;
		var result = '-1';
		momoj.ajax({
			url : serviceUrl,
			async : false,
			cache : false,
			type : 'POST',
			dataType : 'json',
			contentType : 'application/x-www-form-urlencoded; charset=big5',
			data : data,
			timeout : 30000,
			success : function(rtnData) {
				result = rtnData;
				promoAjaxKey = false;
			},
			error : function(err, msg1, msg2) {
				promoAjaxKey = false;
				alert("ERROR\n很抱歉!伺服器暫時無法連線，請稍候再試");
			}
		});
		return result;
	}
}

//顯示目前登記人數
function cntDay() {
  
  var data = {
    doAction : 'cnt',
    m_promo_no : m_promo_no,
    dt_promo_no : dt_promo_no,
    cnt_type : '1003'
  };
  var rtnData = promoAjax(data);
  
  if(rtnData != '-1') {
    var returnMsg = rtnData.returnMsg;
    if(returnMsg == 'OK') {
      
      return rtnData.D20190801001_status;

    }else {
      alert('很抱歉，伺服器暫時無法連線，請稍候再試');
    }
  }
  
}


function regDay() {
	momoj().MomoLogin({flag:false, LoginSuccess:function() {
		var data = {
			doAction : 'reg',
			m_promo_no : m_promo_no,
			dt_promo_no : dt_promo_no,
			gift_code : gift_code
		};
		var rtnData = promoAjax(data);
		if(rtnData != '-1') {
			var returnMsg = rtnData.returnMsg;
			if(returnMsg == 'D') {
      
        setTimeout(function(){
          closeButton();
        }, 3000);
		
				alert('請於活動時間內參加活動');
			}
			else if(returnMsg == 'NOT_USED') {
				alert('很抱歉，活動暫不開放');
			}
			else if(returnMsg == 'W') {
				alert('請於指定星期參加活動');
			}
			else if(returnMsg == 'WP') {
				alert('競標金額錯誤');
			}
			else if(returnMsg == 'L') {
				alert('請先登入會員');
			}
			else if(returnMsg == 'NOT_APP') {
				alert('請在momo APP參加活動');
			}
			else if(returnMsg == 'NOT_WEB') {
				alert('請在momo網頁版參加活動');
			}
			else if(returnMsg == 'A') {
        momoj('#html1').hide();
				momoj('#html4').show();
			}
			else if(returnMsg == 'FULL') {
        momoj('#html1').hide();
        momoj('#html3').show();
				//alert('活動已額滿');
			}
			else if(returnMsg == 'EA') {
				alert('您不符合活動資格');
			}
			else if(returnMsg == 'NO_PT') {
				alert('點數不足');
			}
			else if(returnMsg == 'INS') {

        momoj('#html1').hide();
        momoj('#html2').show();
			}
			else {
				alert('很抱歉，伺服器暫時無法連線，請稍候再試');
			}
      
      setTimeout(function(){
        closeButton();
      
      }, 3000);
		}
	}});
}

function addHtml(){

  var tmpHtml1 = 	
  '<div id="html1" class="fixedArea_bn1" style="display:none;">'+
	'<p>瀏覽頁面10秒後可獲得momo幣$1元</p>'+
	'<p class="txt01">剩餘秒數</p>'+
	'<p class="txt02" id="sec"><span>秒</span></p>'+
	'</div>'+
	'<!--狀態2-->'+
	'<div id="html2" class="fixedArea_bn3" style="display:none;">'+
	'<p class="txt03">獲得<span>momo幣$1元！</span></p>'+
	'<p class="txt01">momo幣將於下週歸戶</p>'+
	'</div>'+
	''+
	'<!--狀態3-->'+
	'<div id="html3" class="fixedArea_bn4" style="display:none;">'+
	'<p class="txt01">已額滿，明日請再接再厲</p>'+
	'</div>'+
	''+
	'<!--狀態4-->'+
	'<div id="html4" class="fixedArea_bn4" style="display:none;">'+
	'<p class="txt01">今日任務已完成</p>'+
	'</div>';
  momoj(document.body).append(tmpHtml1);

}

