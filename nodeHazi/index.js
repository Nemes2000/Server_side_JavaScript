const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

//Use the req.body
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//use the static middleware
app.use(express.static('static'));

//Include all the routes
require('./routes/routing')(app);

var server = app.listen(3000, function () {
    console.log("On: 3000"); 
});