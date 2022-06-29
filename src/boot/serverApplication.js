const { L: logger } = require('kopitech-logger')('Server App');

const container = require('../container');

const run = async () => {
  try {
    logger.info('Server App init started');

    const server = await container.get('server');
    await server.serve();

    logger.info('Server App init ending');
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

run()
  .then(() => logger.info('Server App init ended'))
  .catch(error => logger.error(error));

logger.info('Server App init starting');
