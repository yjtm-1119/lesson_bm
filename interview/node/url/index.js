// const url = "http://baidu.com:8080/test/h?query=js&a=1  #node";
// const url = require('url');
// const querystring = require('querystring');
// const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node"
// console.log(querystring.escape(urlString));
// const url = require('url');  // node  url 模块 内置
const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node"; // url 字符串
// console.log(url.parse(urlString));

function getQueryString() {
  var obj = new Object();
  if (urlString.indexOf("?") != -1) {
    var querystr = urlString.split('?')[1];
    if (urlString.indexOf("#") != -1) {
      querystr = querystr.split("#")[0];
    }
    // console.log(querystr);
    var strs = querystr.split("&");
    for (var i = 0; i < strs.length; i++){
      obj[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return obj;
}
getQueryString(urlString);