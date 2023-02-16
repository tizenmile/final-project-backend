const express = require("express");

const { tryCatchWrapper } = require("../../helpers");

const ctrlUser = require("../../controllers/auth/");
const userValidation = require("../../middlewares/validationMiddleware");

// const { authMiddleware } = require("../../middlewares/validation/users/auth");

const router = new express.Router();

router.post("/register", userValidation, tryCatchWrapper(ctrlUser.registerUser));

// router.get("/logout", authMiddleware, tryCatchWrapper(ctrlUser.logoutUser));

module.exports = { authRouter: router };
