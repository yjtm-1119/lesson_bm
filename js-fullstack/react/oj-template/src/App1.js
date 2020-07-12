import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import { Table, Tabs } from 'antd';
import './App.css';
import axios from 'axios'
import mockdata from './mockdata';
const Component = React.Component
const { TabPane } = Tabs;



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
  // {
  //   title: '专栏',
  //   key: 4
  // },
  // {
  //   title: '视频课',
  //   key: 5
  // },
  // {
  //   title: '微课',
  //   key: 6
  // },
  // {
  //   title: '每日一课',
  //   key: 7
  // },
  // {
  //   title: '其他',
  //   key: 8
  // },

]
const underTabs = [
  {
    title: '所有形式',
    key: 1
  },
  {
    title: '专栏',
    key: 2
  },
  {
    title: '视频课',
    key: 3
  },
  {
    title: '微课',
    key: 4
  },
  {
    title: '每日一课',
    key: 5
  },
  {
    title: '其他',
    key: 6
  },
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      // over: 1,
      // type:1,
      list: []
    }
  }
  componentDidMount() {
    axios.get('/data/')
      .then(res => {
        console.log(res);
        this.setState({
          list: res.data.list
          // list:res.data.list
        })
      })
  }

  overTabChange(key) {
    //console.log(key);
    this.setState({
      over: key
    })
  }
  // underTabChange(key) {
  //   //console.log(key);
  //  this.setState({
  //    : key
  //  })

  render() {
    const list = this.state.list;
    // console.log(list)
    return (

      <div className="app">

        <Tabs defaultActiveKey={this.state.over} onChange={this.overTabChange.bind(this)}>
          {
            overTabs.map(tab => (
              <TabPane tab={tab.title} key={tab.key} >
                <div>
                  <Tabs onChange={this.overTabChange.bind(this)} type="card">
                    {
                      underTabs.map(tab => (
                        <TabPane tab={tab.title} key={tab.key} >
                          {list.map((item, i) => {
                            return (
                              <div>

                              </div>
                            )
                          })}
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