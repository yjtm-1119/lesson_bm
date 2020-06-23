import React from 'react'
import { Card, notification, Button } from 'antd'

export default class Notification extends React.Component {

  render(h) {

    const openNotificationWithIcon = (type, direction) => {
      if (direction) {
        notification.config({
          placement: direction
        })
      }
      notification[type] ({
        message: '标题',
        description: '内容内容内容内容内容内容内容内容内容'
      })
    }
    
    return (
      <div>
        <Card>
          <Button type="primary" onClick={() => openNotificationWithIcon('success')}>success</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('info')}>info</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('warning')}>warning</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('error')}>error</Button>
        </Card>

        <Card style={{marginTop: 20}}>
          <Button type="primary" onClick={() => openNotificationWithIcon('success', 'topLeft')}>topLeft</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('info', 'topRight')}>topRight</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('warning', 'bottomLeft')}>bottomLeft</Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('error', 'bottomRight')}>bottomRight</Button>
        </Card>
      </div>
    )
  }
}