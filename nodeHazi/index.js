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

// const CanteenModel = require('./models/canteen');
// const OfferModel = require('./models/offer');

// let canteen1 = new CanteenModel();
// canteen1.name = "egyes";
// canteen1.leader = "valaki";
// canteen1.description = "valami";
// canteen1.mobil = '023204';

// canteen1.save((err) => {
//     console.log(err);

//     let befott = new OfferModel();
//     befott.name = "egyes";
//     befott.price = "1000";
//     befott.description = "valami";
//     befott._producer = canteen1;
//     befott.save((err) => {
//         console.log(err);
//     });
// });

