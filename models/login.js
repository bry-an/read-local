const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  login_email: { type: String, required: true },
  password: { type: String, required: true }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
