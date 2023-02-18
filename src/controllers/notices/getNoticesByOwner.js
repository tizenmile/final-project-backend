const { noticesServices } = require("../../services");

async function getNoticesByOwnerController(req, res, next) {
  const { _id: userId, token } = req.user;
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const noticesList = await noticesServices.getNoticesByOwner(userId);
  res.json({ noticesList });
}

module.exports = {
  getNoticesByOwnerController,
};
