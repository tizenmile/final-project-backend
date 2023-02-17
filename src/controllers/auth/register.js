const { v4 } = require("uuid");
const { Conflict } = require("../../helpers/errors");
const service = require("../../services/authService");
const emailServices = require("../../services/emailServices")

const registerUser = async (req, res, next) => {
    try {
        const verificationToken = v4();
        const {email} = req.body
        await service.register(req.body, verificationToken)

        await emailServices.sendMail(email , verificationToken)

        res.json({ message: `User ${email} signup`});
    } catch (error) {
        if (error.message.includes("E11000 duplicate key error")) {
            next(new Conflict("Email in use"));
          }
    }
};

module.exports = registerUser;