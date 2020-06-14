import React from 'react';
import './recommend.styl'; // webpack
import { Route } from 'react-router-dom';  // 子路由
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import Album from '@/components/album/Album';
import Loading from '../../common/loading/Loading';
import Scroll from '@/common/scroll/Scroll';
import * as AlbumModel from '@/model/album';  // 一次性把album.js 所有的模块都引入
// 应用中很多图片
// import Lazyload from 'react-lazyload'; // 图片延迟加载
// 1. 路由   
// 2. redux
// 3. 切页面+ js 
// 4. 生命周期 + api 
// 5. 公共组件

// 所有的数据请求都放到api目录下
import { getNewAlbum } from '../../api/recommend';
import LazyLoad, { forceCheck } from 'react-lazyload';

// 1. 幻灯片， swiper
// 2. 加入 swiper功能
// 数据   { src, link}
class Recommend extends React.Component {
    constructor() {
        super()
        // 这个组件 state , 属于这个组件， 不属于其他组件， 
        // 1. 用假数据 把页面先做出
        // 2. 未来再改成接口
        this.state = {
            refreshScroll: false,
            newAlbums: [], /* 数据驱动的界面 */
            loading: true,
            sliderList: [{
                id: 1,
                picUrl: 'https://mat1.gtimg.com/rain/bailing20/4333e6a9ac25.uzi.png',
                linkUrl: 'https://https://xw.qq.com/m/sports'
            }, {
                id: 2,
                picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11885314858_640330/0',
                linkUrl: 'https://https://xw.qq.com/m/sports'
            }, {
                id: 3,
                picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11884276052_640330/0',
                linkUrl: 'https://https://xw.qq.com/m/sports'
            }] // 幻灯片  没有必要去redux 
        }
    }

    componentDidUpdate() {
        //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
        if (this.bScroll && this.props.refresh === true) {
            this.bScroll.refresh();
        }
    }

    componentDidMount() {
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        })

        // 获取最新专辑 功能的封装
        // fetch  低级的
        getNewAlbum() /**promise */
            .then(res => {
                // console.log(res)
                // 都端开发， mysql  define 表结构， 
                // model  前端  定义结构
                // 不回家model, 多加了一些业务代码在component   model 
                let albumList = res.albumlib.data.list;

                // model 
                // albumList.sort()
                this.setState({
                    loading: false,
                    newAlbums: albumList
                }, () => {
                    this.setState({
                        refreshScroll: true
                    })
                })
            })
        // setTimeout(() => {
        //   this.setState({
        //     loading: false
        //   })
        // }, 3000)
    }
    render() {
        // 切页面
        // console.log(this.state.newAlbums);
        let { match } = this.props;
        let albums = this.state.newAlbums.map(item => {
            let album = AlbumModel.createAlbumByList(item);
            // console.log(album);
            return (
                <div className="album-wrapper"
                    key={album.id}
                    onClick={this.toAlbumDetail.bind(this, `${match.url + '/' + album.mId}`)}
                >
                    <div className="left">
                        <LazyLoad height={60}>
                            <img src={album.img} alt={item.name} width="100%" height="100%" />
                        </LazyLoad>
                    </div>
                    <div className="right">
                        <div className="album-name">
                            {album.name}
                        </div>
                        <div className="singer-name">
                            {album.singer}
                        </div>
                        <div className="public-time">
                            {album.publicTime}
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="music-recommend">

                <div className="slider-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.sliderList.map(slider => {
                                return (
                                    <div className="swiper-slide" key={slider.id}>
                                        <a href={slider.linkUrl} className="slider-nav">
                                            <img src={slider.picUrl} alt="" width="100%" height="100%" />
                                        </a>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <Scroll
                    refresh={this.state.refreshScroll}
                    onScroll={(e) => {
                        console.log(e);
                        forceCheck();
                    }}>
                    <div className="album-container">
                        <h1 className="title">最新专辑</h1>
                        <div className="album-list">
                            {albums}
                        </div>
                    </div>
                </Scroll>
                <Loading show={this.state.loading} title="正在加载..." />
                <Route path={`${match.url + '/:id'}`} component={Album} />
            </div>
        )
    }

    toAlbumDetail(url) {
        // console.log(url);
        this.props.history.push({
            pathname: url
        })
    }
}

export default Recommend;