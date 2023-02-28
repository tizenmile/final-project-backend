const { noticesServices } = require("../../services");

const getNoticesByCategoryController = async (reg, res) => {
  const { category: categoryName } = reg.params;
  let { page, limit } = reg.query
    if (limit) {
        limit = parseInt(limit) > 8 ? 8 : parseInt(limit)
    }
  const data = await noticesServices.getNoticeByCategory(categoryName, page, limit);
  res.json({ data });
};

module.exports = { getNoticesByCategoryController };

