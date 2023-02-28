const gravatar = require("gravatar");

const User = require("./schemas/auth");

const register = async (body) => {
  const { mobile, email, name, password, city } = body;
  const avatarURL = gravatar.url(email, { format: "jpg" });

  const user = new User({
    email,
    password,
    name,
    avatarURL,
    city,
    mobile,
  });

  return await user.save();
};

module.exports = {
  register,
};
