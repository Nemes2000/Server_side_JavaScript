/* ha get hivás van nem csinál semmit
   ha post hivás van akkor az adatokkal dolgozok
       ha sikerült a mentés akkor átirányitom a /canteen oldalra
       ha nem sikerült a mentés át adom hogy mi volt a hoba és tovább hivok*/
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
        const OrderModel = requireOption(objectrepository, 'OrderModel');

        return function (req, res, next) {
                console.log("ordersave");
                // const r = parseInt(res.locals.offer.price);
                // const l = parseInt(res.locals.offer.db);
                // const value = l * r;

                res.locals.order = new OrderModel();
                res.locals.order.from = res.locals.canteen.name;
                res.locals.order.cost = 1000;
                res.locals.order.cont = res.locals.offer.name;
        
                res.locals.order.save((err) =>{
                if(err)
                        return next(err); 
                return next();           
                })
        }
}