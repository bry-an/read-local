const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const loginRoutes = require("./loginRoutes");



// API Routes
router.use("/api", apiRoutes);
router.use("/auth", loginRoutes);


module.exports = router;
