import React from 'react';
class Notification extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {

  //   }
  // }
  state = {
    visiable: true
  }
  render() {
    const { visiable } = this.state;
    const { children } = this.props;
    return (
      <div className={visiable ? 'show' : 'hidden'}>
        {children}
      </div>
    )
  }
}
export default Notification;