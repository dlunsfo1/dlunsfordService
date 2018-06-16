var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');

//require('mongoose').connect('database:27017/dlunsfordServiceDev'); // used for docker compose
require('mongoose').connect(
  'mongodb+srv://thesis2018:PaPcjLhw5gji1v00@cluster0-iz4z3.mongodb.net/dlunsfordService'
);

// require('mongoose').connect(
//   'mongodb://mongo/dlunsfordServiceDocker',
//   { poolSize: 200 }
// );

//setup middlware from a single point
require('./middleware/middleware')(app);

// APIs
app.use('/api', api);

// Export the app for testing
module.exports = app;
