import { axiosInstance } from './config';
// export const getRecommendListRequest = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: [{
//           id: 1,
//           title: 'dsadasas'
//         }]
//       })
//     }, 1000)
//   })
// }
//项目所有请求api的列表文件  每个请求一个函数 每个函数返回一个promise

// api  与action的分离点

//首页广告  任何请求都有一个函数定义
export const getBannersRequest = () => {
  return axiosInstance.get("/banner");  //返回的是Promise
}

//推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

//歌手列表  支持分页    0 -> 50 ->100
//offset 接口请求规范
// reducer init { singerList: [], offset: 0 }
// useEffect dispatch getHotSingerList  异步
//   -> getHotSingerListRequest  api 请求
// then
// changeSingerList[][...data]同步
// changeOffset 0  data.length  同步

// better - scroll   baesUI  scroll / index.js 上拉触底加载更多
// 下拉刷新的时候

export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

// history.push() Link
//
//前后端合作的要素有哪些  
//1. 接口地址  url  /top/artists 请求  restful  资源的暴露
//2.传参
//3.接口文档  后端给 


export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};
