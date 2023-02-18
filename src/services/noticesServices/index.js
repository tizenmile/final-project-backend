const { getNoticeByCategory } = require("./getNoticeByCategory");
const { addNoticeToFavorite } = require("./addNoticeToFavorite");
const { delNoticeFromFavorite } = require("./delNoticeFromFavorite");
const { getFavoriteNotices } = require("./getFavoriteNotices");
const { getNoticeById } = require("./getNoticeById");
const { addNotice } = require("./addNotice");
const { getNoticesByOwner } = require("./getNoticesByOwner");
const { deleteNoticeByOwner } = require("./deleteNoticeByOwner");

module.exports = {
  getNoticeByCategory,
  addNoticeToFavorite,
  delNoticeFromFavorite,
  getFavoriteNotices,
  getNoticeById,
  addNotice,
  getNoticesByOwner,
  deleteNoticeByOwner,
};

