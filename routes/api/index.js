const router = require("express").Router();
const dishRoutes = require("./dish");

// Dish routes
router.use("/dish", dishRoutes);

module.exports = router;