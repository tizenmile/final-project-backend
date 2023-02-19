const { v4 } = require("uuid");
const { Conflict } = require("../../helpers/errors");
const service = require("../../services/authService");
const emailServices = require("../../services/emailServices")

const registerUser = async (req, res, next) => {
    try {
        const verificationToken = v4();
        const {email} = req.body
        const user = await service.register(req.body, verificationToken)

        await emailServices.sendMail(email , verificationToken)

        res.json({ message: `User ${email} signup`, user: {avatarURL: user.avatarURL, name: user.name, email: user.email, mobile: user.mobile, city: user.city, id: user._id}});
    } catch (error) {
        if (error.message.includes("E11000 duplicate key error")) {
            next(new Conflict("Email in use"));
          }
    }
};

module.exports = registerUser;