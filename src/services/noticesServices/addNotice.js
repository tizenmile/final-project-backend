const gravatar = require("gravatar");

const { Notice } = require("../../models/noticesModel");

const addNotice = async (req) => {
  let awatarUrl = null;
  if (!req.file) {
    avatarURL = gravatar.url(req.user.email, { format: "jpg" });
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
