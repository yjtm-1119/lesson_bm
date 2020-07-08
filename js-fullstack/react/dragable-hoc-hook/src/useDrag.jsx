import React, { useState } from 'react';
//useState 之前：  组件 class function
//useState 官方定义的hook ,函数组件内部定义state
//useDrag  自己定义出来的hook
function useDrag() {
  // state = {
  //   left: 0,
  //   top: 0
  // }
  const [state, setState] = useState({
    left: 0,
    top: 0
  })
  const handleDown = (e) => {
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
  const handleMove = (e) => {
    var newX = e.clientX;
    var newY = e.clientY;
    // console.log(e.clientX, e.clientY);
    // let obj = e.target.getBoundingClientRect();
    const diffX = newX - this.startX;
    const diffY = newY - this.startY;
    setState({
      left: diffX,
      top: diffY
    })
  }
  const handleUp = () => {
    document.removeEventListener('mousemove', this.handleMove);
    document.removeEventListener('mouseup', this.handleUp);
  }
  return {
    left,
    top
  }
}//把别人关心的信息给别人


function drag1() {
  const { left, top } = useDrag();
  return (
    <div style={{ left, top }}>
      drag1
    </div>
  )
}
export default useDrag;