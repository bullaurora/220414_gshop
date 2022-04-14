//ajax请求函数模块
//返回值是一个promise对象
import axios from 'axios'
export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === 'GET') {
      //执行异步请求
      let dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '="' + data[key] + '&';
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送promise get请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then((response) => {
        resolve(response.data)
    })
    .catch((error) => {
            reject(error)
    })
    
  })
}
