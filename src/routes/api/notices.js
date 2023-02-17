const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");
const noticesControllers = require("../../controllers");
// const { authMiddleware } = require("../../middlewares/authMiddleware");

// router.use(authMiddleware);
router.get(
  "/:category",
  asyncWrapper(noticesControllers.getNoticesByCategoryController)
);
router.get(
  "/owner/:own-notices",
  asyncWrapper(noticesControllers.getNoticesByOwnerController)
);
router.delete(
  "/:noticeId",
  asyncWrapper(noticesControllers.deleteNoticeByOwnerController)
);

module.exports = router;
