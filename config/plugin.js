'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
