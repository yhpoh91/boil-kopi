module.exports = (
  express, validate, validator, controller,
) => {
  const router = express.Router({ mergeParams: true });

  router.route('/')
    .get(
      validate(validator.getExample),
      controller.getExample,
    );

  return router;
};
