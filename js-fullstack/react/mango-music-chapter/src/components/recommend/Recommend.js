import React from 'react';
import './recommend.styl'; // webpack
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import Loading from '../../common/loading/Loading';
import Scroll from '@/common/scroll/Scroll';// 容器，父组件 

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
                this.setState({
                    loading: false,
                    newAlbums: res.albumlib.data.list
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
        console.log(this.state.newAlbums);
        let albums = this.state.newAlbums.map(item => (
            <div className="album-wrapper" key={item.album_id}>
                <div className="left">
                    <img src="https://qpic.y.qq.com/music_cover/Iia3lpoTl2hPXtBpjHk9QiaqUplwwdfZdf48EHsTO7PgO18LnQ74BPdQ/300?n=1" alt={item.album_name} width="100%" height="100%" />
                </div>
                <div className="right">
                    <div className="album-name">
                        {item.album_name}
                    </div>
                    <div className="singer-name">
                        {item.singers[0].singer_name}
                    </div>
                    <div className="public-time">
                        {item.public_time}
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="music-recommend">
                <Scroll
                    refresh={this.state.refreshScroll}
                    onScroll={(e) => {
                        forceCheck();
                    }}>
                    <div className="slider-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.sliderList.map(slider => {
                                    return (
                                        <div className="swiper-slide" key={slider.id}>
                                            <a href={slider.linkUrl} className="slider-nav">
                                                {/* <LazyLoad height={60}> */}
                                                <img src={slider.picUrl} alt="" width="100%" height="100%" />
                                                {/* </LazyLoad> */}
                                            </a>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                    <div className="album-container">
                        <h1 className="title">最新专辑</h1>
                        <div className="album-list">
                            {albums}
                        </div>
                    </div>
                </Scroll>
                <Loading show={this.state.loading} title="正在加载..." />
            </div>
        )
    }
}

export default Recommend;