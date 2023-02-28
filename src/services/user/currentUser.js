const { Unauthorized } = require("../../helpers/errors");
const { User } = require("../../models/usersModel");
const { Pet } = require("../../models/petModel");

const currentUser = async (id) => {
  const userResult = await User.findById(id);
  const petResult = await Pet.find({ owner: id });
  if (!userResult || !petResult) {
    return res.status(400).json({
      message: "id is invalid",
    });
  }
  return { userResult, petResult };
};

module.exports = {
  currentUser,
};
