// import React from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

// //页面
// // - 列表：/?tab=all
// // - 详情： /topic/

// //MVVM 
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       value: 123456,
//       tabs: [
//         { content: '全部', param: 'all' },
//         { content: '招聘', param: 'job' },
//         { content: '精华', param: 'good' },
//         { content: '分享', param: 'share' },
//         { content: '问答', param: 'ask' },
//       ],
//       tab: 'all',
//       isLoading: true,
//       lists: []    //文章列表
//     }
//   }
//   //生命周期
//   //App 被reactDom 渲染到pc上
//   // 渲染的时候背后的那一套流程 就是生命周期
//   handleGetPost = () => {
//     //已经渲染了  挂载完毕
//     const { tab } = this.state;
//     axios({
//       url: 'https://cnodejs.org/api/v1/topics',
//       params: {
//         tab: tab,
//         page: 1,
//         limit: 40
//       }
//     })
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//           lists: res.data.data,
//           isLoading: false
//         })
//       })
//       .catch(err => {
//         this.setState({
//           isLoading: false
//         })
//       })
//   }
//   componentDidMount() {

//     //已经渲染了  挂载完毕
//     const { tab } = this.state;
//     axios({
//       url: 'https://cnodejs.org/api/v1/topics',
//       params: {
//         tab: tab,
//         page: 1,
//         limit: 40
//       }
//     })
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//           lists: res.data.data
//         })
//       })
//   }
//   handleTabChange = (event) => {
//     console.log(event.target);
//     const tab = event.target.getAttribute('data-tab');
//     //得到了tab是什么 再发请求去请求这个url
//     this.setState({
//       tab,
//       isLoading: true
//     }, () => {
//       this.handleGetPost()
//     })
//   }
//   handleChange = () => {
//     this.setState({value:event.target.value})
//   }
//   render() {
//     const { lists, tabs, tab, isLoading, value } = this.state;

//     // react 中js表达式都用
//     // view 
//     //受控组件 value+onChange  输入框里面的内容受本组件里面state控制
//     //非受控组件  不受任何控制
//     //取到用户输入的值  this.state.value
//     //非受控组件  取到input 真实的dom 节点   dom.value 涉及到dom操作   现代前端框架中不提倡 操作dom了
//     return (
//       <div>
//         <input type='text' placeholder='1234' value={value}
//           onChange={this.handleChange}
//         />
//         <input type='text' placeholder='1234' defaultvalue='12344'
//         />
//         {/* 不渲染那些 值为false  underfined  null 的内容 */}
//         {isLoading && '正在加载中...'}
//         {lists.length === 0 && '暂无文章请重试'}
//         {
//           tabs.map((tabObj, i) => {
//             return (
//               <div key={i} data-tab={tabObj.param}
//                 className={tabObj.param === tab ? 'high-light' : ''}
//                 onClick={this.handleTabChange}>
//                 {tabObj.content}
//               </div>
//             )
//           })
//         }
//         {
//           //map 遍历 不要用   react中如果jsx(html+js)存在数组  react 自己展开数组里的每一项
//           lists.map(list => {
//             return (
//               <div>
//                 {list.title}
//               </div>
//             )
//           })
//         }
//       </div>
//     )
//   }
// }
// export default App; //默认导出

// export const name = 'lilei'   //命名导出





import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// 页面
// - 列表：/?tab=all
// - 详情：/topic/
// let tab = 
// mv-vm
// view 
// model 数据
// vm 绑定：model 变了 view 自动更新
class App extends React.Component {
  constructor() {
    super()
    // model
    this.state = {
      value: '123456',
      tabs: [
        { content: '全部', param: 'all' },
        { content: '招聘', param: 'job' },
        { content: '精华', param: 'good' },
        { content: '分享', param: 'share' },
        { content: '问答', param: 'ask' },
      ],
      tab: 'all',
      isLoading: true,
      lists: []     // 文章列表
    }
  }
  // 生命周期
  // App 被 reactDom 渲染到 pc 上
  // 渲染：一套流程（生命周期）
  handleGetPost = () => {
    const { tab } = this.state;
    // 总 / 40 = 总页数
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      params: {
        tab: tab,
        page: 1,
        limit: 40
      }
    })
      .then(res => {
        // console.log(res.data)
        // 修改 状态
        this.setState({
          lists: res.data.data,
          isLoading: false
        })

      })
      .catch(err => {
        this.setState({
          isLoading: false
        })
      })
  }
  componentDidMount() {
    this.handleGetPost()
  }
  handleTabChange = (event) => {
    // this 定义位置决定的
    // 知道点了哪一项？？
    // event.target 
    // console.log(event.target)
    const tab = event.target.getAttribute('data-tab');
    // 发个请求
    this.setState({
      tab,
      isLoading: true
    }, () => {
      // setState 异步
      this.handleGetPost()
    })
    // handleGetPost
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    const { lists, tabs, tab, isLoading, value } = this.state;
    // js 表达式 都用 { } 包起来
    // view
    // 受控组件 value + onChange ，受本组件里面的state控制
    // 假如取到用户输入了什么？ this.state.value
    // 非受控组件
    // 假如取到用户输入了什么？取到 input 真实的 dom 节点  dom.value
    // 涉及 dom 操作  现代前端框架不提倡操作 dom  。
    return (
      <div>
        <input type="text" placeholder="1234" value={value}
          onChange={this.handleChange} />

        <input type="text" placeholder="1234" defaultValue="123" id="name" />
        {/* react 不渲染 那些 值为 空数组 false undefined null 额内容 */}
        {isLoading && '正在加载中...'}
        {lists.length === 0 && '暂无文章请重试'}
        {
          tabs.map((tabObj, i) => {
            return (
              <div key={i} data-tab={tabObj.param}
                className={tabObj.param === tab ? 'high-light' : ''}
                onClick={this.handleTabChange}>
                {tabObj.content}
              </div>
            )
          })
        }
        {
          // map 返回，数组，react 如果 jsx(html + js) 存在数组，react 自己展开数组里面每一项
          // react 列表渲染
          // forEach 
          lists.map((list, i) => {
            return (
              <div key={i}>
                {list.title}
              </div>
            )
          })
        }
      </div>
    )
  }
}
// 默认导出
export default App;
// 命名导出

export const name = 'lilei';

