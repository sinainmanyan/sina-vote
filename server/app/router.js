'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller ,middleware} = app;
  /**
   * 注册
   */
  router.post('/user/registry',controller.user.registry.create);
  /**
   * 获取验证码
   */
  router.post('/user/verificationCode',controller.user.registry.verificationCode);
  /**
   * 重置密码
   */
  router.post('/user/resetPassword',controller.user.registry.update);
  /**
   * 登陆
   */
  router.post('/user/login',controller.user.login.index);
  /**
   * 获取github验证码
   */
  router.post('/sendCode',controller.user.auth.sendCode);
  /**
   * 创建投票接口
   */
  router.post('/vote/create',middleware.islogin(),controller.vote.add)
};
