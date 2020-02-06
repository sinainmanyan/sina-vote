'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  validate : {
    enable: true,
    package: 'egg-validate',
  },
  mysql : {
    enable: true,
    package: 'egg-mysql',
  }
};
