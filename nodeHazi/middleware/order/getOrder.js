//parameterek alapjan az adoott rendelest lekerdezi az adatbazisbol
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');
    return function (req, res, next) {
        OrderModel.findOne({ _id: req.params.orderid}, (err, order) => {
            if(err){
                return next(err); 
            }
            res.locals.order = order;
            return next();
        });
    }
}