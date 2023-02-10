var getCanteensMW = require('../middleware/canteen/getCanteens');
var getCanteenMW = require('../middleware/canteen/getCanteen');
var getCanteensNameMW = require('../middleware/canteen/getCanteensName');
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

    app.use('/canteenlist', 
        getCanteensNameMW(objectRepository),
        renderMW("task"));
    
    app.use('/canteen',
        getCanteensMW(objectRepository),
        renderMW(objectRepository,"task"));
    
    app.use('/canteen/del/:canteenid',
        getCanteenMW(objectRepository),
        delCantenMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/canteenlist');
        });
    
    app.use('/canteen/new',
        saveCanteenMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/canteenlist');
        });

    app.use('/canteen/edit/:canteenid',
        getCanteenMW(objectRepository),
        saveCanteenMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/canteenlist');
        });

    app.use('/offer/:canteenid',
        getCanteenMW(objectRepository),
        getOffersMW(objectRepository),
        renderMW(objectRepository,"task"));

    app.use('/offer/:canteenid/del/:offerid',
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        delOfferMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/offer/' + req.param('canteenid'));
        });
    
    app.use('/offer/:canteenid/new/:offerid',
        saveOfferMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/offer/' + req.param('canteenid'));
        });

    app.use('/offer/:canteenid/edit/:offerid',
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        saveOfferMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/offer/' + req.param('canteenid'));
        });

    app.use('/order',
        getOrdersMW(objectRepository),
        renderMW(objectRepository,"task"));
    
    app.use('/order/del/:orderid',
        getOrderMW(objectRepository),
        delOrderMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/order');
        });
    
    app.use('/order/new',
        saveOrderMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/order');
        });
}