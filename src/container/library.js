const bluebird = require('bluebird');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const jsonwebtoken = require('jsonwebtoken');
const validate = require('express-validation');
const joi = require('joi');
const axios = require('axios');
const { v4: uuid } = require('uuid');

const locator = require('kopi-locator');
const kopiErrorHandler = require('kopi-error-handler');

const logger = require('kopitech-logger');
const kopiTime = require('kopi-time');

locator.set('logger', logger);
locator.set('kopiTime', kopiTime);
locator.set('kopiErrorHandler', kopiErrorHandler);

locator.set('bluebird', bluebird);
locator.set('express', express);
locator.set('cors', cors);
locator.set('bodyParser', bodyParser);
locator.set('http', http);
locator.set('jsonwebtoken', jsonwebtoken);
locator.set('validate', validate);
locator.set('joi', joi);
locator.set('axios', axios);
locator.set('uuid', uuid);

module.exports = {
  get: locator.get,
};
