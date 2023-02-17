const { getNoticeByCategory } = require("./getNoticeByCategory");
const { addNoticeToFavorite } = require("./addNoticeToFavorite");
const { delNoticeFromFavorite } = require("./delNoticeFromFavorite");
const { getFavoriteNotices } = require("./getFavoriteNotices");
const { getNoticeById } = require("./getNoticeById");
const { addNotice } = require("./addNotice");

module.exports = {
  getNoticeByCategory,
  addNoticeToFavorite,
  delNoticeFromFavorite,
  getFavoriteNotices,
  getNoticeById,
  addNotice,
};
