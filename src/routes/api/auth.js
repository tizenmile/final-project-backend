const express = require("express");

const { tryCatchWrapper } = require("../../helpers");

const ctrlUser = require("../../controllers/auth/");
const { userValidation, validationLogin } = require("../../middlewares/validationMiddleware");
const { auth } = require("../../middlewares/auth");

const router = new express.Router();

router.post(
  "/register",
  userValidation,
  tryCatchWrapper(ctrlUser.registerUser)
);

router.post(
  "/login",
  validationLogin,
  tryCatchWrapper(ctrlUser.login)
);

router.post("/logout", tryCatchWrapper(auth), tryCatchWrapper(ctrlUser.logout));

module.exports = { authRouter: router };
