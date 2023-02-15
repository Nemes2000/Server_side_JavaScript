const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Canteen = db.model('Canteen', {
  name: String,
  leader: String,
  description: String,
  mobil: Number
});

module.exports = Canteen;