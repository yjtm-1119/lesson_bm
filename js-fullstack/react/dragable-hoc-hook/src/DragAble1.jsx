import React, { Component } from 'react';
class Drag extends Component {
  state = {
    left: 0,
    top: 0
  }
  handleDown = (e) => {
    var startX = e.clientX;
    var startY = e.clientY;
    let obj = e.target.getBoundingClientRect();
    // console.log(obj.x, obj.y)
    // console.log(e.clientX,e.clientY);
    this.startX = startX - obj.x;
    this.startY = startY - obj.y;
    document.addEventListener('mousemove', this.handleMove)
    document.addEventListener('mouseup', this.handleUp)
  }
  handleMove = (e) => {
    var newX = e.clientX;
    var newY = e.clientY;
    // console.log(e.clientX, e.clientY);
    // let obj = e.target.getBoundingClientRect();
    const diffX = newX - this.startX;
    const diffY = newY - this.startY;
    this.setState({
      left: diffX,
      top: diffY
    })
  }
  handleUp = () => {
    document.removeEventListener('mousemove', this.handleMove);
    document.removeEventListener('mouseup', this.handleUp);
  }
  render() {
    const { left, top } = this.state;
    return (
      <h2
        style={{ left, top }}
        className="dragable"
        onMouseDown={this.handleDown}
      >h2222</h2>
    );
  }
}


class Drag2 extends Component {
  render() {
    return (
      <p>sadadadsasdasd</p>
    )
  }
}
function withDragAble(Com) {
  return class extends Component {
    state = {
      left: 0,
      top: 0
    }
    handleDown= (e) => {
      var startX = e.clientX;
      var startY = e.clientY;
      let obj = e.target.getBoundingClientRect();
      // 重置起点
      this.startX = startX - obj.x;   // obj.left  // 0
      this.startY = startY - obj.y;   // 0
      document.addEventListener('mousemove', this.handleMove);
      document.addEventListener('mouseup', this.handleUp);
    }
    handleMove = (e) => {
      var newX = e.clientX;
      var newY = e.clientY;
      const diffX = newX - this.startX;
      const diffY = newY - this.startY;
      this.setState({
        left: diffX,
        top: diffY
      })
    }
    handleUp = () => {
      document.removeEventListener('mousemove', this.handleMove);
      document.removeEventListener('mouseup', this.handleUp);
    }
    render() {
      const { left, top} = this.state;
      return (
        <div style={{left, top}} className="dragable"
        onMouseDown={this.handleDown}
        >
          <Com />
        </div>
      )
    }
  }
}
export const WithDragAble2 = withDragAble(Drag2);
export default Drag;