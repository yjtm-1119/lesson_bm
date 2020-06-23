import React from 'react'
import { Card, Button, Modal, Radio, DatePicker, Select, Form, Input } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
import ETable from './../../components/ETable'
import BaseForm from '../../BaseForm';
import moment from 'moment'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const TextArea = Input.TextArea
const Option = Select.Option

export default class User extends React.Component {

  params = {
    page: 1,
    isVisible: false
  }

  state ={}

  // 头部搜索框
  formList = [
    {
      type: 'INPUT',
      label: '用户名',
      field: 'user_name',
      placeholder: '请输入用户名称',
      width: 100
    },
    {
      type: 'DATE',
      label: '请选择入职日期',
      field: 'user_date',
      placeholder: '请输入日期'
    },
    {
      type: 'INPUT',
      label: '用户手机号',
      field: 'user_mobel',
      placeholder: '请输入用户手机号',
      width: 100
    }
  ]

  componentDidMount() {
    this.requestList()
  }

  // 搜索
  handleFilter = (params) => {
    this.params = params
    this.requestList()
  }

  // 表格列表接口
  requestList = () => {
    axios.requestList(this, '/userInfoList', this.params)
  }

  // 按钮搜索
  handleOperate = (type) => {
    let item = this.state.selectedItem
    if (type === 'create') {
      this.setState({
        type,
        isVisible: true, // 弹窗显示
        title: '创建员工'
      })
    } else if (type === 'edit') {
      if (!item) {
        Modal.info({
          title: '提示',
          content: '请选择一条数据'
        })
        return
      }
      this.setState({
        type,
        isVisible: true,
        title: '编辑员工',
        userInfo: item
      })
    } else if (type === 'detail') {
      if (!item) {
        Modal.info({
          title: '提示',
          content: '请选择一条数据'
        })
        return
      }
      this.setState({
        type,
        isVisible: true,
        title: '员工详情',
        userInfo: item
      })
    } else if (type === 'delete') {
      if (!item) {
        Modal.info({
          title: '提示',
          content: '请选择一个用户'
        })
        return
      }
      let _this = this
      Modal.confirm({
        title: '确认删除',
        content: '是否要删除当前选中数据',
        onOk() {
          axios.ajax({
            url: '/userDel',
            data: {
              params: {
                id: item.id
              }
            }
          }).then((res) => {
            if(res.code === 200) {
              _this.setState({
                isVisible: false
              })
              _this.requestList()
            }
          })
        }
      })
    }
  }

  // 创建员工提交
  handleSubmit = () => {
    let type = this.state.type
    let data = this.userForm.props.form.getFieldsValue()
    axios.ajax({
      url: type === 'create' ? '/userAdd' : '/userEdit',
      data: {
        params: data
      }
    }).then((res) => {
      if (res.code === 200) {
        this.userForm.props.form.resetFields() // 重置表单
        this.setState({
          isVisible: false
        })
        this.requestList()
      }
    })
  }

  render() {

    // 表头
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          return {
            1: '开启',
            2: '关闭',
            3: '退出',
            4: '未启用',
            5: '已启用'
          }[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(interest) {
          return {
            1: '跑步',
            2: '打球',
            3: '踢球',
            4: '游泳',
            5: '爬山',
            6: '羽毛球',
            7: '上天'
          }[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '联系地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      }
    ]

    // 弹框底部按钮
    let footer = {}
    if (this.state.type === 'detail') {
      footer = {
        footer: null
      }
    }

    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
        </Card>
        
        <Card style={{marginTop:10}}>
          <Button type="primary" icon="plus" onClick={() => this.handleOperate('create')}>创建员工</Button>
          <Button type="primary" icon="edit" style={{marginLeft:10}} onClick={() => this.handleOperate('edit')}>编辑员工</Button>
          <Button type="primary" style={{marginLeft:10}} onClick={() => this.handleOperate('detail')}>员工详情</Button>
          <Button type="primary" icon="delete" style={{marginLeft:10}} onClick={() => this.handleOperate('delete')}>删除员工</Button>
        </Card>

        <div className="content-wrap">
          {/* 应用封装的表格 */}
          <ETable
            updateSelectedItem={Utils.updateSelectedItem.bind(this)}
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            selectedRowKeys={this.state.selectedRowKeys}
            selectedItem={this.state.selectedItem}
            rowSelection='radio'
          />
        </div>

        {/* 模态框 */}
        <Modal
          title={this.state.title}
          visible = {this.state.isVisible}
          onOk={this.handleSubmit}
          onCancel={() => {
            this.userForm.props.form.resetFields() // 重置表单
            this.setState({
              isVisible: false
            })
          }}
          width={600}
          {...footer}
        >
          <UserForm type={this.state.type}  userInfo={this.state.userInfo} wrappedComponentRef={(inst) => {this.userForm = inst}}></UserForm>
        </Modal>
      </div>
    )
  }
}

class UserForm extends React.Component{
  // 判断状态
  getState = (state) => {
    return {
      1: '开启',
      2: '关闭',
      3: '退出',
      4: '未启用',
      5: '已启用'
    }[state]
  }
  render() {
    let type = this.props.type
    let userInfo = this.props.userInfo || {}
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {span: 5},
      wrapperCol: {span: 15}
    }
    return (
      <Form layout="horizontal">
        <FormItem label="用户名" {...formItemLayout}>
          {
            type === 'detail' ? userInfo.username: // 判断是否是详情
            getFieldDecorator('username', {
              initialValue: userInfo.username
            })(
              <Input type="text" placeholder="请输入用户名"></Input>
            )
          }
        </FormItem>

        <FormItem label="性别" {...formItemLayout}>
          {
            type === 'detail' ? userInfo.sex === 1 ? '男' : '女': // 判断是否是详情
            getFieldDecorator('sex', {
              initialValue: userInfo.sex
            })(
              <RadioGroup>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </RadioGroup>
            )
          }
        </FormItem>

        <FormItem label="状态" {...formItemLayout}>
          {
            type === 'detail' ? this.getState(userInfo.state): // 判断是否是详情
            getFieldDecorator('state', {
              initialValue: userInfo.state
            })(
              <Select>
                <Option value={1}>开启</Option>
                <Option value={2}>关闭</Option>
                <Option value={3}>退出</Option>
                <Option value={4}>未启用</Option>
                <Option value={5}>已启用</Option>
              </Select>
            )
          }
        </FormItem>

        <FormItem label="生日" {...formItemLayout}>
          {
            type === 'detail' ? userInfo.birthday: // 判断是否是详情
            getFieldDecorator('birthday', {
              initialValue: moment(userInfo.birthday)
            })(
              <DatePicker></DatePicker>
            )
          }
        </FormItem>

        <FormItem label="联系地址" {...formItemLayout}>
          {
            type === 'detail' ? userInfo.address: // 判断是否是详情
            getFieldDecorator('address', {
              initialValue: userInfo.address
            })(
              <TextArea rows={3} placeholder="请输入联系地址"></TextArea>
            )
          }
        </FormItem>
      </Form>
    )
  }
}
UserForm = Form.create({})(UserForm)