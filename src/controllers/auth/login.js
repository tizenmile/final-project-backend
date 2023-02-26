const { User } = require("../../models/usersModel");
const { Unauthorized } = require("../../helpers/errors");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404);
    throw new Unauthorized("Email or password field not filled");
  }

  const user = await User.findOne({ email });

  const isValidPassword = bcrypt.compareSync(password, user.password);

  if (!user || !isValidPassword) {
    res.status(404);
    throw new Unauthorized("Invalid login or password");
  }

  const payload = { _id: user._id };

  const token = jwt.sign(payload, SECRET, { expiresIn: "10h" });

  if (!token) {
    res.status(404);
    throw new Error("Unable to save token");
  }

  await User.findByIdAndUpdate(user._id, { token });

  res.status(201).json({
    code: 201,
    message: "Success",
    token: token,
    _id: user._id,
  });
};

module.exports = login;
