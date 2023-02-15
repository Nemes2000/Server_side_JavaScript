//törli a paraméterkét kapott éttermet
//majd átirányit az /offer/:canteen oldalra
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');

    return function (req, res, next) {
        console.log("delcanteen");
        if(typeof res.locals.canteen === 'undefined'){
            return next();
        }

        //delete the canteen offers
        res.locals.offers.forEach(function(offer){
            offer.remove((err) => {
                if(err)
                    return next(err);
                return next();
            });
        });
        
        //delete the canteen
        res.locals.canteen.remove((err) => {
            if(err)
                return next(err);
            return next();
        });
    }
}