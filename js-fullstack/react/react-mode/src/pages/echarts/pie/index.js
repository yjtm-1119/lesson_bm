import React from 'react'
import { Card } from 'antd'
// import echarts from 'echarts'
// 按需加载
import echarts from 'echarts/lib/echarts'
// 导入饼图
import 'echarts/lib/chart/pie'
// 导入主题
import themeLight from './../themeLight'
// 导入其他支持
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
// 线
import 'echarts/lib/component/legend'
// 点
import 'echarts/lib/component/markPoint'

import ReactEcharts from 'echarts-for-react'

export default class Pie extends React.Component {

  // 主题
  componentWillMount() {
    echarts.registerTheme('sjj', themeLight)
  }

  // 饼图1
  getOption = () =>  {
    let option = {
      title: {
        text: '用户骑行订单',
        x: 'center'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        bottom: 20,
        top: 20,
        data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)'
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          data: [
            {
              value: 2000,
              name: '周一'
            },
            {
              value: 1000,
              name: '周二'
            },
            {
              value: 5500,
              name: '周三'
            },
            {
              value: 3300,
              name: '周四'
            },
            {
              value: 5900,
              name: '周五'
            },
            {
              value: 900,
              name: '周六'
            },
            {
              value: 2000,
              name: '周日'
            }
          ]
        }
      ]
    }
    return option
  }

  // 饼图2
  getOption2 = () =>  {
    let option = {
      title: {
        text: '用户骑行订单',
        x: 'center'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        bottom: 20,
        top: 20,
        data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)'
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: ['50%', '80%'],
          center: ['50%', '60%'],
          data: [
            {
              value: 2000,
              name: '周一'
            },
            {
              value: 1000,
              name: '周二'
            },
            {
              value: 5500,
              name: '周三'
            },
            {
              value: 3300,
              name: '周四'
            },
            {
              value: 5900,
              name: '周五'
            },
            {
              value: 900,
              name: '周六'
            },
            {
              value: 2000,
              name: '周日'
            }
          ]
        }
      ]
    }
    return option
  }

  // 饼图3
  getOption3 = () =>  {
    let option = {
      title: {
        text: '用户骑行订单',
        x: 'center'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        bottom: 20,
        top: 20,
        data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)'
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          data: [
            {
              value: 2000,
              name: '周一'
            },
            {
              value: 1000,
              name: '周二'
            },
            {
              value: 5500,
              name: '周三'
            },
            {
              value: 3300,
              name: '周四'
            },
            {
              value: 5900,
              name: '周五'
            },
            {
              value: 900,
              name: '周六'
            },
            {
              value: 2000,
              name: '周日'
            }
          ].sort((a, b) => {
            return a.value - b.value
          }),
          roseType: 'radius',
          // 动画
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200
          }
        }
      ]
    }
    return option
  }

  render () {

    return (
      <div>
        <Card title="饼图">
          <ReactEcharts option={this.getOption()} theme="sjj" style={{height: 500}}/>
        </Card>

        <Card title="饼图2" style={{marginTop: 20}}>
          <ReactEcharts option={this.getOption2()} theme="sjj" style={{height: 500}}/>
        </Card>

        <Card title="饼图3" style={{marginTop: 20}}>
          <ReactEcharts option={this.getOption3()} theme="sjj" style={{height: 500}}/>
        </Card>
      </div>
    )
  }
}