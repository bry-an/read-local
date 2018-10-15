import axios from "axios";

export default {
  // Gets all articles
  getArticles: function (articleData) {
    const topic = "trump";
    return axios.get(`https://newsapi.org/v2/everything?q=${topic}&domains=wsj.com,nytimes.com&apiKey=c3729246d799406a84cde63905f0d328`);
  },
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
};
