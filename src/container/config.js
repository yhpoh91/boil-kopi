const locator = require('kopi-locator');

const config = {
  port: process.env.PORT || 8080,
};

locator.set('config', config);

module.exports = {
  get: locator.get,
};
