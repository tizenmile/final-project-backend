const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");
const { noticesControllers } = require("../../controllers");
const { auth } = require("../../middlewares/auth");
const {
  postNoticeValidation,
} = require("../../middlewares/noticeValidationMiddleware");
const fileUploadMiddleware = require("../../middlewares/uploadMiddleware");

router.get(
  "/category/:category",
  asyncWrapper(noticesControllers.getNoticesByCategoryController)
);
router.put(
  "/add-to-fav/:id",
  auth,
  asyncWrapper(noticesControllers.addNoticeToFavoriteController)
);
router.put(
  "/del-from-fav/:id",
  auth,
  asyncWrapper(noticesControllers.delNoticeFromFavoriteController)
);
router.get(
  "/fav-notice/",
  auth,
  asyncWrapper(noticesControllers.getFavoriteNoticesController)
);
router.get(
  "/notice/:noticeId",
  asyncWrapper(noticesControllers.getOneNoticeByIdController)
);

router.get(
  "/owner/:own-notices",
  auth,
  asyncWrapper(noticesControllers.getNoticesByOwnerController)
);
router.delete(
  "/:noticeId",
  auth,
  asyncWrapper(noticesControllers.deleteNoticeByOwnerController)
);
router.post(
  "/notice",
  auth,
  fileUploadMiddleware,
  postNoticeValidation,
  asyncWrapper(noticesControllers.addOneNoticeController)
);

module.exports = router;
