import * as actionTypes from './constants';
import { getRecommendListRequest, getBannersRequest } from '../../../api/request';

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: data
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const changeBaners =  (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data
})

export const getRecommendList = () => {
  return ( dispatch ) => {
    getRecommendListRequest().then(data => {
      dispatch(changeRecommendList(data))
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log('推荐歌单数据传输有误');
    })
  }
}



export const getBanners = () => {
  return (dispatch) => {
    getBannersRequest()
      .then(data => {
        console.log(data);
        const action = changeBaners(data.data.banners);
        dispatch(action);
      })
      .catch(() => {
        console.log('轮播图数据传输错误');
      })
  }
}