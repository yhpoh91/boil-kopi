require('@babel/polyfill');
require('dotenv').config();

const { L: logger } = require('kopitech-logger')('Process');

const packageJson = require('../package.json');

/* eslint-disable global-require */
process.on('unhandledRejection', (reason, p) => {
  logger.warn('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception:');
  logger.error(err);
});

process.on('SIGTERM', () => {
  logger.error('SIGTERM received, someone is trying to kill process');
  logger.error('Killing myself');
  process.exit(1);
});

// Set default node environment to development
const env = process.env.NODE_ENV || 'development';

logger.info('ENVIRONMENT:', env);
logger.info('VERSION:', packageJson.version);
logger.info('NODEJS VERSION:', process.version);

logger.info('Initializing');
require('./application');
