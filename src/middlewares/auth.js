const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../models/usersModel");
const { SECRET } = process.env;
const asyncHandler = require('express-async-handler')

const auth = asyncHandler(async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");

    if (!token || tokenType !== "Bearer") {
      res.status(400);
      throw new Error("No auth token provided");
    }
    const decoded = jwt.verify(token, SECRET);

    const user = await User.findById(decoded._id).select(
      "-password -mobile -name"
    );
    req.user = user;

    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorizates");
  }
});
module.exports = {
  auth,
};
