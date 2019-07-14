const router = require("express").Router();
const dishController = require("../../controllers/dishController");

// Matches with "/api/dish"
router.route("/")
  .get(dishController.findAll)
  .post(dishController.create);

// Matches with "/api/dish/:id"
router.route("/:id")
  .get(dishController.findById)
  .put(dishController.update)
  .delete(dishController.remove);

router.route("/:user")
  .get(dishController.findByUser);
  
module.exports = router;