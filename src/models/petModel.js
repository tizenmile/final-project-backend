const Joi = require("joi");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const pet = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    avatarURL: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    comments: {
      type: String,
    },
  },

  {
    versionKey: false,
  }
);

const Pet = mongoose.model("Pet", pet);

module.exports = { Pet };
