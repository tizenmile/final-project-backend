const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "avatars",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB in bytes
  },
}).single("image");

function fileUploadMiddleware(req, res, next) {
  uploadCloud(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res
          .status(400)
          .json({ error: "File size too large. Max size is 5MB" });
      }
    } else if (err) {
      return res.status(400).json({
        error: "Error uploading file.",
      });
    }
    next();
  });
}

module.exports = fileUploadMiddleware;
