import React from 'react'
import { Card } from 'antd'
// import echarts from 'echarts'
// 按需加载
import echarts from 'echarts/lib/echarts'
// 导入折线图
import 'echarts/lib/chart/line'
// 导入主题
import echartTheme from './../echartTheme'
// 导入其他支持
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
// 线
import 'echarts/lib/component/legend'
// 点
import 'echarts/lib/component/markPoint'

import ReactEcharts from 'echarts-for-react'

export default class Line extends React.Component {

  // 主题
  componentWillMount() {
    echarts.registerTheme('sjj', echartTheme)
  }

  // 折线图1
  getOption = () =>  {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          data: [
            1000, 3000, 5900, 5200, 4920, 4758, 9120
          ]
        }
      ]
    }
    return option
  }

  // 折线图2
  getOption2 = () =>  {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['OFO订单量', '摩拜订单量']
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'OFO订单量',
          type: 'line',
          data: [
            1000, 3000, 5900, 5200, 4920, 4758, 9120
          ]
        },
        {
          name: '摩拜订单量',
          type: 'line',
          data: [
            3123, 6463, 4214, 6432, 9873, 4234, 5266
          ]
        }
      ]
    }
    return option
  }

  // 折线图3
  getOption3 = () =>  {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          areaStyle: [],
          data: [
            3133, 4355, 2344, 6546, 7675, 9879, 6456
          ]
        }
      ]
    }
    return option
  }

  render () {

    return (
      <div>
        <Card title="折线图1">
          <ReactEcharts option={this.getOption()} theme="sjj" style={{height: 500}}/>
        </Card>

        <Card title="折线图2" style={{marginTop: 20}}>
          <ReactEcharts option={this.getOption2()} theme="sjj" style={{height: 500}}/>
        </Card>

        <Card title="折线图3" style={{marginTop: 20}}>
          <ReactEcharts option={this.getOption3()} theme="sjj" style={{height: 500}}/>
        </Card>
      </div>
    )
  }
}