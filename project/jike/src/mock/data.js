import Mock from 'mockjs'
 
export default Mock.mock('/data',{
    'list|30':[{
       'title':'@title()' ,
       't1|1-2':1,
       'learned|0-20':1,
       'lesson|20-40':1,
       "image": "@image('75x75')",
       't2|1-5':1,
       'index|+1':1
    }]    
})