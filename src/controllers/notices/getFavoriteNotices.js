const { noticesServices } = require("../../services");
const getFavoriteNoticesController = async (reg, res) => {
  const { _id: userId } = reg.user;
  let { page, limit } = reg.query;
  if (limit) {
    limit = parseInt(limit) > 8 ? 8 : parseInt(limit);
  }
  const data = await noticesServices.getFavoriteNotices(userId, page, limit);
  res.json({ data });
};

module.exports = {
  getFavoriteNoticesController,
};
