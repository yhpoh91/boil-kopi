const locator = require('kopi-locator');

const server = require('../server');
const daemon = require('../daemon');


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

locator.register('daemon', daemon, [
  'logger',
  'config',
]);

module.exports = {
  get: locator.get,
};
