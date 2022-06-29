module.exports = joi => ({
  getExample: {
    query: {},
    params: {},
    body: {
      text: joi.string().allow(null, '').optional(),
    },
  },
});
