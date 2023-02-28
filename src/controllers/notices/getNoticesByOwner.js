const { noticesServices } = require("../../services");

async function getNoticesByOwnerController(req, res, next) {
  const { _id: userId, token } = req.user;
  let { page, limit } = req.query;
  if (limit) {
    limit = parseInt(limit) > 8 ? 8 : parseInt(limit);
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const data = await noticesServices.getNoticesByOwner(userId, page, limit);
  res.json({ data });
}

module.exports = {
  getNoticesByOwnerController,
};
