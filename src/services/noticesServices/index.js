const { getNoticeByCategory } = require('./getNoticeByCategory')
const { addNoticeToFavorite } = require('./addNoticeToFavorite')
const { delNoticeFromFavorite } = require('./delNoticeFromFavorite')
const {getFavoriteNotices} = require('./getFavoriteNotices')

module.exports = {
    getNoticeByCategory,
    addNoticeToFavorite,
    delNoticeFromFavorite,
    getFavoriteNotices,
}