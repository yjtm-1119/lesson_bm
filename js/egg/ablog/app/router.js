'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //显示博客列表 所有的博客都会查出表
  // router.get('/ports');
  //显示某篇博客
  // router.get('/posts/:id');
  router.get('/posts', controller.post.index);
  router.get('/posts/create', controller.post.new);
  router.post('/posts', controller.post.create);
  // router.delete('/posts/:id');
  // router.put('/posts/:id');
};
