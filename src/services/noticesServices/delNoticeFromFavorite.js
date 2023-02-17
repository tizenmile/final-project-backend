const { HttpError } = require('../../helpers/errors')
const { User } = require('../../models/usersModel')



const delNoticeFromFavorite = async (noticeId, userId) => {
  console.log(userId, noticeId);
  const updatedUser = await User.findOneAndUpdate(
    { name: "Yura" },
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
