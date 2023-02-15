/* Adatbázisbol megszerzi az összes étterem összes adatát*/
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CanteenModel = requireOption(objectrepository, 'CanteenModel');
    
    return function (req, res, next) {
        console.log("getcanteens");
        CanteenModel.find({}, (err, canteens) => {
            if(err)
                return next(err);

            res.locals.canteens = canteens;
            return next();
        });
    }
}