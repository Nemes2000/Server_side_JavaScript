//adott canteen adott kinalatat torli

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof res.locals.offer === 'undefined'){
            return next();
        }

        res.locals.offer.remove(
            (err) => {
                if(err){
                    return next(err);
                }
                return res.redirect('/offer/' + req.params.canteenid);
            }
        );
    }
}