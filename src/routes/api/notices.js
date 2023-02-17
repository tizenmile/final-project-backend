const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");
const { noticesControllers } = require("../../controllers");

router.get(
  "/:category",
  asyncWrapper(noticesControllers.getNoticesByCategoryController)
);

router.get(
  "/notice/:noticeId",
  asyncWrapper(noticesControllers.getOneNoticeByIdController)
);

// router.get("/:noticeId", noticesControllers.getOneNoticeByIdController);

module.exports = router;
