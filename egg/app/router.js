'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/timelist', controller.home.timelist);
  router.get('/gettimelist', controller.home.gettimelist);
  router.post('/postimg', controller.home.postimg);
};
