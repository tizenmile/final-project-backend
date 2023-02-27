const gravatar = require("gravatar");

const { Notice } = require("../../models/noticesModel");

const addNotice = async (req) => {
  let avatarURL = null;
  if (!req.file) {
    avatarURL = "https://media.istockphoto.com/id/1142382282/vector/cat-dog-budgie-and-guinea-pig.jpg?s=612x612&w=0&k=20&c=IorKWJBJ9GXZN1InnTuYt9vNGanh6AFTFiHiUKOUf0g=";
  } else {
    avatarURL = req.file.path;
  }

  try {
    const notice = new Notice({
      ...req.body,
      userId: req.user._id,
      photo: avatarURL,
    });
    await notice.save();
    return notice;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  addNotice,
};
