const { getNoticesByCategoryController } = require('./getNoticesByCategory')
const { addNoticeToFavoriteController } = require('./addNoticeToFavorite')
const { delNoticeFromFavoriteController } = require('./delNoticeFromFavorite')
const {getFavoriteNoticesController} =require('./getFavoriteNotices')

module.exports = {
    getNoticesByCategoryController,
    addNoticeToFavoriteController,
    delNoticeFromFavoriteController,
    getFavoriteNoticesController,
}
