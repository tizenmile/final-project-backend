const express = require("express");

const { tryCatchWrapper } = require("../../helpers");

const ctrlUser = require("../../controllers/auth/");
const { userValidation } = require("../../middlewares/validationMiddleware");
const { auth } = require("../../middlewares/auth");

// const { authMiddleware } = require("../../middlewares/validation/users/auth");

const router = new express.Router();

// router.post(
//   "/register",
//   userValidation,
//   tryCatchWrapper(ctrlUser.registerUser)
// );

// router.post("/login", userValidation, tryCatchWrapper(ctrlUser.login));

// router.post("/logout", tryCatchWrapper(auth), tryCatchWrapper(ctrlUser.logout));

module.exports = { authRouter: router };
