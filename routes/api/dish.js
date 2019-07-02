const router = require("express").Router();
const dishIt = require("../../controllers/dishController");

// Matches with "/api/dish"
router.route("/")
  .get(dishIt.findAll)
  .post(dishIt.create);

// Matches with "/api/dish/:id"
router
  .route("/:id")
  .get(dishIt.findById)
  .put(dishIt.update)
  .delete(dishIt.remove);

module.exports = router;