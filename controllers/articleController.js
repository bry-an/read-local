const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Article
      .find({})
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
  },
  // Gets the article with the given id
  getSavedArticle: function(req, res) {
    return db.Article.findOne({ _id: req.params.id })
    .then(article => res.json(article))
    .catch(err => res.status(422).json(err));;
  },
  getArticle: function(req, res) {
    return db.savedArticles.findOne({ _id: req.params.id })
    .then(article => res.json(article))
    .catch(err => res.status(422).json(err));;
  },
  // Deletes the article with the given id
  deleteArticle: function (req, res) {
    return db.savedArticles.deleteOne({ _id: req.params.id });
  },
  // Saves a article to the database
  saveArticle: function (req, res) {
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
  getStates: function (req, res) {
    db.UsState.find({})
      .then(states => res.json(states))
      .catch(err => console.log(err));
  },
  getCities: function (req, res) {
    db.UsState.find({ usstate: req.params.state })
      .then(state => {
        console.log(state);
        const stateid = state[0]._id;
        console.log(stateid);
        var ObjectId = (require('mongoose').Types.ObjectId);
        var query = { state: new ObjectId(stateid) };
        db.City.find(query)
          .then(cities => {
            console.log(cities);
            res.json(cities)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }
};