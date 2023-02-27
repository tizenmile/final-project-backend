const { HttpError } = require('../../helpers/errors')
const { User } = require('../../models/usersModel')
const { Notice } = require('../../models/noticesModel');
const { isValidObjectId } = require('mongoose');

const addNoticeToFavorite = async (noticeId, userId) => {
  
  if (!isValidObjectId(noticeId)) {
    throw new HttpError(404, `no ads found with id: ${noticeId}`)
  }

  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { $addToSet: { favoriteNotices: noticeId } },
    { new: true }
  )
  if (!updatedUser) {
    throw new HttpError(400, "something went wrong")
  }
  return updatedUser
}

module.exports = {
    addNoticeToFavorite
}

