import React from 'react'
import { Card, Button, Modal } from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftjs from 'draftjs-to-html'

export default class Rich extends React.Component{

  state = {
    showRichText: false,
    editorContent: '',
    editorState: ''
  }

  // 清空内容
  handleClearContent = () => {
    this.setState({
      editorState: ''
    })
  }

  // 获取内容
  handleGetText = () => {
    this.setState({
      showRichText: true
    })
  }

  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    })
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  render () {

    const { editorContent, editorState } = this.state

    return(
      <div>
        <Card style={{marginTop: 10}}>
          <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
          <Button type="primary" onClick={this.handleGetText}>获取内容</Button>
        </Card>

        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            onContentStateChange={this.onEditorChange}
            onEditorStateChange={this.onEditorStateChange}/>
        </Card>

        {/* 弹框 */}
        <Modal
          title="富文本"
          visible={this.state.showRichText}
          onCancel={() => {
            this.setState({
              showRichText: false
            })
          }}
          footer={null}
          >
            { draftjs(editorContent) }
          </Modal>
      </div>
    )
  }
}