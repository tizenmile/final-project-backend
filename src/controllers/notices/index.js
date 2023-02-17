const { getNoticesByCategoryController } = require("./getNoticesByCategory");
const getOneNoticeByIdController = require("./getOneNoticeById");
const addOneNoticeController = require("./postNotice");

module.exports = {
  getNoticesByCategoryController,
  getOneNoticeByIdController,
  addOneNoticeController,
};
