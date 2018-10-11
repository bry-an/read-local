import axios from "axios";
const db = require("../../../models");

export default {
  // Gets all articles
  getArticles: function(articleData) {
	  const topic = articleData.topic;
	  const startDate = (articleData.startYear ? "&from=" + articleData.startYear + "-01-01" : "");
	  const endDate = (articleData.endYear ? "&to=" + articleData.endYear + "-01-01" : "");
	  return axios.get(`https://newsapi.org/v2/everything?q=${topic}${startDate}${endDate}&domains=wsj.com,nytimes.com&apiKey=c3729246d799406a84cde63905f0d328`);
  },
  // Gets the article with the given id
  getSavedArticle: function(id) {
    return db.savedArticles.findOne({ _id: req.params.id });
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
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
