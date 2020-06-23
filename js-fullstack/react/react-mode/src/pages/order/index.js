import React from 'react'
import { Card, Table, Button, Form, Select, DatePicker, Modal, message  } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'

import BaseForm from '../../BaseForm/index'
import ETable from '../../components/ETable';

const FormItem = Form.Item
const Option = Select.Option

export default class Order extends React.Component{

  state = {
    orderInfo: {},
    orderConfirmVisble: false // 结束订单弹窗默认关闭
  }
  params = {
    page: 1
  }

  // 为的是封装头部的搜索框
  formList = [
    {
      type: 'SELECT',
      label: '城市',
      field: 'city',
      placeholder: '全部',
      initialValue: '1', // 初始化值
      width: 100,
      list: [
        { id: '0', name: '全部'},
        { id: '1', name: '北京'},
        { id: '2', name: '天津'},
        { id: '3', name: '上海'}
      ]
    },
    {
      type: '时间查询'
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field: 'order_status',
      placeholder: '全部',
      initialValue: '1', // 初始化值
      width: 100,
      list: [
        { id: '0', name: '全部'},
        { id: '1', name: '进行中'},
        { id: '2', name: '结算行程'}
      ]
    }
  ]

  handleFilter = (params) => {
    this.params = params
    this.requestList()
  }
  
  componentDidMount() {
    this.requestList()
  }

  // 列表接口
  requestList =() => {
    // 未封装之前的接口调用
    // let _this = this
    // axios.ajax({
    //   url: 'orderList',
    //   data: {
    //     params: this.params
    //   }
    // }).then((res) => {
    //   let list= res.result.map((item, index) => {
    //     item.key = index
    //     return item
    //   })
    //   this.setState({
    //     list,
    //     pagination: Utils.pagination(res, (current) => {
    //       _this.params.page = current
    //       _this.requestList()
    //     })
    //   })
    // })

    // 封装之后的接口调用
    // this指向  接口  页码  是否模拟接口还是后端返回接口
    axios.requestList(this, 'orderList', this.params, true)
  }

  // 订单详情
  openOrderDetail = ()=> {
    let item = this.state.selectedItem
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请选择数据'
      })
      return
    }
    window.open(`/#/common/order/detail/${item.id}`, '_blank')
    // window.location.href = `/#/common/order/detail/${item.id}`
  }

  // 结束订单按钮
  handleConfirm = ()=> {
    let item = this.state.selectedItem
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请选择一条订单进行结束操作'
      })
      return;
    }
    axios.ajax({
      url: '/ebikeInfo',
      data: {
        params: {
          orderId: item.id
        }
      }
    }).then((res) => {
      console.log(res)
      if (res.code === 200) {
        this.setState({
          orderInfo: res.result,
          orderConfirmVisble: true
        })
      }
    })

  }

  // 结束订单弹窗确定
  handleFinishOrder = () => {
    let item = this.state.selectedItem
    axios.ajax({
      url: 'finishOrder',
      data: {
        params: {
          orderId: item.id
        }
      }
    }).then((res) => {
      if (res.code === 200) {
        message.success('订单结束成功')
        this.setState({
          orderConfirmVisble: false
        })
        this.requestList()
      }
    })
  }

  // 点击行
  onRowClick =(record, index) => {
    let selectKey = [index]
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  // 点击行
  // selectedRowKeys

  render() {
    // 弹窗适配
    const formItemLayout = {
      labelCol:{span:5},
      wrapperCol:{span:19}
    }

    const columns = [
      {
        title: '订单编号',
        dataIndex: 'order_sn'
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name'
      },{
        title: '手机号',
        dataIndex: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance'
      },
      {
        title: '行驶时长',
        dataIndex: 'total_time'
      },
      {
        title: '状态',
        dataIndex: 'status',
        render(h) {
          return h === 1 ? '开始' : '结束'
        },
      },
      {
        title: '开始时间',
        dataIndex: 'start_time'
      },{
        title: '结束时间',
        dataIndex: 'end_time'
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee'
      },
      {
        title: '实付金额',
        dataIndex: 'user_pay'
      },
    ]
    
    const selectedRowKeys = this.state.selectedRowKeys
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }

    return(
      <div>
        <Card>
          <BaseForm formList = {this.formList} filterSubmit={this.handleFilter}/>
        </Card>

        <Card>
          <FilterForm/>
        </Card>

        <Card style={{marginTop:10}}>
          <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
          <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>
        </Card>

        <div className="content-wrap">
          {/* 应用封装的表格 */}
          <ETable
            updateSelectedItem={Utils.updateSelectedItem.bind(this)}
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            selectedRowKeys={this.state.selectedRowKeys}
            selectedIds={this.state.selectedIds}
            selectedItem={this.state.selectedItem}
            rowSelection='checkbox'
          />
          {/* <Table
            columns={columns}
            dataSource={this.state.list}
            bordered
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                }
              }
            }}/> */}
        </div>

        {/* 结束订单弹窗 */}
        <Modal 
          title="结束订单"
          visible={this.state.orderConfirmVisble}
          onCancel={() => {
            this.setState({
              orderConfirmVisble: false
            })
          }}
          onOk={this.handleFinishOrder}
          width={600}>
            <Form layout="horizontal">
              <FormItem label="车辆编号" {...formItemLayout}>
                { this.state.orderInfo.bike_sn }
              </FormItem>
              <FormItem label="剩余电量" {...formItemLayout}>
                { this.state.orderInfo.battery + '%' }
              </FormItem>
              <FormItem label="行程开始时间" {...formItemLayout}>
                { this.state.orderInfo.start_time }
              </FormItem>
              <FormItem label="当前位置" {...formItemLayout}>
                { this.state.orderInfo.location }
              </FormItem>
            </Form>
        </Modal>
      </div>
    )
  }
}

class FilterForm extends React.Component{
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator('city_id')(
              <Select style={{ width:150 }}
              placeholder="全部">
                <Option value="0">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="订单时间">
          {
            getFieldDecorator('start_time')(
              <DatePicker showTime format="YY-MM-DD HH:mm:ss"/>
            )
          }
        </FormItem>
        <FormItem label="~">
          {
            getFieldDecorator('end_time')(
              <DatePicker showTime format="YY-MM-DD HH:mm:ss"/>
            )
          }
        </FormItem>
        <FormItem label="订单状态">
          {
            getFieldDecorator('order_status')(
              <Select style={{ width:150 }}
              placeholder="全部">
                <Option value="0">全部</Option>
                <Option value="1">进行中</Option>
                <Option value="2">结束行程</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{margin: '0 20px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
FilterForm = Form.create({})(FilterForm)