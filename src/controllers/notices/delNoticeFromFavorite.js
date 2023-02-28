const { noticesServices } = require("../../services");

const delNoticeFromFavoriteController = async (reg, res) => {
  const { id: noticeId } = reg.params;
  const { _id: userId } = reg.user;
  const updatedUser = await noticesServices.delNoticeFromFavorite(
    noticeId,
    userId
  );
  res.json({ updatedUser });
};

module.exports = {
  delNoticeFromFavoriteController,
};
