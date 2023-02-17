const { getNoticeByCategory } = require('./getNoticeByCategory')
const { addNoticeToFavorite } = require('./addNoticeToFavorite')
const { delNoticeFromFavorite } = require('./delNoticeFromFavorite')
const {getFavoriteNotices} = require('./getFavoriteNotices')
const { getNoticesByOwner } = require("./getNoticesByOwner");
const { deleteNoticeByOwner } = require("./deleteNoticeByOwner");

module.exports = {
    getNoticeByCategory,
    addNoticeToFavorite,
    delNoticeFromFavorite,
    getFavoriteNotices,
    getNoticesByOwner,
   deleteNoticeByOwner,
}