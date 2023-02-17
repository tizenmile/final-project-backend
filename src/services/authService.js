// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const gravatar = require('gravatar');

const User = require("./schemas/auth");

// const { Unauthorized } = require("../helpers/errors");



const register = async ({email, password, name, city, mobile} , verificationToken) => {
  const avatarURL = gravatar.url(email, {format:'jpg'});
   
  const user = new User({
    email,
    password,
    name,
    avatarURL,
    city,
    mobile,
    verificationToken
  });

  return user.save();
};

// const login = async (email, password) => {
//   
// };

module.exports = {
  register,
//   login
};