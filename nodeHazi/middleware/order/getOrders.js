//Lekérdezi az összes rendelést az adatbázisból
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');
    
    return function (req, res, next) {
        console.log("getorders");
        OrderModel.find({}, (err, orders) => {
            if(err){
                return next(err);
            }

            res.locals.orders = orders;
            return next();
        });
    }
}