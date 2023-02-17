const { getNoticesByCategoryController } = require("./getNoticesByCategory");
const { getNoticesByOwnerController } = require("./getNoticesByOwner");
const { deleteNoticeByOwnerController } = require("./deleteNoticeByOwner");

module.exports = {
  getNoticesByCategoryController,
  getNoticesByOwnerController,
  deleteNoticeByOwnerController,
};
