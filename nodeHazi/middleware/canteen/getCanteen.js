//paraméterként kapott étterem adatait szerzi meg az adatbázisból
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CanteenModel = requireOption(objectrepository, 'CanteenModel');
    
    return function (req, res, next) { 
        CanteenModel.findOne({_id: req.params.canteenid}, 
            (err, canteen) => {
                if(err || !canteen)
                    return next(err);

                res.locals.canteen = canteen;
                return next();
            }
        );
    }
}