const { noticesServices } = require("../../services");

const getOneNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const data = await noticesServices.getNoticeById(noticeId);
  if (!data) {
    return res.status(400).json({ status: 400, message: "Not found" });
  }
  res.status(200).json({ data, status: 200, message: "operation successful" });
};

module.exports = getOneNoticeById;
