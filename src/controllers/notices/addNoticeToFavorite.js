const {noticesServices} = require('../../services')

const addNoticeToFavoriteController = async (reg, res) => {
  console.log(reg.params);
  console.log(reg.user);
  const { id: noticeId } = reg.params
  const { _id: userId} = reg.user
  
  const updatedUser = await noticesServices.addNoticeToFavorite(noticeId, userId)
  res.json({updatedUser})
}

module.exports = {
    addNoticeToFavoriteController
}