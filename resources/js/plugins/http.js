import Vue from 'vue'
import qs from 'qs'; 
import axios from 'axios'
import {Message} from 'element-ui';

// axios.defaults.timeout = 5000;  // 请求超时
axios.defaults.baseURL ='http://vueyunk.com/'; // 域名
// axios.defaults.headers.common['Authorization'] = 'Bearer 1111111';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.withCredentials = true; // 允许跨域携带cookie
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token');
    // const uid = localStorage.getItem('uid');
    
    // post 传输
    if(config.method === 'post' && !isEmpty(token)){
      let data = qs.parse(config.data);
      config.data = qs.stringify({
          token: token,
          ...data
      });
    }

    // get 传输
    if(config.method === 'get' && !isEmpty(token)){
      config.params  = {
          token: token,
          ...config.params
      };
    }
    

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    // console.log(res);
    if(res.status != 200){
      Message.error("请求异常,错误信息："+res.statusText+"！");
      console.log(res);
    }
    return res;
  }, function (err) {
    // 如果地址无法请求
    if(isEmpty(err.response)){
      Message.error("网络异常，请检查！");
      console.log(err);
    }

    // 存在状态码
    if (err.response.status) {
      // console.log(err.response);
      switch(err.response.status){
        case 422:
          for(var v in err.response.data.errors){
            Message.error(v + ':' + err.response.data.errors[v][0]);
            continue;
          }
          break;
        case 401:
          // token 失效
          if(err.response.statusText == 'Unauthorized'){
            if(err.response.data.message == undefined){
              Message.error(err.response.data);
            }else{
              Message.error(err.response.data.message);
              window.location.href='/#/admin/login';
            }
          }else{
            Message.error(err.response.statusText+",Code："+err.response.status+"！");
          }
          break;

        default:
          Message.error(err.response.statusText+",Code："+err.response.status+"！");
          break;
      }
      
    }else{
      Message.error("未知错误,错误信息："+err.response.statusText+"！");
    }
    
    // 对响应错误做点什么
    return Promise.reject(err);
  });


/*对象转json*/
export function toJson(data){
  var json = JSON.stringify(data);
  return json;
}

/*判断是否为空*/
export function isEmpty(str){
  if(str === '' || str === null || str === undefined){
    return true;
  }
  return false;
}


/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){ 
 return new Promise((resolve, reject) =>{  
  axios.get(url, {   
   params: params  
  })  
  .then(res => {   
   resolve(res.data);  
  })  
  .catch(err => {   
   reject(err.data)  
  }) 
 });
}

export function put(url, params){ 
 return new Promise((resolve, reject) =>{  
  axios.put(url, {   
   params: params  
  })  
  .then(res => {   
   resolve(res.data);  
  })  
  .catch(err => {   
   reject(err.data)  
  }) 
 });
}

export function deletes(url, params){ 
 return new Promise((resolve, reject) =>{  
  axios.delete(url, {   
   params: params  
  })  
  .then(res => {   
   resolve(res.data);  
  })  
  .catch(err => {   
   reject(err.data)  
  }) 
 });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) { 
 return new Promise((resolve, reject) => {   
  axios.post(url, qs.stringify(params))  
  .then(res => {   
   resolve(res.data);  
  })  
  .catch(err => {   
   reject(err.data)  
  }) 
 });
}
 //Vue.use(axios)