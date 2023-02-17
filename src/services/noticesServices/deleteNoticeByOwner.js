const { Notice } = require("../../models/noticesModel");
const { HttpError } = require("../../helpers/HttpError");

const deleteNoticeByOwner = async (noticeId, userId) => {
  const notice = await Notice.findOne({ _id: noticeId, userId });
  if (!notice) {
    throw HttpError(404, "Notice is not found");
  }
  await Notice.findOneAndRemove({ _id: noticeId, userId });
  return notice;
};

module.exports = {
  deleteNoticeByOwner,
};
