import React from 'react'
import './ui.less'
import { Card, Carousel } from 'antd'

export default class Carousels extends React.Component {

  render () {

    return (
      <div>
        <Card title="文字背景轮播">
          <Carousel autoplay effect="fade">
            <div><h3>欢迎访问</h3></div>
            <div><h3>码云地址 https://gitee.com/shuleijia/react</h3></div>
            <div><h3>喜欢请star</h3></div>
          </Carousel>
        </Card>

        <Card title="图片轮播" style={{marginTop: 20}} className="slider-wrap">
          <Carousel autoplay effect="fade" style={{height: 500}}>
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt="" style={{width: '100%'}}/>
            </div>

            <div>
              <img src="/carousel-img/carousel-2.jpg" alt="" style={{width: '100%'}}/>
            </div>

            <div>
              <img src="/carousel-img/carousel-3.jpg" alt="" style={{width: '100%'}}/>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}