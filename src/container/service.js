const locator = require('kopi-locator');

const server = require('../server');


locator.register('server', server, [
  'logger',
  'kopiErrorHandler',
  'config',
  'express',
  'cors',
  'bodyParser',
  'http',
  'globalRouter',
]);

module.exports = {
  get: locator.get,
};
