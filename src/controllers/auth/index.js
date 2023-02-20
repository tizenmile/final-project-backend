const registerUser = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUserController = require("./currentUserController");
const updateUserInfoController = require("./updateUserInfoController");
const updateUserAvatarController = require("./updateUserAvatarController");

module.exports = {
  registerUser,
  login,
  logout,
  currentUserController,
  updateUserInfoController,
  updateUserAvatarController,
};
