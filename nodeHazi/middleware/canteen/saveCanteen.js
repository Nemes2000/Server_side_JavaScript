/* ha a res.locals-on volt adat azaz modosítani akarnak akkor ne jöjjön létre egy új
   ha viszont nincsen rajta adat akkor ujat szeretnének létre hozni
        ha get hivás van nem csinál semmit
        ha post hivás van akkor az adatokkal dolgozok
            ha sikerült a mentés akkor átirányitom a /canteen oldalra
            ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    }
}