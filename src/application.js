const { L: logger } = require('kopitech-logger')('App');

const container = require('./container');

const run = async () => {
  try {
    logger.info('App init started');
    const server = await container.get('server');
    await server.serve();

    logger.info('App init ending');
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

run()
  .then(() => logger.info('App init ended'))
  .catch(error => logger.error(error));

logger.info('App init starting');
