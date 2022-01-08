/*Authors: */

//Dependencies
const express = require('express')
const axios = require('axios')
const PORT = 3000
const path = require('path')
const routes = require('./controllers');


//Assembling app controller/listener
const app = express()
app.use(express.json()) //Add middleware to interpret req/res as JS
const pathName = path.join(__dirname + '/../bundle')
app.use('/', routes);
// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html'],
//   index: false,
//   maxAge: '1d',
//   redirect: false,
//   setHeaders: function (res, path, stat) {
//     res.set('x-timestamp', Date.now())
//   }
// }
app.use('/', express.static(pathName)) //Add middleware to serve static react

//Modules

// Import Controllers
// app.get('/', (req, res) => {
//   res.sendStatus(200)
// })


app.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('Server listening on localhost:' + PORT)
})

module.exports.app = app;
