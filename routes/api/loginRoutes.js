const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router
  .route("/register")
  .post(loginController.newUser);

router
  .route("/login")
  .post(loginController.login);

router
  .route("/logout")
  .get(loginController.logout);

router
  .route("/verify")
  .get(loginController.verify);

module.exports = router;