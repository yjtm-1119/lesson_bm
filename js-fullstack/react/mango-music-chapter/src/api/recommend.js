import jsonp from './jsonp'; // 走真正的请求 QQ 跨域请求解决方案 
import { URL, PARAM, OPTION } from './config';
// 获取排行榜列表的数据
export function getNewAlbum() {
  const data = Object.assign({}, PARAM, {
    g_tk: 1278911659,
    hostUin: 0,
    platform: "yqq",
    needNewCode: 0,
    data: `{"albumlib":
{"method":"get_album_by_tags","param":
{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":50,"click_albumid":0},
"module":"music.web_album_library"}}`
  });
  const option = {
    param: "callback",
    prefix: "callback"
  }
  // console.log(data);
  return jsonp(URL.newalbum, data, option);
}