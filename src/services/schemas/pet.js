const Joi = require("joi");

const petSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  date: Joi.string(),
  breed: Joi.string().min(2).max(16),
  comments: Joi.string().min(8).max(120),
});

module.exports = {
  petSchema,
};
