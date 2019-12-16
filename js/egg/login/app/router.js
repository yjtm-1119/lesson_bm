'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router -> url ->controller 
  router.post('/login/regiser', controller.login.register);
  //登录  post  请求login登录
  router.post('/login', controller.login.loginIn)
};
