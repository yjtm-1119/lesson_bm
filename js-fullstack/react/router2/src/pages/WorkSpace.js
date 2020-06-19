import React from 'react';
import { Route, Link } from 'react-router-dom';
import Sal from './workspace/Sal';
import Get from './workspace/Get';

function Video(){
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/workspace/Sal">程序员加薪秘籍</Link>
          </li>
          <li>
            <Link to="/workspace/Get">程序员早起攻略</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>职场软技能</h3>
          <Route path="/workspace/Sal/" component={Sal}/>
          <Route path="/workspace/Get/" component={Get}/>
        </div>
      </div>
    </div>
  )
}
export default Video;