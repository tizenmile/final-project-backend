const { HttpError } = require("../../helpers/errors");
const { User } = require("../../models/usersModel");
const { Pet } = require("../../models/petModel");

const currentUser = async (id) => {
  const userResult = await User.findById(id);
  const petResult = await Pet.find({ owner: id });
  if (!userResult || !petResult) {
    throw new HttpError(400, "something went wrong");
  }
  return { userResult, petResult };
};

module.exports = {
  currentUser,
};
