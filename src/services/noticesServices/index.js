const { getNoticeByCategory } = require("./getNoticeByCategory");
const { getNoticesByOwner } = require("./getNoticesByOwner");
const { deleteNoticeByOwner } = require("./deleteNoticeByOwner");

module.exports = {
  getNoticeByCategory,
  getNoticesByOwner,
  deleteNoticeByOwner,
};
