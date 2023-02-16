const getCanteensMW = require('../middleware/canteen/getCanteens');
const getCanteenMW = require('../middleware/canteen/getCanteen');
const delCantenMW = require('../middleware/canteen/delCanteen');
const saveCanteenMW = require('../middleware/canteen/saveCanteen');

const getOffersMW = require('../middleware/offer/getOffers');
const getOfferMW = require('../middleware/offer/getOffer');
const delOfferMW = require('../middleware/offer/delOffer');
const delOffersMW = require('../middleware/offer/delOffers');
const saveOfferMW = require('../middleware/offer/saveOffer');

const getOrdersMW = require('../middleware/order/getOrders');
const getOrderMW = require('../middleware/order/getOrder');
const delOrderMW = require('../middleware/order/delOrder');
const saveOrderMW = require('../middleware/order/saveOrder');

const renderMW = require('../middleware/generic/render');

const CanteenModel = require('../models/canteen');
const OfferModel = require('../models/offer');
const OrderModel = require("../models/order");

module.exports = function (app) {
    var objectRepository = {
        CanteenModel: CanteenModel,
        OfferModel: OfferModel,
        OrderModel: OrderModel
    };
    
    app.use('/canteen/del/:canteenid',
        getCanteenMW(objectRepository),
        delOffersMW(objectRepository),
        delCantenMW(objectRepository));

    app.use("/canteen/save",
        getCanteenMW(objectRepository),
        saveCanteenMW(objectRepository));

    app.use('/canteen/edit/:canteenid',
        getCanteenMW(objectRepository),
        renderMW(objectRepository,"newcanteen"));

    app.use('/canteen/new',
        renderMW(objectRepository,"newcanteen"));

    app.use('/canteen',
        getCanteensMW(objectRepository),
        renderMW(objectRepository,"canteens"));

    app.use('/offer/:canteenid/del/:offerid',
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        delOfferMW(objectRepository));
    
    app.use('/offer/:canteenid/new',
        getCanteenMW(objectRepository),
        renderMW(objectRepository,"newoffer"));

    app.use("/offer/:canteenid/save",
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        saveOfferMW(objectRepository));

    app.use('/offer/:canteenid/edit/:offerid',
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        renderMW(objectRepository,"newoffer"));

    app.use('/offer/:canteenid',
        getCanteenMW(objectRepository),
        getOffersMW(objectRepository),
        renderMW(objectRepository,"offer"));
    
    app.use('/order/del/:orderid',
        getOrderMW(objectRepository),
        delOrderMW(objectRepository));
    
    app.use('/order/new/:canteenid/:offerid',
        getCanteenMW(objectRepository),
        getOfferMW(objectRepository),
        saveOrderMW(objectRepository));

    app.use('/order',
        getOrdersMW(objectRepository),
        renderMW(objectRepository,"orders"));

    app.use('/', 
        getCanteensMW(objectRepository),
        renderMW(objectRepository, "index"));
}