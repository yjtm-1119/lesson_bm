## Content-Type:text/plain
提交给后端的数据 就是纯文本
```js
name=123
file=2144213.jpeg
```

## application/x-www-form-urlencoded
```js
name=123&file=2144213.jpeg
```

## multipart/form-data
```js
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"
Content-Type: text/plain

123456789   //文件内容

-----------------------------205579936434786223734260171678--
```

为什么第三种编码适合用来做文件上传
前两种编码对二进制文件或者非 Ascii 字符 处理很低效

后端处理文件上传：
- 分隔符分割
- 得到分割之后的每一块，文件内容  再调用fs.write()  可以保存文件了  完成了图片上传