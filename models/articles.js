const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    body: String,
    date: Date,
    location: String,
    lat: Number,
    lng: Number
})

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;