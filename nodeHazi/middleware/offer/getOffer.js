//adott étterem adott ételét kérdezi le az adatbázisból
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');

    return function (req, res, next) {
        console.log("getoffer");

        OfferModel.findOne({$and: [
            {_producer: res.locals.canteen._id},
            {_id: req.params.offerid}]}, 
            (err, offer) => {
                if(err)
                    return next(err);

                res.locals.offer = offer;
                return next();
            }
        );
    }
}