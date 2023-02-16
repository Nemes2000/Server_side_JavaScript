const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

//Use the req.body
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Include all the routes
require('./routes/routing')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function () {
    console.log("On: 3000"); 
});