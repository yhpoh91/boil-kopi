const { L: logger } = require('kopitech-logger')('Daemon App');

const container = require('../container');

const run = async () => {
  try {
    logger.info('Daemon App init started');

    const daemon = await container.get('daemon');
    await daemon.run();

    logger.info('Daemon App init ending');
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

run()
  .then(() => logger.info('Daemon App init ended'))
  .catch(error => logger.error(error));

logger.info('Daemon App init starting');
