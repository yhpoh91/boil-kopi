module.exports = (
  express,

  exampleRouter,
) => {
  const router = express.Router({ mergeParams: true });

  router.use('/health', (_, res) => res.status(200).send('ok'));

  // Example
  router.use('/example', exampleRouter);


  return router;
};
