//ha paraméterként kapja a canteen id-t akkor lekérdezi azon canteen-t
//ha body-ban van az adat akkor onnan szerzi meg az id-t   
//                  -> több helyröl is hívom a getcanteen-t és nem mindig ugyan onnan tudom megszerezni az adatot
//          ha van id, akkor az alapján lekérdezi az adott canteen-t

const {ObjectId} = require('mongodb');
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CanteenModel = requireOption(objectrepository, 'CanteenModel');
    
    return function (req, res, next) { 
        if(typeof req.params.canteenid === 'undefined' && typeof req.body._id === 'undefined'){
            return next();
        }
        let objid = null;

        if(typeof req.params.canteenid !== 'undefined'){
            objid = new ObjectId(req.params.canteenid);
        } else if(typeof req.body._id !== 'undefined'){
            objid = new ObjectId(req.body._id);
        }
        
        CanteenModel.findOne({_id: objid}, 
            (err, canteen) => {
                if(err || !canteen){
                    return next(err); 
                }
                res.locals.canteen = canteen;
                return next();
            }
        );
    }
}