module.exports = (
  kopiLogger,
  kopiErrorHandler,
  config,

  express,
  cors,
  bodyParser,
  http,

  globalRouter,
) => {
  const { L: logger } = kopiLogger('Server');

  const { port } = config;

  const app = express();

  app.set('trust proxy', true);
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Routes
  app.use(globalRouter);
  app.use((req, res, next) => kopiErrorHandler.handleNotFound(req, res, next));
  app.use((error, req, res, next) => kopiErrorHandler.handleError(error, req, res, next));

  // Create HTTP Server
  const httpServer = http.createServer(app);

  // Serve Requests
  const serve = () => httpServer.listen(
    port,
    () => logger.info(`Server running on port ${port}`),
  );

  return { serve };
};
