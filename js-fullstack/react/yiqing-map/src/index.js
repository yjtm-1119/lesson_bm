import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './list-by-area-code.json';
import './index.css';


console.log(jsonData);
let dateObj = {
  // "日期": {
  //   confirm: 0,
  //   suspect: 0,
  //   heal: 0,
  //   dead:0,
  // }
}

jsonData.data.list.forEach((item, i) => {
  // if (dateObj[item.date] == undefined) {
  //   dateObj[item.date] = {
  //     confirm: 0,
  //     suspect: 0,
  //     heal: 0,
  //     dead: 0,
  //   }
  // }
  // item.confirm = item.confirm ? item.confirm : 0;
  // item.suspect = item.suspect ? item.suspect : 0;
  // item.heal = item.heal ? item.heal : 0;
  // item.dead = item.dead ? item.dead : 0;

  dateObj[item.date] = {
    confirm: item.today.confirm,
    suspect: item.today.suspect,
    heal: item.today.heal,
    dead: item.today.dead,
  }
})
console.log(dateObj)

let dateList = [];
for (const key in dateObj) {
  dateObj[key].date = key;
  dateList.push(dateObj[key])
}

console.log(dateList);

let dateListSort = dateList.sort((a, b) => {
  if (a.confirm > b.confirm) {
    return 1;
  } else {
    return -1;
  }
})
console.log(dateListSort);

class Bingli extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <span>日期</span>
            <span>确诊</span>
            <span>治愈</span>
            <span>疑似</span>
            <span>死亡</span>
          </li>
          {
            this.props.list.map((item, index) => {
              return (
                <li>
                  <span>{item.date}</span>
                  <span>{item.confirm}</span>
                  <span>{item.heal}</span>
                  <span>{item.suspect}</span>
                  <span>{item.dead}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
ReactDOM.render(
  <Bingli list={dateListSort}></Bingli>,
  document.querySelector('#root')
)
