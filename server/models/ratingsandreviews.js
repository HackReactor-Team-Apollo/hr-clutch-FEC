const axios = require("axios");
const { authToken } = require("../config.js");
// needs to be updated with imported config file so can submit requests with proper authorization

let getReviews = function (request, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;
  let optionsConfig = {
    headers: {
      "User-Agent": "request",
      Authorization: `${authToken}`,
    },
    params: {
      product_id: request.product_id,
      page: request.page,
      count: request.count,
      sort: request.sort,
    },
  };
  axios
    .get(optionsURL, optionsConfig)
    .then(function (response) {
      callback(null, response.data);
    })
    .catch(function (error) {

      callback(error);
    });
};

let getMetadata = function (request, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`;
  let optionsConfig = {
    headers: {
      "User-Agent": "request",
      Authorization: `${authToken}`,
    },
    params: { product_id: request.product_id },
  };
  let sum = 0;
  let ratingSum = 0;

  axios
    .get(optionsURL, optionsConfig)
    .then(function (response) {
      //console.log('metadata response:', response.data)
      for (var key in response.data.ratings) {
        let value = Number(response.data.ratings[key]);
        sum += value;
        ratingSum += Number(key) * value;
      }

      let ratingsPercentages = {
        ratingsCount: sum,
        avg: (ratingSum / sum).toFixed(1),
        1: (Number(response.data.ratings["1"]) / sum) * 100,
        2: (Number(response.data.ratings["2"]) / sum) * 100,
        3: (Number(response.data.ratings["3"]) / sum) * 100,
        4: (Number(response.data.ratings["4"]) / sum) * 100,
        5: (Number(response.data.ratings["5"]) / sum) * 100,
      };
      for (var key in ratingsPercentages) {
        if(Number.isNaN(ratingsPercentages[key])) {
          ratingsPercentages[key] = 0;
        }
      }
      response.data.ratings = ratingsPercentages;
      if (response.data.recommended.true === undefined) {
        response.data.recommended.true = 0;
      }
      if (response.data.recommended.false === undefined) {
        response.data.recommended.false = 0;
      }
      let recommendedSum =
        Number(response.data.recommended.true) +
        Number(response.data.recommended.false);
      let recommendedPercentage =
        (Number(response.data.recommended.true) / recommendedSum) * 100;
        //console.log('recoSum:', recommendedSum);
      response.data.recommended = recommendedPercentage.toFixed();
      callback(null, response.data);
    })
    .catch(function (error) {
      console.log("getMetadata did not work:", error);
      callback(error);
    });
};

let createReview = function (review, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;
  let optionsConfig = {
    headers: {
      "User-Agent": "request",
      Authorization: `${authToken}`,
    },
  };
  let optionsParams = {
    product_id: review.product_id,
    rating: review.rating,
    summary: review.summary,
    body: review.body,
    recommend: review.recommend,
    name: review.name,
    email: review.email,
    photos: review.photos,
    characteristics: review.characteristics,
  };
  axios
    .post(optionsURL, optionsParams, optionsConfig)
    //note  that may need to reformat this post request such that there is a param between both options
    .then(function (response) {
      callback(null, response);
    })
    .catch(function (error) {
      console.log("createReview did not work:", error);
      callback(error);
    });
};

let markHelpful = function (reviewId, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId.review_id}/helpful`;
  let optionsConfig = {
    headers: {
      "User-Agent": "request",
      Authorization: `${authToken}`,
    },
  };
  axios
    .put(optionsURL, null, optionsConfig)
    .then(function (response) {
      callback(null, response);
    })
    .catch(function (error) {
      console.log("markHelpful Error:", error);
      callback(error);
    });
};

let reportReview = function (reviewId, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId.review_id}/report`;
  let optionsConfig = {
    headers: {
      "User-Agent": "request",
      Authorization: `${authToken}`,
    },
  };
  axios
    .put(optionsURL, null, optionsConfig)
    .then(function (response) {
      callback(null, response);
    })
    .catch(function (error) {
      console.log("reportReview Error:", error);
      callback(error);
    });
};

module.exports.getReviews = getReviews;
module.exports.getMetadata = getMetadata;
module.exports.createReview = createReview;
module.exports.markHelpful = markHelpful;
module.exports.reportReview = reportReview;
