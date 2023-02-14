/* ha get hivás van nem csinál semmit
   ha post hivás van akkor az adatokkal dolgozok
        ha sikerült a mentés akkor átirányitom a /canteen oldalra
        ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
module.exports = function (objectrepository) {
        return function (req, res, next) {
                const value = res.locals.offer.price * res.locals.offer.db;
                res.locals.order = {
                        from : res.locals.canteen.name,
                        cost : value,
                        cont : res.locals.offer.name
                };

                console.log("saveorder");
                console.log(res.locals.order);
                next();
        }
}