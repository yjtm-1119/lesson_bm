// ， 使命是提供对跨域请求抽象封装
// 服务于ranking
// 服务于  Recommend.js 

// url 不一样 
// params  
// es6 模块化
import originJsonp from "jsonp";

let jsonp = (url, data, option) => {
  return new Promise((resolve, reject) => {
    // console.log(buildUrl(url, data), '----------');
    originJsonp(buildUrl(url, data), option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    })
  });
}

function buildUrl(url, data) {
  let params = [];
  for (var k in data) {
    params.push(`${k}=${data[k]}`);
  }
  let param = params.join("&");
  if (url.indexOf("?") === -1) {
    url += "?" + param;
  } else {
    url += "&" + param;
  }
  return url;
}

export default jsonp;
