/* ha get hivás van nem csinál semmit
   ha post hivás van akkor az adatokkal dolgozok
        ha sikerült a mentés akkor átirányitom a /canteen oldalra
        ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
module.exports = function (objectrepository) {
        return function (req, res, next) {
                next();
        }
}