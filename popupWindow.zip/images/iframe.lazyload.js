/*
 * Ghvzon
 * iframe���� iframe.lazyload-v3
 */

$.debounce = function(func, wait, immediate) {
	var timeout
	return function() {
		var context = this, args = arguments
		later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}

$.throttle = function(func, wait) {
	var context, args, timeout, throttling, more, result
	var whenDone = $.debounce(function() {
		more = throttling = false
	}, wait)
	return function() {
		context = this, args = arguments
		var later = function() {
			timeout = null
			if (more) func.apply(context, args)
			whenDone()
		}
		if (!timeout) timeout = setTimeout(later, wait)
		
		if (throttling) {
			more = true
		} else {
			result = func.apply(context, args)
		}
		whenDone()
		throttling = true
		return result
	}
}

$.fn.iframetopSuction = function(option) {
	option = option || {}
	var fixCls = option.fixCls || 'fixed'
	var fixedFunc = option.fixedFunc
	var resetFunc = option.resetFunc

	var $self = this
	var $win  = $(window)
	if (!$self.length) return

	var offset = $self.offset()
	var fTop   = offset.top
	var fLeft  = offset.left

	// ?�s
	$self.data('def', offset)
	$win.resize(function() {
		$self.data('def', $self.offset())
	})

	$win.scroll(function() {
		var dTop = $(document).scrollTop()
		if (fTop < dTop) {
			$self.addClass(fixCls)
			if (fixedFunc) {
				fixedFunc.call($self, fTop)
			}
		} else {
			$self.removeClass(fixCls)
			if (resetFunc) {
				resetFunc.call($self, fTop)
			}
		}
	})
};
	
/*
 * IFRAMEu����Ū��?��
 * option
 *   iframe ?��/��???��
 *   content ?�e��???��
 *   diffTop �Z��?����?�t��
 *   diffBottom �Z�é�����?�t��
 *   lightCls ���G��class
 * 
 */
$.fn.iframeLight = function(option, callback) {
	option = option || {}
	var iframe = option.iframe || '.iframe'
	var content = option.content || '.content'
	var diffTop = option.diffTop || 90
	var diffBottom = option.diffBottom || 1000
	var lightCls = option.lightCls || 'curr'
	var open = option.open
	var $self = $(this)
	var $iframe = $self.find(iframe)
	var $content = $self.find(content)
	// ??�C?��?����m
	var contentPosi = $content.map(function(idx, elem) {
		var $cont = $(elem)
		var top = $cont.offset().top
		var bottom = $cont.offset().top
		var height = $cont.height()
		return {
			top: top-diffTop,
			bottom: top+diffBottom,
			jq: $cont
		}
	})
	//console.log(contentPosi)
	var $win = $(window)
	var $doc = $(document)

	var handler = $.throttle(function(e) {
		var dTop = $doc.scrollTop()
		
		highLight(dTop)
	}, 100)
	
	function highLight(docTop) {
		contentPosi.each(function(idx, posi) {
			
			var wheight = $win.height();
			if ( posi.top < docTop + wheight && posi.bottom > docTop - wheight ) {
				
				//��src������data-src�ɨ��N, �b�H�J
				var src = $iframe.eq(idx).attr('src');
				var data_src = $iframe.eq(idx).attr('data-src');
				if( src !== data_src){
					$iframe.eq(idx).attr('src', data_src ).css('opacity',1);
				}
				//$iframe.removeClass(lightCls)
				//$iframe.eq(idx).addClass(lightCls)
				if (callback) {
					callback($iframe, $content)
				}
			}
		})
	}
	/*�I����
	if (open) {
		$self.delegate(iframe, ' click', function(e) {
			var $na = $(this)
			var idx = $iframe.index($na)
			var $cont = $content.eq(idx)
			var top = $cont.offset().top
			$('html,body').animate({
				scrollTop: top-50 + 'px'
				//scrollTop: top-10 + 'px'
			})
			e.preventDefault();
		})
	}*/
	$win.scroll(handler)
};

/** iframe����Ū�� **/
$(window).load(function(){
	var $win = $(window);
	var $doc = $(document);
	var $content = $('.WRAPPER'); //�̤j�]
	$('.lazyiframe').css({ 'transition':'opacity 1s' , 'opacity':0 }); //�ʧ@�����lcss
	//$content.find('iframe').iframetopSuction({fixCls: 'catefixed'}) //�I���ʧ@����ʧ@
	$content.iframeLight({
		iframe :'.lazyiframe',	//�ʧ@����Class
		content : '.lazyiframe'	//�϶�����Class
		//open: true,				//�ʧ@�����I����
		//lightCls: 'cate-hover'	//�ʧ@����Ĳ�o�[��Class�W��
	})
	
})
