const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const { Conflict } = require("../../helpers/errors");

const service = require("../../services/authService");
const emailServices = require("../../services/emailServices");
const { User } = require("../../models/usersModel");

const registerUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await service.register(req.body);

    const payload = {
      _id: user._id,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: "10h" });

    if (!token) {
      res.status(404);
      throw new Error("Unable to save token");
    }

    await User.findByIdAndUpdate(user._id, { token });

    await emailServices.sendMail(email, token);

    res.json({
      message: `User ${email} signup`,
      user: {
        avatarURL: user.avatarURL,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        city: user.city,
        id: user._id,
      },
      token,
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error")) {
      next(new Conflict("Email in use"));
    }
  }
};

module.exports = registerUser;
