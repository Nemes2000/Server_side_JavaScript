//Lekerdezi az osszes rendelest az adatbazisbol
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');
    return function (req, res, next) {
        OrderModel.find({}, (err, orders) => {
            if(err){
                return next(err);
            }
            res.locals.orders = orders;
            return next();
        });
    }
}