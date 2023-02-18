const { noticesServices } = require("../../services");

const getNoticesByCategoryController = async (reg, res) => {
  const { category: categoryName } = reg.params;
  const notices = await noticesServices.getNoticeByCategory(categoryName);
  res.json({ notices });
};

module.exports = { getNoticesByCategoryController };

