/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// import './plugins/element.js'// element Ui 库
import './public/style.css' // 公共类
import './public/fonts/iconfont.css' // 公共类
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };

import {formatDate} from './plugins/function.js' // 辅助js 库
import {post,get,put,deletes,toJson,isEmpty} from './plugins/http.js' // axios
import md5 from 'js-md5'; // md5

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$put=put;
Vue.prototype.$delete=deletes;
Vue.prototype.$toJson=toJson;
Vue.prototype.$isEmpty=isEmpty;
Vue.prototype.$md5=md5;

Vue.filter('formatDate', function (time) {
    var date = new Date(time*1000);
    return formatDate(date, 'yyyy-MM-dd hh:mm');
});

Vue.filter('formatDataAuto', function ([time,str]) {
    var date = new Date(time*1000);
    return formatDate(date, str);
});


Vue.prototype.ROOT_URL = 'http://127.0.0.1:8000/api/';


import App from './App.vue'; 
import router from './router';
const app = new Vue({
	el: '#app',
	router,  //添加的内容
	render: h => h(App),
});
