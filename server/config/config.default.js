/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580207377270_2766';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security : {
      csrf: {
        enable: false,
      }
    },
    cluster : {
      listen: {
        port: 8888
      }
    },
    mysql : {
      client : {
        host: 'localhost',
        // port
        port: '3306',
        // username
        user: 'root',
        // password
        password: 'root',
        // database
        database: 'devote'
      }
    },
    static : {
      prefix: '/public/'
    },
    auth : {
      clientID:'696371dc097e955c4eac',
      clientSecret:'d49097a6f8f1ec473a569d041c4cf90673774241'
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
