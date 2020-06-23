import React from 'react'
import './ui.less'
import { Card, Spin, Icon, Alert } from 'antd'

export default class Loadings extends React.Component {

  render() {

    const antIcon = <Icon type="loading" style={{ fontSize: 24}}></Icon>

    const container = (
      <Alert
        message="标题"
        description="内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        style={{ marginTop: 20 }}>
      </Alert>
    )
    
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" style={{ marginRight: 10}}></Spin>
          <Spin style={{ marginRight: 10}}></Spin>
          <Spin size="large" style={{ marginRight: 10}}></Spin>
          <Spin indicator={antIcon}></Spin>
        </Card>

        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="标题"
            description="内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
            delay={500}>
          </Alert>

          <Spin delay={500}>
            { container }
          </Spin>

          <Spin tip="loading...">
            { container }
          </Spin>

          <Spin indicator={antIcon}>
            { container }
          </Spin>
        </Card>
      </div>
    )
  }
}