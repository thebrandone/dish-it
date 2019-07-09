const router = require("express").Router();
const imageController = require("../../controllers/imageController");

// Matches with "/api/image"
router.route("/")
  .post(imageController.create)

module.exports = router;