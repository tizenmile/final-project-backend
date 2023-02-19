const express = require("express");

const staticRouter = express.Router();

const { tryCatchWrapper } = require("../../helpers");
const staticControllers = require("../../controllers/static");

staticRouter.get("/friends", tryCatchWrapper(staticControllers.getFriends));
staticRouter.get("/news", tryCatchWrapper(staticControllers.getNews));

module.exports = {
  staticRouter,
};
