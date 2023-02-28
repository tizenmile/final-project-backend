const Joi = require("joi");
const { HttpError } = require("../helpers/errors");

const userValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .pattern(new RegExp("^[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@(.+).(.+)$"))
      .email({
        minDomainSegments: 2,
      })
      .min(6)
      .max(63)
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$"))
      .min(7)
      .max(32)
      .required(),
    name: Joi.string().required(),
    city: Joi.string().required(),
    mobile: Joi.string().pattern(new RegExp("^[+](380)[0-9]{9}$")).required(),
  }).required();

  const { error } = schema.validate(req.body);

  if (error) {
    return next(new HttpError(error.message));
  }
  next();
};

const validationLogin = (req, res, next) => {
  const joiLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const { error } = joiLoginSchema.validate(req.body);
    if (error) {
     return next(new HttpError(error.message));
    }
    next();
};

module.exports = {
  userValidation, validationLogin
};
