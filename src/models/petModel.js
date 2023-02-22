const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    avatarURL: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Set name for pet"],
    },
    date: {
      type: Date,
      default: new Date(),
    },
    breed: {
      type: String,
      default: "",
    },
    comments: {
      type: String,
      default: "",
    },
    petAvatar: {
      type: String,
      default: "",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Pet = model("pets", petSchema);

module.exports = { Pet };
