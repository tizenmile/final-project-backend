const Joi = require("joi");

module.exports = {
  postNoticeValidation: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required().min(2).max(48),
      breed: Joi.string().min(2).max(48),
      name: Joi.string().min(2).max(16),
      place: Joi.string().required(),
      birthDate: Joi.string(),
      sex: Joi.string().required(),
      price: Joi.number(),
      category: Joi.string().required(),
      comments: Joi.string().min(8).max(120),
      image: Joi.string(),
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
