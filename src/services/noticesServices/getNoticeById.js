const { Notice } = require("../../models/noticesModel");
const User = require("../schemas/auth");

const getNoticeById = async (noticeId) => {
  try {
    const notice = await Notice.findById(noticeId);
    const user = await User.findById(notice.userId).select(
      "-password -token -verificationToken"
    );
    return { notice, user };
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { getNoticeById };
