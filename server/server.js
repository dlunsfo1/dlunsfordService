var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
//require('mongoose').connect('database:27017/dlunsfordServiceDev'); // used for docker compose

require('mongoose').connect(process.env.DB_URI);

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
