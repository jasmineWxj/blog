/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656230020385_4352';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.jwt = {
    secret: 'wangxiaojing',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config.mysql = {
  //   app: true,
  //   agent: false,
  //   client: {
  //     host: '120.48.85.51',
  //     port: '3306',
  //     user: 'root',
  //     password: 'Wxj19990406!',
  //     database: 'blog',
  //   },
  // };
  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'admin123',
      database: 'blog',
    },
  };
  config.static = {
    prefix: '/public/',
    // dir: [ path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'app/azz') ],
    dir: [ 'app/public', 'app/resource' ],
  };
  config.multipart = {
    mode: 'file',
  };


  return {
    ...config,
    ...userConfig,
  };
};
