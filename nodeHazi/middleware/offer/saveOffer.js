/* ha a res.locals-on volt adat azaz modosítani akarnak akkor ne jöjjön létre egy új
   ha viszont nincsen rajta adat akkor ujat szeretnének létre hozni
        ha get hivás van nem csinál semmit
        ha post hivás van akkor az adatokkal dolgozok
            ha sikerült a mentés akkor átirányitom a /offer/:canteenid oldalra
            ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');
    
    return function (req, res, next) {
        console.log("saveoffer");

        if(typeof req.body._id === 'undefined'){
            res.locals.offer = new OfferModel();
        }
            
        res.locals.offer.name = req.body.name;
        res.locals.offer.price = req.body.price;
        res.locals.offer.description = req.body.description;
        res.locals.offer._producer = req.params.canteenid;

        res.locals.offer.save((err) => {
            if(err)
                return next(err);
            return next();
        });
    }
}