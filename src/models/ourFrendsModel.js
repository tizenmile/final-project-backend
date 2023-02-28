const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.set("strictQuery", false);

const schema = new Schema({
  sponsors: [
    {
      title: { type: String },
      url: { type: String },
      addressUrl: { type: String },
      imageUrl: { type: String },
      address: { type: String },
      workDays: [
        {
          isOpen: { type: Boolean },
          from: { type: String },
          to: { type: String },
        },
      ],
      phone: { type: String },
      email: { type: String },
    },
  ],
});

const Friends = mongoose.model("sponsors", schema);

module.exports = {
  Friends,
};
