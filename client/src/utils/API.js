import axios from "axios";

export default {
  // Gets all articles
  getArticles: function () {
    return axios.get('/api/articles')
  },

  fillStates: function () {
    const states = axios.get('/api/articles/usstates');
    return states;
  },
  fillArticles: function (search) {
    const articles = axios.get('/api/articles/' + search);
    return articles;
  },
  getCities: function (stateCode) {
    console.log("in getCities", stateCode);
    const cities = axios.get('/api/articles/cities/' + stateCode);
    console.log(cities);
    return cities;
  }
};
