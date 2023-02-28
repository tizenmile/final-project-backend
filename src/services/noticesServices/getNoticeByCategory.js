const { NotFoundError } = require("../../helpers/errors");
const { Notice } = require("../../models/noticesModel");

const getNoticeByCategory = async (categoryName, page, limit) => {
  const notices = await Notice.find({ category: categoryName })
    .sort({ _id: -1 })
    .skip(parseInt(page) * parseInt(limit))
    .limit(parseInt(limit));
  if (!notices || notices.length === 0) {
    throw new NotFoundError("Not found");
  }

  const total = (await Notice.find({ category: categoryName })).length;
  const data = {
    notices,
    total,
  };
  return data;
};

module.exports = {
  getNoticeByCategory,
};
