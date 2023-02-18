const { noticesServices } = require("../../services");

async function deleteNoticeByOwnerController(req, res, next) {
  const { noticeId } = req.params;
  const { user } = req;
  const { token } = req;
  const userId = user.id;
  console.log(noticeId);
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const deletedNotice = await noticesServices.deleteNoticeByOwner(
    noticeId,
    userId
  );
  res.status(200).json({ message: `contact deleted ${deletedNotice._id}` });
}

module.exports = { deleteNoticeByOwnerController };
