import React from 'react'
import { Card, Tabs, message, Icon } from 'antd'
const TabPane = Tabs.TabPane

export default class Tab extends React.Component{

  handleCallback = (key) => {
    message.info('你选择了第' + key + '页签')
  }
  newTabIndex = 0

  componentWillMount() {

    const panes = [
      {
        title: 'Tab 1',
        content: 'Tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3',
        key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targeKey, action) => {
    this[action](targeKey)
  }

  // 添加
  add = () => {
    const panes = this.state.panes
    const activeKey = `newTab${this.newTabIndex++}`
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey})
    this.setState({ panes, activeKey})
  }

  // 删除
  remove = (targetKey) => {
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key
    }
    this.setState({ panes, activeKey })
  }

  render() {

    return(
      <div>
        <Card title="Tab页签">
          <Tabs defaultActivekey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">tab 1</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">tab 3</TabPane>
          </Tabs>
        </Card>

        <Card title="Tab带图标的页签" style={{marginTop: 20}}>
          <Tabs defaultActivekey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">tab 1</TabPane>
            <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">tab 2</TabPane>
            <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">tab 3</TabPane>
          </Tabs>
        </Card>

        <Card title="Tab动态页签" style={{marginTop: 20}}>
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}>
              {
                this.state.panes.map((panel) => {
                  return <TabPane tab={panel.title} key={panel.key}>
                    {panel.content}
                  </TabPane>
                })
              }
          </Tabs>
        </Card>
      </div>
    )
  }
}