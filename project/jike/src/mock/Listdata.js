import Mock from 'mockjs';
var Random = Mock.Random
export default Mock.mock('/lessons/', 'get', {
  success: true,
  'list|30':
    [
      {
        'id|+1': 1,
        'key|+1': 1,
          // 'iamge': "@image('75*75','#FFC0CB','Lesson')",
          'title': '@title',
          "type|1": [
              "专栏",
              "视频课",
              "微课",
            "每日一课",
              "其他"
          ],
          'total|100': 80,
          'studied|1-100': (1,100),
          // 'finished|0-100': 100
      }
  ]
});
