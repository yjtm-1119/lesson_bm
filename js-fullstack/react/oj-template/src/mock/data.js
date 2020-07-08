// 假数据  真数据前用一下
// var Mock = require('mockjs');
import Mock from 'mockjs';
var Random = Mock.Random
export default Mock.mock('/posts/', 'get', {
  success: true,
  title: 'cxk',
  content: 'sss',
  'list|5-10': [{
    'Name': Random.name(),
    'Age': Random.integer(0,120),
    'Address': Random.county(true),
    'key|+1':1
  }]
});
