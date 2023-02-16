//elmenti adatbazisba a rendelest
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
        const OrderModel = requireOption(objectrepository, 'OrderModel');
        return function (req, res, next) {
                const r = res.locals.offer.price;
                const l = parseInt(req.body.db);
                const value = l * r;

                res.locals.order = new OrderModel();
                res.locals.order.from = res.locals.canteen.name;
                res.locals.order.cost = value;
                res.locals.order.cont = res.locals.offer.name;
                res.locals.order.save((err) =>{
                        if(err){
                                return next(err); 
                        }
                        return res.redirect('/order');          
                });
        }
}