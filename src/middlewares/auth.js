const jwt = require("jsonwebtoken");
const { User } = require("../models/usersModel");
const { SECRET } = process.env;

const auth = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");
    if (!token || tokenType !== "Bearer") {
      return res.status(400).json({ message: "No auth token provided" });
    }
    const decoded = jwt.verify(token, SECRET);
    const user = await User.findById(decoded._id).select(
      "-password -mobile -name"
    );
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorizates" });
  }
};
module.exports = {
  auth,
};
