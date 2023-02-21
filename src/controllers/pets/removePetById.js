const { Pet } = require("../../models/petModel");
const { HttpError } = require("../../helpers/HttpError");

const removePetById = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;

  const petItem = await Pet.findById(id);

  if (!petItem) {
    return next(HttpError(404, `Pet with id:${id} not found`));
  }

  await Pet.findByIdAndRemove({ _id: id, owner: _id });

  res.status(200).json(petItem);
};

module.exports = removePetById;
