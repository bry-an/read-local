import axios from "axios";

export default {
  // Gets all articles
  getArticles: function (header) {
    return axios.get('/api/articles', header)
  },

  fillStates: function () {
    return axios.get('/api/articles/usstates');
  },
  fillArticles: function () {
    return axios.get('/api/articles');
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
