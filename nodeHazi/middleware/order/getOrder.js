//adoott rendelést lekérdezi az adatbázisból
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');
    
    return function (req, res, next) {
        console.log("getorder");
        OrderModel.findOne({ _id: req.params.orderid}, (err, order) => {
            if(err)
                return next(err);

            res.locals.order = order;
            return next();
        });
    }
}