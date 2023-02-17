const { getNoticesByCategoryController } = require('./getNoticesByCategory')
const { addNoticeToFavoriteController } = require('./addNoticeToFavorite')
const { delNoticeFromFavoriteController } = require('./delNoticeFromFavorite')
const {getFavoriteNoticesController} = require('./getFavoriteNotices')
const { getNoticesByOwnerController } = require("./getNoticesByOwner");
const { deleteNoticeByOwnerController } = require("./deleteNoticeByOwner");

module.exports = {
    getNoticesByCategoryController,
    addNoticeToFavoriteController,
    delNoticeFromFavoriteController,
    getFavoriteNoticesController,
    getNoticesByOwnerController,
    deleteNoticeByOwnerController,
}
