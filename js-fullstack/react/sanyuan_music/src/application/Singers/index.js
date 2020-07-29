import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import { NavContainer, ListContainer, List, ListItem, } from './style';
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item/index';
// import {  getHotSingerList, refreshMoreHotSingerList, changeListOffset } from './store/actionCreators'; 
import  LazyLoad, {forceCheck} from 'react-lazyload';
import Scroll from "../../baseUI/scroll/index";
import { renderRoutes } from 'react-router-config';

function Singers (props) {
  const scrollRef = useRef(null);
  const { category, alpha, singerList, pageCount } = props;
  console.log(singerList);
  const { updateCategory, updateAlpha, getHotSinger, pullUpRefresh, refreshMoreHotSingerList, pullDownRefresh } = props;
  
  const enterDetail = (id)  => {
    props.history.push(`/singers/${id}`);
  };

  // const renderSingerList = () => {
  //   const {singerList} = props;
  //   return (
  //     <List>
  //     {
  //       singerList.map((item, index) => {
  //         return (
  //           <ListItem key={item.accountId+""+index} onClick={() => enterDetail(item.id)}>
  //               <div className="img_wrapper">
  //                 <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="music"/>}>
  //                   <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
  //                 </LazyLoad>
  //               </div>
  //               <span className="name">{item.name}</span>
  //             </ListItem>
  //         )
  //       })
  //     }
  //     </List>  
  //   )
  // };

  const handlePullUp = () => {
    pullUpRefresh(category === '', pageCount);
  };

  const handlePullDown = () => {
    pullDownRefresh(category === '', pageCount);
  }

  const handleUpdateAlpha = (newVal) => {
    if(alpha === newVal) return;
    updateAlpha(newVal);
  }
  const handleUpdateCategory = (newVal) => {
    if(category === newVal) return;
    updateCategory(newVal);
  }

  useEffect(() => {
    if(!singerList.length && !category && !alpha) {
      getHotSinger();
    }
  }, []);
  return (
    <div>
      <NavContainer>
        <Horizen title="分类（默认热门）:" list={categoryTypes} handleClick={(v) => handleUpdateCategory(v) }  oldVal={category}/>
        <Horizen title="首字母:" list={alphaTypes} handleClick={(v) => handleUpdateAlpha(v) } oldVal={alpha}/>
      </NavContainer>
      {/* <ListContainer play={2}>
        <Scroll 
            onScroll={forceCheck} 
            pullUp={ handlePullUp }
            pullDown={ handlePullDown }
            ref={ scrollRef }>
          { renderSingerList() }
        </Scroll>
      </ListContainer> */}
      { renderRoutes(props.route.routes) }
    </div>
  )
}


const mapStateToProps = (state) => ({
  alpha: state.singers.alpha,
  category: state.singers.category,
  singerList: state.singers.singerList,
  pageCount: state.singers.pageCount
})
const matDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, matDispatchToProps)(memo(Singers));