module.exports = (
  kopiLogger,
) => {
  const { L: logger } = kopiLogger('Example Router');

  const getExample = async (req, res, next) => {
    try {
      logger.info('Example route called');
      res.json({
        hello: 'world',
      });
    } catch (error) {
      next(error);
    }
  };

  return {
    getExample,
  };
};
