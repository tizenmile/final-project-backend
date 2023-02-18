const gravatar = require("gravatar");

const { Notice } = require("../../models/noticesModel");
const User = require("../schemas/auth");

const addNotice = async (req) => {
  const { token } = req.user;
  const candidate = await User.findOne({ token });
  // console.log(candidate);
  const avatarURL = gravatar.url(candidate.email, { format: "jpg" });
  try {
    const notice = new Notice({
      ...req.body,
      userId: candidate._id,
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
