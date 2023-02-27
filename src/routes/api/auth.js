const express = require("express");

const { tryCatchWrapper } = require("../../helpers");

const ctrlUser = require("../../controllers/auth/");

const {
  userValidation,
  validationLogin,
} = require("../../middlewares/validationMiddleware");
const {
  updateUserValidation,
} = require("../../middlewares/updateUseerValidation");
// const validation = require("../../middlewares/validation");
const { auth } = require("../../middlewares/auth");
const { authMiddleware } = require("../../middlewares/authTest");
const { joiLoginSchema } = require("../../models/usersModel");
const fileUploadMiddleware = require("../../middlewares/uploadMiddleware");

const router = new express.Router();

router.post(
  "/register",
  userValidation,
  tryCatchWrapper(ctrlUser.registerUser)
);

router.post("/login", validationLogin, tryCatchWrapper(ctrlUser.login));

router.get(
  "/current",
  authMiddleware,
  tryCatchWrapper(ctrlUser.currentUserController)
);
router.patch(
  "/update",
  authMiddleware,
  updateUserValidation,
  tryCatchWrapper(ctrlUser.updateUserInfoController)
);

router.post(
  "/avatar",
  authMiddleware,
  fileUploadMiddleware,
  tryCatchWrapper(ctrlUser.updateUserAvatarController)
);

router.post("/logout", tryCatchWrapper(auth), tryCatchWrapper(ctrlUser.logout));

module.exports = { authRouter: router };
