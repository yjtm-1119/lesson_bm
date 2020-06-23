import React from 'react'
import { Card } from 'antd'
import axios from '../../axios'
import '../order/detail.less'

export default class Detail extends React.Component{

  state = {}

  componentDidMount() {
    let orderId = this.props.match.params.orderId
    this.getDetailInfo(orderId)
    // if (orderId) {
    //   this.getDetailInfo(orderId)
    // }
  }

  // 接口
  getDetailInfo = (orderId) => {
    axios.ajax({
      url: 'orderDetail',
      data: {
        params: {
          orderId: orderId
        }
      }
    }).then((res) => {
      if (res.code === 200) {
        this.setState({
          orderInfo:res.result[0]
        })
      }
      this.renderMap(res.result[0])
    })
  }

  // 地图
  renderMap = (result) => {
    // this.map = new BMap.Map('orderDerailMap', {enableMapClick: false})
    // 创建实例
    this.map = new window.BMap.Map('orderDetailMap')
    // 地图坐标点
    this.map.centerAndZoom('北京', 11)
    // 添加控件
    this.addMapContorl()
    // 调用路线图
    this.drawBikeRoute(result.position_list)
    // 绘制范围
    this.drawServiceArea(result.area)
  }

  // 添加地图控件
  addMapContorl = () => {
    let map = this.map
    map.addControl(new window.BMap.ScaleControl( {anchor: window.BMAP_ANCHOR_TOP_RIGHT}))
    map.addControl(new window.BMap.NavigationControl( {anchor: window.BMAP_ANCHOR_TOP_RIGHT}))
  }

  // 绘制用户的行驶路线
  drawBikeRoute = (positionList) => {
    // let map = this.map
    let startPoint = ''
    let endPoint = ''
    if (positionList.length > 0) {
      let first = positionList[0]
      // 开始坐标
      startPoint = new window.BMap.Point(first.lon,first.lat)
      let startIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36,42),{
        imageSize: new window.BMap.Size(36,42),
        anchor: new window.BMap.Size(36,42)
      })
      let startMarker = new window.BMap.Marker(startPoint, {icon: startIcon})
      this.map.addOverlay(startMarker)

      // 结束坐标
      let last = positionList[positionList.length -1]
      endPoint = new window.BMap.Point(last.lon,last.lat)
      let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36,42),{
        imageSize: new window.BMap.Size(36,42),
        anchor: new window.BMap.Size(36,42)
      })
      let endMarker = new window.BMap.Marker(endPoint, {icon: endIcon})
      this.map.addOverlay(endMarker)
       // 链接路线图
       let trackPoint = []
       for (let i = 0; i < positionList.length; i++) {
         let point = positionList[i]
         trackPoint.push(new window.BMap.Point(point.lon, point.lat))
       }
      let polyline = new window.BMap.Polyline(trackPoint, {
        strokeColor: '#1869AD', // 线颜色
        strokeWeight: 3, // 线宽
        strokeOpacity: 1 // 透明度
      })
      this.map.addOverlay(polyline)
      // 生成范围
      this.map.centerAndZoom(endPoint, 11)
    }
  }

  // 绘制服务区
  drawServiceArea = (positionList) => {
    // 链接路线图
    let trackPoint = []
    for (let i = 0; i < positionList.length; i++) {
      let point = positionList[i]
      trackPoint.push(new window.BMap.Point(point.lon, point.lat))
    }
    let polygon = new window.BMap.Polygon(trackPoint, {
      strokeColor: '#CE0000', // 线颜色
      strokeWeight: 4, // 线宽
      strokeOpacity: 1, // 透明度
      fillColor: '#ff8605', // 填充色
      fillOpacity: 0.4 // 线的透明度
    })
    this.map.addOverlay(polygon)
  }

  render() {
    const info = this.state.orderInfo || {}
    return(
      <div>
        <Card>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">{ info.mode === 1 ? '服务区' : '停车点'}</div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">{ info.order_sn }</div>
              </li>
              <li>
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-content">{ info.bike_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">用户姓名</div>
                <div className="detail-form-content">{ info.user_name }</div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">{ info.mobile }</div>
              </li>
            </ul>
          </div>

          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">行程起点</div>
                <div className="detail-form-content">{ info.start_location }</div>
              </li>
              <li>
                <div className="detail-form-left">行程终点</div>
                <div className="detail-form-content">{ info.end_location }</div>
              </li>
              <li>
                <div className="detail-form-left">行驶里程</div>
                <div className="detail-form-content">{ info.distance/1000 }公里</div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    )
  }
}