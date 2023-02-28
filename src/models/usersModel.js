const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const user = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    name: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: Number,
    },
    token: String,
    avatarURL: String,
    favoriteNotices: Array,
  },
  {
    versionKey: false,
  }
);

user.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
user.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("users", user);

module.exports = { User };
