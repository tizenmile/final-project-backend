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
  tryCatchWrapper(auth),
  tryCatchWrapper(ctrlUser.currentUserController)
);
router.patch(
  "/update",
  tryCatchWrapper(auth),
  updateUserValidation,
  tryCatchWrapper(ctrlUser.updateUserInfoController)
);

router.post(
  "/avatar",
  tryCatchWrapper(auth),
  fileUploadMiddleware,
  tryCatchWrapper(ctrlUser.updateUserAvatarController)
);

router.post("/logout", tryCatchWrapper(auth), tryCatchWrapper(ctrlUser.logout));

module.exports = { authRouter: router };
