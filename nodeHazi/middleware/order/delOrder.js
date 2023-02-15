//Adott rendelést töröl
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');

    return function (req, res, next) {
        console.log("delorder");
        if(typeof res.locals.order === 'undefined'){
            return next();
        }

        res.locals.order.remove(
            (err) => {
                if(err)
                    return next(err);
                return next();
            }
        );
    }
}