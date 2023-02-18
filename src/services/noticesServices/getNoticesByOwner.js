const { Notice } = require("../../models/noticesModel");
const { HttpError } = require("../../helpers/HttpError");

const getNoticesByOwner = async (userId) => {
  const noticesList = await Notice.find({ userId });
  if (!noticesList) {
    throw HttpError(401, "Not found notices");
  }
  return noticesList;
};

module.exports = {
  getNoticesByOwner,
};
