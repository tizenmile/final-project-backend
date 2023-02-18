const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");
const  noticesControllers  = require("../../controllers");
const {auth} = require("../../middlewares/auth");
const noticeValidationMiddleware = require("../../middlewares/noticeValidationMiddleware");

router.get("/:category",asyncWrapper(noticesControllers.getNoticesByCategoryController));
router.get("/category/:category",asyncWrapper(noticesControllers.getNoticesByCategoryController));
router.put("/add-to-fav/:id",auth,asyncWrapper(noticesControllers.addNoticeToFavoriteController));
router.put("/del-from-fav/:id",auth,asyncWrapper(noticesControllers.delNoticeFromFavoriteController));
router.get("/fav-notice/",auth,asyncWrapper(noticesControllers.getFavoriteNoticesController));
router.get("/notice/:noticeId",auth,asyncWrapper(noticesControllers.getOneNoticeByIdController));

router.get("/owner/:own-notices",asyncWrapper(noticesControllers.getNoticesByOwnerController));
router.delete("/:noticeId",asyncWrapper(noticesControllers.deleteNoticeByOwnerController));
// router.post("/notice",auth,noticeValidationMiddleware.postNoticeValidation,noticesControllers.addOneNoticeController);

module.exports = router;
