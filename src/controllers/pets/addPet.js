const { Pet } = require("../../models/petModel");
const { HttpError } = require("../../helpers/HttpError");
const gravatar = require("gravatar");

const addPet = async (req, res, next) => {
  const { name, date, breed, comments } = req.body;
  const { _id } = req.user;
  let url = null;
  if (!req.file) {
    url = gravatar.url({ _id }, { format: "jpg" });
  } else {
    url = req.file.path;
  }
  const newPet = await Pet.create({
    name,
    date,
    breed,
    comments,
    petAvatar: url,
    owner: _id,
  });
  if (!newPet) {
    return next(HttpError(404, `Contact missing required field`));
  }
  res.status(201).json({
    message: "success",
    newPet,
  });
};

module.exports = addPet;
