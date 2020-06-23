import React from 'react'
import { Card } from 'antd'
// import echarts from 'echarts'
// 按需加载
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
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

export default class Bar extends React.Component {

  // 主题
  componentWillMount() {
    echarts.registerTheme('sjj', echartTheme)
  }

  // 柱形图1
  getOption = () =>  {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三','周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'bar',
          data: [1000, 3000, 4000, 5000, 1000, 2000, 900]
        }
      ]
    }
    return option
  }

  // 柱形图2
  getOption2 = () =>  {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      legend: {
        data: ['OFO', '膜拜', '小蓝']
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三','周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'OFO',
          type: 'bar',
          data: [1000, 2000, 4000, 5400, 1300, 2100, 1900]
        },
        {
          name: '膜拜',
          type: 'bar',
          data: [3000, 3200, 4000, 6000, 9000, 4300, 2900]
        },
        {
          name: '小蓝',
          type: 'bar',
          data: [1300, 3000, 4540, 5065, 1065, 2650, 6900]
        }
      ]
    }
    return option
  }

  render () {

    return (
      <div>
        <Card title="柱形图1">
          <ReactEcharts option={this.getOption()} theme="sjj" style={{height: 500}}/>
        </Card>

        <Card title="柱形图2" style={{marginTop: 20}}>
          <ReactEcharts option={this.getOption2()} theme="sjj" style={{height: 500}}/>
        </Card>
      </div>
    )
  }
}