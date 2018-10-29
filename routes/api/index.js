const router = require("express").Router();
const articleRoutes = require("./articles");
const loginRoutes = require("./loginRoutes");


// Article routes
router.use("/articles", articleRoutes);
router.use("/auth", loginRoutes);

module.exports = router;
