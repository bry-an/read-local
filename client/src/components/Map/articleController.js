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
  saveArticle: function(req, res) {
    return db.savedArticles.findOneAndUpdate({ uri: req.body.uri }, 
      {
        uri: req.body.uri,
        url: req.body.url,
        datetime: req.body.datetime,
        title: req.body.title,
        body: req.body.body,
        source: req.body.source.uri,
        location: req.body.location,
        lat: req.body.lat,
        long: req.body.lng
      }, { upsert: true })
  },
  getStates: function(req, res) {
    db.UsState.find({})
    .then(states => res.json(states))
    .catch(err => console.log(err));
  }
};
