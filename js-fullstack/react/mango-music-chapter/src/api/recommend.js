export function getNewAlbum() { // 模块化到api 目录 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 
      resolve([{
        id: 1,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 2,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 3,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 4,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 5,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 6,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 7,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 8,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }])
    }, 3000);
  })
}