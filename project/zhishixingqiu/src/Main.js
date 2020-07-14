import React, { Component } from 'react';
import './Main.css';
import storage from './storage';

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
        {
          title: 'hooks-4',
          author: '旅梦4'
        },
      ]
    }
  }
  // localStorage.setItem('planets',JSON.stringify([{"author":"中正", "title":"fdfdf", }]) )
  render() {
    const stars = this.state;
    console.log(stars)
    return (
      <div className="content">
        {stars.stars.map((item, i) => {
          return (
            <div className="card" key ={i}>
              <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg" alt="" id="img" />
              <h4>{item.title}</h4>
              <p id="hengxian">———</p>
              <p id="author">{item.author}</p>
            </div>
          )
        })}
        
      </div>
    );
  }
}

export default Main;