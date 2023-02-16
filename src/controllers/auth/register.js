const { v4 } = require("uuid");
// const { sendMail } = require("../../helpers");
// const { Conflict } = require("../../helpers/errors");
const service = require("../../services/authService");

const registerUser = async (req, res, next) => {
    try {
        const verificationToken = v4();
        const {email} = req.body
        const user = await service.register(req.body, verificationToken)

        res.json({ message: `User ${email} signup`});
    } catch (error) {
        if (error.message.includes("E11000 duplicate key error")) {
            next();
          }
    }
};

module.exports = registerUser;