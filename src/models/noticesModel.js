const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
  },
  name: {
    type: String,
  },
  place: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  sex: {
    type: String,
    requaried: true,
  },
  price: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  category: {
    type: String,
    enum: ["sell", "lost-found", "for-free"],
    requaried: true,
  },
  photo: {
    type: String,
  },
  comments: {
    type: String,
  }
});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = {
  Notice,
};
