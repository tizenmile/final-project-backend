const express = require("express");

const { tryCatchWrapper } = require("../../helpers");

const ctrlUser = require("../../controllers/auth/");
const { userValidation } = require("../../middlewares/validationMiddleware");
const validation = require("../../middlewares/validation");
const { auth } = require("../../middlewares/auth");
const { joiLoginSchema } = require("../../models/usersModel");

const router = new express.Router();

router.post(
  "/register",
  userValidation,
  tryCatchWrapper(ctrlUser.registerUser)
);

router.post(
  "/login",
  validation(joiLoginSchema),
  tryCatchWrapper(ctrlUser.login)
);

router.post("/logout", tryCatchWrapper(auth), tryCatchWrapper(ctrlUser.logout));

module.exports = { authRouter: router };
