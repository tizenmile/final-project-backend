const { Notice } = require("../../models/noticesModel");

const getNoticeById = async (noticeId) => {
  try {
    const notice = await Notice.findById(noticeId);
    return notice;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = getNoticeById;
