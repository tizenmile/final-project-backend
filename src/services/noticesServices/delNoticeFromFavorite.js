const { HttpError } = require('../../helpers/errors')
const { User } = require('../../models/usersModel')
const { Notice } = require('../../models/noticesModel');
const { isValidObjectId } = require('mongoose');

const delNoticeFromFavorite = async (noticeId, userId) => {

if (!isValidObjectId(noticeId)) {
    throw new HttpError(404, `no ads found with id: ${noticeId}`)
  }
      
  const user = await User.findOne({ _id: userId })
    if (!user) {
      throw new HttpError(400, 'User not found')
    }
  

  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { favoriteNotices: noticeId } },
    { new: true }
  )
  if (!updatedUser) {
    throw new HttpError(400, "something went wrong")
  }
  return updatedUser
}

module.exports = {
    delNoticeFromFavorite
}
