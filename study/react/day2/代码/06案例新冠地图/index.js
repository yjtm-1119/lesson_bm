import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './feiyan.json'
import './06style.css'

console.log(jsonData)

let provincesObj = {
    // "广东省":{
    //     confirm:0,
    //     suspect:0,
    //     heal:0,
    //     deal:0,
    // }
}

jsonData.data.list.forEach((item,i) => {
    if(provincesObj[item.province]==undefined){
        provincesObj[item.province] = {
            confirm:0,
            heal:0,
            dead:0,
        }
    }

    item.confirm = item.confirm?item.confirm:0;
    item.heal = item.heal?item.heal:0;
    item.dead = item.dead?item.dead:0;

    provincesObj[item.province] = {
        confirm:provincesObj[item.province].confirm+item.confirm,
        heal:provincesObj[item.province].heal+item.heal,
        dead:provincesObj[item.province].dead+item.dead
    }
});

let provinceList = []
for (const key in provincesObj) {
    provincesObj[key].province = key;
    provinceList.push(provincesObj[key])
}


console.log(provincesObj)
console.log(provinceList)

//排序
let provinceListSort = provinceList.sort((a,b)=>{
    if(a.confirm<b.confirm){
        return 1;
    }else{
        return -1;
    }
})

console.log(provinceListSort)


class Bili  extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>中国病例</h1>
                <ul>
                    <li>
                        <span>地区</span>
                        <span>确诊</span>
                        <span>死亡</span>
                        <span>治愈</span>
                    </li>

                    {
                        this.props.list.map((item,index)=>{
                            return (
                                <li>
                                    <span>{item.province}</span>
                                    <span>{item.confirm}</span>
                                    <span>{item.dead}</span>
                                    <span>{item.heal}</span>
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
    <Bili list={provinceListSort}></Bili>,
    document.querySelector('#root')
)