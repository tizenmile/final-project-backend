const express = require("express");
const { noticesController } = require("../../controllers");

const router = express.Router();

router.get("/", noticesController.getAllNoticeController);

module.exports = router;
