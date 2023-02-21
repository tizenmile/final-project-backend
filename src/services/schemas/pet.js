const Joi = require("joi");

const petSchema = Joi.object({
  name: Joi.string().min(5).max(20).required(),
  date: Joi.string(),
  breed: Joi.string().min(5).max(20),
  comments: Joi.string().min(5).max(200),
});

module.exports = {
  petSchema,
};
