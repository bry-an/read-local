const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedArticlesSchema = new Schema({
  uri: { type: String, required: true },
  url: { type: String, required: true },
  datetime: { type: Date, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  source: { type: String, required: true },
  location: String,
  lat: Number,
  long: Number
});

const savedArticles = mongoose.model("savedArticles", savedArticlesSchema);

module.exports = savedArticles;