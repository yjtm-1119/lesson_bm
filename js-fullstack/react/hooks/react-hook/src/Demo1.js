import React, { useState } from 'react'
let showAge = true
function Demo1() {
  // useState 不能存在于条件判断语句当中
  const [age, setAge] = useState(18);
  const [sex, setSex] = useState('男');
  const [work, setWork] = useState('前端工程师');
  return (
    <div>
      <p>年龄:{age}岁</p>
      <p>性别:{sex}</p> 
      <p>工作:{work}</p>
    </div>
  ) 
}
export default Demo1;