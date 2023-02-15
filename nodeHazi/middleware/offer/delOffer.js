//adott étterem adott éetlét törli
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');
    
    return function (req, res, next) {
        if(typeof res.locals.offer === 'undefined'){
            return next();
        }

        res.locals.offer.remove(
            (err) => {
                if(err)
                    return next(err);
                return next();
            }
        );
    }
}