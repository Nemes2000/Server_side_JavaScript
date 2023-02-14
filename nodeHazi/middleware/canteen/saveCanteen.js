/* ha a res.locals-on volt adat azaz modosítani akarnak akkor ne jöjjön létre egy új
   ha viszont nincsen rajta adat akkor ujat szeretnének létre hozni
        ha get hivás van nem csinál semmit
        ha post hivás van akkor az adatokkal dolgozok
            ha sikerült a mentés akkor átirányitom a /canteen oldalra
            ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body._id === "undefined"){
            res.locals.canteen = {
                name : req.body.name,
                leader : req.body.leader,
                desc : req.body.desc,
                mobil : req.body.mobil
            }
        }else{
            res.locals.canteen.name = req.body.name;
            res.locals.canteen.leader = req.body.leader;
            res.locals.canteen.mobil = req.body.mobil;
            res.locals.canteen.desc = req.body.desc;
        }
        
        //mentes adatbazisba
        console.log("savecanteen");
        console.log(req.body);
        next();
    }
}