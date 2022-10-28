const { Contact } = require("../../models/contact");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10, ...queryParams } = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find(
      { owner, ...queryParams },
      "-createdAt -updatedAt",
      {
        skip,
        limit,
      }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
