'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.post('/message', controller.home.setmessagelist);
  router.get('/getmessage', controller.home.getmessage);
  router.get('/delmessage', controller.home.delmessage);
  router.get('/getmd', controller.home.getmd);
  router.get('/postmd', controller.home.postmd);

  router.post('/postimg', controller.home.postimg);
};
