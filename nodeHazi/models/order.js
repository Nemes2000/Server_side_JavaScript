const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Order = db.model('Order', {
    from: {
        type: Schema.Types.String,
        ref: 'Canteen'
    },
    cost: Number,
    cont: {
        type: Schema.Types.String,
        ref: 'Offer'
    }
});

module.exports = Order;