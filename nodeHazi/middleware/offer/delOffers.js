//torli az adott canteen osszes kinalatat
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');
    return function (req, res, next) {
        OfferModel.deleteMany({_producer: req.params.canteenid},
            (err) => {
                if(err){
                    return next(err); 
                }
                return next();
            }
        );
    }
}