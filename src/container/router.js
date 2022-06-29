const locator = require('kopi-locator');

const globalRouter = require('../router');

const exampleRouter = require('../router/example');
const exampleValidation = require('../router/example/validation');
const exampleController = require('../router/example/controller');


/*
 **********************************
 * Global Routes
 **********************************
 */
locator.register('globalRouter', globalRouter, [
  'express',
  'exampleRouter',
]);


/*
 **********************************
 * Example Routes
 **********************************
 */
locator.register('exampleRouter', exampleRouter, [
  'express', 'validate',
  'exampleValidation', 'exampleController',
]);
locator.register('exampleValidation', exampleValidation, ['joi']);
locator.register('exampleController', exampleController, [
  'logger',
]);


module.exports = {
  get: locator.get,
};
