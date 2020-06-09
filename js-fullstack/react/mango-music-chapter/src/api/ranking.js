import jsonp from './jsonp';//走真正的请求  跨域请求解决方案
//获取排行榜列表的数据
import { URL, PARAM, OPTION } from './config';
export function getRankingList() {
  const data = Object.assign({}, PARAM, {
    g_tk: 5381,
        uin: 0,
        platform: "h5",
        needNewCode: 1,
        _: new Date().getTime()
  });
  // console.log(data);
  return jsonp(URL.rankingList,data,OPTION)
}

export function getRankingInfo() {
  
}