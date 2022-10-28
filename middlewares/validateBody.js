const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const validateError = new Error(error.message);
      validateError.status = 400;
      next(validateError);
    }
    next();
  };

  return func;
};

module.exports = validateBody;
