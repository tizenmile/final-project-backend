const { User } = require("../../models/usersModel");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, { token: null });
  if (!user) {
    throw new Error(`User with this ${_id} does not found`);
  }
  res.status(201).json({ code: 201, message: "Success" });
};

module.exports = logout;
