const {HttpError } = require('../../helpers/errors')
const { Notice } = require('../../models/noticesModel')
const {User} = require('../../models/usersModel')

const getFavoriteNotices = async (userId, page, limit) => {
 
    const user = await User.findOne({ _id: userId })
    if (!user) {
      throw new HttpError(400, 'User not found')
    }

    const notices = await Notice.find({ '_id': { $in: user.favoriteNotices } })
    .skip(parseInt(page) * parseInt(limit))
    .limit(parseInt(limit))
    if (!notices) {
      throw new HttpError(400, 'Notices not found')
    }
    const total = (await Notice.find({ '_id': { $in: user.favoriteNotices } })).length
    const data = {
      notices,
      total
      }
    return data
}

module.exports = {
    getFavoriteNotices
}