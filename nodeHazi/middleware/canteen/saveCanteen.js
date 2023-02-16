/* ha a res.body-on volt rejtett adat akkor módositas van
   ha viszont nincsen rajta adat akkor új canteen-t kell létrehozni
        majd elmenti az adatokat*/
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CanteenModel = requireOption(objectrepository, 'CanteenModel');

    return function (req, res, next) {
        if(typeof req.body._id === 'undefined'){
            res.locals.canteen = new CanteenModel();
        }
        
        res.locals.canteen.name = req.body.name;
        res.locals.canteen.leader = req.body.leader;
        res.locals.canteen.mobil = req.body.mobil;
        res.locals.canteen.description = req.body.description;
    
        res.locals.canteen.save((err) =>{
            if(err){
                return next(err); 
            }
            return res.redirect('/canteen');          
        })
    }
}