/* ha a res.locals-on volt adat azaz modosítani akarnak akkor ne jöjjön létre egy új
   ha viszont nincsen rajta adat akkor ujat szeretnének létre hozni
        ha get hivás van nem csinál semmit
        ha post hivás van akkor az adatokkal dolgozok
            ha sikerült a mentés akkor átirányitom a /offer/:canteenid oldalra
            ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body._id === "undefined"){
            res.locals.offer = {
                name : req.body.name,
                price : req.body.price,
                desc : req.body.desc,
            }
        }else{
            res.locals.offer.name = req.body.name;
            res.locals.offer.price = req.body.price;
            res.locals.offer.desc = req.body.desc;
        }
        
        //mentes adatbazisba

        console.log("saveoffer");
        console.log(req.body);
        next();
    }
}