import React, { Component } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import storage from './storage';
import AddItem from './AddItem';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [
        {
          title: 'hooks-1',
          author: '旅梦1'
        },
        {
          title: 'hooks-2',
          author: '旅梦2'
        },
        {
          title: 'hooks-3',
          author: '旅梦3'
        },
      ]
    }
  }
  // localStorage.setItem('planets',JSON.stringify([{"author":"中正", "title":"fdfdf", }]) )
  addTtem() {
    // localStorage.setItem(key, JSON.stringify(value))
  }
  render() {
    const stars = this.state;
    console.log(stars)
    return (
      <div className="content">
        {stars.stars.map((item, i) => {
          return (
            <div className="card" key={i}>
              <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg" alt="" id="img" />
              <h4>{item.title}</h4>
              <p id="hengxian">———</p>
              <p id="author">{item.author}</p>
            </div>
          )
        })}
        <div className="card add">
          <Router>
            <Link to="/addItem">
              <img id="add" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594698381314&di=82acc53d7fb25518d1aa86316a203fb1&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D185845813%2C1851669223%26fm%3D214%26gp%3D0.jpg" alt="" />
            </Link>
            <Route path="/addItem"  component={AddItem} />
          </Router>
        </div>

      </div>
    );
  }
}

export default Main;