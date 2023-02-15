const Joi = require("joi");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const pet = new Schema(
  {
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
      type: String
    }
  },
  {
    versionKey: false,
  }
);

const Pet = mongoose.model("users", pet);

module.exports = { Pet };
