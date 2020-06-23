import React from 'react'
import { Card, Table, Modal, message, Button } from 'antd'
// import axios from 'axios';
import axios from './../../axios/index'
// import utils from '../../utils/utils';
import Utils from './../../utils/utils'

export default class BasicTable extends React.Component{
  state = {
    dataSource2: []
  }

  params = {
    page: 1
  }

  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        key: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        hobby: '1',
        brithday: '1994-01-04',
        address: '安徽蚌埠',
        time: '08:40'
      },
      {
        id: '1',
        key: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        hobby: '1',
        brithday: '1994-01-04',
        address: '安徽蚌埠',
        time: '08:40'
      },
      {
        id: '2',
        key: '2',
        userName: 'Lily',
        sex: '0',
        state: '1',
        hobby: '1',
        brithday: '1994-01-04',
        address: '安徽蚌埠',
        time: '08:40'
      }
    ]
    this.setState({
      dataSource: dataSource
    })
    this.request()
  }

  // 未使用封装axios动态获取数据
  // request =() => {
  //   let baseUrl = 'https://www.easy-mock.com/mock/5d19ccfc4d99e5709883efb3/sjjapi'
  //   axios.get(baseUrl + '/tableList').then((res)=> {
  //     console.log(res)
  //     if (res.status === 200 && res.data.code === 200) {
  //       this.setState({
  //         dataSource2: res.data.result
  //       })
  //     }
  //   })
  // }

  // 使用封装axios动态获取数据
  request =() => {
    let _this = this
    axios.ajax({
      url: '/tableList',
      data: {
        params: {
          page: this.params.page
        },
        isShowLoading: true
      }
    }).then((res)=> {
      if (res.code === 200) {
        // 获取数据给所有的行添加key属性 1
        // res.result.map((item, index) => {
        //   item.key = index
        // })
        this.setState({
          dataSource2: res.result,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res, (current) => {
            // 页码跳转
            _this.params.page = current
            this.request()
          })
        })
      }
    })
  }

  // 定义每一行
  onRowClick = (recod, index) => {
    let selectKey = [index]
    Modal.info({
      title: '信息',
      content : `用户名: ${recod.userName}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: recod
    })
  }

  // 删除
  handleDelete = (() => {
    let rows = this.state.selectedRows
    let ids = []
    console.log(rows)
    if (rows === null) {
      Modal.confirm({
        title: '提示',
        content: '请选择删除的数据'
      })
    } else {
      rows.map((item) => {
        return ids.push(item.id)
      })
      Modal.confirm({
        title: '删除提示',
        content: `你确定要删除这些数据吗! ${ids.join('')}`,
        onOk: () => {
          message.success('删除成功!')
          this.request()
        }
      })
    }
  })

  render() {
    const columns = [
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
      }
    ]

    // 全部加key 2
    // data.map((item, index) => {
    //   item.key = index
    // })
    // 单选
    const { selectedRowKeys } = this.state
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }

    // 多选
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        let ids = []
        selectedRows.map((item) => {
          return ids.push(item.id)
        })
        this.setState({
          selectedRowKeys,
          selectedRows,
          selectedIds: ids
        })
      }
    }

    return(
      <div>
        <Card title="基础表格">
          <Table
          dataSource={this.state.dataSource}
          columns={columns}
          bordered
          pagination={false}/>
        </Card>
        <Card title="动态数据渲染表格" style={{margin: '10px 0'}}>
          <Table
          dataSource={this.state.dataSource2}
          columns={columns}
          bordered
          pagination={false}/>
        </Card>
        <Card title="单选" style={{margin: '10px 0'}}>
          <Table
          rowSelection={rowSelection} // 单选还是多选
          onRow={(record, index) => { // 点击行
            return {
              onClick: () => {
                this.onRowClick(record, index)
              }
            }
          }}
          dataSource={this.state.dataSource2}
          columns={columns}
          bordered
          pagination={false}/>
        </Card>
        <Card title="多选" style={{margin: '10px 0'}}>
          <div style={{marginBottom:10}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
          rowSelection={rowCheckSelection} // 单选还是多选
          onRow={(record, index) => { // 点击行
            return {
              onClick: () => {
                this.onRowClick(record, index)
              }
            }
          }}
          dataSource={this.state.dataSource2}
          columns={columns}
          bordered
          pagination={false}/>
        </Card>

        <Card title="分页" style={{margin: '10px 0'}}>
          <Table
          dataSource={this.state.dataSource2}
          columns={columns}
          bordered
          pagination={this.state.pagination}/>
        </Card>
      </div>
    )
  }
}