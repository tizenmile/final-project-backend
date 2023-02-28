const Joi = require("joi");
const { HttpError } = require("../helpers/errors");

const updateUserValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .min(10)
      .max(63)
      .pattern(
        /^[a-zA-Z0-9._][a-zA-Z0-9._-]{0,}[a-zA-Z0-9._-]{0,}[a-zA-Z0-9._]@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/
      ),
    name: Joi.string().min(2).max(16),
    birthday: Joi.string().pattern(/^(\d{4})\-(\d{2})\-(\d{2})$/),
    city: Joi.string().min(2).max(60),
    mobile: Joi.string().pattern(new RegExp("^[+](380)[0-9]{9}$")),
  }).required();

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error.message);
  }

  next();
};

module.exports = {
  updateUserValidation,
};
