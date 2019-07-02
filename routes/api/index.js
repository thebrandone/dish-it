const router = require("express").Router();
const dishRoutes = require("./dish");
const imageRoutes = require('./image');

// Dish routes
router.use("/dish", dishRoutes);
router.use('/image', imageRoutes);

module.exports = router;