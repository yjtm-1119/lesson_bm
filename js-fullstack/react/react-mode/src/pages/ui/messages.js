import React from 'react'
import { Card, message, Button } from 'antd'

export default class Messages extends React.Component{

  render(h) {

    const success = () => {
      message.success('成功成功成功成功成功成功成功成功')
    }

    const error = () => {
      message.error('失败失败失败失败失败失败失败失败')
    }

    const warning = () => {
      message.warning('警告警告警告警告警告警告警告警告')
    }

    const loading = () => {
      const hide = message.loading('加载中', 0)
      setTimeout(hide, 2500)
    }

    return (
      <div>
        <Card>
          <Button type="primary" onClick={success}>success</Button>
          <Button type="primary" onClick={error}>error</Button>
          <Button type="primary" onClick={warning}>warning</Button>
          <Button type="primary" onClick={loading}>loading</Button>
        </Card>
      </div>
    )
  }
}