const User = require("../../services/schemas/auth");
const cloudinary = require("cloudinary").v2;
const fs = require("fs/promises");

const updateUserAvatarController = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload } = req.file;
  const { url } = await cloudinary.uploader.upload(tempUpload);

  const avatarURL = url;
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateUserAvatarController;
