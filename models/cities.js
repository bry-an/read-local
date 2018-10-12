const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: { type: String, required: true }
,
  state: {
    type: Schema.Types.ObjectId,
    ref: "UsState"
  }
});

const City = mongoose.model("City", citySchema);

module.exports = City;