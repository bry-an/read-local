const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  usstate: { type: String, required: true }
});

const UsState = mongoose.model("UsState", stateSchema);

module.exports = UsState;