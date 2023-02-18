const {HttpError } = require('../../helpers/errors')
const { Notice } = require('../../models/noticesModel')
const {User} = require('../../models/usersModel')

const getFavoriteNotices = async ( userId, page = 0, limit = 8) => {
 
    const user = await User.findOne({ _id: userId })
    if (!user) {
      throw new HttpError(400, 'User not found')
    }

    const notices = await Notice.find({ '_id': { $in: user.favoriteNotices } })
    .skip(parseInt(page))
    .limit(parseInt(limit))
    if (!notices) {
      throw new HttpError(400, 'Notices not found')
    }
    return notices
}

module.exports = {
    getFavoriteNotices
}