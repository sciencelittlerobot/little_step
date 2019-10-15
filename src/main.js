import './style/main.scss';
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.mixin({
	methods: {
		/**
		 * [goAhead description]
		 * @AuthorHTL
		 * @DateTime  2018-05-21T10:48:28+0800
		 * @param     {[type]}                 pageName [description]
		 * @return    {[type]}                          [description]
		 */
		goAhead: function(pageName) {
			window.location.href = '/#/' + pageName;
		},

		/**
		 * [dateFormat description]
		 * @AuthorHTL
		 * @DateTime  2018-05-21T10:48:20+0800
		 * @param     {[type]}                 time [description]
		 * @param     {[type]}                 fmt  [description]
		 * @return    {[type]}                      [description]
		 */
		dateFormat: function(time, fmt) {
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
		},

		/**
		 * [mergeJsonObject description] 合并两个json对象
		 * @AuthorHTL
		 * @DateTime  2018-06-08T17:22:56+0800
		 * @param     {[type]}                 jsonbject1 [description]
		 * @param     {[type]}                 jsonbject2 [description]
		 * @return    {[type]}                            [description]
		 */
		mergeJsonObject: function(jsonbject1, jsonbject2) {
		  	let resultJsonObject = {};

		  	for(let attr in jsonbject1) {
		    	resultJsonObject[attr] = jsonbject1[attr];
		  	}
		  	for(let attr in jsonbject2) {
		    	resultJsonObject[attr] = jsonbject2[attr];
		  	}
		  	return resultJsonObject;
		}
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
