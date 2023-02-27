const Joi = require("joi");

const updateUserValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .min(10)
      .max(63)
      .pattern(
        /^[a-zA-Z0-9._][a-zA-Z0-9._-]{0,}[a-zA-Z0-9._-]{0,}[a-zA-Z0-9._]@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/
      ),
    // .pattern(/^[a-zA-Z0-9._-]{2,}@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/),
    // email: Joi.string()
    //   .pattern(new RegExp("^[a-zA-Z][0-9a-zA-Z_-]{1,}@(.+).(.+)$"))
    //   .email({
    //     minDomainSegments: 2,
    //   })
    //   .min(6)
    //   .max(63),
    name: Joi.string().min(2).max(30),
    birthday: Joi.string().pattern(/^(\d{4})\-(\d{2})\-(\d{2})$/),
    city: Joi.string().min(2).max(30),
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
