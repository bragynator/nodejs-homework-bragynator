const validateBody = (schema, message = "Missing required fields") => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const validateError = new Error(message);
      validateError.status = 400;
      next(validateError);
    }
    next();
  };

  return func;
};

module.exports = validateBody;
