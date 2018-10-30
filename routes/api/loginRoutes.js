const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const verifyToken = require("../../public/js/verifyToken");

router
  .route("/register")
  .post(loginController.newUser);

router
  .route("/login")
  .post(loginController.login);

router
  .route("/logout")
  .get(loginController.logout);

router.get("/verify", verifyToken, function (req, res, next) {
    loginController.verify(req, res, next);
});

module.exports = router;