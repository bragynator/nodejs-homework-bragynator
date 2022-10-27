const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  const result = isValidObjectId(contactId);
  if (!result) {
    const valitedError = new Error(`${contactId} is not valid`);
    valitedError.status = 404;
    next(valitedError);
  }
  next();
};

module.exports = isValidId;
