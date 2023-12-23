var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

module.exports = axiosInstance;
