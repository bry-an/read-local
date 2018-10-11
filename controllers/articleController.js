const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Gets the article with the given id
  getSavedArticle: function(req, res) {
    return db.savedArticles.findOne({ _id: req.params.id });
  },
  // Deletes the article with the given id
  deleteArticle: function(req, res) {
    return db.savedArticles.deleteOne({ _id: req.params.id });
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return db.savedArticles.findOneAndUpdate({ uri: articleData.uri }, 
      {
        uri: articleData.uri,
        url: articleData.url,
        datetime: articleData.datetime,
        title: articleData.title,
        body: articleData.body,
        source: articleData.source.uri,
        location: articleData.location,
        lat: articleData.lat,
        long: articleData.lng
      }, { upsert: true })
  }
};
