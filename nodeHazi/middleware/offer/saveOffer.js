/* ha a res.body-on volt rejtett adat akkor módositas van
   ha viszont nincsen rajta adat akkor új canteen-t kell létrehozni
        majd elmenti az adatokat*/
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');
    return function (req, res, next) {
        if(typeof req.body._id === 'undefined'){
            res.locals.offer = new OfferModel();
        }
            
        res.locals.offer.name = req.body.name;
        res.locals.offer.price = req.body.price;
        res.locals.offer.description = req.body.description;
        res.locals.offer._producer = req.params.canteenid;

        res.locals.offer.save((err) => {
            if(err){
                return next(err); 
            }
            return res.redirect('/offer/'+res.locals.canteen._id);
        });
    }
}