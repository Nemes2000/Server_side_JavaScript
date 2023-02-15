const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Offer = db.model('Offer', {
  name: String,
  price: Number,
  description: String,
  _producer: {
    type: Schema.Types.ObjectId,
    ref: 'Canteen'
  }
});

module.exports = Offer;