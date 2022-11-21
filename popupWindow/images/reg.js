var serviceUrl = '/ajax/promoMech.jsp';
// ���ɸ��|
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
				alert("ERROR\n�ܩ�p!���A���ȮɵL�k�s�u�A�еy�ԦA��");
			}
		});
		return result;
	}
}

//��ܥثe�n�O�H��
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
      alert('�ܩ�p�A���A���ȮɵL�k�s�u�A�еy�ԦA��');
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
		
				alert('�Щ󬡰ʮɶ����ѥ[����');
			}
			else if(returnMsg == 'NOT_USED') {
				alert('�ܩ�p�A���ʼȤ��}��');
			}
			else if(returnMsg == 'W') {
				alert('�Щ���w�P���ѥ[����');
			}
			else if(returnMsg == 'WP') {
				alert('�v�Ъ��B���~');
			}
			else if(returnMsg == 'L') {
				alert('�Х��n�J�|��');
			}
			else if(returnMsg == 'NOT_APP') {
				alert('�Цbmomo APP�ѥ[����');
			}
			else if(returnMsg == 'NOT_WEB') {
				alert('�Цbmomo�������ѥ[����');
			}
			else if(returnMsg == 'A') {
        momoj('#html1').hide();
				momoj('#html4').show();
			}
			else if(returnMsg == 'FULL') {
        momoj('#html1').hide();
        momoj('#html3').show();
				//alert('���ʤw�B��');
			}
			else if(returnMsg == 'EA') {
				alert('�z���ŦX���ʸ��');
			}
			else if(returnMsg == 'NO_PT') {
				alert('�I�Ƥ���');
			}
			else if(returnMsg == 'INS') {

        momoj('#html1').hide();
        momoj('#html2').show();
			}
			else {
				alert('�ܩ�p�A���A���ȮɵL�k�s�u�A�еy�ԦA��');
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
	'<p>�s������10���i��omomo��$1��</p>'+
	'<p class="txt01">�Ѿl���</p>'+
	'<p class="txt02" id="sec"><span>��</span></p>'+
	'</div>'+
	'<!--���A2-->'+
	'<div id="html2" class="fixedArea_bn3" style="display:none;">'+
	'<p class="txt03">��o<span>momo��$1���I</span></p>'+
	'<p class="txt01">momo���N��U�g�k��</p>'+
	'</div>'+
	''+
	'<!--���A3-->'+
	'<div id="html3" class="fixedArea_bn4" style="display:none;">'+
	'<p class="txt01">�w�B���A����ЦA���A�F</p>'+
	'</div>'+
	''+
	'<!--���A4-->'+
	'<div id="html4" class="fixedArea_bn4" style="display:none;">'+
	'<p class="txt01">������Ȥw����</p>'+
	'</div>';
  momoj(document.body).append(tmpHtml1);

}

