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
// citySchema.index({ city: 1, state: 1 }, { unique: true, dropDups: true });

const City = mongoose.model("City", citySchema);

module.exports = City;