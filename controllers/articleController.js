const mongoose = require("mongoose");
const db = require("../models");
const articleSchema = new mongoose.Schema({
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

module.exports = {
  create: function(req, res) {
    if (req.body.coll) {
      console.log("in coll if");
      let coll = req.body.coll;
      coll = mongoose.model(coll, articleSchema);
      // console.log(coll, req.body.articles[0]);
      for (let i = 0; i < req.body.articles.length; i++) {
        console.log("in create user articles for loop");
        let newUserArticle = new coll ({
          "title":  req.body.articles[i].title,
          "body": req.body.articles[i].content,
          "author": req.body.articles[i].author,
          "published": req.body.articles[i].publishedAt,
          "url": req.body.articles[i].url,
          "imgUrl": req.body.articles[i].urlToImage,
          "saved": false
        });
        newUserArticle.save(err => {
          if (err) console.log ("res.status(500)", err);
          console.log("res.status(200)");
        });
      }
    } else {
      const anon = mongoose.model("anon", articleSchema);
      for (let i = 0; i < req.body.articles.length; i++) {
        console.log("in create anon articles for loop");
        let newUserArticle = new anon ({
          "title":  req.body.articles[i].title,
          "body": req.body.articles[i].content,
          "author": req.body.articles[i].author,
          "published": req.body.articles[i].publishedAt,
          "url": req.body.articles[i].url,
          "imgUrl": req.body.articles[i].urlToImage,
          "saved": false
        });
        newUserArticle.save(err => {
          if (err) console.log ("res.status(500)", err);
          console.log("res.status(200)");
        });
      }
    };
  },

  findAll: function (req, res) {
    console.log("finding all articles");
    if (req.body.coll) {
      db.coll.find({})
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
    } else {
      db.Article
        .find({})
        .then(articles => res.json(articles))
        .catch(err => res.status(422).json(err));
    }
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
  getCities: function(req, res) {
    console.log(req.params);
    db.UsState.findOne({ usstate: req.params.state })
    .then(state => {  
      console.log(state);    
      const stateid = state._id;
      console.log(stateid);
      var ObjectId = require('mongoose').Types.ObjectId; 
      var query = { state: new ObjectId(stateid) };
      db.City.find(query)
      .then(cities => {
        res.json(cities);
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
};