import axios from "axios";

export default {
  // Gets all articles
  getArticles: function(articleData) {
	  const topic = articleData.topic;
	  const startDate = (articleData.startYear ? "&from=" + articleData.startYear + "-01-01" : "");
	  const endDate = (articleData.endYear ? "&to=" + articleData.endYear + "-01-01" : "");
	  return axios.get(`https://newsapi.org/v2/everything?q=${topic}${startDate}${endDate}&domains=wsj.com,nytimes.com&apiKey=c3729246d799406a84cde63905f0d328`);
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database

};
