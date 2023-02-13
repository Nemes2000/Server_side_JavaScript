var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//use the static middleware
app.use(express.static('static'));

/**
 * Include all the routes
 */
require('./routes/routing')(app);

var server = app.listen(3000, function () {
    console.log("On: 3000"); 
});