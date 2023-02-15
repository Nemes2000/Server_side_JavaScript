//Adott étterem menű kinálatát szerzi meg az adatbázisból
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');
    
    return function (req, res, next) {
        
        console.log("getoffers");
        OfferModel.find({_producer: res.locals.canteen._id}, (err, offers) => {
            if(err)
                return next(err);

            res.locals.offers = offers;
            return next();
        });
    }
}