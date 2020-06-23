import React from 'react'
import { Card, Form } from 'antd'
import BaseForm from '../../BaseForm'
import axios from './../../axios'

export default class BikMap extends React.Component {

  state = {}

  // 地图对象
  map = {}

  formList = [
    {
      type: '城市',
      field: 'city'
    },
    {
      type: '时间查询'
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field: 'order_status',
      placeholder: '全部',
      width: 150,
      initialValue: '0',
      list: [
        {
          id: '0',
          name: '全部'
        },
        {
          id: '1',
          name: '进行中'
        },
        {
          id: '2',
          name: '行程结束'
        }
      ]
    }
  ]

  // 查询
  handelFilterSubmit = (fileterParams) => {
    this.params = fileterParams
    this.requestList()
  }


  // 地图接口
  requestList = () => {
    axios.ajax({
      url: 'bike_list',
      data: {
        params: this.params
      }
    }).then((res) => {
      if (res.code === 200) {
        this.setState({
          total_count: res.totalCount
        })
        this.renderMap(res)
      }
    })
  }

  componentWillMount() {
    this.requestList()
  }

  // 渲染地图数据
  renderMap = (res) => {
    let list = res.result.route_list
    this.map = new window.BMap.Map('container')
    // 起始点坐标
    let gps1 = list[0].split(',')
    // 终点坐标
    let gps2 = list[list.length - 1].split(',')
    // 坐标
    let startPoint = new window.BMap.Point(gps1[0], gps1[1])
    let endPoint = new window.BMap.Point(gps2[0], gps2[1])
    this.map.centerAndZoom(endPoint, 11) // 居中

    // 车辆起点
    let startPointIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
      imageSize: new window.BMap.Size(36, 42),
      anchor: new window.BMap.Size(18, 42) // 偏移量
    })

    // 车辆终点
    let endPointIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
      imageSize: new window.BMap.Size(36, 42),
      anchor: new window.BMap.Size(18, 42) // 偏移量
    })

    // 地图覆盖物
    let bikeMarkerStart = new window.BMap.Marker(startPoint, { icon: startPointIcon })
    this.map.addOverlay(bikeMarkerStart)

    // 地图覆盖物
    let bikeMarkerEnd = new window.BMap.Marker(endPoint, { icon: endPointIcon })
    this.map.addOverlay(bikeMarkerEnd)

    // 绘制车辆行驶路线
    let routeList = []
    list.forEach((item) => {
      let p = item.split(',')
      routeList.push(new window.BMap.Point(p[0], p[1]))
    })

    let polyLine = new window.BMap.Polyline(routeList, {
      strokeColor: '#ef4136', // 颜色
      strokeWeight: 2, // 粗细
      strokeOpacity: 1 // 透明度
    })
    this.map.addOverlay(polyLine)

    // 绘制服务区
    let servicePointList = []
    let serviceList = res.result.service_list
    serviceList.forEach((item) => {
      servicePointList.push(new window.BMap.Point(item.lon, item.lat))
    })

    let serviceLine = new window.BMap.Polyline(servicePointList, {
      strokeColor: '#ef4136', // 颜色
      strokeWeight: 3, // 粗细 
      strokeOpacity: 1 // 透明度
    })
    this.map.addOverlay(serviceLine)

    // 添加地图中的自行车图标
    let bikeList = res.result.bike_list
    let bikeIcon = new window.BMap.Icon('/assets/bike.jpg', new window.BMap.Size(36, 42), {
      imageSize: new window.BMap.Size(36, 42),
      anchor: new window.BMap.Size(18, 42) // 偏移量
    })

    // 遍历坐标点
    bikeList.forEach((item) => {
      let p = item.split(',')
      let point = new window.BMap.Point(p[0], p[1])
      let bikeMarker = new window.BMap.Marker(point, { icon: bikeIcon })
      this.map.addOverlay(bikeMarker)
    })
  }

  render () {
    return (
      <div>
        {/* 查询条件 */}
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handelFilterSubmit}/>
        </Card>

        {/* 地图 */}
        <Card style={{marginTop: 20}}>
          <div style={{marginBottom: 10}}> 共{ this.state.total_count }辆车</div>
          <div id="container" style={{height: 500}}></div>
        </Card>
      </div>
    )
  }
}