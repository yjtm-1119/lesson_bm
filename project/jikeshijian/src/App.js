import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Row, Col, Button } from 'antd';
import Listdata from './mock/Listdata.js';
import axios from 'axios';
const { TabPane } = Tabs;

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

  render() {
    // console.log(this.state);
    const list = this.state.list
    console.log(list)
    return (
      <div>
        <h2>我的课程</h2>
        <div className="tab">
          <Tabs defaultActiveKey="1">
            <TabPane tab="全部" key="1">
              <div>
                <Tabs
                  // onChange={this.update().bind(this)}
                  type="card" size="small">
                  <TabPane tab="所有形式" key="11">
                    <div>
                      {list.map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="专栏" key="22">
                    <div>
                      {list.filter(item => {
                        return item.type === "专栏"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="视频课" key="33">
                    <div>
                      {list.filter(item => {
                        return item.type === "视频课"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="微课" key="44">
                    <div>
                      {list.filter(item => {
                        return item.type === "微课"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="每日一课" key="55">
                    <div>
                      {list.filter(item => {
                        return item.type === "每日一课"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="其他" key="66">
                    <div>
                      {list.filter(item => {
                        return item.type === "其他"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="未学完" key="2">
              <div>
                <Tabs
                  // onChange={this.update().bind(this)}
                  type="card" size="small">
                  <TabPane tab="所有形式" key="11">
                    <div>
                      {list.map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="专栏" key="22">
                    <div>
                      {list.filter(item => {
                        return item.type === "专栏"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="视频课" key="33">
                    <div>
                      {list.filter(item => {
                        return item.type === "视频课"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="微课" key="44">
                    <div>
                      {list.filter(item => {
                        return item.type === "微课"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="每日一课" key="55">
                    <div>
                      {list.filter(item => {
                        return item.type === "每日一课"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="其他" key="66">
                    <div>
                      {list.filter(item => {
                        return item.type === "其他"
                      }).map((item, index) => {
                        return (
                          <div key={index}>
                            <Row >
                              <Col span={7}>
                                <img src={item.image} alt="" />
                              </Col>
                              <Col span={9}>
                                {item.title}<br />
                                {`共${item.total}讲 | 已学${item.studied}讲 | 学完${parseInt(item.studied / item.total * 100)}%`}
                              </Col>
                              <Col span={3}>{item.type}</Col>
                              <Col span={5}>
                                <Button type="primary">开始学习</Button>
                              </Col>
                            </Row>
                          </div>
                        )
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                </Tabs>
              </div>

            </TabPane>
            <TabPane tab="已学完" key="3">
              <div>
                <Tabs
                  // onChange={this.update().bind(this)}
                  type="card" size="small">
                  <TabPane tab="所有形式" key="11">
                    <div>
                      {list.filter((item, i) => {
                        return item.studied === item.total
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="专栏" key="22">
                    <div>
                      {list.filter((item, i) => {
                        return item.studied === item.total && item.type === "专栏"
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="视频课" key="33">
                  <div>
                      {list.filter((item, i) => {
                        return item.studied === item.total && item.type === "视频课"
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="微课" key="44">
                  <div>
                      {list.filter((item, i) => {
                        return item.studied === item.total && item.type === "微课"
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="每日一课" key="55">
                  <div>
                      {list.filter((item, i) => {
                        return item.studied === item.total && item.type === "每日一课"
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                  <TabPane tab="其他" key="66">
                  <div>
                      {list.filter((item, i) => {
                        return item.studied === item.total && item.type === "其他"
                      })}
                      {/* adasd */}
                    </div>
                  </TabPane>
                </Tabs>
              </div>

            </TabPane>
          </Tabs>
        </div>

      </div >
    )
  }
}

export default App;
