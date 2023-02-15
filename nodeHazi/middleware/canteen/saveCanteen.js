/* ha a res.locals-on volt adat azaz modosítani akarnak akkor ne jöjjön létre egy új
   ha viszont nincsen rajta adat akkor ujat szeretnének létre hozni
        ha get hivás van nem csinál semmit
        ha post hivás van akkor az adatokkal dolgozok
            ha sikerült a mentés akkor átirányitom a /canteen oldalra
            ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CanteenModel = requireOption(objectrepository, 'CanteenModel');

    return function (req, res, next) {
        console.log("savecanteen");

        if(typeof req.body._id === 'undefined'){
            res.locals.canteen = new CanteenModel();
        }
        res.locals.canteen.name = req.body.name;
        res.locals.canteen.leader = req.body.leader;
        res.locals.canteen.mobil = req.body.mobil;
        res.locals.canteen.description = req.body.description;
    
        res.locals.canteen.save((err) =>{
            if(err)
                return next(err); 
            return next();           
        })
    }
}