const { noticesServices } = require("../../services");

const getNoticesByCategoryController = async (reg, res) => {
  const { category: categoryName } = reg.params;
  console.log(reg.params);
  const notices = await noticesServices.getNoticeByCategory(categoryName);
  res.status(200).json({ notices });
};

module.exports = {
  getNoticesByCategoryController,
};
