import React from 'react'
import { Card, Table, Badge, Modal, message, Button } from 'antd'
import axios from './../../axios/index'

export default class HightTable extends React.Component{
  state = {}

  params = {
    page: 1
  }

  componentDidMount() {
    this.request()
  }

  request =() => {
    axios.ajax({
      url: '/HightTabList',
      data: {
        params: {
          page: this.params.page
        },
        isShowLoading: true
      }
    }).then((res)=> {
      if (res.code === 200) {
        this.setState({
          dataSource: res.result
        })
      }
    })
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }

  // 删除
  handleDelete = (item) => {
    // let id = item.id
    Modal.confirm({
      title: '确认',
      content: '您确认要删除此调数据吗',
      onOk: ()=> {
        message.success('删除成功')
        this.request()
      }
    })
  }

  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80,
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 80,
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 80,
        key: 'sex',
        render(h) {
          return h === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '爱好',
        dataIndex: 'hobby',
        width: 80,
        key: 'hobby',
        render(h) {
          let config = {
            1: '跑步',
            2: '打球',
            3: '踢球',
            4: '游泳',
            5: '爬山',
            6: '羽毛球',
            7: '上天'
          }
          return config[h]
        }
      },
      {
        title: '生日',
        dataIndex: 'brithday',
        width: 120,
        key: 'brithday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        width: 120,
        key: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        width: 80,
        key: 'time'
      }
    ]

    const columns2 = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80,
        fixed: 'left',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 80,
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 80,
        key: 'sex',
        render(h) {
          return h === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state1',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state2',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state3',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state4',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state5',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state6',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state7',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state8',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state9',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state10',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '爱好',
        dataIndex: 'hobby',
        width: 80,
        key: 'hobby',
        render(h) {
          let config = {
            1: '跑步',
            2: '打球',
            3: '踢球',
            4: '游泳',
            5: '爬山',
            6: '羽毛球',
            7: '上天'
          }
          return config[h]
        }
      },
      {
        title: '生日',
        dataIndex: 'brithday',
        width: 120,
        key: 'brithday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        width: 120,
        key: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        fixed: 'right',
        width: 120,
        key: 'time'
      }
    ]

    const columns3 = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80,
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 80,
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 80,
        key: 'sex',
        render(h) {
          return h === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        width: 80,
        key: 'age',
        sorter: (a, b) => {
          return a.age - b.age
        },
        sortOrder: this.state.sortOrder
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        key: 'state',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '爱好',
        dataIndex: 'hobby',
        width: 80,
        key: 'hobby',
        render(h) {
          let config = {
            1: '跑步',
            2: '打球',
            3: '踢球',
            4: '游泳',
            5: '爬山',
            6: '羽毛球',
            7: '上天'
          }
          return config[h]
        }
      },
      {
        title: '生日',
        dataIndex: 'brithday',
        width: 120,
        key: 'brithday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        width: 120,
        key: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        width: 80,
        key: 'time'
      }
    ]

    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render(h) {
          return h === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render(h) {
          let config = {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }
          return config[h]
        }
      },
      {
        title: '爱好',
        dataIndex: 'hobby',
        key: 'hobby',
        render(h) {
          let config = {
            1: <Badge status="success" text="跑步"/>,
            2: <Badge status="processing" text="打球"/>,
            3: <Badge status="success" text="踢球"/>,
            4: <Badge status="success" text="游泳"/>,
            5: <Badge status="default" text="爬山"/>,
            6: <Badge status="warning" text="羽毛球"/>,
            7: <Badge status="error" text="上天"/>
          }
          return config[h]
        }
      },
      {
        title: '生日',
        dataIndex: 'brithday',
        key: 'brithday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time'
      },
      {
        title: '操作',
        render:(text, item)=> {
          return <Button size="small" onClick={(item) =>{this.handleDelete(item)}}>删除</Button>
        }
      }
    ]

    return(
      <div>
        <Card title="头部滚动">
          <Table
          dataSource={this.state.dataSource}
          columns={columns}
          bordered
          pagination={false}
          scroll={{y: 240}}/>
        </Card>

        <Card title="固定列" style={{margin: '10px 0'}}>
          <Table
          dataSource={this.state.dataSource}
          columns={columns2}
          bordered
          pagination={false}
          scroll={{ x: 1480}}/>
        </Card>

        <Card title="表格排序" style={{margin: '10px 0'}}>
          <Table
          dataSource={this.state.dataSource}
          columns={columns3}
          bordered
          pagination={false}
          onChange={this.handleChange}/>
        </Card>

        <Card title="操作按钮" style={{margin: '10px 0'}}>
          <Table
          dataSource={this.state.dataSource}
          columns={columns4}
          bordered
          pagination={false}
          onChange={this.handleChange}/>
        </Card>
      </div>
    )
  }
}