const axios = require('axios')
const {authToken} = require('../config.js')

const configOptions = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${authToken}`
  }
}

let getQuestions = (request, callback) => {
  let queryString = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${request}`
  axios.get(queryString, configOptions, callback)
  .then(res => {
   //console.log("got some data")
    callback(null, res.data.results) //Needs optimization
  })
  .catch((res)=>{
    //console.log(res)
    console.log('failure')
  })
}

module.exports = {getQuestions}