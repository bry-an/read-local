import axios from "axios";

export default {
  // Gets all articles
  getArticles: function () {
    return axios.get('/api/articles')
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
    axios.post('/auth/login', loginData)
     .then(res => console.log(res))
     .catch(err => console.log(err));
  },
  postNewUser: function (regData) {
    console.log("in postNewUser", regData);
    axios.post("/auth/register", regData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
};
