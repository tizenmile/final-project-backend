const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  owner: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  category: {
    type: String,
  },
  photo: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = {
  Notice,
};
