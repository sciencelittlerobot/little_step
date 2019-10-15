
/**
 * [dateFormat description]
 * @AuthorHTL
 * @DateTime  2018-05-18T18:05:52+0800
 * @param     {[type]}                 time [description]
 * @return    {[type]}                      [description]
 */
export function dateFormat(time, fmt) {
	let dateObj = new Date();

	dateObj.setTime(time * 1000);

	Date.prototype.format = function(format) {
		let date = {
	          'M+': this.getMonth() + 1,
	          'd+': this.getDate(),
	          'h+': this.getHours(),
	          'm+': this.getMinutes(),
	          's+': this.getSeconds(),
	          'q+': Math.floor((this.getMonth() + 3) / 3),
	          'S+': this.getMilliseconds()
	   	};

	   	if (/(y+)/i.test(format)) {
	        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	   	}
	   	for (let k in date) {
	        if (new RegExp('(' + k + ')').test(format)) {
	            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
	        }
	   	}

	   	return format;
	};

	return dateObj.format(fmt);
}

/**
* 一段时间内防止高频率调用
* @param {export function} func 函数体
* @param {number} wait 时间-单位毫秒
* @param {boolean} immediate 是否立即执行-可不传，默认false
*/
let timeout;

export function debounce(func, wait, immediate) {
	console.log('2323');
  	return function() {
  		console.log('898989');
    	let later = function() {
	      	timeout = null;
	      	if(!immediate) {
	        	func();
	      	}
	    };

	    let callNow = immediate && !timeout;

	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) {
	      	func();
	    }
	};
}

/**
 * [throttle description]
 * @AuthorHTL
 * @DateTime  2018-05-24T14:27:46+0800
 * @param     {Function}               fn    [description]
 * @param     {[type]}                 delay [description]
 * @return    {[type]}                       [description]
 */
export function throttle(fn, delay) {
    let timer = null;

    return function() {
      	clearTimeout(timer);
      	timer = setTimeout(function() {
        	fn.apply(this, arguments);
      	}, delay || 1);
    };
}

/**
 * [scrollToBottom description]
 * @AuthorHTL
 * @DateTime  2018-05-28T11:31:11+0800
 * @param     {Function}               fn [description]
 * @return    {[type]}                    [description]
 */
export function scrollToBottom(fn) {
	let getScrollTop = function() {
		let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;

	　　if(document.body) {
	　　　　bodyScrollTop = document.body.scrollTop;
	　　}
	　　if(document.documentElement) {
	　　　　documentScrollTop = document.documentElement.scrollTop;
	　　}
	　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
	　　return scrollTop;
	};

	let getScrollHeight = function() {
		let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;

	　　if(document.body) {
	　　　　bodyScrollHeight = document.body.scrollHeight;
	　　}
	　　if(document.documentElement) {
	　　　　documentScrollHeight = document.documentElement.scrollHeight;
	　　}
	　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
	　　return scrollHeight;
	};

	let getWindowHeight = function() {
		let windowHeight = 0;

	　　if(document.compatMode === 'CSS1Compat') {
	　　　　windowHeight = document.documentElement.clientHeight;
	　　} else {
	　　　　windowHeight = document.body.clientHeight;
	　　}
	　　return windowHeight;
	};

	if (getScrollTop() + getWindowHeight() === getScrollHeight()) {
		fn.apply(this, arguments);
	}
}