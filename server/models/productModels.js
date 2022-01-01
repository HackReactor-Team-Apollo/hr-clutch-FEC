const {authToken} = require('../config');
const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

const getAllProducts = function (callback) {
  axios.get(`${url}/products`, {headers: {Authorization: authToken}})
    .then(function (response) {
      callback(null, response.data);
    });
};

const getSpecificProduct = function (productID, callback) {
  axios.get(`${url}/products/${productID}`, {headers: {Authorization: authToken}})
    .then(function (response) {
      callback(null, response.data);
    });
}

const getRelatedProducts = function (productID, callback) {
  axios.get(`${url}/products/${productID}/related`, {headers: {Authorization: authToken}})
    .then(function (response) {
      callback(null, response.data);
    });
}

const getStyleOfProduct = function (productID, callback) {
  axios.get(`${url}/products/${productID}/styles`, {headers: {Authorization: authToken}})
    .then(function (response) {
      callback(null, response.data);
    });
}

const getProductDetailsInfo = function (productID, callback) {
  axios.get(`${url}/products/${productID}/styles`, {headers: {Authorization: authToken}})
    .then(function (response) {
      callback(null, response.data);
    });
}
module.exports = {
  getAllProducts,
  getSpecificProduct,
  getRelatedProducts,
  getStyleOfProduct,
  getProductDetailsInfo
}
