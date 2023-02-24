const { updateUserInfo } = require("../../services/user/updateUserInfo");

const updateUserInfoController = async (req, res) => {
  const { _id } = req.user;
  const result = await updateUserInfo(_id, req.body);
  const { avatarURL, name, email, mobile, city, birthday } = result;
  console.log(result);
  res.status(200).json({
    result,
  });
};

module.exports = updateUserInfoController;
