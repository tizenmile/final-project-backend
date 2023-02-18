const { noticesServices } = require("../../services");

const postNotice = async (req, res, next) => {
  const data = await noticesServices.addNotice(req);
  if (!data) {
    return res
      .status(400)
      .json({ status: 400, message: "operation failed try again" });
  }
  res.status(200).json({ status: 201, message: "notice created", data });
};

module.exports = postNotice;
