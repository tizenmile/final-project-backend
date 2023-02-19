const Joi = require("joi");

module.exports = {
  postNoticeValidation: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required().min(2).max(48),
      breed: Joi.string().required().min(2).max(48),
      name: Joi.string().required().min(2).max(16),
      location: Joi.string().required(),
      birthDate: Joi.string().required(),
      sex: Joi.string().required(),
      price: Joi.number().required().min(1),
      category: Joi.string().required(),
      favorite: Joi.boolean().required(),
      comments: Joi.string().required().min(8).max(120),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res
        .status(400)
        .json({ status: 400, message: validationResult.error.details });
    }
    next();
  },
};
