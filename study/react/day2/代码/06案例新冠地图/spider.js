let axios = require('axios');

(async function(){
    let httpUrl = 'https://c.m.163.com/ug/api/wuhan/app/index/feiyan-data-list?t='
    let res = await axios.get(httpUrl+new Date().getTime())
    console.log(res.data)
})()
 