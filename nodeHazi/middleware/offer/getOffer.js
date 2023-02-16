//ha paraméterként kapja a offfer id-t akkor lekérdezi azon canteen-t
//ha body-ban van az adat akkor onnan szerzi meg az id-t   
//                  -> több helyröl is hívom a getcanteen-t és nem mindig ugyan onnan tudom megszerezni az adatot
//          ha van id, akkor az alapján lekérdezi az adott offer-t

const {ObjectId} = require('mongodb');
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OfferModel = requireOption(objectrepository, 'OfferModel');
    return function (req, res, next) {
        if(typeof req.params.offerid === 'undefined' && typeof req.body._id === 'undefined'){
            return next();
        }

        let objid = null;
        if(typeof req.params.offerid !== 'undefined'){
            objid = new ObjectId(req.params.offerid);
        } else if(typeof req.body._id !== 'undefined'){
            objid = new ObjectId(req.body._id);
        }

        OfferModel.findOne({$and: [
            {_producer: res.locals.canteen._id},
            {_id: objid}]}, 
            (err, offer) => {
                if(err){
                    return next(err); 
                }
                res.locals.offer = offer;
                return next();
            }
        );
    }
}