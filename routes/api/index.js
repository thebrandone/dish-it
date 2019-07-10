const router = require("express").Router();
const dishRoutes = require("./dish");
const imageRoutes = require('./image');

router.use("/dish", dishRoutes);
router.use('/image', imageRoutes);

module.exports = router;