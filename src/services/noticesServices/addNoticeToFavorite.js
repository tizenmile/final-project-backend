const { HttpError } = require('../../helpers/errors')
const { User } = require('../../models/usersModel')



const addNoticeToFavorite = async (noticeId, userId) => {
  console.log(userId, noticeId);
  const updatedUser = await User.findOneAndUpdate(
    { name: "Yura" },
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

