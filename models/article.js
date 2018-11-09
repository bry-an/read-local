const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  published: { type: Date, required: true },
  url: { type: String, required: true },
  imgUrl: { type: String, required: true },
  location: { type: String },
  lat: { type: Number },
  long: { type: Number }
  
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;