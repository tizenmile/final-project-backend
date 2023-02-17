const { getOneNoticeByIdController } = require("./getOneNoticeById");
const { addOneNoticeController } = require("./postNotice");
const { getNoticesByCategoryController } = require("./getNoticesByCategory");
const { addNoticeToFavoriteController } = require("./addNoticeToFavorite");
const { delNoticeFromFavoriteController } = require("./delNoticeFromFavorite");
const { getFavoriteNoticesController } = require("./getFavoriteNotices");

module.exports = {
  getNoticesByCategoryController,
  addNoticeToFavoriteController,
  delNoticeFromFavoriteController,
  getFavoriteNoticesController,
  getOneNoticeByIdController,
  addOneNoticeController,
};
