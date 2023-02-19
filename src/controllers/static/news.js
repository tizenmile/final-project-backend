const { News } = require("../../models/newsModel");

async function getNews(req, res, next) {
  const news = await News.find({});
  res.json(news);
}

module.exports = {
  getNews,
};
