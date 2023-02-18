const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const news = new Schema(
  {
    news: [
      {
        title: {
          type: String,
        },
        url: {
          type: String,
        },
        description: {
          type: String,
        },
        date: {
          type: String,
        },
      },
    ],
  },
  {
    versionKey: false,
  }
);

const News = mongoose.model("news", news);

module.exports = { News };
