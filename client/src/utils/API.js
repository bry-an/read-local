import axios from "axios";

export default {
  // gets articles from api
  pullArticles: function(header, query) {
    console.log(query);
    return axios.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${query}&apiKey=c3729246d799406a84cde63905f0d328`, header);
  },

  // Gets all articles from db
  getArticles: function (header) {
    return axios.get('/api/articles', header)
  },

  fillStates: function () {
    return axios.get('/api/articles/usstates');
  },

  // writes articles to db
  fillArticles: function (coll) {
    return axios.post('/api/articles', coll);
  },
  getCities: function (stateCode) {
    console.log("in getCities", stateCode);
    return axios.get('/api/articles/cities/' + stateCode);
  },
  postLogin: function (loginData) {
    console.log("in postLogin", loginData);
    return axios.post("/api/auth/login", loginData);
  },
  postNewUser: function (regData) {
    console.log("in postNewUser", regData);
    axios.post("/api/auth/register", regData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  },
  getVerify: function (token) {
    console.log("in getVerify", token);
    axios.get("/api/auth/verify", token)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
};
