var getCanteensMW = require('../middleware/canteen/getCanteens');
var getCanteenMW = require('../middleware/canteen/getCanteen');
var delCantenMW = require('../middleware/canteen/delCanteen');
var saveCanteenMW = require('../middleware/canteen/saveCanteen');

var getOffersMW = require('../middleware/offer/getOffers');
var getOfferMW = require('../middleware/offer/getOffer');
var delOfferMW = require('../middleware/offer/delOffer');
var saveOfferMW = require('../middleware/offer/saveOffer');

var getOrdersMW = require('../middleware/order/getOrders');
var getOrderMW = require('../middleware/order/getOrder');
var delOrderMW = require('../middleware/order/delOrder');
var saveOrderMW = require('../middleware/order/saveOrder');

var renderMW = require('../middleware/generic/render');

module.exports = function (app) {
    var objectRepository = {
    //   taskModel: taskModel,
    //   commentModel: commentModel
    };
    
    app.use('/canteen/del/:canteenid',
        getCanteenMW(objectRepository),
        delCantenMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/canteenlist');
        });
    
    app.use('/canteen/new',
        saveCanteenMW(objectRepository),
        renderMW(objectRepository,"newcanteen"));

    app.use('/canteen/edit/:canteenid',
        getCanteenMW(objectRepository),
        saveCanteenMW(objectRepository),
        renderMW(objectRepository,"newcanteen"));

    app.use('/canteen',
        getCanteensMW(objectRepository),
        renderMW(objectRepository,"canteens"));

    app.use('/offer/:canteenid/del/:offerid',
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        delOfferMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/offer/' + req.param('canteenid'));
        });
    
    app.use('/offer/:canteenid/new',
        saveOfferMW(objectRepository),
        renderMW(objectRepository,"newoffer"));

    app.use('/offer/:canteenid/edit/:offerid',
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        saveOfferMW(objectRepository),
        renderMW(objectRepository,"newoffer"));

    app.use('/offer/:canteenid',
        getCanteenMW(objectRepository),
        getOffersMW(objectRepository),
        renderMW(objectRepository,"offer"));
    
    app.use('/order/del/:orderid',
        getOrderMW(objectRepository),
        delOrderMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/order');
        });
    
    app.use('/order/new',
        saveOrderMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/order');
        });

    app.use('/order',
        getOrdersMW(objectRepository),
        renderMW(objectRepository,"orders"));

    app.use('/', 
        getCanteensMW(objectRepository),
        renderMW(objectRepository, "index"));
}