const Joi = require("joi");
const { HttpError } = require("../helpers/errors");

const updateUserValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .pattern(new RegExp("^[a-zA-Z][0-9a-zA-Z_-]{1,}@(.+).(.+)$"))
      .email({
        minDomainSegments: 2,
      })
      .min(6)
      .max(63),
    name: Joi.string().min(2).max(15),
    birthday: Joi.string().pattern(/^(\d{2})\.(\d{2})\.(\d{4})$/),
    city: Joi.string().min(2).max(15),
    mobile: Joi.string().pattern(new RegExp("^[+](380)[0-9]{9}$")),
  }).required();

  const { error } = schema.validate(req.body);

  if (error) {
    return next(new HttpError(error.message));
  }

  next();
};

module.exports = {
  updateUserValidation,
};
