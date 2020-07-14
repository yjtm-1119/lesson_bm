import Mock from 'mockjs';
var Random = Mock.Random
export default Mock.mock('/lessons/', 'get', {
  success: true,
  'list|30':
    [
      {
        'id|+1': 1,
        'key|+1': 1,
          'iamge': "@image('75×75')",
          'title': '@title',
          "type|1": [
              "专栏",
              "视频课",
              "微课",
              "每日一课",
              "其他"
          ],
          'total|80-100': 1,
          'studied|1-80': (1,80),
          // 'finished|0-100': 100
      }
  ]
});
