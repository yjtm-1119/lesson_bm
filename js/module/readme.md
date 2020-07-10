## commonJS
导出：
module.exports = function(){} 
module.exports{}
导入：
require


## es-module  

默认导出  export default 1;
命名导出 export const a = 1;
const b =2
export {
  b
}
export default {
  a:1,
  b:2
}
import {a,b} from '../js; 这里{}不能解构

1. import/export  不论写在哪 都会提前执行
2. 在代码静态分析(不用执行代码),就可以分析出引入了哪些模块



1. commonjs 一定是要 代码运行起来才知道引入了哪些模块
2. 可以出现在逻辑分支里面



