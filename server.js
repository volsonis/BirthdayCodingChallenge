const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// enable all CORS
app.use(cors())

// body parser, so we can handle incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // so we can handle json

// register our routes
var routes = require('./routes/routes')
routes(app);

// no middleware

// start listening
app.listen(port);

console.log('Birthdays RESTful API server started on: ' + port);

module.exports = app; // for testing