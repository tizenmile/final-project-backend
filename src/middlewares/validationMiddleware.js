const Joi = require("joi");
const { ValidationError } = require("../helpers/errors");


const userValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .pattern(new RegExp("^(.){2,}@(.+)\.(.+)$"))
      .min(6)
      .max(63)
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Zа-яёА-ЯЁ0-9]{7,32}$"))
      .required(),
    name: Joi.string().required(),
    city: Joi.string().required(),
    mobile: Joi.string().pattern(new RegExp("^[+]\(380)\[0-9]{9}$")).required(),
  }).required();

  const { error } = schema.validate(req.body);

  if (error) {
    return next(new ValidationError(error.message));
  }

  next();
};


  module.exports = {
    userValidation,
  }