const { Friends } = require("../../models/ourFrendsModel");

async function getFriends(req, res, next) {
  const sponsors = await Friends.find({});
  res.json(sponsors);
}

module.exports = {
  getFriends,
};
