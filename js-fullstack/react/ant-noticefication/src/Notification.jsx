import React from 'react';
import ReactDOM from 'react-dom';

class Notification extends React.Component {
  // class 属性
  state = {
    visiable: true,
    title: "default"
  }
  open = ({ title }) => {
    this.setState({
      visiable: true,
      title
    })
  }
  close = () => {
    this.setState({
      visiable: false
    })
  }
  render() {
    const { visiable, title } = this.state;
    return (
      <div className={visiable ? 'show' : 'hidden'}>
        {title}
      </div>
    );
  }
}
// 类
// 也要 new Notification()
// 生成实例这一步 被 react 封装起来了
function createNotification() {
  const div = document.createElement('div');
  const ref = React.createRef();
  // ref = { current: }
  // ref 属性：拿到类上面的实例
  // 有了 实例，能调用它上面的方法
  // ref.current = new Notification();
  // ref.current.open
  // ref.current.close
  ReactDOM.render(<Notification ref={ref} />, div);
  document.body.appendChild(div);
  return {
    open: ref.current.open,
    close: ref.current.close
  }
}
let notification = null;
if (!notification) {
  const { open, close } = createNotification();
  notification = {
    open,
    close
  }
}
export default notification;