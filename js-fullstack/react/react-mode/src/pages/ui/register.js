import React from 'react'
import { Card, Form, Input, Icon, Button, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Checkbox, message } from 'antd'
import moment from 'moment'
const RadioGroup = Radio.Group
const Option = Select.Option
const FormItem = Form.Item
const TextArea = Input.TextArea


class FormRegister extends React.Component{

  state = {}

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => { // 登陆校验
      if (!err) {
        message.success(`${userInfo.userName}恭喜登陆成功, 您的密码为: ${userInfo.userPwd}`)
        console.log(JSON.stringify(userInfo))
      } else {
        message.error('错误信息')
      }
    })
  }

  getBase64 =(img, callback)=> {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          userImg:imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = { // 响应式
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 20
      }
    }

    const offsetLayout = {
      // 偏移
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }

    return(
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
          <FormItem label="用户名" {...formItemLayout}>
            {
              getFieldDecorator('userName', {
                initialValue: '', // 设置初始值
                rules: [
                  { required: true, message: '用户名不能为空' },
                  { min: 5, max: 10, message: '长度在5-10个字符'},
                  // { pattern: /^\w+$/g, message: '用户名必须为英文或者数字'}
                  { pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为英文或者数字'}
                ]
              })(
                <Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名"></Input>
              )
            }
            </FormItem>
            <FormItem label="密 码" {...formItemLayout}>
            {
              getFieldDecorator('userPwd', {
                initialValue: '', // 设置初始值
                rules: [
                  { required: true, message: '密码不能为空' },
                  { min: 5, max: 10, message: '长度在5-10个字符'},
                  { pattern: new RegExp('^\\w+$', 'g'), message: '密码必须为英文或者数字'}
                ]
              })(
                <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"></Input>
              )
            }
            </FormItem>
            <FormItem label="性 别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="0">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年 龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: '18'
                })(
                  <InputNumber></InputNumber>
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: ''
                })(
                  <Select>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('hobby', {
                  initialValue: ['1', '2']
                })(
                  <Select mode="multiple">
                    <Option value="1">跑步</Option>
                    <Option value="2">打球</Option>
                    <Option value="3">踢球</Option>
                    <Option value="4">游泳</Option>
                    <Option value="5">爬山</Option>
                    <Option value="6">羽毛球</Option>
                    <Option value="7">上天</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch/>
                )
              }
            </FormItem>
            <FormItem label="生 日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2019-07-01 12:00:00')
                })(
                  <DatePicker
                    showTime
                    format="YYY-MM-DD HH:mm:ss"/>
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '安徽蚌埠'
                })(
                  <TextArea
                    autosize={
                      {
                        minRows: 2, maxRows: 6
                      }
                    }/>
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time')(
                  <TimePicker></TimePicker>
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  onChange={this.handleChange}>
                    {this.state.userImg ? <img src={this.state.userImg} alt="" style={{width: 128}}/> : <Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('agree')(
                  <Checkbox>同意协议</Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormRegister)