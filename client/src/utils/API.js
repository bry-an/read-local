import axios from "axios";

export default {
  // Gets all articles
  fillStates: function () {
    const states = axios.get('/api/articles/usstates');
    return states;
  },
  fillArticles: function () {
    const articles = axios.get('/api/articles');
    return articles;
  },
  getCities: function (stateCode) {
    console.log("in getCities");
    const cities = axios.get('/api/articles/cities/' + stateCode);
    return cities;
  },
  getArticle: function (id) {
    const article = axios.get(`/api/articles/${id}`);
    return article;
  },
};
