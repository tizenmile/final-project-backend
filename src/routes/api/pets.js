const express = require("express");
const { tryCatchWrapper } = require("../../helpers");
const { auth } = require("../../middlewares/auth");
const { validateBody } = require("../../middlewares/validateBody");
const uploadCloud = require("../../middlewares/uploadMiddleware");
const { petSchema } = require("../../services/schemas/pet");
const { petsControllers } = require("../../controllers");

const { addPet, removePetById } = petsControllers;

const router = express.Router();

router.post(
  "/",
  auth,
  uploadCloud.single("image"),
  validateBody(petSchema),
  tryCatchWrapper(addPet)
);

router.delete("/:id", auth, tryCatchWrapper(removePetById));

module.exports = router;
