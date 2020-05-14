const express = require('express');
const axios = require('axios')
const app = express()



app.get('/',(req,res)=>{
    res.send("返回抗疫数据的api服务器")
})

app.get('/api/newsdata',async (req,res)=>{
    //解决ajax跨域问题
    res.append("Access-Control-Allow-Origin","*")
    res.append("Access-Control-Allow-content-type","*")
    //请求头条数据
    let result = await axios.get('https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839')
    let data = result.data;
    
    res.send(data)
})


app.get('/api/news',async (req,res)=>{
    //解决ajax跨域问题
    res.append("Access-Control-Allow-Origin","*")
    res.append("Access-Control-Allow-content-type","*")
    //请求头条数据
    let httpUrl = 'https://i.snssdk.com/api/feed/forum_flow/v1/?activeWidget=1&query_id=1656810113086509&tab_id=1656810113086525&category=forum_flow_subject&is_preview=0&stream_api_version=82&aid=13&offset=0&count=20'
    let result = await axios.get(httpUrl)
    let data = result.data;
    
    res.send(data)
})


app.listen(8080,()=>{
    console.log("server Start:")
    console.log("http://localhost:8080")
    console.log("http://localhost:8080/api/newsdata")
})