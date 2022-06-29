const locator = require('kopi-locator');

require('./config');
require('./library');
require('./service');
require('./router');


module.exports = {
  get: locator.get,
};
