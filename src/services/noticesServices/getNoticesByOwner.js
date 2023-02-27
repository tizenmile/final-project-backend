const { Notice } = require("../../models/noticesModel");
const { HttpError } = require("../../helpers/HttpError");

const getNoticesByOwner = async (userId, page, limit) => {

  const noticesList = await Notice.find({ userId })
  .skip(parseInt(page) * parseInt(limit))
    .limit(parseInt(limit))
  if (!noticesList) {
    throw HttpError(401, "Not found notices");
  }
  const total = (await Notice.find({ userId })).length
  const data = {
      noticesList,
      total
      }
    return data
};

module.exports = {
  getNoticesByOwner,
};
