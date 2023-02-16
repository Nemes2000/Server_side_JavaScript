//Adott canteen kinalatat szerzi meg az adatbazisbol
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');
    return function (req, res, next) {
        OfferModel.find({_producer: res.locals.canteen._id}, (err, offers) => {
            if(err){
                return next(err); 
            }
            res.locals.offers = offers;
            return next();
        });
    }
}