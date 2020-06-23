import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'
const FormItem = Form.Item

class FormLogin extends React.Component{

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => { // 登陆校验
      if (!err) {
        message.success(`${userInfo.userName}恭喜登陆成功, 您的密码为: ${userInfo.userPwd}`)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title="登陆内行表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">登陆</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登陆水平表单" style={{marginTop:20}}>
          <Form layout="horizontal" style={{width:300}}>
          <FormItem>
            {
              getFieldDecorator('userName', {
                initialValue: '用户名', // 设置初始值
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
            <FormItem>
            {
              getFieldDecorator('userPwd', {
                initialValue: '123',
                rules: []
              })(
                <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"></Input>
              )
            }
            </FormItem>
            <FormItem>
            {
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>记住密码</Checkbox>
              )
            }
            <a href="https://gitee.com/shuleijia/events" style={{float:"right"}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormLogin)