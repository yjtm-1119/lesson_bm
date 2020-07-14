import { Tabs, List, Avatar, Button, Tag, Divider } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React from 'react';
import './mock/data'
import axios from 'axios'

const { TabPane } = Tabs;
class Lesson extends React.Component {
  state = {
    lesson: [],
    type1: 0,
    type2: 0
  };
  componentDidMount() {
    axios.get('/data')
      .then(res => {
        this.setState({
          lesson: res.data.list
        })
      })
  }
  callback1 = (e) => {
    this.setState({
      type1: Number(e)
    })
  }
  callback2 = (e) => {
    this.setState({
      type2: Number(e)
    })
  }
  render() {
    const data = this.state.lesson
    let { type1, type2 } = this.state
    // console.log(data,type1,type2,'--------------------')
    let res = data.filter(v => (type1===0||type1===v.t1)&&(type2===0||type2===v.t2))
    // console.log(res,'==========================')
    return (
      <div className='wrapper'>
        <h2 style={{ marginLeft: 20 }}>我的课程</h2>
        <Tabs
          tab='1'
          onChange={this.callback1}
          defaultActiveKey="0"
          size={"large"}
          style={{ marginLeft: 20 }}>
          <TabPane tab={"全部("+data.length+")"} key="0">
          </TabPane>
          <TabPane tab="未学完" key="1">
          </TabPane>
          <TabPane tab="已学完" key="2">
          </TabPane>
        </Tabs>
        <Tabs
          tab='2'
          onChange={this.callback2}
          defaultActiveKey="0"
          type="card"
          size={'large'}>
          <TabPane tab="全部" key='0'>
          </TabPane>
          <TabPane tab="专栏" key="1">
          </TabPane>
          <TabPane tab="视频课" key="2">
          </TabPane>
          <TabPane tab="微课" key="3">
          </TabPane>
          <TabPane tab="每日一课" key="4">
          </TabPane>
          <TabPane tab="其他" key="5">
          </TabPane>
        </Tabs>
        <List
          itemLayout="horizontal"
          dataSource={res}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href="#">{item.title}</a>}
                description={"共" + item.lesson + '讲|已学' + item.learned + '讲|学完' + parseInt(item.learned / item.lesson * 100) + '%'}
              />
              {/* <span>
                <Tag color="#f50">0</Tag>
              </span> */}
              <Button type="primary" size='large'>
                开始学习
              </Button>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Lesson;