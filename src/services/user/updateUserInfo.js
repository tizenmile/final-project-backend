const { HttpError } = require("../../helpers/errors");
const User = require("../../services/schemas/auth");

const updateUserInfo = async (id, body) => {
  if (Object.keys(body).length === 0) {
    throw new HttpError(400, "something went wrong");
  }
  const userResult = await User.findByIdAndUpdate(
    { _id: id },
    { $set: { ...body } },
    { new: true }
  );
  if (!userResult) {
    throw new HttpError(404, "failure, no user with such id were found");
  }
  return userResult;
};

module.exports = {
  updateUserInfo,
};
