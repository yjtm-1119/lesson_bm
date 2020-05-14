import React from 'react';
import axios from 'axios'
import NewsCom from './component/newscom'
import './assets/css/style.css'

function MapCom(props){
  return (
    <div className="contentItem">
      <h1>
        这是疫情地图组件
      </h1>
    </div>
  )
}

function GzCom(props){
  return (
    <div className="contentItem">
      <h1>
        这是广州疫情组件
      </h1>
    </div>
  )
}

function XcCom(props){
  return (
    <div className="contentItem">
      <h1>
        这是直击现场组件
      </h1>
    </div>
  )
}


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newData:null,
      navList:['疫情地图','最新进展',"广州疫情","直击现场"],
      tabIndex:0,
      barStyle:{
        left:'22px'
      },
      contentStyle:{
        transform:'translate(0,0)'
      }
    }
  }
  async componentWillMount(){
    let res = await axios.get('http://localhost:8080/api/newsdata')
    console.log(res.data)
    let data = JSON.parse(res.data.forum.extra.ncov_string_list) 
    console.log(data) 
  }
  render(){
    return (
      <div className="App">
        <div className="nav">
          {
            this.state.navList.map((item,index)=>{
              if(index===this.state.tabIndex){
                return (
                  <div key={index} onClick={(event)=> {this.tabClickEvent(index)}} className="navItem active">{item}</div>
                )
              }else{
                return (
                  <div key={index} onClick={(event)=> {this.tabClickEvent(index)}} className="navItem">{item}</div>
                )
              }
              
            })
          }

          <div className="bar" style={this.state.barStyle}></div>
        </div>

        <div className="content" style={this.state.contentStyle}>
          <MapCom></MapCom>
          <NewsCom></NewsCom>
          <GzCom></GzCom>
          <XcCom></XcCom>
          
        </div>
        
      </div>
    );
  }
  tabClickEvent=(index)=>{
    console.log(index);
    this.setState({
      barStyle:{
        left:(index*88+22)+"px"
      },
      contentStyle:{
        transform:`translate(-${index*375}px,0)`
      }
    })
  }
}

export default App;
