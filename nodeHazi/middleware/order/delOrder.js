//Adott rendelest torol
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof res.locals.order === 'undefined'){
            return next();
        }

        res.locals.order.remove(
            (err) => {
                if(err){
                    return next(err); 
                }
                return res.redirect('/order');
            }
        );
    }
}