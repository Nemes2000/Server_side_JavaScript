//törli a paraméterkét kapott canteen-t
//majd átirányit az /canteen oldalra
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');

    return function (req, res, next) {
        if(typeof res.locals.canteen === 'undefined'){
            return next();
        }
        
        res.locals.canteen.remove((err) => {
            if(err){
                return next(err); 
            }
            return res.redirect('/canteen');
        });
    }
}