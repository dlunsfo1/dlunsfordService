require('dotenv').config();
var config = require('./server/config/config');
var app = require('./server/server');

app.listen(process.env.PORT);
console.log(`listening on http://localhost:${process.env.PORT}`);
