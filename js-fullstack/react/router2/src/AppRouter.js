import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index.js';
import Video from './pages/Video.js';
import WorkSpace from './pages/WorkSpace';
import './index.css';

function AppRouter() {
  let routeConfig = [
    {
      path: '/',
      title: '博客首页',
      exact: true,
      component: Index,
    }, {
      path: '/video/',
      title: '视频教程',
      exact: false,
      component: Video,
    }, {
      path: '/workspace/',
      title: '职场技能',
      exact: false,
      component: WorkSpace,
    }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map((item, index) => {
                return (
                  <li key={index}><Link to={item.path}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="rightNav">
          {
            routeConfig.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
              )
            })
          }
          {/* <Route path="/" exact component={Index}/>
          <Route path="/Video" component={Video} />
          <Route path="/WorkSpace" component={WorkSpace}/> */}
        </div>
      </div>
    </Router>)
}

export default AppRouter