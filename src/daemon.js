module.exports = (
  kopiLogger,
  config,
) => {
  const { L: logger } = kopiLogger('Daemon');

  const run = async () => {
    try {
      logger.debug(config);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    run,
  };
};
