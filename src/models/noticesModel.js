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
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    requaried: true,
  },
  price: {
    type: Number,
    requaried: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  category: {
    type: String,
    requaried: true,
  },
  photo: {
    type: String,
    requaried: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  coments: {
    type: String,
    requaried: true,
  },
});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = {
  Notice,
};
