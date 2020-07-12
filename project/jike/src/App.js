import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Row, Col, Button } from 'antd';
import Listdata from './mock/Listdata.js';
import axios from 'axios';
const { TabPane } = Tabs;
// function callback(key) {
//   console.log(key);
// }


const overTabs = [
  {
    title: '全部',
    key: 1
  },
  {
    title: '未学完',
    key: 2
  },
  {
    title: '已学完',
    key: 3
  },
]
const underTabs = [
  {
    title: '所有形式',
    key: 11
  },
  {
    title: '专栏',
    key: 22
  },
  {
    title: '视频课',
    key: 33
  },
  {
    title: '微课',
    key: 44
  },
  {
    title: '每日一课',
    key: 55
  },
  {
    title: '其他',
    key: 66
  },
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    this._loadData()
  }
  async _loadData() {
    axios.get('/lessons/')
      .then(res => {
        console.log(res)
        this.setState({
          list: res.data.list
        })
      })
  }
  overTabChange(key) {
    //console.log(key);
    this.setState({
      over: key
    })
  }
  render() {
    // console.log(this.state);
    const list = this.state.list
    console.log(list)
    return (
      <div className="app">

        <Tabs defaultActiveKey={this.state.over} >
          {
            overTabs.map(tab => (
              <TabPane tab={tab.title} key={tab.key} >
                <div>
                  <Tabs type="card">
                    {
                      underTabs.map(tab => (
                        <TabPane tab={tab.title} key={tab.key} >
                          <div>
                            {list.filter(item => {
                              return item.type === tab.title
                            }).map((item, index) => {
                              return (
                                <div key={index }>
                                  <Row >
                                    <Col span={7}>
                                      {/* <img src={item.image} alt="" /> */}
                                      图片
                                    </Col>
                                    <Col span={9}>
                                      {item.title}<br />
                                      {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseFloat(item.studied / item.total)}`}
                                    </Col>
                                    <Col span={3}>{item.type}</Col>
                                    <Col span={5}>
                                      <Button type="primary">开始学习</Button>
                                    </Col>
                                  </Row>
                                </div>
                              )
                            })}
                          </div>
                        </TabPane>
                      ))
                    }
                  </Tabs>
                </div>
              </TabPane>
            ))
          }

        </Tabs>
        {/* <div> 
        <Tabs  onChange={this.overTabChange.bind(this)}  type="card">
          {
            underTabs.map(tab => (
              <TabPane tab={tab.title} key={tab.key} >

              </TabPane>
            ))
          }

        </Tabs>
        </div> */}

      </div>
    )
  }
}

export default App;
