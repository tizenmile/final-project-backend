const { currentUser } = require("../../services/user/currentUser");

const currentUserController = async (req, res) => {
  const { _id } = req.user;
  const result = await currentUser(_id);
  const { petResult, userResult } = result;
  res.status(200).json({
    petResult,
    userResult,
  });
};

module.exports = currentUserController;
